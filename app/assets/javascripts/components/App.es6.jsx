class App extends React.Component{
  constructor(){
    super();
    this.state = {
      films: [],
      // dummyfilm: []
      selectedFilm: "",
      reviews: [],
      selectedCategory: "",
      selectedList: "Movies",
      allCategories: []
    }
    this.updateSelected = this.updateSelected.bind(this)
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

  updateSelected(selection){
    this.setState({selectedList: selection})
  }

  render(){
    var selectedList;
    if (this.state.selectedList === "Events") {
      selectedList =  'Event'  //<Events />
    }
    else if (this.state.selectedList === "Reviews") {
      selectedList = 'review' // <ReviewList />
    }
    else {
      selectedList = <MoviesList filmList={this.state.films} category={this.state.selectedCategory} currentUser={this.props.currentUser}/>
    }

    return(
      <div className="appMain">
        {/* <h2 className="logo">
          <a href="/"><img className="img-responsive2"
           src="/assets/logo-cell.png"/></a>
        </h2> */}
        <NavBar currentUser={this.props.currentUser}/>
        {/* <Featured /> */}
        <CategoriesBar categories={this.state.allCategories} onUpdateCategory={this.handleSelectCategory} onUpdateSelect={this.updateSelected}/>
        {selectedList}
      </div>
    )
  }
}
