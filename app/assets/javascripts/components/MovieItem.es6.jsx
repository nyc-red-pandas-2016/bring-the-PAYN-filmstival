class MovieItem extends React.Component{
  constructor(){
    super();
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
          { this.props.currentUser ?
            <div>
            <p id="voteTally">{this.props.data.votes.length} votes</p>
              <form id="voteForm" onChange={this.voteMovie.bind.this}>
                <input id="voteButton" type="Submit" value="&uarr;"/>
                <input type='hidden' name="vote[votable_id]" value={this.props.data.id}/>
                <input type='hidden' name="vote[votable_type]" value="movie"/>
                <input type='hidden' name="vote[user_id]" value={current_user.id}/>
              </form>
            </div>
           :
           <p id="voteTally">{this.props.data.votes.length} votes</p>
         }
      </div>
    )
  }
}
