import React, { useState } from 'react';
import './Tabs2.css';
import Corgi from './corgi.jpg';

const Tabs = () => {
  const [tabs, setTabs] = useState([
    { 
      id: Math.random(),
      label: 'Description du produit',
      content: (
        <div>
          <p>
            T-Motor revient avec une version actualisée de son ESC 4 en 1, cette fois-ci avec un système de dissipateur de chaleur pour permettre des pointes jusqu'à 75A.
          </p>
        </div>
      )
    },
    { 
      id: Math.random(),
      label: 'Images',
      content: (
        <div>
          <img src={Corgi} alt="ESC 4 en 1" />
        </div>
      )
    },
    { 
      id: Math.random(),
      label: 'Commentaires',
      content: (
        <div>
          <ul>
            <li>Super produit !</li>
            <li>Livraison rapide, belle finition.</li>
            <li>Une marque qui a fait ses preuves.</li>
          </ul>
        </div>
      )
     }
  ]);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Wrapper">
      <ul className="Tabs">
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={["Tab", tab.id === activeTab.id ? "TabActive" : null].join(' ')}
            >
              {tab.label}
            </li>
          );
        })}
      </ul>
      <div className="ActiveTabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;