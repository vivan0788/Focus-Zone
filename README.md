🎯 Focus-Zone — Vivan Focus Zone

<p align="center">
  <strong>A smarter space for deep work, mindful breaks, and distraction-free productivity.</strong>
</p><p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p><p align="center">
  <a href="https://focus-zone-five.vercel.app/">🚀 Live Demo</a>
</p>---

📌 Overview

Focus-Zone (Vivan Focus Zone) is a modern, customizable productivity web application designed to help students, developers, and professionals stay focused and build better work habits.

Combining a Pomodoro-style focus timer, relaxing ambient sounds, task management, motivational quotes, and beautiful themes, Focus-Zone creates a personalized environment for deep work.

Built with HTML, CSS, JavaScript, and Express.js, the project is designed for a clean user experience and deployment on Vercel.

«💡 "Deep work is the superpower of the 21st century."»

✨ Key Features

- ⏱️ Customizable Focus Timer — Set your preferred session duration, start, pause, and reset the timer.
- 🌧️ Ambient Soundboard — Choose between White Noise, Pure Rain, Brown Noise, and Cozy Fire.
- 🔊 Independent Volume Controls — Adjust the volume of each ambient sound individually.
- ✅ Focus Task Manager — Add tasks to your to-do list and delete completed or unnecessary tasks.
- 💬 Motivational Quote Banner — Stay inspired with a productivity-focused quote.
- 🎨 Multiple Themes — Switch between Midnight Dark, Warm Pastel, and Cyberpunk Neon.
- ⚙️ Express.js API — Use backend API endpoints for quotes and application data.
- 📱 Responsive Interface — Designed to provide a comfortable experience across supported screen sizes.
- ☁️ Vercel Deployment — Deploy the application using Vercel's hosting platform.

🛠️ Tech Stack

Technology| Purpose
HTML5| Application structure and content
CSS3| Styling, responsive layouts, and themes
JavaScript (Vanilla)| Timer, task management, sound controls, and UI interactions
Node.js| JavaScript runtime for the backend
Express.js| API routes and server-side functionality
Vercel| Application deployment and hosting
Git & GitHub| Version control and collaboration

🚀 Getting Started

Follow these instructions to run Focus-Zone locally.

Prerequisites

Make sure you have installed:

- "Node.js" (https://nodejs.org/) — Includes npm
- "Git" (https://git-scm.com/)
- A code editor such as "Visual Studio Code" (https://code.visualstudio.com/)

1. Clone the Repository

Replace the example repository URL with your actual GitHub repository URL.

git clone https://github.com/vivan0788/Focus-Zone.git

2. Navigate to the Project Directory

cd Focus-Zone

3. Install Dependencies

npm install

4. Start the Development Server

npm start

Make sure your "package.json" defines a "start" script that launches your Express.js application.

Example:

{
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}

If your project uses a different server entry point, update the script accordingly.

5. Open the Application

Visit the local address configured by your server, commonly:

http://localhost:3000

Your application may use a different port depending on its configuration.

📂 Project Structure

The following is a suggested structure. Adapt the filenames to match your actual repository.

Focus-Zone/
│
├── api/
│   └── index.js          # Express API entry point for Vercel
│
├── public/
│   ├── index.html        # Main application page
│   ├── css/
│   │   └── style.css     # Styles and theme definitions
│   ├── js/
│   │   └── script.js     # Frontend interactions
│   ├── sounds/
│   │   ├── rain.mp3
│   │   └── fire.mp3
│   └── assets/
│       └── favicon.ico
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Locked dependency versions
├── vercel.json           # Optional Vercel routing configuration
├── .gitignore            # Files excluded from Git
└── README.md             # Project documentation

«Important: This structure is illustrative. Keep your actual folder names, API entry point, and Vercel configuration consistent with the project.»

🗺️ Future Roadmap

Potential improvements for future versions:

- [ ] 🔔 Add customizable notifications when a focus session ends.
- [ ] ☕ Implement automatic focus and break intervals.
- [ ] 💾 Persist tasks and user preferences using browser storage.
- [ ] 📊 Add productivity statistics and focus-session history.
- [ ] 🎵 Expand the ambient sound library.
- [ ] 🌐 Add more themes and customization options.
- [ ] 🔄 Integrate a backend database for persistent user data.
- [ ] 👤 Introduce optional user accounts and personalized settings.
- [ ] ♿ Improve keyboard navigation and accessibility.
- [ ] 📱 Enhance the mobile experience and installability as a PWA.

🤝 Contributing

Contributions, ideas, bug reports, and feature suggestions are welcome!

To contribute:

1. Fork this repository.

2. Create a feature branch.
   
   git checkout -b feature/your-feature

3. Make your changes and test them locally.

4. Commit your changes.
   
   git add .
git commit -m "feat: add your feature"

5. Push your branch.
   
   git push origin feature/your-feature

6. Open a Pull Request describing your changes.

Contribution Guidelines

- Keep code readable and maintainable.
- Follow the existing project structure and coding style.
- Test changes before submitting a Pull Request.
- Avoid committing secrets, credentials, or environment files.
- Provide screenshots when making significant UI changes.

👨‍💻 Author

Avinash Sahani

BTech Computer Science Student | Web Developer | Open-Source Enthusiast

- GitHub: "@vivan0788" (https://github.com/vivan0788)
- LinkedIn: "https://www.linkedin.com/in/avinash-sahani-5bb7363b4?utm_source=share_via&utm_content=profile&utm_medium=member_android" (https://www.linkedin.com/)

Building useful digital experiences, one project at a time.

---

<p align="center">
  <strong>🎯 Focus better. Build consistently. Achieve more.</strong>
  <br />
  Made with ❤️ by Avinash Sahani
</p>
