document.getElementById('summarize').addEventListener('click', async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: () => window.getSelection().toString(),
      },
      async (results) => {
        const selectedText = results[0].result;
        if (!selectedText) {
          document.getElementById('summary').innerText = 'No text selected.';
          return;
        }

        document.getElementById('summary').innerText = 'Summarizing...';

        const res = await fetch('http://localhost:3000/summarize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: selectedText }),
        });

        const data = await res.json();
        document.getElementById('summary').innerText = data.summary || 'Failed to summarize.';
      }
    );
  });
});
