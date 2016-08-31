class MovieItem extends React.Component{
  constructor(){
    super();
  }

  render(){
    let data = this.props.data

    return(
          <h4>{data.film.title}</h4>
          <p>{data.film.description}</p>
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
