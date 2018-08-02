import React from 'react';
import { Container } from 'reactstrap';

const footer = (props) => {
    return(
        <div>
            <footer className="bg-white border">
                <Container>
                    <p className="text-secondary my-4">Copyright © Santren Koding 2018. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    )   
}

export default footer;