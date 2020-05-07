chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({
    message: "Thank you for your message",
  });
});
