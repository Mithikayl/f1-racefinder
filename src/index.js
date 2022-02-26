import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {RacedName} from './raceName';

class App extends React.Component {
    render() {
        return (
            <>
            <h1 className="h">Formula 1 Race Finder</h1>
            <div>
                <RacedName></RacedName>
            </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))