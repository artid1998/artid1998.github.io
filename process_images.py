from PIL import Image
from pathlib import Path
import sys

MAIN_MAX = (1920, 1080)
THUMB_MAX = (640, 360)
EXTENSIONS = {".jpg", ".jpeg", ".png"}
WEBP_QUALITY = 85
JPEG_QUALITY = 90
THUMB_JPEG_QUALITY = 85

def crop_to_16_9(img):
    w, h = img.size
    target_h = w * 9 // 16
    target_w = h * 16 // 9

    if h > target_h:
        top = (h - target_h) // 2
        img = img.crop((0, top, w, top + target_h))
    elif w > target_w:
        left = (w - target_w) // 2
        img = img.crop((left, 0, left + target_w, h))

    return img

def resize_down_only(img, max_size):
    w, h = img.size
    max_w, max_h = max_size

    if w <= max_w and h <= max_h:
        return img

    ratio = min(max_w / w, max_h / h)
    new_w = int(w * ratio)
    new_h = int(h * ratio)
    return img.resize((new_w, new_h), Image.LANCZOS)

def save_both(img, path_without_ext, jpeg_quality):
    jpg_path = path_without_ext.with_suffix(".jpg")
    webp_path = path_without_ext.with_suffix(".webp")

    img.save(jpg_path, "JPEG", quality=jpeg_quality)
    img.save(webp_path, "WEBP", quality=WEBP_QUALITY)

    return jpg_path, webp_path

def process_folder(folder_path):
    folder = Path(folder_path)

    if not folder.exists():
        print(f"[오류] 폴더를 찾을 수 없습니다: {folder}")
        return

    thumb_dir = folder / "thumbnails"
    thumb_dir.mkdir(exist_ok=True)

    image_files = sorted([
        f for f in folder.iterdir()
        if f.is_file() and f.suffix.lower() in EXTENSIONS
    ])

    if not image_files:
        print(f"[오류] 이미지 파일이 없습니다: {folder}")
        return

    print("=" * 60)
    print(f"처리 폴더: {folder.name}")
    print(f"이미지 {len(image_files)}개 발견")
    print("=" * 60)

    for i, img_path in enumerate(image_files):
        try:
            with Image.open(img_path) as img:
                img = img.convert("RGB")
                original_size = img.size

                # 16:9 크롭
                img_cropped = crop_to_16_9(img)

                # 메인 이미지 (축소만)
                img_main = resize_down_only(img_cropped, MAIN_MAX)
                save_both(img_main, folder / img_path.stem, JPEG_QUALITY)

                # 썸네일 (축소만)
                img_thumb = resize_down_only(img_cropped.copy(), THUMB_MAX)
                save_both(img_thumb, thumb_dir / img_path.stem, THUMB_JPEG_QUALITY)

                print(f"[완료] {img_path.name}")
                print(f"       원본: {original_size[0]}x{original_size[1]}")
                print(f"       메인: {img_main.size[0]}x{img_main.size[1]} → JPG + WebP")
                print(f"       썸네일: {img_thumb.size[0]}x{img_thumb.size[1]} → JPG + WebP")

                # 첫 번째 이미지를 thumb로 저장
                if i == 0:
                    save_both(img_thumb, thumb_dir / "thumb", THUMB_JPEG_QUALITY)
                    print(f"       → thumb.jpg + thumb.webp 생성 완료")

        except Exception as e:
            print(f"[오류] {img_path.name}: {e}")

    print()
    print("전체 처리 완료!")
    print("=" * 60)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("사용법: python process_images.py \"img/slides/프로젝트폴더명\"")
        print("예시:   python process_images.py \"img/slides/한국메인라인\"")
    else:
        process_folder(sys.argv[1])
