import { useState } from "react";
import CHEMISTRY_DATA from "./data/chemistry.js";
import BIOLOGY_DATA from "./data/biology.js";
import CS_DATA from "./data/cs.js";
import Game from "./components/Game";

export default function App() {
  const [subject, setSubject] = useState(null);

  const subjects = [
    { name: "Chemistry", data: CHEMISTRY_DATA, emoji: "⚗️" },
    { name: "Biology", data: BIOLOGY_DATA, emoji: "🧬" },
    { name: "Computer Science", data: CS_DATA, emoji: "💻" },
  ];

  if (subject === null) {
    return (
      <div style={selectorStyles.page}>
        <h1 style={selectorStyles.title}>A–Z Revision</h1>
        <p style={selectorStyles.subtitle}>Choose a subject to begin</p>
        <div style={selectorStyles.grid}>
          {subjects.map((s) => (
            <button
              key={s.name}
              style={selectorStyles.card}
              onClick={() => setSubject(s)}>
              <span style={selectorStyles.emoji}>{s.emoji}</span>
              <span style={selectorStyles.label}>{s.name}</span>
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
    />
  );
}

const selectorStyles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f2027 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'DM Sans', sans-serif",
    padding: "2rem",
  },
  title: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "3rem",
    color: "#38bdf8",
    margin: "0 0 0.5rem",
  },
  subtitle: {
    color: "#94a3b8",
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
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
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
    color: "#f1f5f9",
    fontSize: "1rem",
    fontWeight: 500,
  },
};
