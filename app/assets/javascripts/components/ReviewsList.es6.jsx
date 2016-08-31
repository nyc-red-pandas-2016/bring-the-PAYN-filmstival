class ReviewsList extends React.Component {

  componentDidMount(){
    fetch('/reviews')
    .then((response) => {
      return response.json();
    }).then((reviews) => {
      this.props.onUpdate(reviews);
    });
  }

  render() {
    return (
      <div className="moviesList">
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
