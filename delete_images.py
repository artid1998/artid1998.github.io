import os
from PIL import Image

folder_path = r"C:\Users\MOON\Documents\카카오톡 받은 파일\매봉역감자탕"

# 640x480 크기의 이미지 찾아서 삭제
deleted_count = 0

for filename in os.listdir(folder_path):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        filepath = os.path.join(folder_path, filename)
        try:
            with Image.open(filepath) as img:
                width, height = img.size
                if width == 640 and height == 480:
                    os.remove(filepath)
                    print(f"삭제: {filename}")
                    deleted_count += 1
        except Exception as e:
            print(f"오류 ({filename}): {e}")

print(f"\n총 {deleted_count}개 파일 삭제 완료")
