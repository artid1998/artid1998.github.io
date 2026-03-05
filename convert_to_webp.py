from PIL import Image
from pathlib import Path

SLIDES_DIR = Path(__file__).parent / "img" / "slides"
QUALITY = 85
EXTENSIONS = {".jpg", ".jpeg", ".png"}

total_original = 0
total_converted = 0
count = 0

print("=" * 60)
print("WebP 변환 시작")
print("=" * 60)

for img_path in sorted(SLIDES_DIR.rglob("*")):
    if img_path.suffix.lower() not in EXTENSIONS:
        continue

    webp_path = img_path.with_suffix(".webp")

    if webp_path.exists():
        print(f"[건너뜀] 이미 존재: {webp_path.relative_to(SLIDES_DIR)}")
        continue

    try:
        original_size = img_path.stat().st_size
        with Image.open(img_path) as img:
            img.save(webp_path, "WEBP", quality=QUALITY)
        converted_size = webp_path.stat().st_size

        total_original += original_size
        total_converted += converted_size
        count += 1

        ratio = (1 - converted_size / original_size) * 100
        print(f"[완료] {img_path.relative_to(SLIDES_DIR)}")
        print(f"       {original_size // 1024}KB → {converted_size // 1024}KB ({ratio:.1f}% 감소)")

    except Exception as e:
        print(f"[오류] {img_path.name}: {e}")

print()
print("=" * 60)
print(f"변환 완료: {count}개 파일")
if total_original > 0:
    total_ratio = (1 - total_converted / total_original) * 100
    print(f"전체 용량: {total_original // (1024*1024)}MB → {total_converted // (1024*1024)}MB ({total_ratio:.1f}% 감소)")
print("=" * 60)
