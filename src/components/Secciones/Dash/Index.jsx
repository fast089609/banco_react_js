import React, { useState } from 'react'
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import { Routes, Route, Link } from "react-router-dom";
import Dash from './content/inicio/Dash';
import Moneys from './content/moneda/Moneys';
import MoneysMovement from './content/moneda/MoneysMovement';

const Index = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [seccionTitle, setSeccionTitle] = useState(false);


  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* sidenav */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* area de contenido, lado derecho */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  header del lado derecho */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} title={seccionTitle}/>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Routes>
              <Route path="/" element={<Dash setSeccionTitle={setSeccionTitle}/>} />
              <Route path="/moneys" element={<Moneys setSeccionTitle={setSeccionTitle}/>} />
              <Route path="/moneys/movement" element={<MoneysMovement setSeccionTitle={setSeccionTitle}/>} />
            </Routes>
          </div>
        </main>
        
      </div>
    </div>
  )
}

export default Index