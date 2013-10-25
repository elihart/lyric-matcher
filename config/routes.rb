LyricMatcher::Application.routes.draw do

  root 'home#index'

  get ':controller(/:action(/:id))'

end
