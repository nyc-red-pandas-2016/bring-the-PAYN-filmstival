class App extends React.Component{
  constructor(){
    super();
    this.state = {
      films: [],
      selectedFilm: "",
      reviews: [],
      selectedCategory: "",
      selectedList: "Movies",
      allCategories: []
    }
    this.updateSelected = this.updateSelected.bind(this)
    this.handleSelectCategory = this.handleSelectCategory.bind(this)
    this.updateReviews = this.updateReviews.bind(this);
  }



  getFeaturedFilm(films){
    return (films[~~(Math.random() * films.length)])
  }

  componentDidMount(){
    fetch("/films")
    .then((response)=> response.json())
    .then((jsonresponse) => this.setState({films: jsonresponse.films , allCategories: jsonresponse.category, featured: this.getFeaturedFilm(jsonresponse.films)}))

  }


  handleSelectCategory(newCategory){
      this.setState({selectedCategory: newCategory})
  }

  updateSelected(selection){
    this.setState({selectedList: selection})

  }

  updateReviews(list) {
    this.setState({reviews: list.reviews})
  }


  render(){
    var selectedList;
    if (this.state.selectedList === "Events") {
      selectedList =  'Event'  //<Events />
    }
    else if (this.state.selectedList === "Reviews") {
      selectedList = <ReviewsList onUpdate={this.updateReviews} reviewList={this.state.reviews} />
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
        <Featured featured={this.state.featured}/>
        <CategoriesBar categories={this.state.allCategories} onUpdateCategory={this.handleSelectCategory} onUpdateSelect={this.updateSelected}/>

        {selectedList}


      </div>
    )
  }
}
