import React from 'react';

const SidebarItem = (props) => {
    return(
        <div id={props.name} className='sidebar-item'>
            <i className={'fa fa-'+props.icon}></i>
        </div>
    );
}

export default SidebarItem;