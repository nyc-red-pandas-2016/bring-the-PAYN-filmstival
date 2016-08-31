class Comment extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <ul>
        <p>Comments:</p>
        <li>{this.props.data.user.username}</li>
        <li>{this.props.data.comment.text}</li>
        <li>{this.props.data.votes} votes</li>
      </ul>
      // Close Return
    )
    // Close Render
  }
// Close Component
}
