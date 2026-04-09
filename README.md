# Job Application Tracker

A lightweight front-end web app to track job applications by status (All, Interviewed, Rejected) with live counters and interactive card actions.

## Project Overview

This project is a single-page, browser-based job tracker built with HTML, Tailwind CSS, DaisyUI, and vanilla JavaScript.
It displays a list of jobs as cards and allows users to:

- mark jobs as Interviewed
- mark jobs as Rejected
- delete jobs from lists
- filter by status tabs
- monitor live statistics (Total, Interviewed, Rejected, Available)

The app is designed to run as static content and is configured for GitHub Pages deployment through GitHub Actions.

## Key Features

- **Status-based job workflow**
  - Each card starts as `Not Applied`
  - `INTERVIEW` updates status styling and creates an Interviewed entry
  - `REJECTED` updates status styling and creates a Rejected entry
- **Dynamic counters**
  - Top stat cards update total jobs, interviewed jobs, and rejected jobs
  - "Available Jobs" counter updates based on the currently visible section
- **Section filtering**
  - `All`, `Interviewed`, and `Rejected` filter buttons switch visible views
  - Active filter button is highlighted with color-coded state
- **Card-level actions**
  - Trash action removes job cards from the current section
  - Empty state UI appears when Interviewed or Rejected sections have no cards
- **Responsive utility-first UI**
  - Built with Tailwind utility classes and DaisyUI components
  - Uses Google Fonts and Font Awesome for visual polish

## Tech Stack

- **Core:** HTML5, CSS3, JavaScript (ES6)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CDN/browser build)
- **UI Components:** [DaisyUI](https://daisyui.com/)
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Fonts:** Geist, Manrope, Outfit (Google Fonts)
- **Hosting/CI:** GitHub Pages + GitHub Actions workflow

## Project Structure

```text
Job-Application-Tracker/
|- index.html                  # Main page structure and job cards
|- Script/
|  |- logic.js                 # UI behavior, events, counters, filtering
|- tailwind.init.css           # Tailwind import entry
|- .github/workflows/
|  |- static.yml               # GitHub Pages deployment workflow
|- README.md
```

## How It Works

1. `index.html` renders:
   - dashboard stats
   - status filter buttons
   - All jobs list
   - Interviewed and Rejected sections (with empty states)
2. `Script/logic.js`:
   - initializes counts
   - manages tab visibility
   - updates active button styles
   - handles interview/reject actions
   - clones cards to target sections
   - updates counters after actions
   - controls empty-state visibility

## Getting Started

Since this is a static front-end project, no package installation is required.

### Option 1: Open directly

1. Clone or download this repository
2. Open `index.html` in your browser

### Option 2: Use VS Code Live Server (recommended)

1. Open the project folder in VS Code
2. Start Live Server on `index.html`
3. Interact with the app in your browser

## Deployment

This repository includes `.github/workflows/static.yml` for automatic GitHub Pages deployment.

- On push to `main`, GitHub Actions uploads the repository as a Pages artifact
- The workflow deploys the static site to GitHub Pages

To use it:

1. Push your code to GitHub
2. Enable **GitHub Pages** in repository settings (if not already enabled)
3. Ensure the default branch is `main`
4. Check the **Actions** tab for deployment status

## Current Behavior Notes

- Data is managed in-memory in the DOM (no backend/database yet)
- Page refresh resets status changes
- Jobs are currently hardcoded in `index.html`

## Future Improvements

- Persist jobs and statuses with LocalStorage or backend API
- Add create/edit job form
- Add search and advanced filters (location, role, salary)
- Add applied date and interview date timeline
- Refactor JavaScript into modular structure for maintainability

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Choose and add a license file (for example: MIT) if you plan to share or reuse this project publicly.
