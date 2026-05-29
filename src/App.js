import Papa from 'papaparse';
import { useState,useRef } from 'react';
import './components/CsvData.css';
import CsvData from './components/CsvData';

function App() {
  const [data , setData] = useState([]);
   const fileInputRef = useRef(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if(!file) return;
    if(file.type !== 'text/csv' || !file.name.endsWith('.csv')) {
      alert('Please upload a valid CSV file.');
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      }
    });

  }

   const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  console.log(data);

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginBottom: '12px',
        }}
      >
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        <button
          onClick={handleButtonClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '10px 12px',
            minWidth: '120px',
            background: 'linear-gradient(135deg, #5d48e6 0%, #7c5dff 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '999px',
            fontFamily: 'Inter, Segoe UI, sans-serif',
            fontSize: '14px',
            fontWeight: 700,
            boxShadow: '0 16px 32px rgba(93, 68, 230, 0.18)',
            cursor: 'pointer',
            transition: 'transform 0.18s ease, boxShadow 0.18s ease, background 0.18s ease',
          }}
        >
          Upload CSV
        </button>
      </div>

      {data.length > 0 && <CsvData data={data} />}

    </div>
  );
}

export default App;
