class HomeController < ApplicationController
  def index

  end

  def lyrics
    title = params[:title]
    artist = params[:artist]
    fetcher = Lyricfy::Fetcher.new
    song = fetcher.search artist, title
    render json: song
  end
end
