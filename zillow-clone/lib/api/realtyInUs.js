const API_HOST = 'https://realty-in-us.p.rapidapi.com';
const API_LOCATIONS_ENDPOINT = '/locations/v2/auto-complete';

export async function getProperties(location) {
  const params = new URLSearchParams({ input: location, limit: 10 });
  const response = await fetch(`${API_HOST}${API_LOCATIONS_ENDPOINT}?${params}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
      'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
    }
  });

  console.log('API response:', response);

  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }

  // Log the raw response
  const text = await response.text();
  console.log('Raw response:', text);

  // Parse the response as JSON
  const data = JSON.parse(text);
  
  return data;
}
