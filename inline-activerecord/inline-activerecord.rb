begin
  require "bundler/inline"
rescue LoadError => e
  $stderr.puts "Bundler version 1.10 or later is required. Please update your Bundler"
  raise e
end

a = gemfile(true) do
  source "https://rubygems.org"

  gem "activerecord", "5.2.0"
  gem "sqlite3", "1.3.13"
  gem "rake", "~> 10.0"
  gem "rspec", "~> 3.0"
  gem "faker"
  gem "factory_bot"
end

require "active_record"
require "rspec/autorun"

def load_active_record_tasks(database_configuration:, root:, db_dir: root, migrations_paths: [root], env: "development", seed_loader: nil)
  include ActiveRecord::Tasks
  DatabaseTasks.database_configuration = database_configuration
  DatabaseTasks.root = root
  DatabaseTasks.db_dir = db_dir
  DatabaseTasks.migrations_paths = migrations_paths
  DatabaseTasks.env = env
  DatabaseTasks.seed_loader = seed_loader

  task :environment do
    ActiveRecord::Base.configurations = DatabaseTasks.database_configuration
    ActiveRecord::Base.establish_connection DatabaseTasks.env.to_sym
  end

  load 'active_record/railties/databases.rake'
end

root = Pathname.new(".")
sqlite3_config = {
  "development" => {
    "adapter" => "sqlite3",
    "database" => "development.sqlite3"
  }
}

load_active_record_tasks(database_configuration: sqlite3_config, root: root)

def define_db
  ActiveRecord::Schema.define do
    create_table :users do |t|
      t.timestamps
      t.string :email
    end
  end
end

class User < ActiveRecord::Base; end

FactoryBot.define do
  factory :user do
    id { Faker::Number.unique.number(digits: 9) }
    email { Faker::Internet.email }
  end
end

RSpec.configure do |config|
  config.formatter = "documentation"
  config.order = "rand"
  config.include FactoryBot::Syntax::Methods

  config.before(:all) do
    Rake::Task["db:drop"].invoke
    Rake::Task["db:drop"].reenable
    Rake::Task["db:create"].invoke
    Rake::Task["db:create"].reenable
    define_db
  end

  config.after(:all) do
    Rake::Task["db:drop"].invoke
    Rake::Task["db:drop"].reenable
  end
end

RSpec.describe "User", :aggregate_failures do
  before do
    create(:user)
  end

  it "exists" do
    expect(User.first).to be
  end
end
