export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => (listingsObj[listing.id] = listing));

    listings.filter(listing => !this.markers);
  }
}
