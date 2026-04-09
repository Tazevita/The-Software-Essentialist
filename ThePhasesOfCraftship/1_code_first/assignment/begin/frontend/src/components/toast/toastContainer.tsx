import type { Toast } from "./toast";

export function ToastContainer({
  toasts,
  dismiss,
}: {
  toasts: Toast[];
  dismiss: (id: number) => void;
}) {
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          <div className="toast-icon">{t.type === "success" ? "✓" : "✕"}</div>
          <div className="toast-body">
            <p className="toast-title">{t.title}</p>
            <p className="toast-msg">{t.message}</p>
            {t.code && <span className="toast-code">{t.code}</span>}
          </div>
          <button className="toast-close" onClick={() => dismiss(t.id)}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
