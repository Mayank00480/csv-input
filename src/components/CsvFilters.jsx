import { useEffect, useMemo, useState } from "react";
import ResetFiltersButton from "./ResetFiltersButton";

function CsvFilters({ data, onFilteredDataChange }) {
  const columns = Object.keys(data[0] || {});
  const firstCol = columns[3];
  const secondCol = columns[4];

  const [filters, setFilters] = useState({ firstValue: "", secondValue: "" });

  const formatLabel = (value) =>
    value
      ? value
          .replace(/_/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      : value;

  useEffect(() => {
    setFilters({ firstValue: "", secondValue: "" });
  }, [firstCol, secondCol]);

  const firstOptions = useMemo(() => {
    if (!firstCol) return [];
    return Array.from(new Set(data.map((row) => row[firstCol] ?? ""))).filter(
      (value) => value !== ""
    );
  }, [data, firstCol]);

  const secondOptions = useMemo(() => {
    if (!secondCol) return [];
    return Array.from(new Set(data.map((row) => row[secondCol] ?? ""))).filter(
      (value) => value !== ""
    );
  }, [data, secondCol]);

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      if (filters.firstValue && row[firstCol] !== filters.firstValue) return false;
      if (filters.secondValue && row[secondCol] !== filters.secondValue) return false;
      return true;
    });
  }, [data, filters, firstCol, secondCol]);

  useEffect(() => {
    onFilteredDataChange(filteredData);
  }, [filteredData, onFilteredDataChange]);

  const handleReset = () => {
    setFilters({ firstValue: "", secondValue: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "1.2rem",
        alignItems: "flex-end",
      }}
    >
      {firstCol && (
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
            fontSize: "13px",
            color: "#5f5488",
            fontWeight: 600,
          }}
        >
          {formatLabel(firstCol)}
          <select
            value={filters.firstValue}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, firstValue: event.target.value }))
            }
            style={{
              minWidth: "180px",
              padding: "10px 12px",
              borderRadius: "12px",
              border: "1px solid #d9d4e9",
              background: "#fff",
              color: "#2b2640",
            }}
          >
            <option value="">All</option>
            {firstOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      )}

      {secondCol && (
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
            fontSize: "13px",
            color: "#5f5488",
            fontWeight: 600,
          }}
        >
          {formatLabel(secondCol)}
          <select
            value={filters.secondValue}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, secondValue: event.target.value }))
            }
            style={{
              minWidth: "180px",
              padding: "10px 12px",
              borderRadius: "12px",
              border: "1px solid #d9d4e9",
              background: "#fff",
              color: "#2b2640",
            }}
          >
            <option value="">All</option>
            {secondOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      )}

      <ResetFiltersButton onReset={handleReset} />
    </div>
  );
}

export default CsvFilters;
