import React from 'react';
import './Comment.css';

const Comment = ({name,email}) => {
    return (
        <div className="comment">
             <p>{email}</p>
             
              <p><small>{name}</small></p>
             
        </div>
    );
};

export default Comment;