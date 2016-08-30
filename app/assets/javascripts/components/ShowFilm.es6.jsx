class ShowFilm extends React.Component{
    constructor(){
      super();
      this.state = {

      }
    }

    componentDidMount(){

    }

    render(){
      return(
        <div className="showPage">
          <div className="appMain">
            <NavBar currentUser = {this.props.currentUser}/>
            <MovieItem movieItem = {this.props.movie}/>
            <ReviewsList/>
            review form - to create new comments on movie
            <CommentsList/>
            comment form - to create comments on review
          </div>
        </div>
      )
    }
}
