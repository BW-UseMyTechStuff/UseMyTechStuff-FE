import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { tvList } from '../../DeviceLists.js';
import '../../styles/List.css';
import { NavLink } from 'react-router-dom';

export default function TvList () {
  const [tvLister, setTvLister ]= useState(tvList);

  return (
    <section className="tv-list">
    <div className="list-top">
        

              <NavLink to='/'><button>Home</button></NavLink>

    </div>
    <h3>TV & Home Theater</h3>
    <div className="list-content">
        
       {tvLister.map(data => <ItemCardTwo
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