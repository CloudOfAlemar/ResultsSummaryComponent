"use strict";

const categoryAreas = document.querySelectorAll( ".category-area" );

const fetchData = async () => {
  const data = await fetch( "./data.json" );
  const jsonData = await data.json();
  categoryAreas.forEach( ( area, i ) => {
    area.querySelector( ".category-icon" ).src = jsonData[ i ].icon;
    area.querySelector( ".category-heading" ).textContent = jsonData[ i ].category;
    area.querySelector( ".category-score-display" ).textContent = jsonData[ i ].score;
  } );
}

fetchData();