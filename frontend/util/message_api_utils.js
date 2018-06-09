export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages/',
    data: { message }
  })
}

export const deleteMessage = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/messages/${id}`
  })
}
