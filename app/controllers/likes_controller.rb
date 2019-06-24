class Api::LikesController < ApplicationController
    def create
        @like = Like.new
        @like.user_id = current_user.user_id
        @like.picture_id = params[:picture_id]
        if @like.save
            @picture = Picture.find(@like.picture_id)
            @user = User.find(@like.user_id)

            render :show
        else
             render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like
            @like.destroy
            @picture = Picture.find(@like.picture_id)
            @user = User.find(@like.user_id)
            render :show
        else
            render ["Like does not exist!"]
        end
    end

end