class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render :show
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :favorite_genre_id)
  end

end
