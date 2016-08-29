class MoviesList extends React.Component{
constructor(){
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
            this.props.
          }
        </div>
    )
  }
}
