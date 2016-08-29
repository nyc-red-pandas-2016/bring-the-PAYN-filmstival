class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render :json => @comments
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :json => @comment
    else
      render json: { :errors => @comment.errors.full_messages }
    end
  end

  def update
  end

  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:person_id, :text)
  end

end
