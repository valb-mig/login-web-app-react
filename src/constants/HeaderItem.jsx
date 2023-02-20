import React from 'react';

const HeaderItem = (props) => {
    return(
        <div id={props.name}  className='header-item'>
            <i className={'fa fa-'+props.icon}></i>
        </div>
    );
}

export default HeaderItem;