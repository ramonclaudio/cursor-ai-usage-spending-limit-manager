# Cursor Usage + Spending Limit Manager

Cursor's billing UI had a bug: once you hit the hard cap on your spending limit, the UI wouldn't let you raise it or toggle usage-based pricing. I poked around, found the API call, wrote this one-off patch for the browser console. Would have been a PR if Cursor were open source, or a gist if I'd been thinking practically. Ended up as a repo. Cursor eventually fixed the bug.

Browser console script for managing Cursor's spending limit and usage-based pricing.

## Install

1. Open browser DevTools (F12)
2. Paste `main.js` into the console
3. Get your session token (see below) and initialize

## Commands

```javascript
// Initialize with your session token
init('your_token_here');

// Set spending limit (USD)
setLimit(100);

// Set limit and disable usage-based pricing
setLimit(100, true);

// Print token instructions
getToken();
```

## Getting your session token

### Chromium (Chrome, Edge, Brave, Arc, Dia, Vivaldi, Opera, Helium)

1. Open DevTools (F12)
2. Application → Cookies → `cursor.com`
3. Copy the `WorkosCursorSessionToken` value
4. Run `init('paste_token_here')`

### Mozilla (Firefox, Zen, LibreWolf, Floorp)

1. Open DevTools (F12)
2. Storage → Cookies → `cursor.com`
3. Copy the `WorkosCursorSessionToken` value
4. Run `init('paste_token_here')`

## License

MIT
