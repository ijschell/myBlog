import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './style.scss';

class HomeBlog extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    
    componentWillMount() {
        
        // get the post by slug      
        console.log(this.props.match.params);
        // obtengo solamente los post de una sola categoría
          

    }
    

    render() {
        return (
            <div id="singlePage">
                <div className="padding">

                    blog

                </div>
            </div>
        );
    }
}

export default HomeBlog;