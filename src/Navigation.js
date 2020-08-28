import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation">
                <div className="container" id="navigation-container">
                    <p id="title">Currency Converter</p>
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Exchange offices</a></li>
                            <li><a>Contacts</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navigation;