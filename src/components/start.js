import './start.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Start = () => {
    return (
        <div className="App">
            <div className='Startpage'>
                <Link to='/login/' className='link-text'>
                    <Button className='start-button'>
                        <b>
                            Get Started
                        </b>
                    </Button>
                </Link>
            </div>
        </div>

    );
}

export default Start;
