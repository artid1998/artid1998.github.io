import os
from PIL import Image

folder_path = r"C:\Users\MOON\Documents\카카오톡 받은 파일\매봉역감자탕"

# 640x480 크기의 이미지 찾기
files_to_delete = []

for filename in os.listdir(folder_path):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        filepath = os.path.join(folder_path, filename)
        try:
            with Image.open(filepath) as img:
                width, height = img.size
                print(f"{filename}: {width}x{height}")
                if width == 640 and height == 480:
                    files_to_delete.append(filepath)
                    print(f"  → 삭제 대상")
        except Exception as e:
            print(f"{filename}: 오류 - {e}")

print(f"\n총 {len(files_to_delete)}개 파일을 삭제합니다:")
for f in files_to_delete:
    print(f"  - {os.path.basename(f)}")

if files_to_delete:
    confirm = input("\n삭제하시겠습니까? (y/n): ")
    if confirm.lower() == 'y':
        for filepath in files_to_delete:
            os.remove(filepath)
            print(f"삭제 완료: {os.path.basename(filepath)}")
        print(f"\n총 {len(files_to_delete)}개 파일 삭제 완료")
    else:
        print("삭제 취소")
else:
    print("\n640x480 크기의 이미지가 없습니다.")
