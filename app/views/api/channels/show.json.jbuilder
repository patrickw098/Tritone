json.channels do
  json.set! @channel.id do
    json.extract! @channel, :id, :name
  end
end

json.servers do
  json.set! @channel.server.id do
    json.extract! @channel.server, :id, :name
    json.user_ids @channel.server.user_ids
    json.channel_ids @channel.server.channel_ids
  end
end
