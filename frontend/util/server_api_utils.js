
export const fetchServer = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${id}`
  })
}

export const deleteServer = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/servers/${id}`
  })
}

export const createServer = (server) => {
  return $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: { server }
  })
}

export const searchServer = (server) => {
  return $.ajax({
    method: 'GET',
    url: 'api/searches/servers',
    data: { server }
  })
}
