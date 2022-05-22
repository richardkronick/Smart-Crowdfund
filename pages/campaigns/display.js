import React, { Component } from 'react';
import { Card, Grid, Button, Image } from 'semantic-ui-react';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributionForm from '../../components/ContributionForm';
import { Link } from '../../routes';
import Error from '../../components/Error';

class DisplayCampaign extends Component {
  static async getInitialProps(props) {
    let campaign;
    let summary;
    try {
      campaign = Campaign(props.query.address);
      summary = await campaign.methods.getSummary().call();
    } catch (error) {
        return { error: true};
    }

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address,
      name: summary[5],
      description: summary[6],
      imageUrl: summary[7]
    };
  }

  renderCampaignDetails() {
    const { minimumContribution, balance, requestsCount, approversCount, manager, name, description, imageUrl } = this.props;

    const details = [
      {
        header: `What is the purpose of ${name}?`,
        description: `"${ description }"`,
        meta: 'This is the description of this campaign.',
        color: 'blue',
        fluid: true,
        image: imageUrl,
        id: 'campaignImage'
      },
      {
        header: 'Address of manager',
        description:
          'This is the address of the manager of this campaign. They can create spending requests that contributers can vote to approve or decline.',
        meta: manager,
        color: 'blue',
        fluid: true
      },
      {
        header: `Minimum Contribution: ${ minimumContribution } wei`,
        description:
          `In order to become a contributer and approver for this campaign you need to contribute at least ${ minimumContribution } wei.`,
        color: 'blue',
        fluid: true
      },
      {
        header: `Number of Requests for this Campaign: ${ requestsCount }`,
        description:
          'This is the number of requests for this contract to withdraw and use some amount of money from this campaign contract, which must be approved by a majority.',
        color: 'blue',
        fluid: true
      },
      {
        header: `Number of contributors: ${ approversCount }`,
        description:
          'This is the number of individuals who have already contributed to this campaign and are able to vote on how this campaign spends its contribution proceeds.',
        color: 'blue',
        fluid: true
      },
      {
        header: `ETH Campaign Balance: ${ web3.utils.fromWei(balance, 'ether') } ETH`,
        description:
          'This is the current amount in ETH that has already been donated to this campaign, has not yet been spent and is available for spending requests.',
        color: 'blue',
        fluid: true
      },
    ];

    return <Card.Group items={details} />;
  }

  onImageError() {
    // Return default image.
    let image = document.getElementById('campaignImage').getElementsByTagName('img')[0];
    image.src = 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80';
  }

  render() {
      return (
        this.props.error ? <Error /> :
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>Campaign Details for <span style={{ color: '#0275d8' }}>{this.props.name}</span></h2>            
            <Grid>
              <Grid.Column mobile={16} tablet={16} computer={9}>
                { this.renderCampaignDetails() }
              </Grid.Column>
              <Grid.Column computer={1}>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={16} computer={6}>
                <hr/>
                <Grid.Row style={{ marginBottom: '6rem', marginTop: '3rem' }}>
                  <h3 style={{ marginBottom: '2rem' }}>Become a Contributor!</h3>
                  <ContributionForm address={ this.props.address } />
                </Grid.Row>
                <hr/>
                <Grid.Row style={{ marginTop: '6rem' }}>
                  <h4>View the current spending requests for this campaign</h4>
                  <Link route={ `/campaigns/${ this.props.address }/requests` }>
                    <a>
                      <Button primary>View Requests</Button>
                    </a>
                  </Link>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </div>
          {<a href="https://converter.murkin.me/" target="_blank">Wei to ETH conversion</a>}
          <Image src={this.props.imageUrl} hidden onError={ this.onImageError } />
        </div>
      )
  }
}

export default DisplayCampaign;