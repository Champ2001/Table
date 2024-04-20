import React, { useState, useEffect } from 'react';
import './index.css'

import AssetAccordion from '../components/AssetAccordion';

const App = () => {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://canopy-frontend-task.vercel.app/api/holdings");
        const responseData = await response.json();
        
        // Check if responseData has the payload key and it's an array
        if (responseData.payload && Array.isArray(responseData.payload)) {
          const data = responseData.payload;
          
          const groupedData = data.reduce((acc, currentItem) => {
            const assetClass = currentItem.asset_class;
            if (!acc[assetClass]) {
              acc[assetClass] = [];
            }
            acc[assetClass].push(currentItem);
            return acc;
          }, {});
          
          // Now groupedData is an object where keys are asset classes and values are arrays of corresponding data
          // console.log(groupedData);
          
          // Set groupedData to state or do whatever you need to do with it
          setGroupedData(groupedData);
        } else {
          console.error("Invalid response format:", responseData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    

    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(groupedData).map((assetClass, index) => (
        <AssetAccordion key={index} assetClass={assetClass} data={groupedData[assetClass]} />
      ))}
    </div>
  );
};

export default App;
