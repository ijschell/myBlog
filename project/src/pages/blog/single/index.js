import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './style.scss';

class SingleBlog extends Component {

    constructor(props){
        super(props);
        this.state = {
            slug : this.props.match.params.slug,
            post : {
                title : 'Título',
                image : 'http://noverbal.es/uploads/blog/rostro-de-un-criminal.jpg',
                description : `<p>Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vivamus quis mi. Fusce convallis metus id felis luctus adipiscing. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Praesent congue erat at massa.</p>
                <p>Praesent turpis. Phasellus ullamcorper ipsum rutrum nunc. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec id justo.</p>
                <p>Nullam quis ante. Cras sagittis. Duis vel nibh at velit scelerisque suscipit. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.                </p>
                <p>Cras sagittis. Morbi vestibulum volutpat enim. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Cras non dolor. Phasellus a est.                </p>
                <p>Quisque ut nisi. Curabitur blandit mollis lacus. Nulla consequat massa quis enim. Aenean ut eros et nisl sagittis vestibulum. Quisque malesuada placerat nisl.</p>`,
                category : 'BLOG',
                date : '12/12/2019'
            }
        }
    }

    
    componentWillMount() {
        
        // get the post by slug
        console.log('aca');
        
        console.log(this.props.match.params);
        

    }
    

    render() {
        return (
            <div id="singlePage">
                <div className="padding">

                    <div className="header">
                        <div>{this.state.post.category}</div>
                        <div>{this.state.post.date}</div>
                    </div>

                    <div className="image" style={{
                        backgroundImage : `url(${this.state.post.image})`
                    }}></div>

                    <h2>{this.state.post.title}</h2>

                    <div className="description">
                        {ReactHtmlParser(this.state.post.description)}
                    </div>

                </div>
            </div>
        );
    }
}

export default SingleBlog;