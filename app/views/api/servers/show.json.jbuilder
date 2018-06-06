json.servers do
  json.set! @server.id do
    json.extract! @server, :id, :name
    json.channel_ids @server.channel_ids
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :id, :name
    end
  end
end
