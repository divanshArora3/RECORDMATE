const express = require('express');
const puppeteer = require('puppeteer');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/record', async (req, res) => {
    const { link } = req.body;
    if (!link) return res.status(400).json({ message: 'Google Meet link is required.' });

    try {
        // Launch Puppeteer
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--use-fake-ui-for-media-stream', '--disable-infobars'],
        });
        const page = await browser.newPage();

        // Navigate to Google Meet
        await page.goto(link, { waitUntil: 'networkidle2' });

        // Join the meeting
        await page.waitForSelector('button[aria-label="Join now"]', { visible: true });
        await page.click('button[aria-label="Join now"]');

        // Start screen recording using FFmpeg
        const recordingCommand = `ffmpeg -y -f x11grab -r 25 -s 1920x1080 -i :0.0 -t 300 output.mp4`;
        const recordingProcess = exec(recordingCommand);

        res.json({ message: 'Recording started. The bot has joined the meeting.' });

        // Automatically end recording after 5 minutes
        setTimeout(() => {
            recordingProcess.kill();
            browser.close();
            console.log('Recording stopped and browser closed.');
        }, 300000); // 5 minutes
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to record the meeting.' });
    }
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});