
# 🎥 RECORDMATE

**RECORDMATE** is a productivity tool that allows users to **join Google Meet meetings automatically**, **record them**, and **receive both the video recording and an AI-generated transcript** — delivered straight to their inbox or dashboard. It’s ideal for students, professionals, educators, and remote teams who want to focus on participation instead of note-taking.


## 🧠 Key Features

- 📅 **Auto Join Google Meet Links**  
  Schedule or input a Google Meet URL — RecordMate will join the meeting on your behalf.

- 🎥 **Meeting Recording**  
  Full video + audio recording of the session.

- 📝 **AI-Powered Transcription**  
  Automatically generate a transcript using advanced speech-to-text (like Whisper or Google Speech API).

- 📩 **Recording & Transcript Delivery**  
  Send the final recording and transcript via email or make it available in the user dashboard.

- 🔐 **Secure & Authenticated Access**  
  JWT-based user login and secure dashboard to access all past recordings and transcripts.

---

## 💡 Use Cases

- 👨‍💼 Professionals missing meetings
- 📚 Students attending online classes
- 🧠 Researchers capturing interview transcripts
- 🎓 Educators needing auto-recording of sessions

---

## 🛠️ Tech Stack

| Layer        | Technologies                                     |
|-------------|--------------------------------------------------|
| Frontend     | React, Tailwind CSS, Redux, React Router         |
| Backend      | Node.js, Express.js, Socket.IO                   |
| Auth         | JWT, bcrypt.js                                   |
| Media & AI   | Puppeteer (or Selenium), ffmpeg, Whisper/OpenAI API |
| Database     | MongoDB with Mongoose                            |
| Storage      | AWS S3 / Firebase Storage (for video)            |

---
## Demo
<img width="810" alt="Screenshot 2025-06-23 at 11 41 24 AM" src="https://github.com/user-attachments/assets/80f8f668-489c-4e74-b120-17b9e3f94f34" />
<img width="810" alt="Screenshot 2025-06-23 at 11 41 34 AM" src="https://github.com/user-attachments/assets/49125eb4-fea2-4441-be77-4ca70eb45dbd" />
<img width="808" alt="Screenshot 2025-06-23 at 11 41 44 AM" src="https://github.com/user-attachments/assets/c1dabbeb-2e0e-4e6d-8045-6642e02ac89d" />
<img width="807" alt="Screenshot 2025-06-23 at 11 41 55 AM" src="https://github.com/user-attachments/assets/a769eb42-1766-4d8b-8f5f-aea9dcc6a995" />



## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/divanshArora3/RECORDMATE.git
cd RECORDMATE
```

# 🧠 How It Works
User submits Meet link or schedules it

Headless browser (Puppeteer) joins the meeting at the right time

Audio/video is recorded using screen/audio capturing tools (e.g., ffmpeg)

Recording is processed and uploaded

Audio is transcribed using Whisper or similar STT APIs

User receives an email or dashboard link with:

# 🎥 Video recording

📄 Text transcript

📬 Future Enhancements
⏱️ Meeting reminders and calendar sync (Google Calendar API)

🌍 Multi-language transcript support

📱 Mobile app (React Native)

🧑‍💼 Team account dashboard

# 🤝 Contributing
Pull requests and feedback are welcome!
Visit the issues page to get started.


# 👨‍💻 Author
Made with ❤️ by Divansh Arora

