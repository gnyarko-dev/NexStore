import opencage from 'opencage-api-client';

// Forward Geocode: Convert an address to latitude and longitude
export const getGeocode = async (address) => {
  try {
    const data = await opencage.geocode({ q: address });

    if (data.status.code === 200 && data.results.length > 0) {
      const location = data.results[0].geometry;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error(`Geocoding failed: ${data.status.message}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    if (error.status && error.status.code === 402) {
      console.log('Hit free trial daily limit');
    }
    throw error;
  }
};

// Reverse Geocode: Convert latitude and longitude to an address
export const getReverseGeocode = async (lat, lng) => {
  try {
    const data = await opencage.geocode({ q: `${lat}, ${lng}` });

    if (data.status.code === 200 && data.results.length > 0) {
      const place = data.results[0];
      return place.formatted;  // Return the formatted address
    } else {
      throw new Error(`Reverse geocoding failed: ${data.status.message}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    if (error.status && error.status.code === 402) {
      console.log('Hit free trial daily limit');
    }
    throw error;
  }
};
