import React from 'react';
import { Button } from 'semantic-ui-react';

export default () => {
    return (
        <div className='row justify-content-md-center' style={{ marginTop: '6rem', marginBottom: '2rem' }}>
            <Button negative>Something went wrong. Most likely you are not connected to MetaMask, or you are not on the Rinkeby network. 
            Please connect to Rinkeby via MetaMask and refresh the page.
            </Button>
        </div>
    );
}