import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import './App.css';
import Dashboard from './pages/Dashboard';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import WaitUpdate from './pages/WaitUpdate';

function App() {
  return (
    <div className="flex w-full ">
      <BrowserRouter>
        <Navbar />
        <div className="w-full overflow-y-auto bg-[#FCFCFC] pl-[70px] lg:pl-[250px]">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<WaitUpdate />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
