# 🧪 Sendsay E2E Test Automation

![Test Status](https://img.shields.io/badge/tests-10%20passed%20%2F%200%20failed-brightgreen)
![Cypress Version](https://img.shields.io/badge/cypress-13.0.0-blue)
![Test Duration](https://img.shields.io/badge/duration-1m%2015s-blue)

Проект автоматизации end-to-end тестирования для Sendsay приложения.

## 📊 Результаты последнего прогона

**Все тесты успешно пройдены** ✅ **100% успешность**

| Спецификация | Время | Тесты | Пройдено |
|--------------|-------|-------|----------|
| **Все спецификации** | **01:15** | **10** | **10** |
| `campaigns/create-campaign.cy.js` | 00:18 | 1 | 1 |
| `integration/full-flow.cy.js` | 00:02 | 1 | 1 |
| `login/corporate-login.cy.js` | 00:23 | 2 | 2 |
| `login/login.cy.js` | 00:31 | 6 | 6 |

## 🗂️ Структура проекта<br>
sendsay-e2e-tests/<br>
├── cypress/<br>
│ ├── e2e/<br>
│ │ ├── campaigns/<br>
│ │ │ └── create-campaign.cy.js<br>
│ │ ├── integration/<br>
│ │ │ └── full-flow.cy.js<br>
│ │ └── login/<br>
│ │ ├── corporate-login.cy.js<br>
│ │ └── login.cy.js<br>
│ ├── fixtures/<br>
│ ├── support/<br>
│ └── downloads/<br>
├── cypress.config.js<br>
├── package.json<br>
└── README.md<br>


## 🚀 Быстрый старт

### Предварительные требования
- Node.js ≥ 16
- npm или yarn

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/vagap85/sendsay-e2e-tests.git
cd sendsay-e2e-tests

# Установить зависимости
npm install

# Запустить Cypress
npx cypress open
📋 Покрытие тестами
🔐 Авторизация
Основной логин - 6 тестовых сценариев

Корпоративный логин - 2 тестовых сценария

🎯 Создание рассылки - полный E2E сценарий

🔄 Интеграционные тесты
Полный поток - комплексный сценарий работы приложения

⚙️ Конфигурация
javascript
// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.sendsay.ru',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000
  }
})
🧪 Пример теста
javascript
// cypress/e2e/login/login.cy.js
describe('Авторизация в Sendsay', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Успешный вход с корректными учетными данными', () => {
    cy.get('[data-testid="login-input"]').type('test@example.com')
    cy.get('[data-testid="password-input"]').type('password123')
    cy.get('[data-testid="submit-btn"]').click()
    cy.url().should('include', '/dashboard')
  })
})
📦 Зависимости
Основные зависимости в package.json:

json
{
  "name": "sendsay-e2e-tests",
  "version": "1.0.0",
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "test": "cypress run"
  },
  "devDependencies": {
    "cypress": "^13.0.0"
  }
}
🤝 Вклад в проект
Форкните репозиторий

Создайте feature ветку

Внесите изменения

Напишите/обновите тесты

Создайте Pull Request

📄 Лицензия
MIT
