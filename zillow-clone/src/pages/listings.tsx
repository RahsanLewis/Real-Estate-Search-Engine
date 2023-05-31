import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getProperties } from '../../lib/api/realtyInUs';
import Listing from '../components/listing';  // Import the Listing component

type Address = {
    city: string;
    line: string;
    postal_code: string;
    state: string;
};

type Photo = {
    description: string;
    href: string;
};

type ListingType = {
    property_id: string;
    prop_type: string;
    price: number;
    year_built: number;
    permalink: string;
    address: Address;
    beds: number;
    baths: number;
    sqft: number;
    photos: Photo[];
};


const ListingsPage = () => {
    const [listings, setListings] = useState<ListingType[]>([]);
    const router = useRouter();

    const fetchPhotos = async (property_id: string) => {
        const url = `https://realty-in-us.p.rapidapi.com/properties/v3/get-photos?property_id=${property_id}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ab4a8e1955msh144c1ad6b657b22p1be9fbjsn21abce5c3ba7',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result.photos;  // Return the photos
        } catch (error) {
            console.error(error);
        }
    };

    const fetchData = async () => {
        try {
            if (router.query.zipcode) {
                const data = await getProperties(router.query.zipcode);
                if (data && data.autocomplete) {
                    // Fetch photos for each property
                    for (let listing of data.autocomplete) {
                        listing.photos = await fetchPhotos(listing.property_id);
                    }
                    setListings(data.autocomplete);
                }
            }
        } catch (error) {
            console.error('Failed to fetch properties:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [router.query]);

    return (
        <div>
            {Array.isArray(listings) && listings.map((listing, index) => (
                <Listing key={index} listing={listing} />
            ))}

        </div>
    );
};

export default ListingsPage;
