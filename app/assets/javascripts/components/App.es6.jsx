class App extends React.Component{
  constructor(){
    super();
    this.state = {
      films: [],
      // dummyfilm: []
      selectedFilm: "",
      reviews: [],
      selectedCategory: "",
      allCategories: []
    }
    this.handleSelectCategory = this.handleSelectCategory.bind(this)
  }

  componentDidMount(){
    fetch("/films")
    .then((response)=> response.json())
    .then((jsonresponse) => this.setState({films: jsonresponse.films , allCategories: jsonresponse.category}))
  }


  handleSelectCategory(newCategory){
      this.setState({selectedCategory: newCategory})
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
        {/* <h2 className="logo">
          <a href="/"><img className="img-responsive2"
           src="/assets/logo-cell.png"/></a>
        </h2> */}
        <NavBar currentUser={this.props.currentUser}/>
        {/* <Featured /> */}
        <CategoriesBar categories={this.state.allCategories} onUpdate={this.handleSelectCategory}/>
        <MoviesList filmList={this.state.films} category={this.state.selectedCategory} currentUser={this.props.currentUser}/>
        {/* {selectedList} */}
      </div>
    )
  }
}
