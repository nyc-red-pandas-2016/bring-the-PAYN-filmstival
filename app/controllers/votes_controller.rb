class VotesController < ApplicationController


  def index
  end

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      render :json => @vote
    else
      render json: { :errors => @vote.errors.full_messages }
    end
  end


  private
    def vote_params
      params.require(:vote).permit(:votable_type, :point_value, :user_id, :votable_id)
    end

end
