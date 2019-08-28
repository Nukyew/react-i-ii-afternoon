import React, {Component} from 'react';
import data from '../data'
import { throwStatement } from '@babel/types';

export default class UserInfo extends Component {
    constructor(){
        super()

        this.state = {
            currentId: 0
        }
    }

    /* changeCurrentId(e){
        if (this.state.currentId <= data.length - 2 && this.state.currentId > -1){
            if (e.target.id === "2"){
                this.setState({
                    currentId: this.state.currentId + 1
                })
            } else if (e.target.id === "1"){
                this.setState({
                    currentId: this.state.currentId - 1
                })
            }
        }
    } */

    addCurrentId(e){
        if (this.state.currentId <= data.length -2){
            this.setState({
                currentId: this.state.currentId + 1
            })
        }
    }

    subtractCurrentId(e){
        if (this.state.currentId > 0){
            this.setState({
                currentId: this.state.currentId - 1
            })
        }
    }

    render(){        
        return(
            <div className="info-section">
                <h1 key="names">{data[this.state.currentId].name.first} {data[this.state.currentId].name.last}</h1>
                    <p className="from">{data[this.state.currentId].city}, {data[this.state.currentId].country}</p>
                    <p className="job-title">{data[this.state.currentId].title}</p>
                    <p className="employer">{data[this.state.currentId].employer}</p>
                    <p></p>
                    <p className="favorite-movies"></p>
                    <ol>
                      <li>{data[this.state.currentId].favoriteMovies[0]}</li>
                      <li>{data[this.state.currentId].favoriteMovies[1]}</li>
                      <li>{data[this.state.currentId].favoriteMovies[2]}</li>
                    </ol>
            <div className="current-page">
                <h2>{data[this.state.currentId].id}/{data.length}</h2>
            </div>
            <div className="controls">
                <p onClick={e => this.subtractCurrentId(e)}>{"< Previous"}</p>
                <p onClick={e => this.addCurrentId(e)}>{"Next >"}</p>
            </div>
            </div>
        
          
        )
    }
}