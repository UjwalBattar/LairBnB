export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => (listingsObj[listing.id] = listing));

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing));

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]));
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(
      listing.latitude,
      listing.longitude
    );
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id
    });

    marker.addListener("click", () => this.handleClick(listing));
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}
//
// marker.addListener('click', () => this.handleClick(bench));
// this.markers[marker.benchId] = marker;
// if usimg this, must pass handleClick to invocation of handleClick->
// this.createMarkerFromListing(newListing, handleClick)
