import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PaymentOneJobPost extends Component {
  render() {
    return (
      <StripeCheckout
        name="Teacher Catapult"
        description="$19.99 Purchase For 1 Job Post"
        amount={1999}
        token={token => this.props.buyOneJobPost(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-primary">
          {/* <span
                className="glyphicon glyphicon-pushpin"
                aria-hidden="true"
              /> */}
          Purchase 1 Job Post for $19.99
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(PaymentOneJobPost);
