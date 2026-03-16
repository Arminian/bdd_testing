# Behavioral Driven Development Testing

This project tests the [qabrains](https://qabrains.com/) practical testing web service for login, registration and adding items to the user cart on the ecommerce practice website.

## 💿 Technologies
- WebdriverIO framework
- Cucumber automation tool
- Spec reports

## 💡 Features
- Login
- Registration
- Adding item to user cart

## 🔌 Project Structure
```
├── features
│   ├── editCart.feature
│   ├── login.feature
│   ├── pageobjects
│   │   ├── editCart.page.js
│   │   ├── login.page.js
│   │   ├── message.page.js
│   │   ├── page.js
│   │   └── registration.page.js
│   ├── registration.feature
│   └── step-definitions
│       ├── editCart.steps.js
│       ├── login.steps.js
│       ├── registration.steps.js
│       └── shared.steps.js
├── package.json
├── package-lock.json
└── wdio.conf.js
```
