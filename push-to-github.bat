@echo off
echo ==============================
echo  Kelthen — Push to GitHub
echo ==============================
cd /d "C:\Users\hp\novarift"
git add index.html
git commit -m "Add contact section, mobile menu, and footer"
git push origin main
echo.
echo Done! Check kelthen.com in ~60 seconds.
pause
