# Automation Exercise – Playwright Automation Project

## 1. Introduction
This project automates key user flows of the AutomationExercise website using Playwright with TypeScript.
The goal is to validate core functionalities such as authentication, cart operations, and subscription features.

---

## 2. Tech Stack
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

---

## 3. Project Structure
```
automationtest_exercise
│
├── pages # Page Object files
├── tests # Test cases
├── test-data # Test data (users, products)
├── playwright.config.ts
└── README.md
```
---

## 4. Implemented Test Cases

| Test Case ID | Description |
|-------------|------------|
| TC01 | Register User |
| TC02 | Login User with correct email and password |
| TC03 | Login User with incorrect email and password |
| TC04 | Logout User |
| TC05 | Register User with existing email |
| TC10 | Verify Subscription in Home Page |
| TC11 | Verify Subscription in Cart Page |
| TC12 | Add Products in Cart |
| TC13 | Verify Product Quantity in Cart |
| TC17 | Remove Products From Cart |

---

## 5. Automation Strategy
- Focus on high-value and stable test cases
- Avoid UI-heavy and flaky scenarios (scroll animation, file download)
- Use productId-based selectors instead of index-based selectors
- Separate test data from test logic

---

## 6. How to Run Tests

### Install dependencies
```
npm install
```
### Run all tests
```
npx playwright test
```
### Run tests with UI
```
npx playwright test --ui
```
