import React, { Component } from 'react';
import './style.scss'

class Search extends Component {

    constructor(){
        super();
        this.state = {
            textInput : ''
        }
    }

    modifyText(e){

        this.setState({
            textInput : e.target.value
        })

    }

    render() {
        return (
            <div id="searchBar">
                <input type="text" name="search" onChange={(e) => this.modifyText(e)} />
            </div>
        );  
    }
}

export default Search;