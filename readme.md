# Optimize Reverse Geocoding

## Solusi

- Menggunakan cache storage untuk menyimpan lokasi-lokasi yang pernah dikunjungi. Sangat memungkinkan bagi karyawan untuk mengunjungi tempat-tempat yang sama lagi. Oleh karena itu, tidak perlu melakukan request ke Google Maps lagi jika lokasinya sudah ada, langsung saja mengambil lokasi yang telah disimpan didalam storage.
- Mengganti layanan geolocation yang lebih ekonomis atau bahkan gratis seperti OpenStreetmap (https://www.openstreetmap.org/), Leaflet (https://leafletjs.com/), dan lain-lain.
