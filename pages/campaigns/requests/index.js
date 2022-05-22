import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';
import Error from '../../../components/Error';

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        let campaign;
        let requestCount;
        let contributorCount;
        let requests;

        try {
            // Get the campaign's number of requests and contributors.
            campaign = Campaign(address);
            requestCount = await campaign.methods.getRequestsCount().call();
            contributorCount = await campaign.methods.approversCount().call();

            // Solidity does not support returning an array of structs.
            requests = await Promise.all(
                Array(parseInt(requestCount))
                .fill()
                .map((element, index) => {
                    return campaign.methods.requests(index).call();
                })
            );
          } catch (error) {
              return { error: true};
          }

        return { address, requests, requestCount, contributorCount, campaign };
    }

    renderTableRows() {
        return this.props.requests.map((request, index) => {
            return (
                <RequestRow
                    key={ index }
                    id={ index }
                    request={ request }
                    address={ this.props.address }
                    contributorCount= { this.props.contributorCount }
                />
            );
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            this.props.error ? <Error /> :
            <div>
                <h2>Campaign Requests</h2>
                <ul>
                    <li>Requests can be finalized here by the manager only. The option will be available once more than 50% of contributors have approved the request. 
                        If you attempt to finalize a request and are not a manager, it will get rejected and you will lose your gas.</li>
                    <li>If you have already contributed to this campaign, you can approve requests here.</li>
                    <li>This campaign has a total of {this.props.requestCount} requests.</li>
                </ul>
                <Table celled>
                        <Header>
                            <Row>
                                <HeaderCell>ID</HeaderCell>
                                <HeaderCell>Description</HeaderCell>
                                <HeaderCell>Amount</HeaderCell>
                                <HeaderCell>Recipient</HeaderCell>
                                <HeaderCell>Approval Count</HeaderCell>
                                <HeaderCell>Approve</HeaderCell>
                                <HeaderCell>Finalize</HeaderCell>
                                <HeaderCell>Comment</HeaderCell>
                            </Row>
                        </Header>
                        <Body>
                            { this.renderTableRows() }
                        </Body>
                    </Table>
                    <div className='row justify-content-md-center'>
                        {this.props.requestCount == 0 && 'This campaign has no requests.'}
                    </div>
                <hr />
                <p>If you are the campaign manager, you can create a new spending request here.</p>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                    <Button primary>Create Request</Button>
                    </a>
                </Link>
                <hr />
            </div>
        );
    }
}

export default RequestIndex;