json.set! server.id do
  json.extract! server, :id, :name
  json.user_ids server.user_ids
  json.channel_ids server.channel_ids
end
