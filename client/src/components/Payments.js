import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Teacher Catapult"
                description="$19.99 Purchase For 1 Job Post"
                amount={1999}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            Post a Job
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);