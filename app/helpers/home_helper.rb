module HomeHelper

  def create_ball(count)
    if count == 1
      Ball.new("pink")
    elsif count % 15 == 0
      Ball.new("purple")
    elsif count % 3 == 0
      Ball.new("blue")
    elsif count % 5 == 0
      Ball.new("green")
    else
      Ball.new("pink")
    end
  end
end
