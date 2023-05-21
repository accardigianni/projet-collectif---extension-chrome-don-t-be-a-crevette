
  
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "createNotification") {
    chrome.notifications.create('dos', {
      type: 'basic',
      iconUrl: 'crevette.png',
      title: "Don't be a crevette",
      message: 'Redresse-toi ! Tu vas te faire mal au dos !',
      priority: 2,
      requireInteraction: true
    });
    sendResponse({ received: true });
  } else if (request.action === "createNotification2") {
    chrome.notifications.create('eau', {
      type: 'basic',
      iconUrl: 'crevette_eau.png',
      title: "Don't be a crevette",
      message: 'Hydrate-toi ! Ne deviens pas une crevette séchée !',
      priority: 2,
      requireInteraction: true
    });
    sendResponse({ received: true });
  } else if (request.action === "createNotification3") {
    chrome.notifications.create('dehors', {
      type: 'basic',
      iconUrl: 'crevette_pause.png',
      title: "Don't be a crevette",
      message: 'Fais une pause ! Va prendre l"air !',
      priority: 2,
      requireInteraction: true
    });
    sendResponse({ received: true });
  }
});