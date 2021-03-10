import React from 'react';

const Comment = ({name,email}) => {
    return (
        <div>
              {name}
              {email}
        </div>
    );
};

export default Comment;