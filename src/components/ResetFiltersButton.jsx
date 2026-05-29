function ResetFiltersButton({ onReset }) {
  return (
    <button
      type="button"
      onClick={onReset}
      style={{
        padding: "10px 18px",
        borderRadius: "12px",
        border: "1px solid #d9d4e9",
        background: "#ffffff",
        color: "#5f5488",
        fontFamily: "Inter, Segoe UI, sans-serif",
        fontWeight: 700,
        cursor: "pointer",
        transition: "background 0.2s ease, transform 0.2s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "#f4f4f8";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "#ffffff";
      }}
    >
      Reset filters
    </button>
  );
}

export default ResetFiltersButton;
