import React, { Component } from 'react';
import { Form, Input, Button, Message} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributionForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false,
        showMessage: false,
        messageHeader: '',
        messageContent: ''
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

        try {
            
            // Get the campaign instance.
            const campaign = Campaign(this.props.address);

            // Get ETH accounts and attempt to contribute the campaign.
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute()
                .send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.value, 'ether')
                });

            // Contribution was successful. Show success message.
            this.setState({
                showMessage: true,
                messageHeader: 'Transaction was successful.',
                messageContent: `Congratulations! You are now an official contributor to this campign and have contributed ${this.state.value} ETH.`
            });    

            // Refresh the page.
            Router.replaceRoute(`/campaigns/${ this.props.address }`);
        } catch (error) {
            // Catch and display the error.
            this.setState({ errorMessage: error.message, showMessage: false });
        }

        this.setState({ loading: false, value: '' });
    };

    render() {
        return (
            <Form onSubmit={ this.onSubmit } error={ !!this.state.errorMessage } success={ !!this.state.showMessage }>
                <Form.Field>
                    <label>Enter the amount to contribute in ETH to this campaign.</label>
                    <Input
                        value={ this.state.value }
                        onChange={ event => this.setState({ value: event.target.value })}
                        label='ETH'
                        labelPosition='right'
                        focus
                        placeholder='Contribution amount in ETH'
                    />
                </Form.Field>
                <Message error header="Something went wrong. Please check your input again." content={ this.state.errorMessage } />
                <Message success header={ this.state.messageHeader } content={ this.state.messageContent } />
                <Button loading={ this.state.loading } primary>Contribute!</Button>
                <div style={{ marginTop: '2rem' }}>Note that you may contribute to a campaign more than once, but will not be granted additional voting and approval rights with subsequent contributions.</div>
            </Form>
        );
    }
}

export default ContributionForm;