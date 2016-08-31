class MovieItem extends React.Component{
  constructor(){
    super();
    this.state = {
      showReviews: false
    }
  }

  voteMovie(event){
    event.preventDefault();
    this.props.voteMovie()
    debugger;

    $.ajax({
      url: '/votes',
      method: "Post",
      data: {

      }
    }).done((response) => {
      this.props.onChange(response);
      $('#voteTally').val();
    })

  }

    openReviews(){
      this.setState({showReviews: !this.state.showReviews})
    }


  render(){

    let data = this.props.data
    return(

      <div className="theMovie" onClick={this.openReviews.bind(this)}>
          <h4>{data.film.title}</h4>
          <p>{data.film.description}</p>
          {this.state.showReviews ?
          <ReviewsList reviewList={data.reviews} />
          : null
        }
        { this.props.currentUser ?
          <div>
           <Vote voteObject={this.props.data} currentUser={this.props.currentUser}/>
          </div>
          :
          <div>
            <p id="voteTally">{this.props.data.votes.length} votes</p>
          </div>
        }
    )
  }
}
