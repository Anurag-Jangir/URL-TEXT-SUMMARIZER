chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'summarizeText',
    title: 'Summarize selected text',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === 'summarizeText') {
    const selectedText = info.selectionText;

    try {
      const response = await fetch('http://localhost:3000/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: selectedText }),
      });

      const data = await response.json();
      const summary = data.summary || 'No summary available.';

      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Summary',
        message: summary.slice(0, 250), // Chrome notifications have a max length
        priority: 1,
      });
    } catch (err) {
      console.error('Error fetching summary:', err);
    }
  }
});
