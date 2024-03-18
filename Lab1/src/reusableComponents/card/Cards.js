// import React from "react";

// const Card =()=> {
//     return(
//         <>
//         </>
//     )
// }

// export default Card;

// OutlinedCard.js

import React from 'react';
import './Cards.css'

function OutlinedCard({ renderContent, cardTitle, index }) {
  return (
    <div className={`card text-center p-5 mb-2 ${index % 2 === 0 ? 'even' : 'odd'}`}>
      {renderContent(cardTitle)}
    </div>
  );
}

export default OutlinedCard;
