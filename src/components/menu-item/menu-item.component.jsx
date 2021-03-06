import React from 'react';
import { withRouter } from 'react-router';
import './menu-item.component.scss'

const MenuItem = ({title,imageUrl,size,linkUrl,history,match}) => (
    <div 
    style={{
        backgroundImage:`url(${imageUrl})`
    }}
    onClick= {() => 
        history.push(`${match.url}${linkUrl}`)
    }
    className={`${size} menu-item`}>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
         </div>
    </div>
)

export default withRouter(MenuItem);