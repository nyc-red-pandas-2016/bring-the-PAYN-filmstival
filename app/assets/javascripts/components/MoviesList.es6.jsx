class MoviesList extends React.Component{
constructor(){
  super();
  this.selectByCategory = this.selectByCategory.bind(this)
}
selectByCategory(film){
  debugger
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

    return(
        <div className="moviesList">
          {
            filmList.map((film, i) => {
              return( <MovieItem data={film} key={i} /> )
            })
          }
        </div>
    )
  }
}
