class Vote extends React.Component {
  constructor(){
    super();
    this.voteUp = this.voteUp.bind(this)
  }


  voteUp(event){
    event.preventDefault();
    var formData = $('#voteForm').serialize();
    debugger;
    $.ajax({
      url: '/votes',
      method: "Post",
      data: formData
    }).done((response) => {
      debugger;

      this.props.onChange(response);
      $('#voteTally').val();
    })
  }

    render() {
      return (
        // { this.props.voteObject.film.description ?
           <form id="voteForm" onSubmit={this.voteUp}>
           <input type="submit" value="&uarr;"/>
           <input type="hidden" value="{currentUser.id}"/>
           <input type="hidden" name = 'vote[votable_type]' value={this.props.voteObject.type}/>
           <input type="hidden" name = 'vote[point_value]' value={1} />
           <input type="hidden" name = 'vote[votable_id]' value={this.props.voteObject.id} />
           <input type="hidden" name = 'vote[user_id]' value={this.props.currentUser.id} />
           </form>
        //    :
        //    <form id="voteForm" onSubmit={this.voteUp}>
        //    <input type="submit" value="&uarr;"/>
        //    <input type="hidden" value="{currentUser.id}"/>
        //    <input type="hidden" name = 'vote[votable_type]' value={this.props.voteObject.film}/>
        //    <input type="hidden" name = 'vote[point_value]' value={1} />
        //    </form>
        //  }
       )
    }
 }
