import os
from PIL import Image
import time

folder_path = r"C:\Users\MOON\Documents\카카오톡 받은 파일\매봉역감자탕"

# 640x480 크기의 이미지 목록 먼저 만들기
files_to_delete = []

for filename in os.listdir(folder_path):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        filepath = os.path.join(folder_path, filename)
        try:
            with Image.open(filepath) as img:
                width, height = img.size
                if width == 640 and height == 480:
                    files_to_delete.append(filepath)
        except Exception as e:
            print(f"오류 ({filename}): {e}")

# 이미지 파일을 모두 닫은 후 삭제
print(f"{len(files_to_delete)}개 파일을 삭제합니다...\n")
time.sleep(0.5)  # 파일 핸들이 완전히 닫힐 때까지 대기

deleted_count = 0
for filepath in files_to_delete:
    try:
        os.remove(filepath)
        print(f"삭제: {os.path.basename(filepath)}")
        deleted_count += 1
    except Exception as e:
        print(f"삭제 실패 ({os.path.basename(filepath)}): {e}")

print(f"\n총 {deleted_count}개 파일 삭제 완료")
