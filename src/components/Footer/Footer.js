import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="container" id="footer-container">
                    <div id="copyright">
                        <h3>2020 &copy; React.</h3>
                        <p>All right  Reserved</p>
                    </div>
                    <div id="maps">
                        <ul>
                            <li>Site map</li>
                            <li>Google map</li>
                        </ul>
                    </div>
                    <div id="options">
                        <ul>
                            <li>Contacts</li>
                            <li>Guarantee</li>
                            <li>About servise</li>
                            <li>Terms of return</li>
                            <li>Google map</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;