import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ContributionGraph from './components/ContributionGraph/ContributionGraph';
import { getListContributions } from './commons/get-contributions';

function App() {
  const [contributionData, setContributionData] = useState<{ date: string; score: number; }[]>([]);
  useEffect(() => {
    loadContributionDataAsync();
  }, [])

  return (
    <ContributionGraph data={contributionData} />
  );

  async function loadContributionDataAsync() {
    const data = await getListContributions();

    if (data) {
      setContributionData(data.convertedData);
    }
  }
}

export default App;
