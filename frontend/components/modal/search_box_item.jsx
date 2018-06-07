import React from 'react';

class SearchBoxItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="search-box-item" onClick={(e) => this.props.select(e, this.props.server)}>
        {this.props.server.name}
      </li>
    )
  }
}

export default SearchBoxItem;
