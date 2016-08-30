class MovieItem extends React.Component{
  constructor(){
    super()
  }

  render(){

    return(
      <div className="theMovie">

          <h4>{this.props.data.title}</h4>
          <p>{this.props.data.description}</p>
        
      </div>

    )
  }



}
