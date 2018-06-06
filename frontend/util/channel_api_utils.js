
export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${id}`
  })
}

export const updateServer = (server) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/servers/${server.id}`,
    data: { server }
  })
}

export const deleteChannel = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/servers/${id}`
  })
}

export const createChannel = (server) => {
  return $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: { server }
  })
}
