import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { applianceList } from '../../DeviceLists.js';
import '../../styles/List.css';
import { NavLink } from 'react-router-dom';

export default function ApplianceList () {
  const [applianceLister, setApplianceLister ]= useState(applianceList);

  return (
    <section className="computer-list list-container">
        <div className="list-top">

                  <NavLink to='/'><button>Home</button></NavLink>
                  
        </div>
        <h3>Appliances</h3>
        <div className="list-content">
        
       {applianceLister.map(data => <ItemCardTwo
                key={data.id}
                description={data.description}
                src={data.src}
                model={data.model}
                sku={data.sku}
                alt={data.alt}
                />
            )}
            </div>
    </section>
  )
}