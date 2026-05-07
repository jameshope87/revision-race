import { useState } from "react";
import CHEMISTRY_DATA from "./data/chemistry.js";
import BIOLOGY_DATA from "./data/biology.js";
import CS_DATA from "./data/cs.js";
import PHYSICS_DATA from "./data/physics.js";
import Game from "./components/Game";
import { ThemeProvider, useTheme } from "./ThemeContext";

function makeSelectorStyles(theme) {
  return {
    page: {
      position: "relative",
      minHeight: "100vh",
      background: theme.pageBg,
      color: theme.text,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
      padding: "2rem",
    },
    themeToggle: {
      position: "absolute",
      top: "1.25rem",
      right: "1.5rem",
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
    title: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: "3rem",
      color: theme.accent,
      margin: "0 0 0.5rem",
    },
    subtitle: {
      color: theme.textMuted,
      fontSize: "1rem",
      margin: "0 0 2.5rem",
    },
    grid: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    card: {
      background: theme.surface,
      border: `1px solid ${theme.surfaceBorder}`,
      borderRadius: "16px",
      padding: "2rem 2.5rem",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.75rem",
      transition: "background 0.2s",
      fontFamily: "'DM Sans', sans-serif",
    },
    emoji: { fontSize: "3rem" },
    label: {
      color: theme.text,
      fontSize: "1rem",
      fontWeight: 500,
    },
  };
}

function AppContent() {
  const [subject, setSubject] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const subjects = [
    { name: "Chemistry", data: CHEMISTRY_DATA, emoji: "⚗️" },
    { name: "Biology", data: BIOLOGY_DATA, emoji: "🧬" },
    { name: "Computer Science", data: CS_DATA, emoji: "💻" },
    { name: "Physics", data: PHYSICS_DATA, emoji: "⚛️" },
  ];

  if (subject === null) {
    const s = makeSelectorStyles(theme);
    return (
      <div style={s.page}>
        <button style={s.themeToggle} onClick={toggleTheme} title="Toggle theme">
          {theme.id === "dark" ? "☀️" : "🌙"}
        </button>
        <h1 style={s.title}>A–Z Revision</h1>
        <p style={s.subtitle}>Choose a subject to begin</p>
        <div style={s.grid}>
          {subjects.map((sub) => (
            <button
              key={sub.name}
              style={s.card}
              onClick={() => setSubject(sub)}>
              <span style={s.emoji}>{sub.emoji}</span>
              <span style={s.label}>{sub.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <Game
      data={subject.data}
      subjectLabel={subject.name}
      onBack={() => setSubject(null)}
      theme={theme}
      onToggleTheme={toggleTheme}
    />
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
