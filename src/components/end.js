import './end.css';
import React from 'react';
import { Container } from 'reactstrap';

function End() {
    return (
        <div className="App">
            <div className='heading'>
                <Container className='container-end'>
                    <header className="App-header">
                        <h2 className='text-center'>You have submitted successfully!</h2>
                    </header>
                    <br />
                </Container>
            </div>
        </div>
    );
}

export default End;
