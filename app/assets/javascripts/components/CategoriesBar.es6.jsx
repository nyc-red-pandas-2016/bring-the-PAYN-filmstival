class CategoriesBar extends React.Component {

handleCategory(event){
  this.props.onUpdateCategory(event.target.value)
}

handleSelectBox(event){
this.props.onUpdateSelect(event.target.value)
}


  render () {
    return(
      <div className="categoriesBar">
<<<<<<< 0288cf68fe39ed9d872084359e6b2359c1f87d53
      <button value="" onClick={this.handleSelectCategory.bind(this)}>All</button>
      {
        this.props.categories.map((category, i) => {
        return(<button value={category.name} key={i} onClick={this.handleSelectCategory.bind(this)}>{category.name}</button>)
        })
      }
=======
        <div className="categoryButtons">
          <button value="" onClick={this.handleCategory.bind(this)}>All</button>
          {
            this.props.categories.map((category, i) => {
            return(<button value={category.name} onClick={this.handleCategory.bind(this)}>{category.name}</button>)
            })
          }
        </div>
        <div className="selectBox">
            <select ref="selectBox" onChange={this.handleSelectBox.bind(this)}>
               <option value="Movies">Movies</option>
               <option value="Reviews">Reviews</option>
               <option value="Events">Show Times/Events</option>
            </select>

        </div>
>>>>>>> add sort select box
      </div>
    )
  }

}
