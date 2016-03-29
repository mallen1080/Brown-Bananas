class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)

    if @user
      login!(@user)
      render :user
    else
      @errors = "Invalid username or password"
    end
  end

  def destroy
    logout!
    
  end

end
