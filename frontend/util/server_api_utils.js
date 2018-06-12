
export const fetchServer = (id) => {
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
    url: '/api/searches/servers',
    data: { server }
  })
}

export const joinServer = (server) => {
  return $.ajax({
    method: 'POST',
    url: '/api/server_memberships',
    data: { membership: { server_id: server.id } }
  })
}

export const leaveServer = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/server_memberships/${id}`
  })
}

export const createDm = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/dm_memberships`,
    data: { membership: { user_id: id } }
  })
}
