export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
}

export const searchUsers = user => {
  return $.ajax({
    method: 'GET',
    url: '/api/searches/users',
    data: { user }
  })
}
