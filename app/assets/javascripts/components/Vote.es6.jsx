class Vote extends React.Component {

  voteMovie(event){
    event.preventDefault();
    this.props.voteMovie()
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
  
    render() {
      return (
           <form id="voteForm" onChange={this.voteMovie}>
           <input id="voteButton" type="Submit" value="&uarr;"/>
           </form>
       )
    }
 }
