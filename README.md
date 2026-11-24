# Bishal Ray — Advanced Portfolio

A polished, responsive portfolio built with **Python (Flask), HTML5, CSS3 and JavaScript**.

## Features
- Blue-and-white report-inspired visual system with optional dark theme
- Responsive desktop, tablet and mobile layouts
- Mobile navigation
- Animated section reveals with reduced-motion support
- Project category filters
- Expandable, structured project reports
- Copy-email interaction
- SEO metadata and social preview metadata
- Accessible labels and semantic page sections

## Run locally

1. Extract this ZIP.
2. Open the extracted folder in VS Code or a terminal.
3. Install Python 3.9+ if needed.
4. Install Flask:

   ```bash
   pip install -r requirements.txt
   ```

5. Start the app:

   ```bash
   python app.py
   ```

6. Visit `http://127.0.0.1:5000`.

## Deploy to Render

This repository includes a Render Blueprint in `render.yaml`.

1. Push the repository to GitHub.
2. In Render, choose **New → Blueprint** and connect `bishalray60/Portfolo`.
3. Review the `bishal-ray-portfolio` web service and deploy it.

Render installs dependencies from `requirements.txt` and starts the Flask app with Gunicorn.

## Project structure

```text
bishal_ray_elite_portfolio/
├── app.py
├── requirements.txt
├── render.yaml
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── script.js
```

## Personal details currently included
- Name: Bishal Ray
- Education: B.Tech, Computer Science Engineering
- University: Manav Rachna University
- Skills: C, Python (Beginner), Java (Beginner), HTML, CSS, Git, GitHub, VS Code, OOP, DSA (Basic), Problem-solving
- Projects: Personal Portfolio Website; C Programming Mini Projects; Python Coding Notebook; Fake News Detection
- Certification: Introduction to Python — Datacampus
- Interest: Table Tennis
- Contact: bishalray623@gmail.com | +91 91531 35922

## Before publishing
- Add a real profile photograph if desired (the current hero uses a typographic monogram, not a stock face).
- Add verified GitHub and LinkedIn URLs when available.
- Add live project/demo links when those projects are published.
- Check your contact details and education dates.
- For public deployment, use a production WSGI server (for example, Gunicorn) and set `debug=False`.