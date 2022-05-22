import React, { Component} from 'react';
import { Card, Button, Image } from  'semantic-ui-react';
import ReactImageFallback from "react-image-fallback";
import factory from '../ethereum/factory';
import Campaign from '../ethereum/campaign';
import Error from '../components/Error';
import { Link } from '../routes';

class CampaignIndex extends Component {
    static async getInitialProps() {
        let campaigns;
        try {
            campaigns = await factory.methods.getDeployedCampaigns().call();
        } catch (error) {
            return { error: true};
        }

        const summaries = [];
        for (const address of campaigns) {
            const campaign = Campaign(address);
            const summary = await campaign.methods.getSummary().call();
            const summaryDetails = {
                address: address,
                campaignName: summary[5],
                campaignDescription: summary[6],
                imageUrl: summary[7]
            }

            summaries.push(summaryDetails);
        }

        return {campaigns, summaries };
    }

    renderCampaigns() {
        const items = [];
        for (let i = 0; i < this.props.summaries.length; i++) {
            const summary = this.props.summaries[i];
            const item = {
                header: summary.campaignName,
                description: (
                    <div>
                        <p>{summary.campaignDescription}</p>
                        <Link route={ `/campaigns/${summary.address}` }>
                            <a>View Campaign</a>
                        </Link>
                    </div>
                ),
                fluid: false,
                image: (
                    <Link route={ `/campaigns/${summary.address}` }>
                        <ReactImageFallback src={summary.imageUrl} fallbackImage="https://images.unsplash.com/photo-1589561253898-768105ca91a8" role='button' />
                    </Link>
                ),
                onError: this.addDefaultSrc
            }

            items.push(item);
        }

        return <Card.Group centered items={items} />;
    }

    render() {
        return (
            this.props.error ? <Error /> :
                <div>
                    <div className='container'>
                        <div className='row justify-content-md-center'>
                            <div className='col-sm-auto'>
                                <Link route="campaigns/new">
                                    <a>
                                        <Button
                                            content="Create Campaign"
                                            icon="add"
                                            primary
                                            labelPosition='right'
                                            floated="right"
                                            size='massive'
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <div className='row justify-content-md-center'>
                            <div className='col-sm-auto' style={{ marginBottom: '1rem' }}>
                                <h3>Open Campaigns</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        { this.renderCampaigns() }
                    </div>
                </div>
        );
    }
}

export default CampaignIndex;