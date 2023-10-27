import './Start.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Start = () => {
    return ( 
    <div className="App">
        <div className='Startpage'>
            <Button color='light'>
                <Link to = '/Login/' className='link-text'><b>Get Started</b></Link>
            </Button>
        </div>
    </div>

    );
}
 
export default Start;
