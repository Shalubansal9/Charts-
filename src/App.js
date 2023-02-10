import React, { useState } from 'react';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import {UserData} from './Data'
import './App.css'

function App() {
  const initialData = {
    labels: UserData.map((data)=>data.course),
    datasets: [{
      label: "Users with Adopted Technology",
      data: UserData.map((data)=>data.user),
      backgroundColor: ["#00ffff","#dd74f5","#ff6347","#87ceeb","#fa8072"],
    },],
  };
  const [userData, setUserData] = useState(initialData);
  return (
    <>
    <div className='main'>
      <div className='child' style={{width:500}}>
        <p className='heading'>Line Chart</p>
        <LineChart chartData={userData}/>
      </div>
      <div className='child' style={{width:500}}>
        <p className='heading'>Bar Chart</p>
        <BarChart chartData={userData}/>
      </div>
      <div className='child' style={{width:500}}>
        <p className='heading'>Pie Chart</p>
        <PieChart chartData={userData}/>
      </div>
    </div>
    </>
  );
}

export default App;
