class FilmsController < ApplicationController

  def index
    @films = Film.all
    @categories = Category.all
    # render :json => @films
     render 'alljson.json.jbuilder'
  end

  def rootpath
    render 'index'
  end

end
