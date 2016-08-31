class CommentList extends React.Component {

  render() {
    return (
      <div>
      {
        this.props.commentList.map((comment, i) => {
          return( <Comment data={comment} key={i} /> )
        })
      }
      </div>
    );
    // Close Render
  }
// Close Component
}
