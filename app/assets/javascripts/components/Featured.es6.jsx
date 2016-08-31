class Featured extends React.Component{
  render(){
    return(
      <div className="featuredFilm">
        {this.props.featured == null ? <p> </p> : <MovieItem data={this.props.featured} />
         }
      </div>
    )
  }
}
