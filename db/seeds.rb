# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create!(
#   first_name: "Clark",
#   last_name: "Kent",
#   username: "Superman",
#   password: "password",
#   email: "superman@mail.com",
#   image: "http://www.monologuedb.com/wp-content/uploads/2011/03/SupermanChristopherReeve.jpg"
# )
# User.create!(
#   first_name: "Bruce",
#   last_name: "Wayne",
#   username: "Batman",
#   password: "password",
#   email: "batman@mail.com",
#   image: "https://cdn.mos.cms.futurecdn.net/2sDGvXSwDRvrJqq9YN5oc4-480-80.jpg"
#
# )
# User.create!(
#   first_name: "Peter",
#   last_name: "Parker",
#   username: "Spiderman",
#   password: "password",
#   email: "spiderman@mail.com",
#   image: "http://cdn2-www.superherohype.com/assets/uploads/gallery/spider-man-costumes/amazingspider-mancostumeptsony.jpg"
#
# )

Listing.create!(

  title: "Wayne Manor",
  category: "Good",
  description: "Batman's Ballin' Bat Pad",
  state: "New York",
  city: "Gotham",
  latitude: 35.4515073,
  longitude: -82.2870588,
  host_id: User.find_by(username: "Batman").id,
  image: "http://media1.break.com/dnet/media/2011/12/22/d36b5d85-fc45-421d-894f-fbe80ad71b5d_thumb.jpeg"
)

Listing.create!(

  title: "Fortress Of Solitude",
  category: "Good",
  description: "Super Pad",
  state: "New York",
  city: "Gotham",
  latitude: 80.076625,
  longitude: 21.038904,
  host_id: User.find_by(username: "Superman").id,
  image: "http://www.geekkafe.com/wp-content/uploads/2018/03/Supermans-Fortress-of-Solitude.jpg"
)
