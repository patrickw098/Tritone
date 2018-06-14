import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display_name: this.props.currentUser.display_name,
      id: this.props.currentUser.id,
      avatar_url: this.props.currentUser.avatar_url,
      show: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    debugger
    this.props.updateUser(this.state).then(() => this.props.closeModal())
  }

  handleChange(type) {
    return (e) => {
      e.preventDefault();
      this.setState({
        [type]: e.target.value
      })
    }
  }

  toggleDropdown(){
    let state = this.state.show ? false : true
    this.setState({
      show: state
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.toggleDropdown
  }

  setColor(e){
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      avatar_url: e.currentTarget.innerText
    }, this.toggleDropdown)
  }

  render() {
    console.log(this.state);
    return (
      <div className="edit-profile-div">
        <div className="edit-avatar-div">
          <div className="edit-avatar-display">
            <i className={`fab fa-discord ${this.state.avatar_url}`}></i>
          </div>
          <form className="edit-profile-form">
            <button className="toggle-menu-button" onClick={(e) => this.toggleDropdown(e)}>{this.state.avatar_url}</button>
            {
               this.state.show
                 ? (
                   <div className="color-menu">
                     <button className="color-menu-item" onClick={this.setColor}> red </button>
                     <button className="color-menu-item" onClick={this.setColor}> blue </button>
                     <button className="color-menu-item" onClick={this.setColor}> green </button>
                     <button className="color-menu-item" onClick={this.setColor}> orange </button>
                     <button className="color-menu-item" onClick={this.setColor}> purple </button>
                     <button className="color-menu-item" onClick={this.setColor}> black </button>
                     <button className="color-menu-item" onClick={this.setColor}> gray </button>
                   </div>
                 )
                 : (
                   null
                 )
             }

             {
                (this.state.id === 1) ?
                (
                  <div className="input-fields">
                    <label className="text-red">demo_user can't edit display name!</label>
                    <input className="save-user-input" value={this.state.display_name} />
                    <button className="save-user-button" onClick={this.handleSubmit} > Save </button>
                  </div>
                ) : (
                  <div className="input-fields">
                    <label>Edit User</label>
                    <input className="save-user-input" value={this.state.display_name} onChange={this.handleChange('display_name')}/>
                    <button className="save-user-button" onClick={this.handleSubmit}> Save </button>
                  </div>
                )
              }
          </form>
        </div>
      </div>
    )
  }
}

export default EditProfile;
