class MoviesList extends React.Component{
constructor(){
  super();
  this.selectByCategory = this.selectByCategory.bind(this)
}
selectByCategory(film){
  return film.category.includes(this.props.category)
}

  render(){
    var filmList = [];
    if (this.props.filmList){
      if (this.props.category == "") {
        filmList = this.props.filmList
      } else {
        filmList = this.props.filmList.filter(this.selectByCategory)
      }
    }

    // var filmList = this.props.filmList.filter(this.props.selectedCategory)


    return(
        <div className="moviesList">

          {
            filmList.map((film, i) => {
              return( <MovieItem showMovie={this.props.showMovie} currentUser={this.props.currentUser} data={film} key={i} /> )
            })
          }
        </div>
    )
  }
}
