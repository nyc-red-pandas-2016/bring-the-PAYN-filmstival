class MoviesList extends React.Component{
constructor(){
  super()
  this.selectByCategory() = this.selectByCategory().bind(this)
}
selectByCategory(film){
  film.category.include(this.props.category)
}

  render(){
    var filmList = this.props.filmList.filter(this.props.selectedCategory)


    return(
        <div className="moviesList">
          {
            filmList.map(function(film, i){
              <MovieItem data={film} key={i}/>
            })
          }
        </div>
    )
  }
}
