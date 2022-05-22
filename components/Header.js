import React from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <div>
            <div className='row justify-content-md-center' style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <Button basic color='grey'>
                    <div>
                        This application exists on the <strong>Ethereum Rinkeby test network</strong> and is for demo purposes only. Using on the mainnet could cause you to lose your ETH gas
                        and on other test networks it will not function properly because the contract does not exist on those networks. This site requires 
                        <a href='https://www.google.com/search?q=metamask+extension' target='_blank' rel="noreferrer" > the MetaMask browser extension </a>
                        to function properly.
                    </div>
                    <hr />
                    <div>
                        The purpose of this site is to demonstrate how blockchain can improve crowdfunding by allowing contributors to have 
                        a say in how the funds are spent and can solve the issue of campaign creators abusing the funds of their contributors.
                        Created with React, Javascript and Solidity on the Ethereum Rinkeby Blockchain by <a href='https://www.richardkronick.com' target='_blank'>
                        Richard Kronick</a>.
                    </div>
                </Button>
            </div>
            <Menu style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Link route="/">
                <a className="item">Smart Crowdfunder</a>
            </Link>
            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">View Campaigns</a>
                </Link>
                <Link route="/campaigns/new">
                    <a className="item">
                        <Icon name="add"></Icon> New Campaign
                    </a>
                </Link>
            </Menu.Menu>
        </Menu>
        </div>
    );
}