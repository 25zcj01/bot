@echo off
:1
node index.js
pause
set /p f = leave or restart 1for leave 2 for restart
if f = 1 exit
if f = 2 goto 1