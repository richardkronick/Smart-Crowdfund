import React, { Component } from 'react';
import { Form, Input, Button, Message} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link } from '../../../routes';

class NewRequest extends Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        errorMessage: '',
        loading: false,
        showMessage: false,
        messageHeader: '',
        messageContent: ''
    }

    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }

    onSubmit = async event => {
        // Prevent submission to server.
        event.preventDefault();

        // Set loading details.
        this.setState({
            loading: true,
            errorMessage: '',
            showMessage: true,
            messageHeader: 'Please wait...',
            messageContent: 'Your transaction is in progress and could take up to 30 seconds to process once initiated.'
        });

        const { description, value, recipient } = this. state;

        try {
            
            // Get the campaign instance.
            const campaign = Campaign(this.props.address);

            // Get ETH accounts and attempt to create a campaign request.
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
                .send({
                    from: accounts[0]
                });

            // Contribution was successful. Show success message.
            this.setState({
                value: '',
                description: '',
                recipient: '',
                showMessage: true,
                messageHeader: 'Transaction was successful.',
                messageContent: `Congratulations! Your request was created with the following description: "${description}" for the amount of ${value} ETH with the recipient address of "${recipient}".`
            });
        } catch (error) {
            // Catch and display the error.
            this.setState({ errorMessage: error.message, showMessage: false });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <div>
                <Link route={ `/campaigns/${ this.props.address }/requests` }>
                        <a>
                        &lt;&lt; Back to Requests
                        </a>
                    </Link>
                <h2 style={{ marginTop: '1rem' }}>Create a New Request</h2>
                <ul>
                    <li style={{ marginBottom: '2rem' }}>Note that only the manager can create requests. 
                    If you attempt to do so and are not the manager, it will be rejected and you will lose your gas.</li>
                </ul>
                <Form onSubmit={ this.onSubmit } error={ !!this.state.errorMessage } success={ !!this.state.showMessage }>
                    <Form.Field>
                        <label>Request description - what is the purpose of this request? What will the funds be used for?</label>
                        < Input
                            value={ this.state.description }
                            onChange={ event => this.setState({ description: event.target.value })}
                            label='Description'
                            labelPosition='right'
                            focus
                            placeholder='Description of this request'
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value in ETH - how much is being requested?</label>
                        < Input
                            value={ this.state.value }
                            onChange={ event => this.setState({ value: event.target.value })}
                            label='ETH'
                            labelPosition='right'
                            focus
                            placeholder='Request value in ETH'
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient ETH address - who is receiving this ETH in exchange for their services?</label>
                        < Input
                            value={ this.state.recipient }
                            onChange={ event => this.setState({ recipient: event.target.value })}
                            label='Ethereum address'
                            labelPosition='right'
                            focus
                            placeholder='Ethereum address of the recipient'
                        />
                    </Form.Field>
                    <Message error header="Something went wrong. Please check your input again." content={ this.state.errorMessage } />
                    <Message success header={ this.state.messageHeader } content={ this.state.messageContent } />
                    <Button loading={ this.state.loading } primary>Create</Button>
                </Form>
            </div>
        );
    }
}

export default NewRequest;