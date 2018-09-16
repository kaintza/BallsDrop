class HomeController < ActionController::Base
  skip_before_action :verify_authenticity_token
  include HomeHelper

  def index
  end

  def create
    count = params["count"]
    @ball = create_ball(count)

    respond_to do |format|
      format.json { render json: @ball.to_json.to_json ,layout: false}
    end
  end
end
