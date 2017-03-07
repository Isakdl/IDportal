import React, { Component, PropTypes } from 'react';
export default class SearchBox extends Component {
  render() {
    return (
      <div className ="Search">
         <h2>search</h2>
			   <p>{this.props.SearchBox.search}</p>
			   <p>{this.props.commment.user}</p>
			   <p>{this.props.commment.vote}</p>
			   

      </div>

    );
  }
}

SearchBox.propTypes = {
  search: PropTypes.object.isRequired,
};