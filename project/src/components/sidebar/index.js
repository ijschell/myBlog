import React, { Component } from 'react';
import './style.scss'

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <div className="padding">
                    <h2>Jonathan Schell</h2>
                    <div className="image"></div>
                    <h3>Una breve historia sobre mí</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, temporibus excepturi? Perferendis placeat commodi laboriosam expedita corporis molestiae recusandae incidunt. Voluptatum suscipit ducimus maxime explicabo cumque fuga quas vel temporibus!</p>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Sidebar;