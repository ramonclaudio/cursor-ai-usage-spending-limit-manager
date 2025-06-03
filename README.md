# Cursor Usage + Spending Limit Manager

A simple JS script for the browser console that allows users to manage spending limits and toggle usage-based pricing for AI code editor [Cursor](https://cursor.com/).

## Background

This script was developed in response to an issue reported with the [Cursor.com](https://cursor.com/) frontend UI, which prevented users from updating their spending limit after hitting a hard cap. This utility allows users to manage their spending limits and toggle usage-based pricing directly from the browser console, providing a temporary solution while waiting for an official update from the Cursor team.

## Features
-  Manage spending limits easily.
-  Toggle usage-based pricing as needed.
-  Clear instructions for obtaining the required session token.
-  User-friendly command options for enhanced interaction.

## Getting Started

### Prerequisites
-  A web browser with developer tools (e.g., Chrome, Firefox).

### Installation
1. Open your browser's console (F12).
2. Copy and paste the script into the console.

### Commands
Here are the available commands you can use after initializing the script:

-  **Initialize the Script**:
  ```javascript
  init('your_token_here');
  ```
  Replace `'your_token_here'` with your actual session token.

-  **Set Spending Limit**:
  ```javascript
  setLimit(amount);
  ```
  Example: 
  ```javascript
  setLimit(100); // Sets the spending limit to $100
  ```

-  **Set Spending Limit with Usage-Based Pricing Disabled**:
  ```javascript
  setLimit(amount, true);
  ```
  Example:
  ```javascript
  setLimit(100, true); // Sets the spending limit to $100 and disables usage-based pricing
  ```

-  **Get Token Help**:
  ```javascript
  getToken();
  ```
  This command will display instructions on how to obtain your session token.

## How to Get Your Token
To get your session token, follow these steps:

### For Chromium Based Browsers:
1. Open DevTools (F12).
2. Go to Application → Cookies.
3. Find `cursor.com` → `WorkosCursorSessionToken`.
4. Copy the Value.
5. Run: `init('paste_token_here')`.

### For Mozilla Based Browsers:
1. Open DevTools (F12).
2. Go to Storage → Cookies.
3. Find `cursor.com` → `WorkosCursorSessionToken`.
4. Copy the Value.
5. Run: `init('paste_token_here')`.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributing
If you have suggestions for improvements or encounter issues, feel free to open an issue or submit a pull request.

## Acknowledgments
Made with ❤️ by @RMNCLDYO.
