export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages/',
    data: { message }
  })
}
