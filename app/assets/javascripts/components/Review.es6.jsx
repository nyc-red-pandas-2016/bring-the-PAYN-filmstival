class Review extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.data.text}
          </li>
          <li>Vote</li>
          <li>Comments</li>
        </ul>
      </div>
      // Close Return
    );
    // Close Render
  }
// Close Component
}
