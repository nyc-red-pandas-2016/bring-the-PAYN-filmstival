
class Review extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.data.reviewer.username}</li>
          <li>{this.props.data.film.title}</li>
          <li>{this.props.data.votes} votes</li>
          <li>{this.props.data.review.text}</li>
        </ul>
        <CommentList commentList={this.props.data.comments}/>
      </div>
      // Close Return
    );
    // Close Render
  }
// Close Component
}
