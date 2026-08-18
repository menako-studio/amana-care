"use client";

import * as Sentry from "@sentry/nextjs";
import { useState } from "react";

export default function SentryExamplePage() {
  const [hasError, setHasError] = useState(false);

  const triggerClientError = () => {
    try {
      // @ts-expect-error test deliberate error
      myUndefinedFunction();
    } catch (error) {
      Sentry.captureException(error);
      setHasError(true);
      throw error;
    }
  };

  const triggerSentryMessage = () => {
    Sentry.captureMessage("Test Sentry Message from Amana Care Client");
    alert("Test message sent to Sentry!");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Sentry Integration Test - Amana Care
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Gunakan tombol di bawah untuk menguji apakah log error dan notifikasi berhasil terkirim ke dashboard Sentry <strong>menako-studio / amana-care</strong>.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button
          onClick={triggerClientError}
          style={{
            padding: "12px 20px",
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🚨 Trigger Test Exception (myUndefinedFunction)
        </button>

        <button
          onClick={triggerSentryMessage}
          style={{
            padding: "12px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          📩 Send Test Message
        </button>
      </div>

      {hasError && (
        <div style={{ marginTop: "20px", padding: "12px", background: "#fee2e2", color: "#991b1b", borderRadius: "6px" }}>
          Error sengaja dipicu dan dikirim ke Sentry! Silakan cek dashboard Sentry di tab <strong>Issues</strong>.
        </div>
      )}
    </div>
  );
}
