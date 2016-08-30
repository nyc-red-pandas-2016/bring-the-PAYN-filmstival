class MovieItem extends React.Component{
  constructor(){
    super()
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
        <reviewList {this.props.data.reviews} />
      </div>

    )
  }



}
