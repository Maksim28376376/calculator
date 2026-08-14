"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Calculator.module.css";

type Operator = "+" | "-" | "×" | "÷";

const ERROR = "Error";
const MAX_DIGITS = 15;

/** Runs a pending operation, guarding against the usual float noise. */
function compute(a: number, b: number, op: Operator): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return b === 0 ? NaN : a / b;
  }
}

/** Turns a computed number back into the raw string the display holds. */
function toRaw(n: number): string {
  if (!isFinite(n)) return ERROR;
  // 0.1 + 0.2 should read as 0.3, not 0.30000000000000004.
  const rounded = parseFloat(n.toPrecision(12));
  const abs = Math.abs(rounded);
  if (abs !== 0 && (abs >= 1e15 || abs < 1e-9)) {
    return rounded.toExponential(6).replace(/\.?0+e/, "e");
  }
  return String(rounded);
}

/** Adds thousands separators for rendering only — state stays raw. */
function formatForDisplay(raw: string): string {
  if (raw === ERROR || raw.includes("e")) return raw;
  const negative = raw.startsWith("-");
  const body = negative ? raw.slice(1) : raw;
  const [intPart, decPart] = body.split(".");
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const joined =
    decPart === undefined ? grouped : `${grouped}.${decPart}`;
  return negative ? `-${joined}` : joined;
}

/** Counts only the digits, so separators and the sign don't eat the budget. */
function digitCount(raw: string): number {
  return raw.replace(/[^0-9]/g, "").length;
}

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [accumulator, setAccumulator] = useState<number | null>(null);
  const [pendingOp, setPendingOp] = useState<Operator | null>(null);
  // True when the next digit should replace the display rather than append.
  const [overwrite, setOverwrite] = useState(true);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const errored = display === ERROR;

  const clearAll = useCallback(() => {
    setDisplay("0");
    setAccumulator(null);
    setPendingOp(null);
    setOverwrite(true);
  }, []);

  const inputDigit = useCallback(
    (d: string) => {
      if (errored) {
        setDisplay(d);
        setOverwrite(false);
        return;
      }
      if (overwrite) {
        setDisplay(d);
        setOverwrite(false);
        return;
      }
      setDisplay((prev) => {
        if (digitCount(prev) >= MAX_DIGITS) return prev;
        return prev === "0" ? d : prev + d;
      });
    },
    [errored, overwrite]
  );

  const inputDot = useCallback(() => {
    if (errored) {
      setDisplay("0.");
      setOverwrite(false);
      return;
    }
    if (overwrite) {
      setDisplay("0.");
      setOverwrite(false);
      return;
    }
    setDisplay((prev) => (prev.includes(".") ? prev : prev + "."));
  }, [errored, overwrite]);

  const backspace = useCallback(() => {
    if (errored) {
      clearAll();
      return;
    }
    if (overwrite) return;
    setDisplay((prev) => {
      const next = prev.slice(0, -1);
      if (next === "" || next === "-") return "0";
      return next;
    });
  }, [errored, overwrite, clearAll]);

  const toggleSign = useCallback(() => {
    if (errored) return;
    setDisplay((prev) =>
      prev === "0" ? prev : prev.startsWith("-") ? prev.slice(1) : "-" + prev
    );
  }, [errored]);

  const percent = useCallback(() => {
    if (errored) return;
    setDisplay((prev) => toRaw(parseFloat(prev) / 100));
    setOverwrite(true);
  }, [errored]);

  const chooseOp = useCallback(
    (op: Operator) => {
      if (errored) return;
      const current = parseFloat(display);
      // Chaining (2 + 3 + …) folds the pending operation before queuing the next.
      if (pendingOp !== null && accumulator !== null && !overwrite) {
        const result = compute(accumulator, current, pendingOp);
        const raw = toRaw(result);
        setDisplay(raw);
        setAccumulator(raw === ERROR ? null : result);
        if (raw === ERROR) {
          setPendingOp(null);
          setOverwrite(true);
          return;
        }
      } else {
        setAccumulator(current);
      }
      setPendingOp(op);
      setOverwrite(true);
    },
    [errored, display, pendingOp, accumulator, overwrite]
  );

  const equals = useCallback(() => {
    if (errored || pendingOp === null || accumulator === null) return;
    const result = compute(accumulator, parseFloat(display), pendingOp);
    setDisplay(toRaw(result));
    setAccumulator(null);
    setPendingOp(null);
    setOverwrite(true);
  }, [errored, pendingOp, accumulator, display]);

  /** Briefly lights up a key so typing gives the same feedback as clicking. */
  const flash = useCallback((id: string) => {
    setActiveKey(id);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setActiveKey(null), 110);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;

      if (k >= "0" && k <= "9") {
        inputDigit(k);
        flash(k);
      } else if (k === "." || k === ",") {
        inputDot();
        flash(".");
      } else if (k === "+") {
        chooseOp("+");
        flash("+");
      } else if (k === "-") {
        chooseOp("-");
        flash("-");
      } else if (k === "*" || k === "x" || k === "X") {
        chooseOp("×");
        flash("×");
      } else if (k === "/") {
        e.preventDefault(); // Firefox opens quick-find on "/"
        chooseOp("÷");
        flash("÷");
      } else if (k === "Enter" || k === "=") {
        e.preventDefault();
        equals();
        flash("=");
      } else if (k === "Backspace") {
        backspace();
        flash("⌫");
      } else if (k === "Escape") {
        clearAll();
        flash("AC");
      } else if (k === "%") {
        percent();
        flash("%");
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    inputDigit,
    inputDot,
    chooseOp,
    equals,
    backspace,
    clearAll,
    percent,
    flash,
  ]);

  useEffect(() => {
    return () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    };
  }, []);

  const history =
    accumulator !== null && pendingOp !== null
      ? `${formatForDisplay(toRaw(accumulator))} ${pendingOp}`
      : " ";

  function key(
    id: string,
    onClick: () => void,
    opts: { span?: boolean; variant?: "muted" | "accent"; label?: string } = {}
  ) {
    const className = [
      styles.key,
      opts.variant === "muted" ? styles.muted : "",
      opts.variant === "accent" ? styles.accent : "",
      opts.span ? styles.span : "",
      activeKey === id ? styles.active : "",
      pendingOp !== null && overwrite && id === pendingOp ? styles.armed : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        key={id}
        type="button"
        className={className}
        onClick={() => {
          onClick();
          flash(id);
        }}
        aria-label={opts.label ?? id}
      >
        {id}
      </button>
    );
  }

  return (
    <main className={styles.wrap}>
      <div className={styles.calculator}>
        <div className={styles.screen}>
          <div className={styles.history}>{history}</div>
          <div
            className={styles.display}
            data-long={display.length > 9 || undefined}
            role="status"
            aria-live="polite"
          >
            {formatForDisplay(display)}
          </div>
        </div>

        <div className={styles.keys}>
          {key("AC", clearAll, { variant: "muted", label: "All clear" })}
          {key("±", toggleSign, { variant: "muted", label: "Toggle sign" })}
          {key("%", percent, { variant: "muted", label: "Percent" })}
          {key("÷", () => chooseOp("÷"), {
            variant: "accent",
            label: "Divide",
          })}

          {key("7", () => inputDigit("7"))}
          {key("8", () => inputDigit("8"))}
          {key("9", () => inputDigit("9"))}
          {key("×", () => chooseOp("×"), {
            variant: "accent",
            label: "Multiply",
          })}

          {key("4", () => inputDigit("4"))}
          {key("5", () => inputDigit("5"))}
          {key("6", () => inputDigit("6"))}
          {key("-", () => chooseOp("-"), {
            variant: "accent",
            label: "Subtract",
          })}

          {key("1", () => inputDigit("1"))}
          {key("2", () => inputDigit("2"))}
          {key("3", () => inputDigit("3"))}
          {key("+", () => chooseOp("+"), { variant: "accent", label: "Add" })}

          {key("0", () => inputDigit("0"), { span: true })}
          {key(".", inputDot, { label: "Decimal point" })}
          {key("=", equals, { variant: "accent", label: "Equals" })}
        </div>
      </div>

      <p className={styles.hint}>
        Works with your keyboard too — digits, <kbd>+</kbd> <kbd>-</kbd>{" "}
        <kbd>*</kbd> <kbd>/</kbd>, <kbd>Enter</kbd> to equal,{" "}
        <kbd>Esc</kbd> to clear.
      </p>
    </main>
  );
}
