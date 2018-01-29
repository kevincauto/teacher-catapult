import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PaymentFiveJobPosts extends Component {
  render() {
    return (
      <StripeCheckout
        name="Teacher Catapult"
        description="$49.99 Purchase For 5 Job Post"
        amount={4999}
        token={token => this.props.buyFiveJobPosts(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-primary">
          {/* <span
                className="glyphicon glyphicon-pushpin"
                aria-hidden="true"
              /> */}
          Purchase 5 Jobs Post for $49.99
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(PaymentFiveJobPosts);
