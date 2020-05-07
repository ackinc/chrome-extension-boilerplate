alert("Content script: I am sending a message to the background script");
chrome.runtime.sendMessage({ message: "hello" }, function (response) {
  alert(
    `Content script: Background script responded with "${response.message}"`
  );
});
alert("Content script: I have sent a message to the background script");
