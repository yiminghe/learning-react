import React from 'react';
import {underscore, findState} from './util';
import Index from './IndexPage';

const State = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
  },

  imageUrl(name) {
    return 'http://www.50states.com/maps/' + underscore(name) + '.gif';
  },

  render() {
    const unitedState = findState(this.props.params.abbr);
    return unitedState ? (
      <div className="State">
        <h1>{unitedState.name}</h1>
        <img className="state-image" src={this.imageUrl(unitedState.name)}/>
      </div>
    ) : <Index />;
  },
});

export default State;
