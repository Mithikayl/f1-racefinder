import React from 'react'
import {getData} from './f1';

var year, round;
export const handleSubmit = (event) => {
    event.preventDefault();
    year = event.target[0].value; // accessing directly
    round = event.target.elements[1].value; // accessing via `form.elements`
    console.log('Data submitted.')
}

export class RacedName extends React.Component {
    state = {
        raceName: ' ',
        circuitName: ''
    }


    onClickButton1 = () => {
        this.setState({
            raceName: ' ',
            circuitName: ''
        })
        getData(year)
            .then(data => {
                console.log(data)
                var raceName = data.MRData.RaceTable.Races[round - 1].raceName;
                var circuitName = data.MRData.RaceTable.Races[round - 1].Circuit.circuitName
                if (raceName === "undefined") {
                    console.log('Error')
                    this.setState({
                        raceName: 'Error',
                        circuitName: ''
                    })
                }
                else {
                    this.setState({
                        raceName: raceName,
                        circuitName: circuitName
                      });
                }
            })
            .catch(err => this.setState({
                raceName: 'Error! This race may not have taken place.',
                circuitName: ''
            }))
      }

      render() {
        return (
            <>
            <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Year:<br></br>
                    <input type="number" name="year" min="1950" max="2021" defaultValue="2021" size="100"/><br></br>
                </label>
                <label>
                    Round:<br></br>
                    <input type="number" name="round" min="0" max="23" size="50"/><br></br>
                </label>
                <input type="submit" className='btnfinder' onClick={this.onClickButton1}/>
            </form>
            </div>   
            <h1 className="racename">{this.state.raceName}</h1>
            <h2 className="circuitname">{this.state.circuitName}</h2>
            </>
        )
    }
}
