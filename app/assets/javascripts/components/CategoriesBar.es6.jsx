class CategoriesBar extends React.Component {

handleSelectCategory(event){
  this.props.onUpdate(event.target.value)
}



  render () {
    return(
      <div className="categoriesBar">
      <button value="" onClick={this.handleSelectCategory.bind(this)}>All</button>
      {
        this.props.categories.map((category, i) => {
        return(<button value={category.name} onClick={this.handleSelectCategory.bind(this)}>{category.name}</button>)
        })
      }
      </div>
    )
  }

}
