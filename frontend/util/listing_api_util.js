
export const fetchListings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/listings'
  })
}

