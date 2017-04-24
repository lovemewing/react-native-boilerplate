'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Next from './next';

import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);

    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.toRoute({
      name: 'Next',
      component: Next,
    });
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions}
        goToNextPage={this.goToNextPage}
      />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);