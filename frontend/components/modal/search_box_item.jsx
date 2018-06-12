import React from 'react';

class SearchBoxItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = "name";
    if ( this.props.server.name === undefined ) {
      name = "display_name"
    }
    return (
      <li className="search-box-item" onClick={(e) => this.props.select(e, this.props.server)}>
        {this.props.server[name]}
      </li>
    )
  }
}

export default SearchBoxItem;
