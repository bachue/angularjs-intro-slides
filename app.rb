require 'sinatra'
require 'sinatra/json'

set :port, 8000
set :public_folder, File.dirname(__FILE__)

get '/' do
  send_file(settings.root + '/index.html')
end

get '/shopping/items' do
  json [
    {title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
    {title: 'Polka dots', description: 'Dots with polka', price: 2.95},
    {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
  ]
end