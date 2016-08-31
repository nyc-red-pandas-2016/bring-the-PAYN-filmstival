class ReviewsList extends React.Component {

  componentDidMount(){
    fetch('/reviews')
    .then((response) => {
      return response.json();
    }).then((reviews) => {
      debugger;
      this.props.onUpdate(reviews));
    });
  }

  render() {
    return (
      <div>
      {
        this.props.reviewList.map((review, i) => {
          return( <Review data={review} key={i} /> )
        })
      }
      </div>
      // Close Return
    );
    // Close Render
  }
// Close Component
}
