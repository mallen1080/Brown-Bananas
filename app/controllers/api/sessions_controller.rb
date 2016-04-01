class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)
    if @user
      login!(@user)
      render :user
    else
      @errors = ["Invalid username or password"]
      render :user
    end
  end

  def destroy
    logout!
    render json: {}
  end

  def show
    render json: current_user || {}
  end

end
