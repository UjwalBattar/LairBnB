# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listing.delete_all
User.delete_all

User.create!(
  first_name: "Clark",
  last_name: "Kent",
  username: "Superman",
  password: "password",
  email: "superman@mail.com",
  image: "http://www.monologuedb.com/wp-content/uploads/2011/03/SupermanChristopherReeve.jpg"
)
User.create!(
  first_name: "Bruce",
  last_name: "Wayne",
  username: "Batman",
  password: "password",
  email: "batman@mail.com",
  image: "https://cdn.mos.cms.futurecdn.net/2sDGvXSwDRvrJqq9YN5oc4-480-80.jpg"

)
User.create!(
  first_name: "Peter",
  last_name: "Parker",
  username: "Spiderman",
  password: "password",
  email: "spiderman@mail.com",
  image: "http://cdn2-www.superherohype.com/assets/uploads/gallery/spider-man-costumes/amazingspider-mancostumeptsony.jpg"

)

User.create!(
  first_name: "Tony",
  last_name: "Stark",
  username: "Ironman",
  password: "password",
  email: "ironman@mail.com",
  image: "http://cdn2-www.superherohype.com/assets/uploads/gallery/spider-man-costumes/amazingspider-mancostumeptsony.jpg"

)


Listing.create!(

  title: "Wayne Manor",
  category: "Good",
  description: "Batman's Ballin' Bat Pad",
  state: "New York",
  city: "Gotham",
  beds: 5,
  baths: 4,
  guests: 8,
  bedrooms: 5,
  price: 450,
  latitude: 35.4515073,
  longitude: -82.2870588,
  host_id: User.find_by(username: "Batman").id,
  image: "http://media1.break.com/dnet/media/2011/12/22/d36b5d85-fc45-421d-894f-fbe80ad71b5d_thumb.jpeg"
)

Listing.create!(

  title: "Fortress Of Solitude",
  category: "Good",
  description: "Super Pad",
  state: "California",
  city: "San Francisco",
  beds: 1,
  baths: 1,
  guests: 1,
  bedrooms: 1,
  price: 250,
  latitude: 80.076625,
  longitude: 21.038904,
  host_id: User.find_by(username: "Superman").id,
  image: "http://www.geekkafe.com/wp-content/uploads/2018/03/Supermans-Fortress-of-Solitude.jpg"
)
Listing.create!(

  title: "Stark Mansion",
  category: "Good",
  description: "Stark Pad",
  state: "California",
  city: "Malibu",
  beds: 10,
  baths: 8,
  guests: 16,
  bedrooms: 10,
  price: 650,
  latitude: 34.005,
  longitude: -118.8091667,
  host_id: User.find_by(username: "Ironman").id,
  image: "https://vignette.wikia.nocookie.net/ironman/images/6/62/Photo%28128%29.jpg/revision/latest?cb=20130530125452"
)

Listing.create!(

  title: "Evil Batcave",
  category: "Evil",
  description: "Batman's Ballin' Bat Pad",
  state: "New York",
  city: "Gotham",
  beds: 5,
  baths: 4,
  guests: 8,
  bedrooms: 5,
  price: 450,
  latitude: 35.4515073,
  longitude: -82.2870588,
  host_id: User.find_by(username: "Batman").id,
  image: "http://media1.break.com/dnet/media/2011/12/22/d36b5d85-fc45-421d-894f-fbe80ad71b5d_thumb.jpeg"
)

Listing.create!(

  title: "Super Bad Pad",
  category: "Evil",
  description: "Super Pad",
  state: "California",
  city: "San Francisco",
  beds: 1,
  baths: 1,
  guests: 1,
  bedrooms: 1,
  price: 250,
  latitude: 80.076625,
  longitude: 21.038904,
  host_id: User.find_by(username: "Superman").id,
  image: "http://www.geekkafe.com/wp-content/uploads/2018/03/Supermans-Fortress-of-Solitude.jpg"
)

Listing.create!(

  title: "Evil Stark Mansion",
  category: "Evil",
  description: "Stark Pad",
  state: "California",
  city: "Malibu",
  beds: 10,
  baths: 8,
  guests: 16,
  bedrooms: 10,
  price: 650,
  latitude: 34.005,
  longitude: -118.8091667,
  host_id: User.find_by(username: "Ironman").id,
  image: "https://vignette.wikia.nocookie.net/ironman/images/6/62/Photo%28128%29.jpg/revision/latest?cb=20130530125452"
)

Listing.create!(

  title: "Fantasy Bat Mansion",
  category: "Fantasy",
  description: "Batman's Ballin' Bat Pad",
  state: "New York",
  city: "Gotham",
  beds: 5,
  baths: 4,
  guests: 8,
  bedrooms: 5,
  price: 450,
  latitude: 35.4515073,
  longitude: -82.2870588,
  host_id: User.find_by(username: "Batman").id,
  image: "http://media1.break.com/dnet/media/2011/12/22/d36b5d85-fc45-421d-894f-fbe80ad71b5d_thumb.jpeg"
)

Listing.create!(

  title: "Fantasy Fortress",
  category: "Fantasy",
  description: "Super Pad",
  state: "California",
  city: "San Francisco",
  beds: 1,
  baths: 1,
  guests: 1,
  bedrooms: 1,
  price: 250,
  latitude: 80.076625,
  longitude: 21.038904,
  host_id: User.find_by(username: "Superman").id,
  image: "http://www.geekkafe.com/wp-content/uploads/2018/03/Supermans-Fortress-of-Solitude.jpg"
)
Listing.create!(

  title: "Fantasy Stark Mansion",
  category: "Fantasy",
  description: "Stark Pad",
  state: "California",
  city: "Malibu",
  beds: 10,
  baths: 8,
  guests: 16,
  bedrooms: 10,
  price: 650,
  latitude: 34.005,
  longitude: -118.8091667,
  host_id: User.find_by(username: "Ironman").id,
  image: "https://vignette.wikia.nocookie.net/ironman/images/6/62/Photo%28128%29.jpg/revision/latest?cb=20130530125452"
)
