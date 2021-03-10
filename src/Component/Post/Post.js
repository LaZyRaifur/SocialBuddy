import React from 'react';
import Comment from '../Comment/Comment';
import './Post.css';

const Post = (props) => {
    
    const {title,body,cEmail,cName} = props.data;
    return (
        <div className="body-style">
            <h1 className="name">{title}</h1>
            <p>{body}</p>
            <Comment email={cEmail} name={cName}></Comment>
        </div>
    );
};

export default Post;