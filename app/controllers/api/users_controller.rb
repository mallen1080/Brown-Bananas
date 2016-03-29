class Api::UsersController < ApplicationController

  def create
    @user = User.create!(user_params)
    render :show
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :favorite_genre_id)
  end

end
