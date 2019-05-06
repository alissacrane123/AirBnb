Listing.destroy_all
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# listings:

Listing.create!(
  owner_id: 1,
  name: 'VolkSwagen',
  description: 'Is there anything better than a roadtrip? This VW classic is perfect for a cross country voyage or weekend camping trip.',
  price: 100.00,
  address: '1570 31st ave',
  city: 'san francisco',
  state: 'ca',
  zipcode: 94122,
  lat: 37.757489,
  lng: -122.489937
)

Listing.create!(
  owner_id: 2,
  name: 'Big Betsy',
  description: 'This ol gal is ready to take you and your fam on the trip of a lifetime!',
  price: 90.00,
  address: '601 19th ave',
  city: 'san francisco',
  state: 'ca',
  zipcode: 94121,
  lat: 37.776286,
  lng: -122.477659
)

Listing.create!(
  owner_id: 3,
  name: 'RoadRunner',
  description: 'best van ever',
  price: 100.00,
  address: '3049 23rd st',
  city: 'san francisco',
  state: 'ca',
  zipcode: 94110,
  lat: 37.754069,
  lng: -122.412464
)

Listing.create!(
  owner_id: 3,
  name: 'Speed Demon',
  description: 'This van will get you where you need to go fast!',
  price: 100.00,
  address: '700 state street',
  city: 'santa barbara',
  state: 'ca',
  zipcode: 93101,
  lat: 34.419064,
  lng: -119.698047
)