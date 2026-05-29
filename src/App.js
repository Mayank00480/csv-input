import Papa from 'papaparse';
import { useState,useRef } from 'react';

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
      <input type="file"
        accept=".csv"
        ref={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: "none" }} />

        <button onClick={handleButtonClick}>
        Upload
      </button>

    </div>
  );
}

export default App;
