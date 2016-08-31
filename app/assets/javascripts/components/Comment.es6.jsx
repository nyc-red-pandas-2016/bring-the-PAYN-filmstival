class Comment extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <ul>
        <p>Comments:</p>
        <li>Username: {this.props.data.user.username}</li>
        <li>Comment: {this.props.data.comment.text}</li>
        <li>{this.props.data.votes} votes</li>
      </ul>
      // Close Return
    )
    // Close Render
  }
// Close Component
}
