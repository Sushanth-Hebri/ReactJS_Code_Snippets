import React from 'react';
const card =({title,description,image}) =>{
    return(
        <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    );
};

export default card;
