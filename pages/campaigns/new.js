import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class NewCampaign extends Component {
    state = {
        minimumContribution: '',
        campaignName: '',
        campaignDescription: '',
        imageUrl: '',
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
            // Check if there is an image url specified, if not, use the default.
            if (this.state.imageUrl == '' || !this.state.imageUrl.startsWith('http://') || !this.state.imageUrl.startsWith('https://')){
                this.state.imageUrl == 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
            }

            // Get ETH accounts and attempt to create the campaign.
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(
                this.state.minimumContribution, this.state.campaignName, this.state.campaignDescription, this.state.imageUrl)
                .send({
                    from:accounts[0]
                });

            // Creation was successful. Show success message.
            this.setState({
                showMessage: true,
                messageHeader: 'The transaction was successful!',
                messageContent: 'Your campaign has been created.'
            });    
        } catch (error) {
            // Catch and display the error.
            this.setState({ errorMessage: error.message, showMessage: false });
        }

        this.setState({loading: false});
    };

    render() {
        return (
            <div>
                <h2>Create A New Campaign</h2>
                <Form onSubmit={ this.onSubmit } error={ !!this.state.errorMessage } success={ !!this.state.showMessage }>
                    <Form.Field>
                        <label>Specify the minimum contribution required to be a campaign supporter.</label>
                        <Input
                            label='wei'
                            labelPosition='right'
                            focus
                            placeholder='Amount in wei'
                            value={ this.state.minimumContribution }
                            onChange={ event => this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>What is the name of your campaign?</label>
                        <Input
                            focus
                            placeholder="Campaign's public name"
                            value={ this.state.campaignName }
                            onChange={ event => this.setState({ campaignName: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Please provide a description of your campaign. What is its purpose and goals? Why should someone support it?</label>
                        <Input
                            focus
                            placeholder='Campaign description'
                            value={ this.state.campaignDescription }
                            onChange={ event => this.setState({ campaignDescription: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Please add the url of an image (including 'https://...') that you would like to represent your campiagn. If you do not include one, a default image will be added.</label>
                        <Input
                            focus
                            placeholder='Campaign image url'
                            value={ this.state.imageUrl }
                            onChange={ event => this.setState({ imageUrl: event.target.value })}
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

export default NewCampaign;