import { useState } from "react";

export const Menu = () => {
  const [activeTab, setActiveTab] = useState('Empleados');
  return (
    <section className="w-full h-16 flex justify-center p-0 bg-primary-content">
    <div role="tablist" className="tabs items-end tabs-lifted self-end">
      <a 
        role="tab" 
        className={`tab ${activeTab === 'Facturas' ? 'tab-active' : ''}`} 
        onClick={() => setActiveTab('Facturas')}
      >
        Facturas
      </a>
      <a 
        role="tab" 
        className={`tab ${activeTab === 'Empleados' ? 'tab-active' : ''}`} 
        onClick={() => setActiveTab('Empleados')}
      >
        Empleados
      </a>
      <a 
        role="tab" 
        className={`tab ${activeTab === 'Ventas' ? 'tab-active' : ''}`} 
        onClick={() => setActiveTab('Ventas')}
      >
        Ventas
      </a>
    </div>
  </section>
  )
}