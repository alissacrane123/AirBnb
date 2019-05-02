
export const fetchListings = (filters) => {
  return $.ajax({
    method: 'GET',
    url: '/api/listings',
    data: filters 
  })
}

