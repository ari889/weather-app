const data = [
  {
    name: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    name: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    name: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    name: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    name: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    name: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
];

export function getLocations() {
  return data;
}

export function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((loc) => loc.name === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      name: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}
