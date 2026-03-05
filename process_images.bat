@echo off
chcp 65001 > nul
cd /d "C:\Users\MOON\Documents\GitHub\artid1998.github.io"

set /p INPUT="처리할 폴더 경로를 입력하세요: "

:: 앞뒤 따옴표 제거
set INPUT=%INPUT:"=%

:: "img\slides\" 또는 "img/slides/" 이후 폴더명만 추출
for %%A in ("%INPUT%") do set FOLDER=%%~nxA

echo.
echo [처리 시작] img/slides/%FOLDER%
echo.

python process_images.py "img/slides/%FOLDER%"

echo.
pause
