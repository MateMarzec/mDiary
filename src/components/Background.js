import React from 'react';
import background from '../images/background.png'

// Background Component
const Background = () => (
    <div className="background">
        <img className="background__image" src={background} alt='Background'/>
    </div>
);

export default Background;