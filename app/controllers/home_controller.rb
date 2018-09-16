class HomeController < ActionController::Base
  skip_before_action :verify_authenticity_token
  def index
    @product = Ball.new("blue").to_json
  end

  def show
    asdqwe = params
    @product = Ball.new("blue")
    respond_to do |format|
      format.json { render json: @product.to_json ,layout: false}
    end
  end


  def update
    render :layout => false
    @product = Ball.new("blue").to_json.to_json
  end

  def create
    count = params["count"]

    if count == 1
      @product = Ball.new("pink")
    elsif count % 15 == 0
      @product = Ball.new("purple")
    elsif count % 3 == 0
      @product = Ball.new("blue")
    elsif count % 5 == 0
      @product = Ball.new("green")
    else
      @product = Ball.new("pink")
    end

    respond_to do |format|
      format.json { render json: @product.to_json.to_json ,layout: false}
    end
  end
end
