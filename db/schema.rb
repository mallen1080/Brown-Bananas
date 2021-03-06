# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160504153317) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "castings", force: :cascade do |t|
    t.integer  "actor_id",   null: false
    t.integer  "movie_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "directors", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string   "title",              null: false
    t.text     "image_url",          null: false
    t.text     "trailer_url",        null: false
    t.integer  "genre_id",           null: false
    t.date     "in_theaters",        null: false
    t.date     "on_dvd"
    t.integer  "director_id",        null: false
    t.text     "consensus",          null: false
    t.text     "description",        null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "movies", ["title"], name: "index_movies_on_title", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "movie_id",   null: false
    t.boolean  "value",      null: false
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",          null: false
    t.string   "password_digest",   null: false
    t.string   "session_token",     null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "favorite_genre_id", null: false
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
