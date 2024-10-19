const blockedSites = ["*://*.facebook.com/*", "*://*.instagram.com/*"];

const quotes = [
  "Focus on your goals, not your obstacles.",
  "Success is the sum of small efforts repeated day in and day out.",
  "The secret of getting ahead is getting started.",
  "Your future is created by what you do today, not tomorrow.",
  "Believe you can and you're halfway there.",
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { redirectUrl: chrome.runtime.getURL("blocked.html") };
  },
  { urls: blockedSites },
  ["blocking"]
);
