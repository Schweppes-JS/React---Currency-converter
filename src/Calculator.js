import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result : 0
        }
    }
    static getDerivedStateFromProps(props, state) {
        return { rate : props.rate};
    }
    calcRate = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let countCurrency = elements['count-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        console.log(this.state.rate);
        this.setState({ result : (countCurrency / this.state.rate[typeCurrency]).toFixed(2)});
    }
    render () {
        return (
            <div id="calculator">
                <p className="headline">Exchange calculator</p>
                <div id="result">
                    <p>I want convert</p>
                    <form onSubmit={this.calcRate}>
                        <input type="number" defaultValue='100' name="count-currency"></input>
                        <select name="type-currency">
                            {Object.keys(this.props.rate).map((keyName, i) => 
                                (
                                    <option key={keyName}>{keyName}</option>
                                ) 
                            )}
                        </select>
                        <input type="submit" defaultValue="calc" />
                    </form>
                    <p>Result</p>
                    <p className="currency">EUR = {this.state.result}</p>
                </div>
            </div>
        );
    }
}

export default Calculator;