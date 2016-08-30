class App extends React.Component{
  constructor(){
    super();
    this.state = {
      films: [],
      selectedFilm: "",
      reviews: [],
      selectedCategory: "Drama"
    }
  }

  componentDidMount(){
    fetch("/films")
    .then((response)=> response.json())
    .then((jsonresponse) => this.setState({films: jsonresponse}))
  }

  render(){
    // var selectedList;
    // if (sortItem === "Events") {
    //   selectedList = <Events />
    // }
    // else if (sortItem === "Reviews") {
    //   selectedList = <Reviews />
    // }
    // else {
    //   selectedList = <MoviesList filmList={this.state.films} category={this.state.selectedCategory}/>
    // }

    return(
      <div className="appMain">
        <NavBar currentUser={this.props.currentUser}/>
        {/* <Featured /> */}
        <CategoriesBar />
        <MoviesList filmList={this.state.films.films} category={this.state.selectedCategory}/>
        {/* {selectedList} */}
      </div>
    )
  }
}
