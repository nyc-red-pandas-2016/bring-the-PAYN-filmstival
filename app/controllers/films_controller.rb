class FilmsController < ApplicationController

  def index
    @films = Film.all
    render :json => @films
  end

  def rootpath
    render 'index'
  end

end
