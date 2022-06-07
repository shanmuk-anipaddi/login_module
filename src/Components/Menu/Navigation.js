import React from 'react';

const Navigation = (props) => {


    
    return (
        <ul>
            {props.loggedIn && <li>Home</li>}
            {props.loggedIn && <li ><button onClick={props.logout}>Logout</button></li>}
        </ul>
    );
}

export default Navigation;