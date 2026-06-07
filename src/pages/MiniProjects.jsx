import { useState, useRef } from "react";

// ─── Palette & shared styles ──────────────────────────────────────────────────
const COLORS = {
  bg: "#0b0f1a",
  surface: "#111827",
  border: "#1e2a3a",
  accent1: "#38bdf8",  // sky
  accent2: "#a78bfa",  // violet
  accent3: "#34d399",  // emerald
  accent4: "#fb923c",  // orange
  text: "#e2e8f0",
  muted: "#64748b",
};

const badge = (color, label) => (
  <span style={{
    background: color + "22", color, border: `1px solid ${color}44`,
    borderRadius: 6, padding: "2px 10px", fontSize: 11, fontWeight: 700,
    letterSpacing: 1, textTransform: "uppercase",
  }}>{label}</span>
);

const Divider = () => (
  <div style={{ height: 1, background: COLORS.border, margin: "28px 0" }} />
);

// ─── PROJECT 1: Smart Calculator ─────────────────────────────────────────────
// Concepts: variables, operators, Number conversion, conditions, functions
function SmartCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("+");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const ops = ["+", "-", "*", "/", "%", "**"];

  function calculate() {
    setError("");
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB) || a === "" || b === "") {
      setError("⚠ Enter valid numbers — form inputs arrive as strings, so Number() conversion matters!");
      return;
    }
    if (op === "/" && numB === 0) {
      setError("⚠ Division by zero → Infinity (try it: 1/0 in JS!)");
      setResult(Infinity);
      return;
    }

    let res;
    if (op === "+") res = numA + numB;
    else if (op === "-") res = numA - numB;
    else if (op === "*") res = numA * numB;
    else if (op === "/") res = numA / numB;
    else if (op === "%") res = numA % numB;
    else if (op === "**") res = numA ** numB;

    const formatted = Number.isInteger(res) ? res : parseFloat(res.toFixed(6));
    setResult(formatted);
    setHistory(h => [`${numA} ${op} ${numB} = ${formatted}`, ...h].slice(0, 5));
  }

  const inp = {
    background: "#0d1520", border: `1px solid ${COLORS.border}`,
    borderRadius: 8, padding: "10px 14px", color: COLORS.text,
    fontSize: 16, width: "100%", outline: "none", boxSizing: "border-box",
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        {badge(COLORS.accent1, "let / const")}
        {badge(COLORS.accent2, "Number()")}
        {badge(COLORS.accent3, "Arithmetic ops")}
        {badge(COLORS.accent4, "conditions")}
        {badge(COLORS.accent1, "functions")}
      </div>
      <p style={{ color: COLORS.muted, fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>
        Form values are always strings. This calculator uses <code style={{color: COLORS.accent1}}>Number()</code> conversion,
        arithmetic operators, and <code style={{color: COLORS.accent1}}>conditions</code> to handle edge cases.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, alignItems: "center" }}>
        <input style={inp} placeholder="First number" value={a} onChange={e => setA(e.target.value)} type="number" />
        <select value={op} onChange={e => setOp(e.target.value)} style={{
          ...inp, width: "auto", padding: "10px 12px", cursor: "pointer",
          color: COLORS.accent1, fontWeight: 700, fontSize: 18,
        }}>
          {ops.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <input style={inp} placeholder="Second number" value={b} onChange={e => setB(e.target.value)} type="number" />
      </div>

      <button onClick={calculate} style={{
        marginTop: 14, width: "100%", padding: "12px",
        background: `linear-gradient(135deg, ${COLORS.accent1}33, ${COLORS.accent2}33)`,
        border: `1px solid ${COLORS.accent1}55`, borderRadius: 10,
        color: COLORS.accent1, fontWeight: 700, fontSize: 15, cursor: "pointer",
        letterSpacing: 0.5,
      }}>Calculate</button>

      {error && <div style={{ color: "#f87171", fontSize: 13, marginTop: 12, padding: "10px 14px", background: "#f8717111", borderRadius: 8, border: "1px solid #f8717133" }}>{error}</div>}

      {result !== null && !error && (
        <div style={{
          marginTop: 14, padding: "14px 20px", textAlign: "center",
          background: `${COLORS.accent3}11`, border: `1px solid ${COLORS.accent3}33`,
          borderRadius: 10,
        }}>
          <div style={{ color: COLORS.muted, fontSize: 12, marginBottom: 4 }}>RESULT</div>
          <div style={{ color: COLORS.accent3, fontSize: 32, fontWeight: 900, fontFamily: "monospace" }}>{result}</div>
          {op === "%" && <div style={{ color: COLORS.muted, fontSize: 12, marginTop: 4 }}>remainder after division</div>}
          {op === "**" && <div style={{ color: COLORS.muted, fontSize: 12, marginTop: 4 }}>exponentiation: {a}^{b}</div>}
        </div>
      )}

      {history.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <div style={{ color: COLORS.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>History</div>
          {history.map((h, i) => (
            <div key={i} style={{ fontSize: 13, color: i === 0 ? COLORS.text : COLORS.muted, fontFamily: "monospace", padding: "3px 0" }}>
              {i === 0 ? "▶ " : "  "}{h}
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 16, background: "#0d1520", borderRadius: 8, padding: "12px 16px", fontFamily: "monospace", fontSize: 12, color: "#94a3b8" }}>
        <span style={{ color: COLORS.accent2 }}>// Key concept from Lecture 03 + 04</span>{"\n"}
        const result = Number(inputA) + Number(inputB);{"\n"}
        <span style={{ color: COLORS.accent2 }}>// Without Number(): "10" + "20" = "1020" (string concat!)</span>
      </div>
    </div>
  );
}

// ─── PROJECT 2: Password Strength Checker ─────────────────────────────────────
// Concepts: strings, loops, conditions, logical operators, functions
function PasswordChecker() {
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);

  function analyzePassword(p) {
    const checks = {
      length: p.length >= 8,
      uppercase: false,
      lowercase: false,
      digit: false,
      special: false,
    };
    const specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

    for (let i = 0; i < p.length; i++) {
      const ch = p[i];
      if (ch >= "A" && ch <= "Z") checks.uppercase = true;
      if (ch >= "a" && ch <= "z") checks.lowercase = true;
      if (ch >= "0" && ch <= "9") checks.digit = true;
      if (specialChars.includes(ch)) checks.special = true;
    }

    const score = Object.values(checks).filter(Boolean).length;
    let level, color;
    if (score <= 1) { level = "Very Weak"; color = "#f87171"; }
    else if (score === 2) { level = "Weak"; color = "#fb923c"; }
    else if (score === 3) { level = "Fair"; color = "#fbbf24"; }
    else if (score === 4) { level = "Strong"; color = "#34d399"; }
    else { level = "Very Strong 🔥"; color = "#a78bfa"; }

    return { checks, score, level, color };
  }

  const { checks, score, level, color } = analyzePassword(pwd);
  const pct = (score / 5) * 100;

  const checkList = [
    { key: "length", label: "At least 8 characters", concept: "str.length >= 8" },
    { key: "uppercase", label: "Uppercase letter (A–Z)", concept: "ch >= 'A' && ch <= 'Z'" },
    { key: "lowercase", label: "Lowercase letter (a–z)", concept: "ch >= 'a' && ch <= 'z'" },
    { key: "digit", label: "Contains a digit (0–9)", concept: "ch >= '0' && ch <= '9'" },
    { key: "special", label: "Special character (!@#…)", concept: "specialChars.includes(ch)" },
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        {badge(COLORS.accent2, "strings")}
        {badge(COLORS.accent3, "for loop")}
        {badge(COLORS.accent1, "conditions")}
        {badge(COLORS.accent4, "logical ops")}
        {badge(COLORS.accent2, "functions")}
      </div>
      <p style={{ color: COLORS.muted, fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>
        Loops through each character using <code style={{color:COLORS.accent2}}>str[i]</code>,
        applies <code style={{color:COLORS.accent2}}>comparison operators</code>, and
        uses <code style={{color:COLORS.accent2}}>logical &&</code> to build the strength score.
      </p>

      <div style={{ position: "relative" }}>
        <input
          style={{
            background: "#0d1520", border: `1px solid ${pwd ? color + "66" : COLORS.border}`,
            borderRadius: 10, padding: "12px 48px 12px 16px", color: COLORS.text,
            fontSize: 16, width: "100%", outline: "none", boxSizing: "border-box",
            fontFamily: "monospace", letterSpacing: show ? 0 : 4, transition: "border-color 0.3s",
          }}
          type={show ? "text" : "password"}
          placeholder="Type a password..."
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <button onClick={() => setShow(s => !s)} style={{
          position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
          background: "none", border: "none", color: COLORS.muted, cursor: "pointer", fontSize: 18,
        }}>{show ? "🙈" : "👁"}</button>
      </div>

      {pwd.length > 0 && (
        <>
          <div style={{ marginTop: 14, height: 6, background: COLORS.border, borderRadius: 99 }}>
            <div style={{
              height: "100%", width: `${pct}%`, borderRadius: 99,
              background: color, transition: "width 0.4s, background 0.4s",
            }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            <span style={{ color: COLORS.muted, fontSize: 12 }}>{pwd.length} chars</span>
            <span style={{ color, fontWeight: 700, fontSize: 13 }}>{level}</span>
          </div>

          <div style={{ marginTop: 14, display: "grid", gap: 6 }}>
            {checkList.map(({ key, label, concept }) => (
              <div key={key} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 12px", borderRadius: 8,
                background: checks[key] ? `${COLORS.accent3}0f` : "#0d1520",
                border: `1px solid ${checks[key] ? COLORS.accent3 + "33" : COLORS.border}`,
                transition: "all 0.3s",
              }}>
                <span style={{ fontSize: 16 }}>{checks[key] ? "✅" : "⬜"}</span>
                <span style={{ flex: 1, fontSize: 13, color: checks[key] ? COLORS.text : COLORS.muted }}>{label}</span>
                <code style={{ fontSize: 10, color: COLORS.accent2, opacity: 0.6 }}>{concept}</code>
              </div>
            ))}
          </div>
        </>
      )}

      {!pwd && (
        <div style={{ marginTop: 16, background: "#0d1520", borderRadius: 8, padding: "12px 16px", fontFamily: "monospace", fontSize: 12, color: "#94a3b8" }}>
          <span style={{ color: COLORS.accent2 }}>// Lecture 04 string loop pattern</span>{"\n"}
          {"for (let i = 0; i < pwd.length; i++) {"}{"\n"}
          {"  if (pwd[i] >= 'A' && pwd[i] <= 'Z')"}{"\n"}
          {"    hasUppercase = true;"}{"\n"}
          {"}"}
        </div>
      )}
    </div>
  );
}

// ─── PROJECT 3: OTP Generator & Quiz ──────────────────────────────────────────
// Concepts: Math.random, Math.floor, Number constants, let/const, conditions
function OTPGenerator() {
  const [otp, setOtp] = useState(null);
  const [digits, setDigits] = useState(4);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(null);
  const [attempts, setAttempts] = useState(0);

  function generate() {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    const generated = Math.floor(Math.random() * (max - min + 1) + min);
    setOtp(generated);
    setInput("");
    setStatus(null);
    setAttempts(0);
  }

  function verify() {
    if (!otp) return;
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (Number(input) === otp) {
      setStatus("correct");
    } else if (newAttempts >= 3) {
      setStatus("locked");
    } else {
      setStatus("wrong");
    }
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        {badge(COLORS.accent4, "Math.random")}
        {badge(COLORS.accent1, "Math.floor")}
        {badge(COLORS.accent3, "conditions")}
        {badge(COLORS.accent2, "Number()")}
        {badge(COLORS.accent4, "let / const")}
      </div>
      <p style={{ color: COLORS.muted, fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>
        Uses the <code style={{color:COLORS.accent4}}>Math.floor(Math.random() * (max - min + 1) + min)</code> range
        formula from Lecture 04. Demonstrates conditions, Number conversion, and attempt limiting.
      </p>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
        <span style={{ color: COLORS.muted, fontSize: 13 }}>OTP digits:</span>
        {[4, 6, 8].map(d => (
          <button key={d} onClick={() => { setDigits(d); setOtp(null); setStatus(null); }} style={{
            padding: "6px 16px", borderRadius: 8,
            background: digits === d ? COLORS.accent4 + "33" : "#0d1520",
            border: `1px solid ${digits === d ? COLORS.accent4 : COLORS.border}`,
            color: digits === d ? COLORS.accent4 : COLORS.muted,
            cursor: "pointer", fontWeight: 700, fontSize: 14,
          }}>{d}</button>
        ))}
      </div>

      <button onClick={generate} style={{
        width: "100%", padding: "12px",
        background: `linear-gradient(135deg, ${COLORS.accent4}33, ${COLORS.accent2}33)`,
        border: `1px solid ${COLORS.accent4}55`,
        borderRadius: 10, color: COLORS.accent4,
        fontWeight: 700, fontSize: 15, cursor: "pointer",
      }}>🎲 Generate OTP</button>

      {otp && (
        <>
          <div style={{
            marginTop: 14, padding: "18px", textAlign: "center",
            background: "#0d1520", border: `1px dashed ${COLORS.accent4}55`, borderRadius: 10,
          }}>
            <div style={{ color: COLORS.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>
              Your OTP (normally hidden in real apps)
            </div>
            <div style={{
              fontSize: 36, fontWeight: 900, fontFamily: "monospace",
              letterSpacing: 8, color: COLORS.accent4, marginTop: 8,
            }}>{otp}</div>
            <div style={{ color: COLORS.muted, fontSize: 11, marginTop: 4 }}>
              range: {Math.pow(10, digits-1)} – {Math.pow(10, digits)-1}
            </div>
          </div>

          {status !== "correct" && status !== "locked" && (
            <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
              <input
                style={{
                  flex: 1, background: "#0d1520",
                  border: `1px solid ${status === "wrong" ? "#f87171" : COLORS.border}`,
                  borderRadius: 8, padding: "10px 14px",
                  color: COLORS.text, fontSize: 18, fontFamily: "monospace",
                  letterSpacing: 4, outline: "none",
                }}
                placeholder={"_".repeat(digits)}
                value={input}
                onChange={e => setInput(e.target.value)}
                maxLength={digits}
              />
              <button onClick={verify} style={{
                padding: "10px 20px", background: COLORS.accent1 + "22",
                border: `1px solid ${COLORS.accent1}55`, borderRadius: 8,
                color: COLORS.accent1, fontWeight: 700, cursor: "pointer",
              }}>Verify</button>
            </div>
          )}

          {status === "wrong" && (
            <div style={{ marginTop: 10, color: "#fb923c", fontSize: 13 }}>
              ❌ Wrong! Attempts left: {3 - attempts} — uses <code>if (attempts &gt;= 3)</code> lockout logic
            </div>
          )}
          {status === "correct" && (
            <div style={{ marginTop: 12, padding: 14, background: `${COLORS.accent3}11`, border: `1px solid ${COLORS.accent3}33`, borderRadius: 10, color: COLORS.accent3, fontWeight: 700, textAlign: "center", fontSize: 16 }}>
              ✅ Correct! OTP verified in {attempts} attempt{attempts > 1 ? "s" : ""}
            </div>
          )}
          {status === "locked" && (
            <div style={{ marginTop: 12, padding: 14, background: "#f8717111", border: "1px solid #f8717133", borderRadius: 10, color: "#f87171", textAlign: "center" }}>
              🔒 Locked after 3 wrong attempts — <code>attempts &gt;= 3</code> triggered
            </div>
          )}
        </>
      )}

      <div style={{ marginTop: 16, background: "#0d1520", borderRadius: 8, padding: "12px 16px", fontFamily: "monospace", fontSize: 12, color: "#94a3b8" }}>
        <span style={{ color: COLORS.accent2 }}>// Lecture 04 range formula</span>{"\n"}
        {`const min = Math.pow(10, digits - 1); // ${Math.pow(10, digits-1)}`}{"\n"}
        {`const max = Math.pow(10, digits) - 1; // ${Math.pow(10, digits)-1}`}{"\n"}
        {"Math.floor(Math.random() * (max - min + 1) + min)"}
      </div>
    </div>
  );
}

// ─── PROJECT 4: Type Explorer ──────────────────────────────────────────────────
// Concepts: typeof, primitives, reference types, null bug, NaN
function TypeExplorer() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const presets = [
    { label: '"Hello"', value: '"Hello"' },
    { label: "42", value: "42" },
    { label: "true", value: "true" },
    { label: "null", value: "null" },
    { label: "undefined", value: "undefined" },
    { label: "[]", value: "[]" },
    { label: "{}", value: "{}" },
    { label: "NaN", value: "NaN" },
    { label: "99n", value: "99n" },
    { label: "0.1+0.2", value: "0.1+0.2" },
  ];

  function analyze(raw) {
    setInput(raw);
    try {
      let val;
      if (raw === "undefined") val = undefined;
      else if (raw === "99n") val = 99n;
      else val = eval(raw); // safe for known presets / user input
      
      const t = typeof val;
      let isPrimitive, note, color;

      if (["number","string","boolean","undefined","bigint","symbol"].includes(t)) {
        isPrimitive = true;
        color = COLORS.accent3;
      } else {
        isPrimitive = false;
        color = COLORS.accent2;
      }

      if (val === null) note = '⚠ typeof null === "object" — famous JS bug from 1995!';
      else if (Number.isNaN(val)) note = "⚠ NaN is typeof 'number' — and NaN !== NaN (unique!)";
      else if (val === 0.1 + 0.2) note = `⚠ Floating-point: 0.1 + 0.2 = ${0.1+0.2} (not 0.3!)`;
      else if (Array.isArray(val)) note = "Array is typeof 'object' — arrays are special objects";
      else if (t === "bigint") note = "BigInt: for integers beyond Number.MAX_SAFE_INTEGER";

      setResult({ val: String(val), type: t, isPrimitive, note, color,
        equality: val === val ? "val === val → true (normal)" : "val === val → FALSE (NaN is unique!)" });
    } catch {
      setResult({ val: "Error", type: "parse error", isPrimitive: null, color: "#f87171",
        note: "Could not evaluate — try a JS expression", equality: "" });
    }
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        {badge(COLORS.accent3, "typeof")}
        {badge(COLORS.accent1, "primitives")}
        {badge(COLORS.accent2, "reference types")}
        {badge(COLORS.accent4, "null bug")}
        {badge(COLORS.accent3, "NaN")}
      </div>
      <p style={{ color: COLORS.muted, fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>
        Click any value or type your own. See <code style={{color:COLORS.accent3}}>typeof</code>, primitive vs reference,
        and the famous JS quirks from Lectures 02–03.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
        {presets.map(p => (
          <button key={p.label} onClick={() => analyze(p.value)} style={{
            padding: "5px 12px", borderRadius: 8,
            background: input === p.value ? COLORS.accent1 + "33" : "#0d1520",
            border: `1px solid ${input === p.value ? COLORS.accent1 : COLORS.border}`,
            color: input === p.value ? COLORS.accent1 : COLORS.muted,
            fontFamily: "monospace", fontSize: 13, cursor: "pointer",
          }}>{p.label}</button>
        ))}
      </div>

      <input
        style={{
          background: "#0d1520", border: `1px solid ${COLORS.border}`,
          borderRadius: 8, padding: "10px 14px", color: COLORS.text,
          fontSize: 14, width: "100%", outline: "none", boxSizing: "border-box",
          fontFamily: "monospace",
        }}
        placeholder='Type any JS value: "hello", 42, true, null, []…'
        value={input}
        onChange={e => analyze(e.target.value)}
      />

      {result && (
        <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <div style={{
              flex: 1, minWidth: 120, padding: "14px", background: "#0d1520",
              border: `1px solid ${result.color}44`, borderRadius: 10, textAlign: "center",
            }}>
              <div style={{ color: COLORS.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>value</div>
              <div style={{ color: result.color, fontFamily: "monospace", fontSize: 20, fontWeight: 700, marginTop: 6 }}>{result.val}</div>
            </div>
            <div style={{
              flex: 1, minWidth: 120, padding: "14px", background: "#0d1520",
              border: `1px solid ${result.color}44`, borderRadius: 10, textAlign: "center",
            }}>
              <div style={{ color: COLORS.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>typeof</div>
              <div style={{ color: result.color, fontFamily: "monospace", fontSize: 20, fontWeight: 700, marginTop: 6 }}>"{result.type}"</div>
            </div>
            {result.isPrimitive !== null && (
              <div style={{
                flex: 1, minWidth: 120, padding: "14px", background: "#0d1520",
                border: `1px solid ${result.color}44`, borderRadius: 10, textAlign: "center",
              }}>
                <div style={{ color: COLORS.muted, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>category</div>
                <div style={{ color: result.color, fontSize: 14, fontWeight: 700, marginTop: 8 }}>
                  {result.isPrimitive ? "🧱 Primitive" : "📦 Reference"}
                </div>
              </div>
            )}
          </div>
          {result.note && (
            <div style={{
              padding: "10px 14px", background: `${COLORS.accent4}11`,
              border: `1px solid ${COLORS.accent4}33`, borderRadius: 8,
              color: COLORS.accent4, fontSize: 13,
            }}>{result.note}</div>
          )}
          {result.equality && (
            <div style={{ fontFamily: "monospace", fontSize: 12, color: COLORS.muted, padding: "8px 12px", background: "#0d1520", borderRadius: 8 }}>
              {result.equality}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── MAIN HUB ─────────────────────────────────────────────────────────────────
const projects = [
  {
    id: "calc",
    emoji: "🧮",
    number: "01",
    title: "Smart Calculator",
    subtitle: "Operators + Number conversion + conditions",
    lectures: ["L03", "L04"],
    accent: COLORS.accent1,
    component: SmartCalculator,
  },
  {
    id: "pwd",
    emoji: "🔐",
    number: "02",
    title: "Password Strength",
    subtitle: "Strings + loops + logical operators",
    lectures: ["L04", "L03"],
    accent: COLORS.accent2,
    component: PasswordChecker,
  },
  {
    id: "otp",
    emoji: "🎲",
    number: "03",
    title: "OTP Generator",
    subtitle: "Math.random + conditions + attempt logic",
    lectures: ["L04", "L02"],
    accent: COLORS.accent4,
    component: OTPGenerator,
  },
  {
    id: "type",
    emoji: "🔬",
    number: "04",
    title: "Type Explorer",
    subtitle: "typeof + primitives + reference quirks",
    lectures: ["L02", "L03"],
    accent: COLORS.accent3,
    component: TypeExplorer,
  },
];

export default function MiniProjects() {
  const [active, setActive] = useState("calc");
  const current = projects.find(p => p.id === active);
  const Comp = current.component;

  return (
    <div style={{
      minHeight: "100vh", background: COLORS.bg,
      color: COLORS.text, fontFamily: "'Segoe UI', system-ui, sans-serif",
      padding: "24px 16px",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 22 }}>⚡</span>
            <span style={{ color: COLORS.muted, fontSize: 12, textTransform: "uppercase", letterSpacing: 2, fontWeight: 700 }}>
              ThunderLearn
            </span>
            <span style={{ color: COLORS.border }}>·</span>
            <span style={{ color: COLORS.accent1, fontSize: 12, fontWeight: 700 }}>Lectures 01–04</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, margin: 0, lineHeight: 1.2 }}>
            Mini Final Projects
          </h1>
          <p style={{ color: COLORS.muted, marginTop: 8, fontSize: 14, lineHeight: 1.6, maxWidth: 540 }}>
            4 projects. Every concept you learned — variables, types, operators, loops,
            strings, Math, and functions — applied to something real.
          </p>
        </div>

        {/* Project selector tabs */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
          gap: 10, marginBottom: 24,
        }}>
          {projects.map(p => (
            <button key={p.id} onClick={() => setActive(p.id)} style={{
              padding: "14px 16px", borderRadius: 12, cursor: "pointer", textAlign: "left",
              background: active === p.id ? `${p.accent}18` : COLORS.surface,
              border: `1px solid ${active === p.id ? p.accent + "66" : COLORS.border}`,
              transition: "all 0.2s",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{p.emoji}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: p.accent, fontSize: 10, fontWeight: 900, letterSpacing: 1 }}>PROJECT {p.number}</span>
                    <div style={{ display: "flex", gap: 4 }}>
                      {p.lectures.map(l => (
                        <span key={l} style={{
                          background: p.accent + "22", color: p.accent,
                          borderRadius: 4, padding: "1px 6px", fontSize: 10, fontWeight: 700,
                        }}>{l}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginTop: 2, color: active === p.id ? COLORS.text : "#94a3b8" }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: COLORS.muted, marginTop: 1 }}>{p.subtitle}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active project */}
        <div style={{
          background: COLORS.surface,
          border: `1px solid ${current.accent}44`,
          borderRadius: 16, padding: "24px",
          boxShadow: `0 0 40px ${current.accent}0a`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ fontSize: 28 }}>{current.emoji}</span>
            <div>
              <div style={{ color: current.accent, fontSize: 11, fontWeight: 900, letterSpacing: 1, textTransform: "uppercase" }}>
                Project {current.number} / 04
              </div>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 900 }}>{current.title}</h2>
            </div>
          </div>
          <Comp />
        </div>

        {/* What you learned summary */}
        <div style={{ marginTop: 20, padding: "18px 20px", background: COLORS.surface, borderRadius: 12, border: `1px solid ${COLORS.border}` }}>
          <div style={{ color: COLORS.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Concepts used across all 4 projects
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              ["L01–02","Variables: let, const, var", COLORS.accent1],
              ["L02","Primitive types", COLORS.accent2],
              ["L02","typeof operator", COLORS.accent3],
              ["L02","Objects & reference", COLORS.accent4],
              ["L03","Arithmetic operators", COLORS.accent1],
              ["L03","Number() conversion", COLORS.accent2],
              ["L03","=== strict equality", COLORS.accent3],
              ["L03","Logical && ||", COLORS.accent4],
              ["L04","for loop + str[i]", COLORS.accent1],
              ["L04","if/else conditions", COLORS.accent2],
              ["L04","Math.random/floor", COLORS.accent3],
              ["L04","String methods", COLORS.accent4],
              ["L04","functions + return", COLORS.accent1],
            ].map(([lec, label, color]) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 6,
                background: color + "0f", border: `1px solid ${color}2a`,
                borderRadius: 8, padding: "5px 10px",
              }}>
                <span style={{ color, fontSize: 10, fontWeight: 700 }}>{lec}</span>
                <span style={{ color: COLORS.muted, fontSize: 12 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
