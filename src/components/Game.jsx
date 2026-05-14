import { useState, useEffect, useRef } from "react";
const TEACHER_PASSWORD = "default";

function TeacherPanel({ data, theme }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);
  const styles = makeStyles(theme);

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

export default function Game({
  data,
  subjectLabel,
  onBack,
  theme,
  onToggleTheme,
}) {
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
  const styles = makeStyles(theme);

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
    if (!val) {
      setGuessError(true);
      triggerShake();
      setTimeout(() => setGuessError(false), 1500);
      return;
    } else if (
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
    const entered = codeInput.trim().toUpperCase();
    const matchIndex = data.findIndex(
      (d) => generateCode(d.letter) === entered,
    );
    if (matchIndex !== -1) {
      setCodeError(false);
      const done = [...completedLetters, current.letter];
      setCompletedLetters(done);
      if (done.length >= data.length) {
        setStage(STAGES.COMPLETE);
      } else {
        setCurrentIndex(matchIndex);
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
          <button
            style={styles.themeToggle}
            onClick={onToggleTheme}
            title="Toggle theme">
            {theme.id === "dark" ? "☀️" : "🌙"}
          </button>
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
            {current.image ? (
              <img
                src={current.image}
                alt={current.keywords[0]}
                style={styles.image}
              />
            ) : (
              <div style={styles.imagePlaceholder}>{current.letter}</div>
            )}
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
        <TeacherPanel data={data} theme={theme} />
      </main>
    </div>
  );
}

function makeStyles(t) {
  return {
    page: {
      minHeight: "100vh",
      background: t.pageBg,
      fontFamily: "'DM Sans', sans-serif",
      color: t.text,
      padding: "0 0 3rem",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.25rem 2rem",
      borderBottom: `1px solid ${t.headerBorder}`,
      background: t.headerBg,
      backdropFilter: "blur(8px)",
    },
    headerLeft: { display: "flex", alignItems: "baseline", gap: "0.5rem" },
    logo: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: "1.6rem",
      color: t.accent,
      letterSpacing: "0.05em",
    },
    logoSub: { fontSize: "0.85rem", color: t.textMuted, fontWeight: 400 },
    progressArea: { display: "flex", alignItems: "center", gap: "0.75rem" },
    progressLabel: {
      fontSize: "0.8rem",
      color: t.textMuted,
      minWidth: "3.5rem",
      textAlign: "right",
    },
    progressBar: {
      width: "140px",
      height: "6px",
      background: "rgba(128,128,128,0.2)",
      borderRadius: "99px",
      overflow: "hidden",
    },
    progressFill: {
      height: "100%",
      background: "linear-gradient(90deg, #38bdf8, #818cf8)",
      borderRadius: "99px",
      transition: "width 0.6s ease",
    },
    themeToggle: {
      background: "none",
      border: "none",
      fontSize: "1.3rem",
      cursor: "pointer",
      padding: "0 0.25rem",
      marginLeft: "0.5rem",
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
      background: t.surface,
      border: `1px solid ${t.surfaceBorder}`,
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
      borderBottom: `1px solid ${t.imageBoxBorder}`,
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
    imagePlaceholder: {
      width: "180px",
      height: "180px",
      borderRadius: "16px",
      background: t.placeholderBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "5rem",
      fontFamily: "'DM Serif Display', serif",
      color: t.accent,
      margin: "0 auto 0.75rem",
      border: `1px solid ${t.surfaceBorder}`,
    },
    imageHint: { fontSize: "0.9rem", color: t.textMuted, margin: 0 },
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
      background: t.inputBg,
      border: `1.5px solid ${t.inputBorder}`,
      borderRadius: "10px",
      color: t.inputText,
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
      background:
        t.id === "dark" ? "rgba(56,189,248,0.1)" : "rgba(2,132,199,0.1)",
      border:
        t.id === "dark"
          ? "1px solid rgba(56,189,248,0.25)"
          : "1px solid rgba(2,132,199,0.25)",
      borderRadius: "10px",
      padding: "0.75rem 1rem",
      marginBottom: "1rem",
    },
    correctKeyword: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: "1.4rem",
      color: t.accent,
      letterSpacing: "0.02em",
    },
    correctTick: { fontSize: "1.2rem", color: "#4ade80" },
    questionIntro: {
      fontSize: "0.9rem",
      color: t.textMuted,
      margin: "0 0 0.75rem",
    },
    questionList: {
      margin: 0,
      paddingLeft: "1.25rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.6rem",
    },
    questionItem: {
      fontSize: "0.95rem",
      color: t.questionItemColor,
      lineHeight: 1.55,
    },
    codePrompt: {
      fontSize: "0.9rem",
      color: t.textMuted,
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
      background: t.trackerChipBg,
      border: `1px solid ${t.trackerChipBorder}`,
      color: t.textDim,
      transition: "all 0.3s ease",
    },
    trackerDone: {
      background: t.completedChipBg,
      border: `1px solid ${t.completedChipBorder}`,
      color: t.accent,
    },
    trackerCurrent: {
      background:
        t.id === "dark"
          ? "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(129,140,248,0.25))"
          : "linear-gradient(135deg, rgba(2,132,199,0.2), rgba(99,102,241,0.2))",
      border: `1.5px solid ${t.accentSecondary}`,
      color: t.id === "dark" ? "#c7d2fe" : t.accentSecondary,
    },
    teacherBtn: {
      background: t.teacherBtnBg,
      border: `1px solid ${t.teacherBtnBorder}`,
      borderRadius: "12px",
      color: t.textMuted,
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
      background: t.modalBg,
      border: `1px solid ${t.modalBorder}`,
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
      borderBottom: `1px solid ${t.modalHeaderBorder}`,
      flexShrink: 0,
    },
    modalTitle: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.95rem",
      fontWeight: 600,
      color: t.text,
    },
    closeBtn: {
      background: "none",
      border: "none",
      color: t.textDim,
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
    pwPrompt: { fontSize: "0.9rem", color: t.textMuted, margin: "0 0 0.75rem" },
    pwHint: { fontSize: "0.78rem", color: t.textDim, margin: "0.75rem 0 0" },
    code: {
      background:
        t.id === "dark" ? "rgba(56,189,248,0.1)" : "rgba(2,132,199,0.1)",
      color: t.accent,
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
      borderBottom: `1px solid ${t.codeRowBorder}`,
      fontSize: "0.82rem",
    },
    codeRowLetter: { color: t.textMuted },
    codeRowCode: {
      fontFamily: "'Courier New', monospace",
      color: t.accent,
      fontWeight: 600,
      letterSpacing: "0.15em",
    },
    completeCard: {
      maxWidth: "480px",
      margin: "4rem auto",
      textAlign: "center",
      background: t.surface,
      border: `1px solid ${t.surfaceBorder}`,
      borderRadius: "24px",
      padding: "3rem 2rem",
    },
    completeEmoji: { fontSize: "4rem", marginBottom: "1rem" },
    completeTitle: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: "2rem",
      margin: "0 0 0.5rem",
      color: t.accent,
    },
    completeSubtitle: { color: t.textMuted, margin: "0 0 2rem" },
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
      background: t.completedChipBg,
      border: `1px solid ${t.completedChipBorder}`,
      color: t.accent,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.85rem",
      fontWeight: 600,
    },
    backBtn: {
      background: "none",
      border: "none",
      color: t.textMuted,
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.85rem",
      cursor: "pointer",
      padding: "0 0.5rem 0 0",
    },
  };
}
