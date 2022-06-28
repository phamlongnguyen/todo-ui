import React from 'react';
import Header from '../components/Home/Header';
import TaskPannel from '../components/Home/TaskPanel';

function Dashboard() {
  return (
    <div className="h-full w-full md:px-6 px-3 py-4 flex flex-col">
      <Header />
      <TaskPannel />
    </div>
  );
}

export default Dashboard;
