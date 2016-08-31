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
        <div className="categoryButtons">
          <button value="" onClick={this.handleCategory.bind(this)}>All</button>
          {
            this.props.categories.map((category, i) => {
            return(<button key={i} value={category.name} onClick={this.handleCategory.bind(this)}>{category.name}</button>)
            })
          }
        </div>
        <div className="selectBox">
            <select ref="selectBox" onChange={this.handleSelectBox.bind(this)}>
               <option value="Movies">Movies</option>
               <option value="Reviews">Reviews</option>
            </select>

        </div>
      </div>
    )
  }

}
