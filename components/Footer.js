import React from 'react';
import { Button } from 'semantic-ui-react';

export default () => {
    return (
        <div className='row justify-content-md-center' style={{ marginTop: '6rem', marginBottom: '2rem' }}>
            <Button basic>Created with React, Javascript and Solidity on the Ethereum Rinkeby Blockchain by <a href='https://www.richardkronick.com' target='_blank'>
                Richard Kronick</a>. View the <a href='https://github.com/richardkronick/Smart-Crowdfund' target='_blank'>code at Github</a>.
            </Button>
        </div>
    );
}