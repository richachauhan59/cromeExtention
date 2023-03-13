// content.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'clickButton') {
      const button = document.querySelector('.artdeco-button');
      button.click();
    }
  });
  