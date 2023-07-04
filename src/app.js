import React, { Component } from 'react';
import './index.less'
import OIP from '$assets/OIP.jpg'

class App extends Component {
    componentDidMount() {
        console.log('[APP] componentDidMount running')
        let element = document.getElementById('box2');
        let myImage = new Image();
        myImage.src = OIP;
        element.appendChild(myImage);
    }

    render() {
        return (
            <div>
                <div className='box1'>star-trails root</div>
                <div id='box2' className='box2'>less loader test</div>
            </div>
        );
    }
}

export default App;