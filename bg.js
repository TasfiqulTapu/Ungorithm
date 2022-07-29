browser.browserAction.onClicked.addListener(send);

function getCurrentTab() {
  return browser.tabs.query({ currentWindow: true, active: true });
}

async function send() {
  const tabInfo = await getCurrentTab();
  const [{ id: tabId }] = tabInfo;
  browser.tabs.sendMessage(tabId, { trigger: 'sent' });
}
