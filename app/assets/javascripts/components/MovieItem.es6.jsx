class MovieItem extends React.Component{
  constructor(){
    super();
    this.voteMovie = this.voteMovie.bind(this)
  }

  voteMovie(event){
    event.preventDefault();
    this.props.voteMovie()
    $.ajax({
      url: '/votes'
      method:"Post"
      data: 
    })

  }

  render(){
    let data = this.props.data

    return(
      <div className="theMovie">

          <h4>{data.film.title}</h4>
          <p>{data.film.description}</p>
          {/* {
            data.reviews.map((review, i) => <Reviews key={i} data={review} />)
          } */}

          <h4>{this.props.data.title}</h4>
          <p>{this.props.data.description}</p>
          <p>{this.props.data.votes.length} votes</p>
          <form id="voteForm" onChange={this.voteMovie}>
            <input id="voteButton" type="Submit" value="Recommend"/>
          </form>
      </div>
    )
  }
}
