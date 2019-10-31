import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Header from '../../components/header';
import './style.scss'

class Home extends Component {

    constructor(){
        super();
        this.state = {
            blog : [],
            technology : [],
            ready : false
        }
    }

    masonry(){

        function resizeGridItem(item){
            var grid = document.getElementsByClassName("grid")[0];
            var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            var rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = "span "+rowSpan;
        }

        function resizeAllGridItems(){
            var allItems = document.getElementsByClassName("item");
            for(x=0;x<allItems.length;x++){
                resizeGridItem(allItems[x]);
            }
        }

        function resizeInstance(instance){
        var item = instance.elements[0];
        resizeGridItem(item);
        }

        window.onload = resizeAllGridItems();
        window.addEventListener("resize", resizeAllGridItems);

        var allItems = document.getElementsByClassName("item");
        for(var x=0;x<allItems.length;x++){
            //imagesLoaded( allItems[x], resizeInstance);
        }        

    }

    componentDidMount() {

        this.getLastPosts();

    }
    
    getLastPosts(){

        fetch('https://raw.githubusercontent.com/ijschell/myBlog/master/project/db.json').then(data => {
            return data.json();
        }).then(data => {
            this.setState({
                blog : data.posts.blog,
                technology : data.posts.technology,
                ready : true
            })
        }).finally(() => {

            setTimeout(() => {
                this.masonry()
            }, 500);

        })

    }

    printPost(){

        const allPosts = this.state.blog.concat(this.state.technology)
        
        return allPosts.map((v, k) => (

            <div key={k} className="item category">
                <div className="content">
                    <div className="header">
                        <div className="category">Blog</div>
                        <div className="date">{v.date}</div>
                    </div>
                    <div className="image" style={{backgroundImage : `url(${v.image})`}}></div>
                    <div className="title">
                        <h3>
                            <Link to="/blog/slug">Blog Post</Link>
                        </h3>
                    </div>
                    <div className="body">
                        <p>{v.description}</p>
                    </div>
                </div>
            </div>

        ))

    }

    render() {

        if(!this.state.ready){
            return 'loading...';
        }else{

            return (
                <div id="homePage">
                    <div className="padding">
                        <Header></Header>
                        <div className="grid">
                            {this.printPost()}
                        </div>
                    </div>
                </div>
            );

        }

    }
}

export default Home;