#!/usr/bin/env ruby

require 'json'
require 'sinatra'
require 'yaml'

set :port, 8080
set :bind, '0.0.0.0'

before do
  content_type :json
end

post '/format' do
  data = JSON.parse request.body.read
  YAML.dump(data['data'])
end


post '/parse' do
  data = JSON.parse request.body.read
  YAML.load(data['data'])
end

after do
  response.body = JSON.dump(response.body)
end
