import React from 'react';

class CurrencyConverter extends React.Component {
    constructor() {
        super();
        this.state = {
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount: 0
        }
    }

    handleAmountIncrease = () => {
        this.setState(prevState => {
            return {
                amount: prevState.amount + 1
            }
        })
    }

    handleAmountDecrease = () => {
        this.setState(prevState => {
            return {
                amount: prevState.amount - 1
            }
        })
    }

    handleOptionSelect = (e) => {
        this.setState({
            selectedCurrency: e.target.value,
            currencyChosen: e.target.value === 'Select Currency' ? false : true
        });
    }

    render() {
        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]

        return (
            <div>
                <select onChange={this.handleOptionSelect}>
                    <option value='Select Currency'>Select Currency</option>
                    {currencyData.map((e, i) => {
                        return (
                            <option value={i} key={e.id}>{e.name}</option>
                        )
                    })}
                </select>
                <button onClick={this.handleAmountIncrease}>+</button>
                <button onClick={this.handleAmountDecrease}>-</button>
                {this.state.currencyChosen?this.props.render(
                    currencyData[this.state.currencyChosen? this.state.selectedCurrency : 0],
                    this.state.amount
                ):'Please Select Currency'}
            </div>
        )
    }
}

export default CurrencyConverter;