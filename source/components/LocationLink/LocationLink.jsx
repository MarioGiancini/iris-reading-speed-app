import React from 'react';

import { Location } from 'Models/Results';

const LocationLink = ({ location }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`}
  >
    [{location.latitude}, {location.longitude}]
  </a>
);

LocationLink.propTypes = {
  location: Location.isRequired,
};

export { LocationLink };
