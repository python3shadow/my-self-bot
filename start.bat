@echo off
title Evolution Selfbot
if exist node_modules\ms\ (
:slt
node index
pause
goto slt
) else (
  call npm i ms >> NUL
  echo Les modules sont installes
  echo Relance ce fichier
  pause
  exit
)
