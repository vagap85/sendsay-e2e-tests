@echo off
echo Исправление структуры проекта...

cd /d "D:\VS_Code\sendsay-e2e-tests"

echo 1. Удаление неправильных папок...
if exist "cypress\support\cypress" rmdir /s /q "cypress\support\cypress"
if exist "cypress\fixtures\cypress" rmdir /s /q "cypress\fixtures\cypress"

echo 2. Создание правильной структуры...
mkdir "cypress\e2e\login" 2>nul
mkdir "cypress\e2e\campaigns" 2>nul
mkdir "cypress\e2e\integration" 2>nul

echo 3. Перемещение файлов...
move "cypress\support\login.cy.js" "cypress\e2e\login\" 2>nul
move "cypress\support\create-campaign.cy.js" "cypress\e2e\campaigns\" 2>nul
move "cypress\support\full-flow.cy.js" "cypress\e2e\integration\" 2>nul

echo 4. Обновление зависимостей...
call npm install

echo.
echo Готово! Запустите: npm run cypress:open
pause