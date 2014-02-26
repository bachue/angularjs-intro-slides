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

users = [
  {:id => 1, :name => 'pokonski'},
  {:id => 2, :name => 'takezoe'},
  {:id => 3, :name => 'jhjguxin'},
  {:id => 4, :name => 'mthiede'}
]

get '/users' do
  json users
end

get '/users/:id' do
  json users.find {|user| user[:id] == params[:id].to_i }
end

post '/users' do
  users << {:id => users.size + 1, :name => params[:name]}
  json users.last
end

post '/users/:id' do
  user = users.find {|user| user[:id] == params[:id].to_i }
  user[:name] = params[:name]
  json user
end

delete '/users/:id' do
  users.reject! {|user| user[:id] == params[:id].to_i }
  nil
end
