import React, { Component } from 'react';
import Search from './search'
import Filter from './filters'
import './style.scss'

class Header extends Component {
    render() {
        return (
            <header>
                <Search></Search>
                <Filter></Filter>
            </header>
        );  
    }
}

export default Header;