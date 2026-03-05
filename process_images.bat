@echo off
cd /d "%~dp0"
set /p INPUT=Path: 
set INPUT=%INPUT:"=%
for %%F in ("%INPUT%") do set FOLDER=%%~nxF
python process_images.py "img/slides/%FOLDER%"
pause
