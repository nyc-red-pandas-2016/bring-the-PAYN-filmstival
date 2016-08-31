class Movie extends React.Component {

  render() {
    return (
      <div>
        <h3>{this.props.movie.film.title}</h3>
        <ul>
          <li>Category: {this.props.movie.category}</li>
          <li>Description: {this.props.movie.film.description}</li>
          <li>{this.props.movie.votes} votes</li>
          <li>Film reviews: <ReviewsList reviewList={this.props.movie.reviews}/></li>
          <li>Film comments: <CommentList commentList={this.props.movie.film.filmcomments}/></li>
        </ul>
      </div>
    );
  }

}
