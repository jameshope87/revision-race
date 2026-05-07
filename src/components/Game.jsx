import { useState, useEffect, useRef } from "react";
const TEACHER_PASSWORD = "default";

function TeacherPanel({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (modalOpen && !unlocked) setTimeout(() => inputRef.current?.focus(), 50);
  }, [modalOpen, unlocked]);

  function handleUnlock() {
    if (pwInput === TEACHER_PASSWORD) {
      setUnlocked(true);
      setPwError(false);
    } else {
      setPwError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setPwError(false), 1500);
    }
  }

  function handleClose() {
    setModalOpen(false);
    setPwInput("");
    setPwError(false);
    setUnlocked(false);
  }

  return (
    <>
      <button style={styles.teacherBtn} onClick={() => setModalOpen(true)}>
        🔑 Teacher Code Reference
      </button>

      {modalOpen && (
        <div
          style={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}>
          <div
            style={{
              ...styles.modal,
              animation: shake ? "shake 0.5s ease" : "fadeIn 0.25s ease",
            }}>
            <div style={styles.modalHeader}>
              <span style={styles.modalTitle}>🔑 Teacher panel</span>
              <button style={styles.closeBtn} onClick={handleClose}>
                ✕
              </button>
            </div>

            {!unlocked ? (
              <div style={styles.modalBody}>
                <p style={styles.pwPrompt}>
                  Enter the teacher password to view all codes:
                </p>
                <div style={styles.inputRow}>
                  <input
                    ref={inputRef}
                    type="password"
                    style={{
                      ...styles.input,
                      borderColor: pwError ? "#E24B4A" : undefined,
                    }}
                    placeholder="Password"
                    value={pwInput}
                    onChange={(e) => setPwInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                  />
                  <button style={styles.btn} onClick={handleUnlock}>
                    Unlock ↵
                  </button>
                </div>
                {pwError && (
                  <p style={styles.errorMsg}>Incorrect password — try again.</p>
                )}
                <p style={styles.pwHint}>
                  Contact James if you need the password or have any issues!
                </p>
              </div>
            ) : (
              <div style={styles.modalBody}>
                <div style={styles.codeGrid}>
                  {data.map((d) => (
                    <div key={d.letter} style={styles.codeRow}>
                      <span style={styles.codeRowLetter}>
                        {d.letter} — {d.keywords[0]}
                      </span>
                      <span style={styles.codeRowCode}>
                        {generateCode(d.letter)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function generateCode(letter) {
  const seed = letter.charCodeAt(0) * 137 + 42;
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  let s = seed;
  for (let i = 0; i < 5; i++) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    code += chars[s % chars.length];
  }
  return code;
}

const STAGES = {
  GUESS: "guess",
  QUESTIONS: "questions",
  CODE: "code",
  COMPLETE: "complete",
};

export default function Game({ data, subjectLabel, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stage, setStage] = useState(STAGES.GUESS);
  const [guessInput, setGuessInput] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [guessError, setGuessError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [shake, setShake] = useState(false);
  const [celebrateVisible, setCelebrateVisible] = useState(false);
  const [completedLetters, setCompletedLetters] = useState([]);
  const [hintVisible, setHintVisible] = useState(false);
  const guessRef = useRef(null);
  const codeRef = useRef(null);

  const current = data[currentIndex];
  const expectedCode = generateCode(current.letter);

  useEffect(() => {
    if (stage === STAGES.GUESS) guessRef.current?.focus();
    if (stage === STAGES.CODE) codeRef.current?.focus();
  }, [stage, currentIndex]);

  function triggerShake() {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }

  function handleGuess() {
    const val = guessInput.trim().toLowerCase();
    if (
      current.keywords.some(
        (k) => k.toLowerCase().includes(val) || val.includes(k.toLowerCase()),
      )
    ) {
      setGuessError(false);
      setCelebrateVisible(true);
      setTimeout(() => {
        setCelebrateVisible(false);
        setStage(STAGES.QUESTIONS);
      }, 900);
    } else {
      setGuessError(true);
      triggerShake();
      setTimeout(() => setGuessError(false), 1500);
    }
  }

  function handleCode() {
    if (codeInput.trim().toUpperCase() === expectedCode) {
      setCodeError(false);
      const done = [...completedLetters, current.letter];
      setCompletedLetters(done);
      if (currentIndex + 1 >= data.length) {
        setStage(STAGES.COMPLETE);
      } else {
        setCurrentIndex(currentIndex + 1);
        setStage(STAGES.GUESS);
        setGuessInput("");
        setCodeInput("");
        setHintVisible(false);
      }
    } else {
      setCodeError(true);
      triggerShake();
      setTimeout(() => setCodeError(false), 1500);
    }
  }

  function handleKeyDown(e, action) {
    if (e.key === "Enter") action();
  }

  const progress = (completedLetters.length / data.length) * 100;

  if (stage === STAGES.COMPLETE) {
    return (
      <div style={styles.page}>
        <div style={styles.completeCard}>
          <div style={styles.completeEmoji}>🏆</div>
          <h1 style={styles.completeTitle}>Brilliant work!</h1>
          <p style={styles.completeSubtitle}>
            You've completed the entire A–Z {subjectLabel} Revision.
          </p>
          <div style={styles.completedGrid}>
            {data.map((d) => (
              <div key={d.letter} style={styles.completedChip}>
                {d.letter}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <button style={styles.backBtn} onClick={onBack}>
            ← Back
          </button>
          <span style={styles.logo}>A–Z</span>
          <span style={styles.logoSub}>{subjectLabel}</span>
        </div>
        <div style={styles.progressArea}>
          <span style={styles.progressLabel}>
            {completedLetters.length} / 26
          </span>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>
        </div>
      </header>

      <main style={styles.main}>
        <div
          style={{
            ...styles.card,
            animation: shake ? "shake 0.5s ease" : "none",
          }}>
          {/* Letter badge */}
          <div style={styles.letterBadge}>{current.letter}</div>

          {/* Image / emoji display */}
          <div style={styles.imageBox}>
            <img
              src={current.image}
              alt={current.keywords[0]}
              style={styles.image}
            />
            {stage === STAGES.GUESS && (
              <p style={styles.imageHint}>
                What {subjectLabel} keyword does this represent?
              </p>
            )}
          </div>

          {/* STAGE: GUESS */}
          {stage === STAGES.GUESS && (
            <div style={styles.section}>
              <div style={styles.inputRow}>
                <input
                  ref={guessRef}
                  style={{
                    ...styles.input,
                    borderColor: guessError ? "#E24B4A" : undefined,
                  }}
                  placeholder="Type your answer…"
                  value={guessInput}
                  onChange={(e) => setGuessInput(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, handleGuess)}
                />
                <button style={styles.btn} onClick={handleGuess}>
                  Check ↵
                </button>
              </div>
              {guessError && (
                <p style={styles.errorMsg}>Not quite — try again!</p>
              )}
              {celebrateVisible && <p style={styles.successMsg}>✓ Correct!</p>}
              <div style={styles.hintRow}>
                <button
                  style={styles.hintBtn}
                  onClick={() => setHintVisible((v) => !v)}>
                  {hintVisible ? "🙈 Hide hint" : "💡 Show hint"}
                </button>
                {hintVisible && <p style={styles.hintText}>{current.hint}</p>}
              </div>
            </div>
          )}

          {/* STAGE: QUESTIONS */}
          {stage === STAGES.QUESTIONS && (
            <div style={styles.section}>
              <div style={styles.correctBanner}>
                <span style={styles.correctKeyword}>{current.keywords[0]}</span>
                <span style={styles.correctTick}>✓</span>
              </div>
              <p style={styles.questionIntro}>
                Answer these questions on your mini whiteboard, then show your
                teacher:
              </p>
              <ol style={styles.questionList}>
                {current.questions.map((q, i) => (
                  <li key={i} style={styles.questionItem}>
                    {q}
                  </li>
                ))}
              </ol>
              <button
                style={{ ...styles.btn, marginTop: "1.25rem" }}
                onClick={() => setStage(STAGES.CODE)}>
                I've answered — enter teacher code →
              </button>
            </div>
          )}

          {/* STAGE: CODE */}
          {stage === STAGES.CODE && (
            <div style={styles.section}>
              <p style={styles.codePrompt}>
                Enter the code your teacher gives you to unlock the next letter:
              </p>
              <div style={styles.inputRow}>
                <input
                  ref={codeRef}
                  style={{
                    ...styles.input,
                    ...styles.codeInput,
                    borderColor: codeError ? "#E24B4A" : undefined,
                    letterSpacing: "0.25em",
                  }}
                  placeholder="XXXXX"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
                  onKeyDown={(e) => handleKeyDown(e, handleCode)}
                  maxLength={5}
                />
                <button style={styles.btn} onClick={handleCode}>
                  Unlock ↵
                </button>
              </div>
              {codeError && (
                <p style={styles.errorMsg}>
                  Incorrect code — check with your teacher.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Alphabet tracker */}
        <div style={styles.tracker}>
          {data.map((d, i) => (
            <div
              key={d.letter}
              style={{
                ...styles.trackerChip,
                ...(completedLetters.includes(d.letter)
                  ? styles.trackerDone
                  : {}),
                ...(i === currentIndex ? styles.trackerCurrent : {}),
              }}>
              {d.letter}
            </div>
          ))}
        </div>

        {/* Teacher panel */}
        <TeacherPanel data={data} />
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f2027 100%)",
    fontFamily: "'DM Sans', sans-serif",
    color: "#f1f5f9",
    padding: "0 0 3rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.25rem 2rem",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(8px)",
  },
  headerLeft: { display: "flex", alignItems: "baseline", gap: "0.5rem" },
  logo: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.6rem",
    color: "#38bdf8",
    letterSpacing: "0.05em",
  },
  logoSub: { fontSize: "0.85rem", color: "#94a3b8", fontWeight: 400 },
  progressArea: { display: "flex", alignItems: "center", gap: "0.75rem" },
  progressLabel: {
    fontSize: "0.8rem",
    color: "#94a3b8",
    minWidth: "3.5rem",
    textAlign: "right",
  },
  progressBar: {
    width: "140px",
    height: "6px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "99px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    borderRadius: "99px",
    transition: "width 0.6s ease",
  },
  main: {
    maxWidth: "640px",
    margin: "0 auto",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    animation: "fadeIn 0.4s ease",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    overflow: "hidden",
    backdropFilter: "blur(16px)",
  },
  letterBadge: {
    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
    color: "#fff",
    fontFamily: "'DM Serif Display', serif",
    fontSize: "4rem",
    textAlign: "center",
    padding: "1.5rem 1rem",
    letterSpacing: "0.05em",
    lineHeight: 1,
  },
  imageBox: {
    padding: "2rem 1.5rem 1rem",
    textAlign: "center",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },
  imageEmoji: {
    fontSize: "4.5rem",
    display: "block",
    marginBottom: "0.75rem",
    lineHeight: 1,
  },
  image: {
    width: "180px",
    height: "180px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 0.75rem",
  },
  imageHint: { fontSize: "0.9rem", color: "#94a3b8", margin: 0 },
  hintRow: {
    marginTop: "0.9rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  hintBtn: {
    background: "rgba(251,191,36,0.1)",
    border: "1px solid rgba(251,191,36,0.3)",
    borderRadius: "8px",
    color: "#fbbf24",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 500,
    padding: "0.4rem 0.85rem",
    cursor: "pointer",
  },
  hintText: {
    fontSize: "0.9rem",
    color: "#fbbf24",
    background: "rgba(251,191,36,0.08)",
    border: "1px solid rgba(251,191,36,0.2)",
    borderRadius: "8px",
    padding: "0.6rem 0.85rem",
    margin: 0,
    lineHeight: 1.5,
    fontStyle: "italic",
  },
  section: { padding: "1.5rem" },
  inputRow: { display: "flex", gap: "0.5rem", justifyContent: "center" },
  input: {
    flex: 1,
    background: "rgba(255,255,255,0.07)",
    border: "1.5px solid rgba(255,255,255,0.15)",
    borderRadius: "10px",
    color: "#f1f5f9",
    fontSize: "1rem",
    padding: "0.6rem 0.9rem",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.2s",
  },
  codeInput: {
    textTransform: "uppercase",
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontSize: "1.1rem",
    textAlign: "center",
    maxWidth: "140px",
  },
  btn: {
    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 600,
    padding: "0.6rem 1.1rem",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "opacity 0.15s, transform 0.1s",
  },
  errorMsg: {
    color: "#f87171",
    fontSize: "0.85rem",
    margin: "0.5rem 0 0",
    fontWeight: 500,
  },
  successMsg: {
    color: "#4ade80",
    fontSize: "1rem",
    margin: "0.5rem 0 0",
    fontWeight: 600,
  },
  correctBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(56,189,248,0.1)",
    border: "1px solid rgba(56,189,248,0.25)",
    borderRadius: "10px",
    padding: "0.75rem 1rem",
    marginBottom: "1rem",
  },
  correctKeyword: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.4rem",
    color: "#38bdf8",
    letterSpacing: "0.02em",
  },
  correctTick: { fontSize: "1.2rem", color: "#4ade80" },
  questionIntro: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    margin: "0 0 0.75rem",
  },
  questionList: {
    margin: 0,
    paddingLeft: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  questionItem: { fontSize: "0.95rem", color: "#e2e8f0", lineHeight: 1.55 },
  codePrompt: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    margin: "0 0 0.75rem",
    textAlign: "center",
  },
  tracker: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    justifyContent: "center",
  },
  trackerChip: {
    width: "34px",
    height: "34px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
    fontWeight: 600,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#64748b",
    transition: "all 0.3s ease",
  },
  trackerDone: {
    background: "rgba(56,189,248,0.15)",
    border: "1px solid rgba(56,189,248,0.4)",
    color: "#38bdf8",
  },
  trackerCurrent: {
    background:
      "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(129,140,248,0.25))",
    border: "1.5px solid #818cf8",
    color: "#c7d2fe",
  },
  teacherBtn: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "#94a3b8",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 500,
    padding: "0.75rem 1.25rem",
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
    transition: "background 0.15s",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    padding: "1rem",
  },
  modal: {
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "520px",
    maxHeight: "80vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 1.25rem",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    flexShrink: 0,
  },
  modalTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#f1f5f9",
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "#64748b",
    fontSize: "1rem",
    cursor: "pointer",
    padding: "2px 6px",
    borderRadius: "6px",
    lineHeight: 1,
  },
  modalBody: {
    padding: "1.25rem",
    overflowY: "auto",
    flex: 1,
  },
  pwPrompt: { fontSize: "0.9rem", color: "#94a3b8", margin: "0 0 0.75rem" },
  pwHint: { fontSize: "0.78rem", color: "#475569", margin: "0.75rem 0 0" },
  code: {
    background: "rgba(56,189,248,0.1)",
    color: "#38bdf8",
    padding: "1px 6px",
    borderRadius: "4px",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.82rem",
  },
  codeGrid: {
    padding: "0.75rem 1.25rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  codeRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "4px 0",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    fontSize: "0.82rem",
  },
  codeRowLetter: { color: "#94a3b8" },
  codeRowCode: {
    fontFamily: "'Courier New', monospace",
    color: "#38bdf8",
    fontWeight: 600,
    letterSpacing: "0.15em",
  },
  completeCard: {
    maxWidth: "480px",
    margin: "4rem auto",
    textAlign: "center",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    padding: "3rem 2rem",
  },
  completeEmoji: { fontSize: "4rem", marginBottom: "1rem" },
  completeTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "2rem",
    margin: "0 0 0.5rem",
    color: "#38bdf8",
  },
  completeSubtitle: { color: "#94a3b8", margin: "0 0 2rem" },
  completedGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    justifyContent: "center",
  },
  completedChip: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "rgba(56,189,248,0.15)",
    border: "1px solid rgba(56,189,248,0.4)",
    color: "#38bdf8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    fontWeight: 600,
  },
  backBtn: {
    background: "none",
    border: "none",
    color: "#94a3b8",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    cursor: "pointer",
    padding: "0 0.5rem 0 0",
  },
};
