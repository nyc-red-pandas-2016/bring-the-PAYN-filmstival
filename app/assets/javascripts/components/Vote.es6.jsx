class Vote extends React.Component {
  constructor(){
    super();
    this.voteUp = this.voteUp.bind(this)
  }

  voteUp(event){
    event.preventDefault();
    var voteTotal = $(event.target).parent().siblings();
    var voteNum = parseInt(voteTotal.find('span').html());
    var formData = $('#voteForm').serialize();
    $.ajax({
      url: '/votes',
      method: "Post",
      data: formData
    })
    $(voteTotal).html(voteNum++);
  }

    render() {
      return (
        <div className="movieVotes">
          <div className="voteDiv">
            <p><span className="voteNum">{this.props.voteObject.votes.length}</span> votes</p>
          </div>
        <div>
           <form id="voteForm" onSubmit={this.voteUp}>
           <input type="submit" value="&uarr;"/>
           <input type="hidden" value="{currentUser.id}"/>
           <input type="hidden" name = 'vote[votable_type]' value="Film"/>
           <input type="hidden" name = 'vote[point_value]' value={1} />
           <input type="hidden" name = 'vote[votable_id]' value={this.props.voteObject.film.id} />
           <input type="hidden" name = 'vote[user_id]' value={this.props.currentUser.id} />
           </form>
          </div>
        </div>
       )
    }
 }
