import './start.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Start = () => {
    return ( 
    <div className="App">
        <div className='Startpage'>
            <Button className='start-button'>
                <Link to = '/login/' className='link-text'><b>Get Started</b></Link>
            </Button>
        </div>
    </div>

    );
}
 
export default Start;
