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

ActiveRecord::Schema.define(version: 20180520051757) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "guest_id", null: false
    t.date "from_date", null: false
    t.date "to_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "guests", default: 1, null: false
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.string "city"
    t.string "state"
    t.string "country"
    t.integer "zip_code"
    t.string "category", null: false
    t.text "description", null: false
    t.text "amenities"
    t.text "rules"
    t.float "latitude"
    t.float "longitude"
    t.integer "host_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_booked?", default: false
    t.string "image"
    t.integer "price"
    t.integer "beds"
    t.integer "guests"
    t.integer "bedrooms"
    t.integer "baths"
    t.string "street_address"
    t.string "address"
    t.string "host_name", null: false
    t.index ["category"], name: "index_listings_on_category"
    t.index ["city"], name: "index_listings_on_city"
    t.index ["state"], name: "index_listings_on_state"
    t.index ["title"], name: "index_listings_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "date_of_birth"
    t.string "image", default: "http://images.goodsmile.info/cgm/images/product/20170606/6486/45777/large/0f78fbdf148fd7d0da70b85ad091dd4d.jpg"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
