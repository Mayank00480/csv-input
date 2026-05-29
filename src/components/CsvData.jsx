import "./CsvData.css";

function CsvData({ data }) {
  if (!data || data.length === 0) return <p className="csv-empty">No data</p>;

  const columns = Object.keys(data[0]);

  return (
    <div className="csv-card">
      <div className="csv-table-wrap">
        <table className="csv-table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CsvData;