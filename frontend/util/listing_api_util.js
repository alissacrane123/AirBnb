
export const fetchListings = (filters) => {
  return $.ajax({
    method: 'GET',
    url: '/api/listings',
    data: filters 
  })
}

export const fetchListing = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
  })
}