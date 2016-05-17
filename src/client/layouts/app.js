import React from 'react';

require('assets/styles/styles.scss');
require('assets/styles/normalize.scss');

export default React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
