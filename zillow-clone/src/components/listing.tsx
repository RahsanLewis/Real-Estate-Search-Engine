import React from 'react';

interface ListingProps {
  listing: {
    property_id: string;
    prop_type: string;
    price: number;
    year_built: number;
    address: {
      city: string;
      line: string;
      postal_code: string;
      state: string;
    },
    beds: number;
    baths: number;
    sqft: number;
    photos?: Array<{ description: string, href: string }>;
  };
}

const Listing: React.FC<ListingProps> = ({ listing }) => {
  return (
    <div>
      <h2>{listing.address?.line}, {listing.address?.city}, {listing.address?.state} {listing.address?.postal_code}</h2>
      <p>Type: {listing.prop_type}</p>
      <p>Price: ${listing.price}</p>
      <p>Year Built: {listing.year_built}</p>
      <p>Bedrooms: {listing.beds}</p>
      <p>Bathrooms: {listing.baths}</p>
      <p>Square Feet: {listing.sqft}</p>
      {listing.photos && listing.photos[0] &&
        <img src={listing.photos[0].href} alt="Property" />
      }
    </div>

  );
};

export default Listing;
