# process_images.ps1
Set-Location $PSScriptRoot

Write-Host "================================================"
Write-Host " process_images"
Write-Host " img/slides/ 프로젝트 이미지 처리 도구"
Write-Host "================================================"
Write-Host ""

$INPUT = Read-Host "폴더 경로를 붙여넣으세요"

# 따옴표 제거
$INPUT = $INPUT.Trim('"')

# 마지막 폴더명만 추출
$FOLDER = Split-Path $INPUT -Leaf

Write-Host ""
Write-Host "처리 대상: img/slides/$FOLDER"
Write-Host ""

python process_images.py "img/slides/$FOLDER"

Write-Host ""
Read-Host "완료. 엔터를 누르면 닫힙니다"
