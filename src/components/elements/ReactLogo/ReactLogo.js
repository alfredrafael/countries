import React from 'react';
import Bounce from 'react-reveal/Bounce';
import logo from './logo.svg';
import './CssReactLogo.css';


const ReactLogo = () => {
return(
    <React.Fragment>
        <Bounce right>
            <div id="App-logo-spin">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        </Bounce>
    </React.Fragment>
)}

export default ReactLogo