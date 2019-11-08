begin
  require "bundler/inline"
rescue LoadError => e
  $stderr.puts "Bundler version 1.10 or later is required. Please update your Bundler"
  raise e
end

gemfile(true) do
  source "https://rubygems.org"

  gem "rspec"
end

require "rspec/autorun"

RSpec.configure do |config|
  config.formatter = "documentation"
  config.order = "rand"
end

RSpec.describe "it", :aggregate_failures do
  it "works" do
    expect(1).to eq(1)
  end
end
