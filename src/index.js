import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {RacedName} from './raceName';

class App extends React.Component {
    render() {
        return (
            <>
            <div id="container">
                <div id="header">
                </div>
                <div id="body">
                    <h1 className="h">Formula 1 Race Finder</h1>
                    <RacedName></RacedName>
                </div>
                <div id="footer">
                    <p className="footerText">made by <a href="https://github.com/mithikayl" target="_blank" without rel="noopener noreferrer" className="githubLink">mithikayl</a></p>
                </div>
            </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))