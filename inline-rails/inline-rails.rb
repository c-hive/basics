begin
  require "bundler/inline"
rescue LoadError => e
  $stderr.puts "Bundler version 1.10 or later is required. Please update your Bundler"
  raise e
end

gemfile(true) do
  source "https://rubygems.org"

  gem 'rails', '~> 6.0.0'
end

require "action_controller/railtie"

class App < Rails::Application
  routes.append do
    get "/hello/world" => "hello#world"
  end

  config.consider_all_requests_local = true # display errors
end

class HelloController < ActionController::API
  def world
    render json: {hello: :world}
  end
end

App.initialize!

Rack::Server.new(app: App, Port: 3000, daemonize: true).start
