class NavBar extends React.Component{


  render(){
    return(
      <nav className="navbar">
        { this.props.currentUser ?
        <ul>
          <li><a href='/users/sign_out'>Log Out</a></li>
          <li><{this.props.currentUser.username}</li>
          <li><a href='/'>Home</a></li>
          <SearchBoxView/>
        </ul>
        :
        <ul>
          <li><a href='/users/sign_in'>Sign In</a></li>
          <li><a href='/users/sign_up'>Register</a></li>
          <li><a href='/'>Home</a></li>
          <SearchBoxView/>
        </ul>
      }
      </nav>
    )
  }
}
