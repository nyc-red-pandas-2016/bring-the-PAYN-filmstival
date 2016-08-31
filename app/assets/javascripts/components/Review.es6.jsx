
class Review extends React.Component {

  render() {
    return (
      <div>
        <div className="theReview">
          <div className="theVote">{this.props.data.votes} votes</div>
          <div className="theTitle">{this.props.data.film.title}</div>
          <div className="theUsername">{this.props.data.reviewer.username}</div>
          <div className="theText">{this.props.data.review.text}</div>
        </div>
        <CommentList commentList={this.props.data.comments}/>
      </div>
      // Close Return
    );
    // Close Render
  }
// Close Component
}
