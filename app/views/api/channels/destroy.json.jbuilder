json.channels do
  json.extract! @channel, :id
end

json.servers do
  json.set! @server.id do
    json.extract! @server, :id, :name, :creator_id, :image_url
    json.user_ids @server.user_ids
    json.channel_ids @server.sorted_channels
  end
end
