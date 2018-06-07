import React from 'react';
import SearchBoxItem from './search_box_item';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: props.query
    }

    this.substringSearch = this.substringSearch.bind(this);
  }

  substringSearch(server, query) {
    if ( query.length === 0 ) return true;

    let char = query[0];
    let index = server.indexOf(char);

    if  ( index === -1 ) return false;

    return this.substringSearch(server.slice(index + 1), query.slice(1));
  }


  render() {
    const { servers, query } = this.props;
    let array = [];
    let length = query.length;
    let queryLower = query.toLowerCase();

    servers.forEach( (server) => {
      // let serverName = server.name.toLowerCase().split("").slice(0, length).join(""); //code golfing
      if ( this.substringSearch(server.name, queryLower) === true ) {
        array.push(server);
      }})

    if ( array.length === 0 || query.length === 0 ) {
      return (
        <ul className="search-box-ul">
        </ul>
      )
    } else {
      return (
        <ul className="search-box-ul">
        { array.map ((server) => {
          return <SearchBoxItem key={server.id} server={server} select={this.props.select}/>
        })}
        </ul>
      )}
  }
}

export default SearchBox;
