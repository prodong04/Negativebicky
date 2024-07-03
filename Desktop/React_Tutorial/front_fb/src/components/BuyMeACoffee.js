import React from 'react';

function BuyMeACoffeeButton() {
    return (
        <a href="https://www.buymeacoffee.com/2020147033h"
           target="_blank"
           rel="noopener noreferrer"
           style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}>
            <img 
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
                alt="Buy Me A Coffee" 
                style={{ height: '60px', width: '217px' }}
            />
        </a>
    );
}

export default BuyMeACoffeeButton;
