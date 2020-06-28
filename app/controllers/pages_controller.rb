class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :bio, :contact]

  def home
  end

  def bio
  end

  def contact
  end
end
