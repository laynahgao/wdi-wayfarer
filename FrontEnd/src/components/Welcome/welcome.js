import React from 'react';
import Footer from '../Footer/footer.js';
import TabsControl from'./Cities/cities.js';
import TabComponent from'./Cities/tap.js';
import Comment from'./Cities/comment.js';
// import CommentApp from'./Posts/CommentApp.js';

import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

const Welcome =() => {
    return(
        <div> 
            <TabComponent/>
            <TabsControl/>
            {/* <Comment/> */}
            {/* <CommentApp /> */}
        <Footer/>   
        </div>
    )
}
export default Welcome;