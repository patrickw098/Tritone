
export const fetchServer = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  })
}

export const searchServer = (channel) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/`,
    data: { channel }
  })
}

export const deleteServer = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/channels/${id}`
  })
}

export const createServer = (channel) => {
  return $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: { channel }
  })
}
