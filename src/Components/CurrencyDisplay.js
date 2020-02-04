import React from 'react';

function CurrencyDisplay(props) {
    return (
        <p>
            US dollar: ${props.amount.toFixed(2)}<br />
            {props.currencyData.name}: {props.currencyData.symbol}{(props.currencyData.rate * props.amount).toFixed(2)}
        </p>
    )
}

export default CurrencyDisplay;