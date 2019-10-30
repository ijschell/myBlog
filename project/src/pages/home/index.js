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
    }

    componentDidMount() {
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
    

    render() {
        return (
            <div id="homePage">
                <div className="padding">
                    <Header></Header>
                    <div className="grid">

                        <div className="item category">
                            <div className="content">
                                <div className="header">
                                    <div className="category">Blog</div>
                                    <div className="date">10/12/2019</div>
                                </div>
                                <div className="image"></div>
                                <div className="title">
                                    <h3>
                                        <Link to="/blog/slug">Blog Post</Link>
                                    </h3>
                                </div>
                                <div className="body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum non orci ut dignissim. Fusce fermentum felis aliquam, mattis nibh ut, faucibus leo. Sed lectus libero, volutpat at eros quis, venenatis tempus neque. Nulla vel faucibus orci, nec convallis ligula. Quisque maximus gravida orci, in lacinia mauris pretium nec. Sed et enim bibendum, fermentum tellus eu, eleifend ex. Aliquam lectus magna, sollicitudin vitae placerat ac, semper ut risus. Nunc vestibulum lacus et nulla volutpat auctor.</p>
                                </div>
                            </div>
                        </div>

                        <div className="item category">
                            <div className="content">
                                <div className="header">
                                    <div className="category">Blog</div>
                                    <div className="date">10/12/2019</div>
                                </div>
                                <div className="image"></div>
                                <div className="title">
                                    <h3>
                                        <Link to="/blog">Blog Post</Link>
                                    </h3>
                                </div>
                                <div className="body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris.</p>
                                </div>
                            </div>
                        </div>

                        <div className="item category">
                            <div className="content">
                                <div className="header">
                                    <div className="category">Blog</div>
                                    <div className="date">10/12/2019</div>
                                </div>
                                <div className="image"></div>
                                <div className="title">
                                    <h3>
                                        <Link to="/blog">Blog Post</Link>
                                    </h3>
                                </div>
                                <div className="body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris.elit. Fusce facilisis fringilla laoreet. Mauris elit. Fusce facilisis fringilla laoreet. Mauris</p>
                                </div>
                            </div>
                        </div>

                        <div className="item category">
                            <div className="content">
                                <div className="header">
                                    <div className="category">Blog</div>
                                    <div className="date">10/12/2019</div>
                                </div>
                                <div className="image"></div>
                                <div className="title">
                                    <h3>
                                        <Link to="/blog">Blog Post</Link>
                                    </h3>
                                </div>
                                <div className="body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris.elit. Fusce facilisis fringilla laoreet. Mauris elit. Fusce facilisis fringilla laoreet. Mauris</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;