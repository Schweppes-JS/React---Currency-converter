import React from 'react';

class Converter extends React.Component {
    render() {
        return (
            <div id="converter">
                <div className="container" id="converter-container">
                    <div id="rate">
                        <p className="headline">Exchange rate for<span id="date">July 20, 2020</span></p>
                        <div id="currency-plates">
                            <div className="plate">
                                <h4>USD</h4>
                                <p>1500 kr</p>
                                <p>1200 kr</p>
                            </div>
                            <div className="plate">
                                <h4>EUR</h4>
                                <p>1500 kr</p>
                                <p>1200 kr</p>
                                </div>
                            <div className="plate">
                                <h4>RUB</h4>
                                <p>1500 kr</p>
                                <p>1200 kr</p>
                                </div>
                        </div>
                    </div>
                    <div id="calculator">
                        <p className="headline">Exchange calculator</p>
                        <div id="result">
                            <p>I want</p>
                            <p><input type="checkbox"></input> buy</p>
                            <p><input type="checkbox"></input> sell</p>
                            <input type="text"></input>
                            <button>USD</button>
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