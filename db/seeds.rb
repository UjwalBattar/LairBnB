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
  first_name: "Bruce",
  last_name: "Wayne",
  username: "Batman",
  password: "password",
  email: "batman@mail.com",
  image: "http://jonvilma.com/images/batman-4.jpg"

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
  image: "https://imgs.inkfrog.com/pix/mymetallic/Ironman-voice-4.gif"

)

User.create!(
  first_name: "Arthur",
  last_name: "Curry",
  username: "Aquaman",
  password: "password",
  email: "aquaman@mail.com",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Aquaman_Vol_8_16_Variant.png/170px-Aquaman_Vol_8_16_Variant.png"

)

User.create!(
  first_name: "Stephen",
  last_name: "Strange",
  username: "Doctor Strange",
  password: "password",
  email: "doctorstrange@mail.com",
  image: "https://vignette.wikia.nocookie.net/marveldatabase/images/9/9a/Stephen_Strange_%28Earth-199999%29_from_Doctor_Strange_%28film%29_002.jpg/revision/latest?cb=20161030214728"

)

User.create!(
  first_name: "Charles",
  last_name: "Xavier",
  username: "Professor-X",
  password: "password",
  email: "professorx@mail.com",
  image: "https://vignette.wikia.nocookie.net/marveldatabase/images/9/9a/Stephen_Strange_%28Earth-199999%29_from_Doctor_Strange_%28film%29_002.jpg/revision/latest?cb=20161030214728"

)

User.create!(
  first_name: "Thor",
  last_name: "Odinson",
  username: "Thor",
  password: "password",
  email: "thor@mail.com",
  image: "http://www.indiewire.com/wp-content/uploads/2017/03/thor-the-dark-world.jpg?w=780"

)

User.create!(
  first_name: "Diana",
  last_name: "Prince",
  username: "Wonder Woman",
  password: "password",
  email: "wonderwoman@mail.com",
  image: "https://assets.change.org/photos/7/wk/bh/pUWkBhduwOtRAVV-800x450-noPad.jpg?1509858171"

)

User.create!(
  first_name: "Kara",
  last_name: "Danvers",
  username: "Supergirl",
  password: "password",
  email: "supergirl@mail.com",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oV2IlohSLVAcRnENGMLzJiID5faCqVoXkQ56OOhzRvKPXlPRaw"

)

User.create!(
  first_name: "Ororo",
  last_name: "Munroe",
  username: "Storm",
  password: "password",
  email: "storm@mail.com",
  image: "https://media.salon.com/2014/05/xmen_storm.jpg"

)

User.create!(
  first_name: "Hal",
  last_name: "Jordan",
  username: "Green Lantern",
  password: "password",
  email: "greenlantern@mail.com",
  image: "https://images-na.ssl-images-amazon.com/images/I/71lqGmlqCPL.jpg"

)

User.create!(
  first_name: "Steve",
  last_name: "Rogers",
  username: "Captain America",
  password: "password",
  email: "captainamerica@mail.com",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Captain_America_%28Steve_Rogers%29_All_New_All_Different_Marvel_version.jpg/170px-Captain_America_%28Steve_Rogers%29_All_New_All_Different_Marvel_version.jpg"

)

User.create!(
  first_name: "Susan",
  last_name: "Storm",
  username: "Invisible Woman",
  password: "password",
  email: "invisiblewoman@mail.com",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Invisible_Woman_%28Jessica_Alba%29.jpg/170px-Invisible_Woman_%28Jessica_Alba%29.jpg"

)

User.create!(
  first_name: "James (Logan)",
  last_name: "Howlett",
  username: "Wolverine",
  password: "password",
  email: "wolverine@mail.com",
  image: "https://consequenceofsound.files.wordpress.com/2016/10/hugh-jackman-wolverine-logan.png?w=807"

)

User.create!(
  first_name: "Matthew",
  last_name: "Murdock",
  username: "Daredevil",
  password: "password",
  email: "daredevil@mail.com",
  image: "https://pmcvariety.files.wordpress.com/2013/06/daredevil-red-costume.jpg?w=1000&h=562&crop=1"

)

User.create!(
  first_name: "Bruce",
  last_name: "Banner",
  username: "Hulk",
  password: "password",
  email: "hulk@mail.com",
  image: "https://qph.fs.quoracdn.net/main-qimg-768b4acc5d5e9082624cad9072d6bdd2-c"

)

Listing.create!(

  title: "Wayne Manor",
  category: "Good",
  description: "Batman's Ballin' Bat Pad Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "New York",
  city: "Gotham",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 35.4515073,
  longitude: -82.2870588,
  host_name: "Batman",
  host_id: User.find_by(username: "Batman").id,
  image: "http://media1.break.com/dnet/media/2011/12/22/d36b5d85-fc45-421d-894f-fbe80ad71b5d_thumb.jpeg"
)

Listing.create!(

  title: "Fortress Of Solitude",
  category: "Good",
  description: "Super Pad Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "California",
  city: "San Francisco",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 80.076625,
  longitude: 21.038904,
  host_name: "Superman",
  host_id: User.find_by(username: "Superman").id,
  image: "http://www.geekkafe.com/wp-content/uploads/2018/03/Supermans-Fortress-of-Solitude.jpg"
)

Listing.create!(

  title: "Stark Mansion",
  category: "Good",
  description: "Stark Pad Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "California",
  city: "Malibu",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 34.005,
  longitude: -118.8091667,
  host_name: "Ironman",
  host_id: User.find_by(username: "Ironman").id,
  image: "https://vignette.wikia.nocookie.net/marvelmovies/images/7/7c/TonyStarkMantion-IM3.png/revision/latest/scale-to-width-down/1000?cb=20131127033251"
)

Listing.create!(

  title: "Atlantis",
  category: "Good",
  description: "Aquaman's Kindom iunder the water Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "n/a",
  city: "Atlantis",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 31.2543139,
  longitude: -24.2584806,
  host_name: "Aquaman",
  host_id: User.find_by(username: "Aquaman").id,
  image: "https://community-content-assets.minecraft.net/upload/a8a102e3a82226810c162305a9838001-imageheader.jpg"
)

Listing.create!(

  title: "Sanctum Santorum",
  category: "Good",
  description: "Sanctum Santorum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "New York",
  city: "New York",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 40.7302800,
  longitude: -74.0025000,
  host_name: "Doctor Strange",
  host_id: User.find_by(username: "Doctor Strange").id,
  image: "https://fsmedia.imgix.net/ac/df/31/2d/89fe/451e/be74/a182a77f5528/sanctum-sanctorum.jpeg?rect=0%2C77%2C846%2C423&dpr=2&auto=format%2Ccompress&w=650"
)

Listing.create!(

  title: "X-Mansion",
  category: "Good",
  description: "X-Mansion Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "North Salem",
  city: "New York",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 41.335514,
  longitude: -73.597456,
  host_name: "Professor-X",
  host_id: User.find_by(username: "Professor-X").id,
  image: "https://vignette.wikia.nocookie.net/xmenmovies/images/6/67/Xavier%27s_Institute_Rebuilt_%28X-Mansion_-_1983%29.png/revision/latest/scale-to-width-down/640?cb=20170318012839"
)

Listing.create!(

  title: "Asgard",
  category: "Good",
  description: "Asgard, Home of Thor Odinson Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "Asgard",
  city: "Asgard",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 60.4720000,
  longitude: 8.4689000,
  host_name: "Batman",
  host_id: User.find_by(username: "Batman").id,
  image: "http://thewake.wdfiles.com/local--files/little-asgard/008.jpg"
)

Listing.create!(

  title: "Paradise Island",
  category: "Good",
  description: "Wonderous Paradise Island Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "Themyscira",
  city: "Themyscira",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 40.632402,
  longitude: 14.602999,
  host_name: "Wonder Woman",
  host_id: User.find_by(username: "Wonder Woman").id,
  image: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1477342854%2Fpositano-amalfi-coast-italy-AMALFI1024.jpg%3Fitok%3DAa5bXDAF&w=1800&q=70"
)
Listing.create!(

  title: "Supergirl SF",
  category: "Good",
  description: "Supergirl's home in San Francisco Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "California",
  city: "San Francisco",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 37.788283,
  longitude: -122.403177,
  host_name: "Supergirl",
  host_id: User.find_by(username: "Supergirl").id,
  image: "https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/usa-and-canada/california/san-francisco/guest-rooms/rcsf_pres_ste_balcony_v1.png"
)

Listing.create!(

  title: "Storm's Home",
  category: "Good",
  description: "Storm's Home in Madripoor Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "Madripoor",
  city: "Madripoor",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 1.3521000,
  longitude: 103.8198000,
  host_name: "Storm ",
  host_id: User.find_by(username: "Storm").id,
  image: "https://discoversg.com/wp-content/uploads/sites/32/2016/11/opulent-homes-singapore-1024x535.png"
)

Listing.create!(

  title: "OA Green Lantern",
  category: "Good",
  description: "Green Lantern's Home in Oa Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "Oa",
  city: "Madripoor",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 34.4208000,
  longitude: -119.6982000,
  host_name: "Green Lantern",
  host_id: User.find_by(username: "Green Lantern").id,
  image: "https://blog1.fkimg.com/wp-content/uploads/2015/10/Santa-Barbara-Home.jpg"
)

Listing.create!(

  title: "Captain America's Pad",
  category: "Good",
  description: "Captain America's Patriotic Pad Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "New York",
  city: "New York",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 40.6782000,
  longitude: -73.9442000,
  host_name: "Captain America",
  host_id: User.find_by(username: "Captain America").id,
  image: "http://cdn.home-designing.com/wp-content/uploads/2014/07/captain-america-decor.jpg"
)

Listing.create!(

  title: "Wolverine's Solace",
  category: "Good",
  description: "Wolverine's Solace Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "Alberta",
  city: "Canada",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 53.9333000,
  longitude: -116.5765000,
  host_name: "Wolverine",
  host_id: User.find_by(username: "Wolverine").id,
  image: "http://whistlerwired.com/wp-content/uploads/accommodation/626/full-size/1-Wolf-Exterior.jpg"
)

Listing.create!(

  title: "Daredevin in SF",
  category: "Good",
  description: "Daredevil's SF House Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "California",
  city: "San Francisco",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 37.7930000,
  longitude: -122.4161000,
  host_name: "Daredevil",
  host_id: User.find_by(username: "Daredevil").id,
  image: "https://medias.spotern.com/spots/w1280/2271.jpg"
)

Listing.create!(

  title: "Hulk Home",
  category: "Good",
  description: "Hulk's House in Dayton Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "Ohio",
  city: "Dayton",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 39.7589000,
  longitude: -84.1916000,
  host_name: "Hulk",
  host_id: User.find_by(username: "Hulk").id,
  image: "http://www.thestudiotour.com/movies/hulk2003/1.jpg"
)

Listing.create!(

  title: "Fantastic Four HQ, Baxter Building",
  category: "Good",
  description: "Fantastic Four HQ, Baxter Building Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  state: "New York",
  city: "New York",
  beds: (rand(10) + 1),
  baths: (rand(10) + 1),
  guests: (rand(30) + 1),
  bedrooms: (rand(20) + 1),
  price: (rand(1000) + 1),
  latitude: 40.758896,
  longitude: -73.985130,
  host_name: "Invisible Woman",
  host_id: User.find_by(username: "Invisible Woman").id,
  image: "https://img00.deviantart.net/420c/i/2017/302/b/e/baxter_building___fantastic_4_fanart_by_waldziur-dbs2d1s.jpg"
)
