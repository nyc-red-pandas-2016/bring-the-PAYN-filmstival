class App extends React.Component{
  constructor(){
    super();
    this.state = {
      films: [],
      selectedFilm: "",
      reviews: [],
      selectedCategory: ""
    }
  }

  componentDidMount(){
    fetch("/films")
    .then((response)=> response.json())
    .then((jsonresponse) => this.setState({films: jsonresponse}))
  }

  render(){
    var selectedList;
    if (sortItem === "Events") {
      selectedList = <Events />
    }
    else if (sortItem === "Reviews") {
      selectedList = <Reviews />
    }
    else (sortItem === "Movies"){
      selectedList = <MoviesList filmList={this.state.films} category={this.state.selectedCategory}/>
    }





    return(
      <div className="appMain">
        <NavBar />
        <Featured />
        <CategoriesBar />
        {selectedList}
      </div>
    )
  }
}
