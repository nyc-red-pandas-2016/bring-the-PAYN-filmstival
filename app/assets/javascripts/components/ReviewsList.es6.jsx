class ReviewsList extends React.Component {
<<<<<<< 9eaab2d69afa723353b14e0d15afbd0587e22265

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
