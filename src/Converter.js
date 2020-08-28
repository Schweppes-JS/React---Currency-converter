import React from 'react';

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : '',
            'currencyRate' : {}
        }
        this.currency = ['USD', 'GBP', 'CNY', 'JPY'];
        this.getRate();
    }
    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data);
                this.setState({date : data.date});
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }
                console.log(result);
                this.setState({currencyRate : result})
            })
    }
    render() {
        return (
            <div id="converter">
                <div className="container" id="converter-container">
                    <div id="rate">
                        <p className="headline">Exchange rate for<span id="date"> {this.state.date}</span></p>
                        <div id="currency-plates">
                            {Object.keys(this.state.currencyRate).map((keyName, i) => 
                            (
                                <div className="plate" key={keyName}>
                                    <h4>{keyName}</h4>
                                    <p>{this.state.currencyRate[keyName].toFixed(2)}</p>
                                    <p>to 1 EUR</p>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                    <div id="calculator">
                        <p className="headline">Exchange calculator</p>
                        <div id="result">
                            <p>I want</p>
                            <p><input type="radio" defaultValue="0"></input> buy</p>
                            <p><input type="radio" defaultValue="1"></input> sell</p>
                            <input type="number" defaultValue='100'></input>
                            <select>
                                <option defaultValue='USD'>USD</option>
                                <option defaultValue='RUB'>RUB</option>
                                <option defaultValue='EUR'>EUR</option>
                            </select>
                            <p>Result</p>
                            <p className="currency">EUR = </p>
                            <p className="currency">UAH = </p>
                            <p className="currency">RUB = </p>
                            <p className="currency">CNY = </p>
                        </div>
                    </div>
                    <p>
                        We use cookies for many purposes. We use them, for example, to remember your safe search preferences, to make the ads you see more relevant to you, to count how many visitors we receive to a page, to help you sign up for our services, to protect your data, or to remember your ad settings.
                    </p>
                </div>
            </div>
        );
    }
}

export default Converter;