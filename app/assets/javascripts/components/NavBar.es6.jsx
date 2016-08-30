class NavBar extends React.Component{


  render(){
    return(
      <nav className="navbar">
        <ul>
          <li><a href='/users/sign_in'>Sign In</a></li>
          <li><a href='/users/new'>Register</a></li>
          <li><a href='/users/sign_out'>Log Out</a></li>
          <li><a href='rootpath'>Home</a></li>
          <SearchBoxView/>
        </ul>
      </nav>
    )
  }
}
