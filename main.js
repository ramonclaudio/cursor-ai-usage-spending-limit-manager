// ====================================================================================================
// CURSOR USAGE + SPENDING LIMIT MANAGER
//
// A simple JS script for console that allows you to update your spending limit and usage-based pricing.
//
// Made with ❤️ by @Ramon Claudio
// ====================================================================================================

let sessionToken = null;
let isInitialized = false;

// Core token management
const init = (token) => {
  if (!token?.trim()) {
    console.log("❌ Token required");
    showHelp();
    return;
  }
  
  sessionToken = token.trim();
  isInitialized = true;
  
  console.clear();
  console.log("✅ Initialized");
  console.log(`🔑 Token: ${sessionToken.substring(0, 16)}...`);
  showCommands();
};

// Core API function
const setLimit = async (amount, disableUsageBased = false) => {
  if (!isInitialized) {
    console.log("❌ Not initialized. Run getToken() first.");
    return;
  }
  
  console.log(`\n🎯 Setting limit to $${amount}`);
  console.log(`📊 Usage-based: ${disableUsageBased ? 'OFF' : 'ON'}`);
  
  try {
    const response = await fetch('https://www.cursor.com/api/dashboard/set-hard-limit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `WorkosCursorSessionToken=${sessionToken}`
      },
      credentials: 'include',
      body: JSON.stringify({
        hardLimit: amount,
        noUsageBasedAllowed: disableUsageBased
      })
    });
    
    if (response.ok) {console.log();  
      console.log(`\n🎉 Success! Limit set to $${amount}`);
      console.log();
      console.log("─".repeat(25));
      console.log(`Made with ❤️ by @Ramon Claudio`);
      console.log("─".repeat(25));
      if (disableUsageBased) console.log("📊 Usage-based pricing disabled");
    } else {
      console.log(`\n❌ Failed: ${response.status}`);
      if (response.status === 401) {
        console.log("🔒 Token expired. Get a fresh one.");
        isInitialized = false;
        showHelp();
      }
    }
  } catch (error) {
    console.log(`\n💥 Network error: ${error.message}`);
  }
};

// Helper functions
const showHelp = () => {
  console.log("\n" + "─".repeat(50));
  console.log("📖 HOW TO GET YOUR TOKEN");
  console.log("─".repeat(50));
  console.log("For Chromium based browsers:");
  console.log("1. Open DevTools (F12)");
  console.log("2. Go to Application → Cookies");
  console.log("3. Find cursor.com → WorkosCursorSessionToken");
  console.log("4. Copy the Value");
  console.log("5. Run: init('paste_token_here')");
  console.log("─".repeat(50));
  console.log("For Mozilla based browsers:");
  console.log("1. Open DevTools (F12)");
  console.log("2. Go to Storage → Cookies");
  console.log("3. Find cursor.com → WorkosCursorSessionToken");
  console.log("4. Copy the Value");
  console.log("5. Run: init('paste_token_here')");
  console.log("─".repeat(50));
};


const showCommands = () => {
  console.log("\n" + "─".repeat(50));
  console.log("⚡ AVAILABLE COMMANDS");
  console.log("─".repeat(50));
  console.log("setLimit(100)           // Set $100 limit (default is $100 but you can change it to whatever you want)");
  console.log("setLimit(100, true)     // Set $100, disable usage-based");
  console.log("getToken()              // Show token help again (if you need to get a new token)");
  console.log("─".repeat(50));
};

// Convenience aliases
const getToken = showHelp;

// Global exports
window.init = init;
window.setLimit = setLimit;
window.getToken = getToken;

// Clear console and hide annoying preload warnings
console.clear();

const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  const message = args.join(' ');
  if (message.includes('preloaded with link preload was not used')) return;
  originalConsoleWarn.apply(console, args);
};

// Welcome message
console.log("╔" + "═".repeat(48) + "╗");
console.log("║" + " ".repeat(5) + "CURSOR USAGE + SPENDING LIMIT MANAGER" + " ".repeat(6) + "║");
console.log("╚" + "═".repeat(48) + "╝");
console.log("\n💡 First time? Run: getToken()");
console.log("🔑 Have a token? Run: init('your_token_here')");
