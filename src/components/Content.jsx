import React from 'react';


const Content = (props) => {
    return(
        <div className={'content '+props.color}>
            {props.children}
        </div>
    );
}

export default Content;