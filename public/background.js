

chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].class, {type: 'clickButton'});
    });
  });
  