import sys
import os
import json
import cv2
import numpy as np
from PyQt5.QtWidgets import (QApplication, QMainWindow, QWidget, QVBoxLayout, 
                             QHBoxLayout, QPushButton, QLabel, QMessageBox, QShortcut)
from PyQt5.QtGui import QImage, QPainter, QPen, QColor, QFont, QKeySequence, QBrush, QPolygonF, QCursor
from PyQt5.QtCore import Qt, QPointF, QRectF

# ================= AYARLAR =================
IMG_DIR = r'images'
JSON_DIR = r'outputs/jsons'

POINT_RADIUS = 4       
SELECTION_RADIUS = 15  
# ===========================================

class ImageCanvas(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.image = None
        self.q_image = None
        self.landmarks = []
        
        self.zoom = 1.0
        self.pan_x = 0
        self.pan_y = 0
        self.last_mouse_pos = QPointF(0, 0)
        
        self.selected_idx = None      
        self.is_panning = False       
        self.persistent_indices = set() 
        
        self.setMouseTracking(True) 

    def load_data(self, img_path, json_path):
        self.zoom = 1.0
        self.pan_x = 0
        self.pan_y = 0
        self.selected_idx = None
        self.is_panning = False
        self.persistent_indices = set()
        
        self.image = cv2.imread(img_path)
        if self.image is None: return
        self.image = cv2.cvtColor(self.image, cv2.COLOR_BGR2RGB)
        h, w, ch = self.image.shape
        self.q_image = QImage(self.image.data, w, h, ch * w, QImage.Format_RGB888)
        
        self.landmarks = []
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if "landmarks" in data:
                    self.landmarks = data["landmarks"]
                elif "faces" in data and len(data["faces"]) > 0:
                    self.landmarks = data["faces"][0]["landmarks_68"]
        
        self.fit_to_window()
        self.update()

    def fit_to_window(self):
        if self.q_image is None: return
        win_w, win_h = self.width(), self.height()
        img_w, img_h = self.q_image.width(), self.q_image.height()
        scale = min(win_w / img_w, win_h / img_h) * 0.9
        self.zoom = scale
        self.pan_x = (win_w - img_w * scale) / 2
        self.pan_y = (win_h - img_h * scale) / 2

    def screen_to_image(self, sx, sy):
        return (sx - self.pan_x) / self.zoom, (sy - self.pan_y) / self.zoom

    def image_to_screen(self, ix, iy):
        return (ix * self.zoom) + self.pan_x, (iy * self.zoom) + self.pan_y

    def check_mouth_constraint(self, idx, new_x, new_y):
        outer_lip_indices = list(range(48, 60)) 
        inner_lip_indices = list(range(60, 68)) 

        if idx in inner_lip_indices:
            poly = QPolygonF()
            for i in outer_lip_indices:
                pt = self.landmarks[i]
                poly.append(QPointF(pt[0], pt[1]))
            
            if not poly.containsPoint(QPointF(new_x, new_y), Qt.OddEvenFill):
                return False 
        return True

    def paintEvent(self, event):
        if self.q_image is None: return

        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing)
        painter.setRenderHint(QPainter.SmoothPixmapTransform)

        # 1. Resmi Çiz
        t_w = self.q_image.width() * self.zoom
        t_h = self.q_image.height() * self.zoom
        painter.drawImage(QRectF(self.pan_x, self.pan_y, t_w, t_h), self.q_image, QRectF(0,0,self.q_image.width(), self.q_image.height()))

        if not self.landmarks: return

        # 2. Çizgiler (Anatomik Gruplara Göre)
        pen_lines = QPen(QColor(0, 255, 255, 120), 1) # Biraz daha görünür yaptık
        painter.setPen(pen_lines)

        # Grupları Tanımlıyoruz (Python 0-based index)
        # range(x, y) -> x'den y-1'e kadar alır.
        
        feature_groups = [
            list(range(0, 17)),                  # Çene (Açık Uçlu)
            list(range(17, 22)),                 # Sağ Kaş
            list(range(22, 27)),                 # Sol Kaş
            list(range(27, 31)),                 # Burun Kemeri
            list(range(31, 36)),                 # Burun Ucu
            list(range(36, 42)) + [36],          # Sağ Göz (Döngü - Kapalı)
            list(range(42, 48)) + [42],          # Sol Göz (Döngü - Kapalı)
            list(range(48, 60)) + [48],          # Dış Dudak (Döngü - Kapalı) [49-60 arası]
            list(range(60, 68)) + [60]           # İç Dudak (Döngü - Kapalı)  [61-68 arası]
        ]

        for group in feature_groups:
            poly_points = []
            for idx in group:
                if idx < len(self.landmarks):
                    pt = self.landmarks[idx]
                    poly_points.append(QPointF(*self.image_to_screen(pt[0], pt[1])))
            
            if poly_points:
                painter.drawPolyline(QPolygonF(poly_points))

        # 3. Noktalar
        font = QFont("Arial", 11, QFont.Bold)
        painter.setFont(font)
        
        pen_norm = QPen(QColor(0, 255, 0), 1)
        brush_norm = QBrush(QColor(0, 255, 0))
        pen_sel = QPen(QColor(255, 50, 50), 2)
        brush_sel = QBrush(QColor(255, 50, 50))

        for i, pt in enumerate(self.landmarks):
            sx, sy = self.image_to_screen(pt[0], pt[1])
            if sx < -50 or sx > self.width()+50 or sy < -50 or sy > self.height()+50: continue

            is_active = (i in self.persistent_indices) or (i == self.selected_idx)
            
            painter.setPen(pen_sel if is_active else pen_norm)
            painter.setBrush(brush_sel if is_active else brush_norm)
            
            r = POINT_RADIUS + 3 if is_active else POINT_RADIUS
            painter.drawEllipse(QPointF(sx, sy), r, r)

            if is_active:
                text = str(i + 1)
                fm = painter.fontMetrics()
                tw, th = fm.width(text), fm.height()
                tx, ty = sx + 10, sy - 10
                
                painter.setPen(Qt.NoPen)
                painter.setBrush(QColor(0, 0, 0, 200))
                painter.drawRect(QRectF(tx - 4, ty - th + 4, tw + 8, th))
                
                painter.setPen(QColor(255, 255, 0))
                painter.drawText(QPointF(tx, ty), text)

    def wheelEvent(self, event):
        zoom_in = event.angleDelta().y() > 0
        factor = 1.1 if zoom_in else 0.9
        old_zoom = self.zoom
        self.zoom = max(0.1, min(30.0, self.zoom * factor))
        
        mx, my = event.x(), event.y()
        self.pan_x = mx - (mx - self.pan_x) * (self.zoom / old_zoom)
        self.pan_y = my - (my - self.pan_y) * (self.zoom / old_zoom)
        self.update()

    def mousePressEvent(self, event):
        self.last_mouse_pos = event.pos()

        if event.button() == Qt.LeftButton:
            click_pos = event.pos()
            min_dist = float('inf')
            closest = None
            
            for i, pt in enumerate(self.landmarks):
                sx, sy = self.image_to_screen(pt[0], pt[1])
                dist = ((click_pos.x() - sx)**2 + (click_pos.y() - sy)**2)**0.5
                if dist < SELECTION_RADIUS and dist < min_dist:
                    min_dist = dist
                    closest = i
            
            if closest is not None:
                self.selected_idx = closest
                self.is_panning = False
                
                self.persistent_indices.clear()
                
                groups = [
                    range(0, 17), range(17, 22), range(22, 27), range(27, 36),
                    range(36, 42), range(42, 48), range(48, 60), range(60, 68)
                ]
                
                found = False
                for grp in groups:
                    if closest in grp:
                        for k in grp: self.persistent_indices.add(k)
                        found = True
                        break
                
                if not found:
                    for k in range(max(0, closest-2), min(len(self.landmarks), closest+3)):
                        self.persistent_indices.add(k)
                    
            else:
                self.selected_idx = None
                self.is_panning = True
                self.setCursor(Qt.ClosedHandCursor)
            
            self.update()

    def mouseMoveEvent(self, event):
        curr = event.pos()
        dx = curr.x() - self.last_mouse_pos.x()
        dy = curr.y() - self.last_mouse_pos.y()
        self.last_mouse_pos = curr

        if self.is_panning:
            self.pan_x += dx
            self.pan_y += dy
            self.update()
        
        elif self.selected_idx is not None:
            move_x = dx / self.zoom
            move_y = dy / self.zoom
            
            candidate_x = self.landmarks[self.selected_idx][0] + move_x
            candidate_y = self.landmarks[self.selected_idx][1] + move_y
            
            if self.check_mouth_constraint(self.selected_idx, candidate_x, candidate_y):
                self.landmarks[self.selected_idx][0] = candidate_x
                self.landmarks[self.selected_idx][1] = candidate_y
                self.update()

        elif not self.is_panning and self.selected_idx is None:
            click_pos = event.pos()
            on_point = False
            for pt in self.landmarks:
                sx, sy = self.image_to_screen(pt[0], pt[1])
                dist = ((click_pos.x() - sx)**2 + (click_pos.y() - sy)**2)**0.5
                if dist < SELECTION_RADIUS:
                    on_point = True
                    break
            self.setCursor(Qt.PointingHandCursor if on_point else Qt.ArrowCursor)

    def mouseReleaseEvent(self, event):
        self.selected_idx = None
        self.is_panning = False
        self.setCursor(Qt.ArrowCursor)
        self.update()

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Pro Landmark Editor v9 (Temiz Hatlar)")
        self.resize(1200, 800)
        self.file_list = []
        self.current_index = 0
        
        central = QWidget()
        self.setCentralWidget(central)
        layout = QVBoxLayout(central)
        
        self.lbl_info = QLabel("Yükleniyor...")
        self.lbl_info.setStyleSheet("font-size: 14px; padding: 5px; background: #333; color: white;")
        layout.addWidget(self.lbl_info)
        
        self.canvas = ImageCanvas()
        self.canvas.setStyleSheet("background-color: #202020;")
        layout.addWidget(self.canvas, stretch=1)
        
        btn_layout = QHBoxLayout()
        self.btn_prev = QPushButton("<< Geri (A)")
        self.btn_save = QPushButton("KAYDET (S)")
        self.btn_next = QPushButton("İleri (D) >>")
        
        for btn in [self.btn_prev, self.btn_save, self.btn_next]:
            btn.setStyleSheet("font-size: 12px; font-weight: bold; padding: 10px;")
            btn_layout.addWidget(btn)
            
        self.btn_save.setStyleSheet("background-color: #2e7d32; color: white; padding: 10px;")
        layout.addLayout(btn_layout)
        
        self.btn_prev.clicked.connect(self.prev_image)
        self.btn_next.clicked.connect(self.next_image)
        self.btn_save.clicked.connect(self.save_data)
        
        QShortcut(QKeySequence("A"), self).activated.connect(self.prev_image)
        QShortcut(QKeySequence("D"), self).activated.connect(self.next_image)
        QShortcut(QKeySequence("S"), self).activated.connect(self.save_data)
        
        self.scan_files()
        self.load_current()

    def scan_files(self):
        if not os.path.exists(IMG_DIR): return
        exts = ('.jpg', '.png', '.jpeg')
        self.file_list = sorted([f for f in os.listdir(IMG_DIR) if f.lower().endswith(exts)])
        
    def load_current(self):
        if not self.file_list: return
        img_name = self.file_list[self.current_index]
        self.lbl_info.setText(f"[{self.current_index+1}/{len(self.file_list)}] {img_name}")
        img_path = os.path.join(IMG_DIR, img_name)
        json_path = os.path.join(JSON_DIR, os.path.splitext(img_name)[0] + ".json")
        self.canvas.load_data(img_path, json_path)

    def save_data(self):
        if not self.file_list: return
        img_name = self.file_list[self.current_index]
        json_path = os.path.join(JSON_DIR, os.path.splitext(img_name)[0] + ".json")
        
        data = {}
        if os.path.exists(json_path):
            with open(json_path, 'r') as f: data = json.load(f)
        data["landmarks"] = self.canvas.landmarks
        
        with open(json_path, 'w') as f: json.dump(data, f, indent=4)
        self.lbl_info.setText(f"{img_name} - KAYDEDİLDİ ✅")

    def next_image(self):
        if self.current_index < len(self.file_list)-1:
            self.current_index += 1
            self.load_current()

    def prev_image(self):
        if self.current_index > 0:
            self.current_index -= 1
            self.load_current()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    win = MainWindow()
    win.show()
    sys.exit(app.exec_())