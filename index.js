// Alvon Jovanus Chandra

// SOLUTION
// -Menggunakan cache storage untuk menyimpan lokasi-lokasi yang pernah dikunjungi. Sangat memungkinkan bagi karyawan untuk mengunjungi tempat-tempat yang sama lagi. Oleh karena itu, tidak perlu melakukan request ke Google Maps lagi jika lokasinya sudah ada, langsung saja mengambil lokasi yang telah disimpan didalam storage.
// -Mengganti layanan geolocation yang lebih ekonomis atau bahkan gratis seperti OpenStreetmap (https://www.openstreetmap.org/), Leaflet (https://leafletjs.com/), dan lain-lain.

// Storage for storing latlng and address
// EXAMPLE
// {'-6.2_106.816666': 'Jl. Dukuh Pinggir II No.5A, RW.5, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230, Indonesia'}
const storage = {};

// Initialise Map
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    // Jakarta
    center: { lat: -6.2, lng: 106.816666 },
  });
  const geocoder = new google.maps.Geocoder();
  const infowindow = new google.maps.InfoWindow();

  // Button for submitting attendance
  document.getElementById('submit').addEventListener('click', () => {
    const address = geocodeLatLng(geocoder, map, infowindow);

    // Check if address exist, then attendance is successful
    if (address) console.log(`Karyawan telah absen di alamat: ${address}`);
  });
}

// Get address
function geocodeLatLng(geocoder, map, infowindow) {
  const input = document.getElementById('latlng').value;
  const latlngStr = input.split(',', 2);
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };

  const storageKey = `${latlng.lat}_${latlng.lng}`;

  // Check if latlng is already in storage
  // If true then return the address
  // If false then continue fetch from API
  if (storage[storageKey]) return storage[storageKey];

  // Fetch address from API
  geocoder
    .geocode({ location: latlng })
    .then(response => {
      if (response.results[0]) {
        map.setZoom(11);

        const marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });

        // Add the address to the storage
        const address = response.results[0].formatted_address;
        storage[storageKey] = address;
        infowindow.setContent(address);
        infowindow.open(map, marker);

        return address;
      } else {
        window.alert('No results found');
      }
    })
    .catch(e => window.alert('Geocoder failed due to: ' + e));
}

window.initMap = initMap;
