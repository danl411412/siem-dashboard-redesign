# SIEM Dashboard (Splunk-Inspired, Material UI, Vite)

This project is a modern, responsive Security Information and Event Management (SIEM) dashboard inspired by Splunk, built with React, TypeScript, Vite, and Material UI.

## Features
- **KPI Tiles:** Quick stats for events, alerts, hosts, and users
- **Event Timeline:** Chronological feed of recent security events
- **Visualizations:** Bar chart, pie chart, and geo map for event/alert/attack data
- **Alert Feed:** Table of current alerts with severity, time, source, and status
- **Asset/Host/User Panel:** List of monitored assets, hosts, and users with risk scores
- **Search/Filter Panel:** Search and filter controls for events and alerts
- **Collapsible Sidebar:** Responsive navigation that can be hidden or shown
- **Fully Responsive:** Works on desktop and mobile, with cards rearranging for best fit

## Getting Started

### 1. **Install Node.js (v22.x recommended)**
This project requires Node.js v22 or higher. If you use [nvm](https://github.com/nvm-sh/nvm):
```bash
nvm install 22
nvm use 22
```

### 2. **Install Dependencies**
Navigate to the project directory:
```bash
cd "/Users/deeble/Desktop/Pursuit Projects/week6_UIUX"
```
Then install dependencies:
```bash
npm install
```

### 3. **Run the Development Server**
From the same directory, start the Vite dev server:
```bash
npm run dev
```

### 4. **View the Dashboard**
Open your browser and go to:
```
http://localhost:5173
```

## Project Structure
- `src/App.tsx` — Main dashboard layout and routing
- `src/components/` — All dashboard widgets and panels (KPI Tiles, Timeline, Visualizations, etc.)
- `public/` — Static assets

## Customization
- All UI is built with [Material UI](https://mui.com/)
- Easily add, remove, or rearrange dashboard widgets in `src/App.tsx`
- Sidebar is collapsible and responsive

## Troubleshooting
- Make sure you are in the correct directory: `/Users/deeble/Desktop/Pursuit Projects/week6_UIUX`
- Use Node.js v22 or higher for best compatibility
- If you see errors, try:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm run dev
  ```

---

**Enjoy your modern SIEM dashboard!** 