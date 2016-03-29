class Api::UsersController < ApplicationController

  def create
    @user.create!(user_params)
    render :show
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
