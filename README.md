# URL Text Summarizer 📝

A simple Chrome Extension + Node.js backend project that lets users **summarize the text content of any webpage** with a single click!  
This project demonstrates how browser extensions can communicate with custom backends to utilize AI-based text summarization.

---

## 🚀 Features

- 📄 **Summarize any webpage's text content** in one click
- 🌐 **Chrome Extension** for ease of access
- ⚙️ **Node.js backend** that handles summarization logic
- 🧠 (Optional) Uses an **AI model API** to generate concise summaries
- 🛡️ Clean, modular and beginner-friendly project structure

---

## 🗂️ Project Structure

```
URL-TEXT-SUMMARIZER/
├── summarizer-backend/
│   ├── index.js
│   ├── package.json
│   └── (other backend files)
└── url-summarizer-extension/
    ├── manifest.json
    ├── popup.html
    ├── popup.js
    └── (other extension files)
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Anurag-Jangir/URL-TEXT-SUMMARIZER.git
cd URL-TEXT-SUMMARIZER
```

### 2️⃣ Set up the Backend

```bash
cd summarizer-backend
npm install
npm start
```

The backend server will run on **http://localhost:3000**

### 3️⃣ Set up the Chrome Extension

1. Open **Google Chrome**
2. Go to `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the folder `url-summarizer-extension`

---

## 💡 How it Works

- The extension grabs the text content of the current webpage.
- It sends the content to the backend API (`/summarize`) running locally.
- The backend summarizes the text and returns the summary.
- The extension displays the summary inside its popup.

---

## 🛠️ Technologies Used

- **Chrome Extension API**
- **Node.js**, **Express.js**
- (Optional) **AI Summarization API** — HuggingFace / OpenAI / other

---

## 📌 Possible Improvements

- Use a **deployed backend** (instead of local server)
- Add **API key management** (securely)
- Improve **summary quality** with better models
- Better **UI/UX** for the extension popup

---

## 🙌 Acknowledgements

- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
- [Hugging Face](https://huggingface.co/)
- [OpenAI](https://platform.openai.com/)
