import "./CsvData.css";
import { useEffect, useState } from "react";
import CsvFilters from "./CsvFilters";

function CsvData({ data }) {
  
   const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  const columns = Object.keys(data[0]);
    if (!data || data.length === 0) return <p className="csv-empty">No data</p>;

  

  return (
    <div className="csv-card">
      <CsvFilters data={data} onFilteredDataChange={setFilteredData} />

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
            {filteredData.map((row, rowIndex) => (
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