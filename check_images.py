import os
from PIL import Image

folder_path = r"C:\Users\MOON\Documents\카카오톡 받은 파일\매봉역감자탕"

# 640x480 크기의 이미지 찾기
files_to_delete = []

print("이미지 크기 확인 중...\n")

for filename in sorted(os.listdir(folder_path)):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        filepath = os.path.join(folder_path, filename)
        try:
            with Image.open(filepath) as img:
                width, height = img.size
                if width == 640 and height == 480:
                    files_to_delete.append(filepath)
                    print(f"✗ {filename}: {width}x{height} [삭제 대상]")
                else:
                    print(f"✓ {filename}: {width}x{height}")
        except Exception as e:
            print(f"? {filename}: 오류 - {e}")

print(f"\n{'='*60}")
print(f"총 {len(files_to_delete)}개의 640x480 이미지를 찾았습니다.")
if files_to_delete:
    print("\n삭제될 파일 목록:")
    for f in files_to_delete:
        print(f"  - {os.path.basename(f)}")
