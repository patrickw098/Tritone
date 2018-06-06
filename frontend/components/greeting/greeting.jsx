import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { currentUser } = this.props;
    if (currentUser === null){
      return (
        <header className="home-page-header">
          <nav className="home-page-nav">
            <Link to='/login'> Login </Link>
          </nav>
        </header>
      );
    }else{
      return(
        <header className="home-page-header">
          <nav className="home-page-nav">
            <Link to='/channels/user'> Open </Link>
          </nav>
        </header>
      );
    }
  }
}

export default Greeting;
