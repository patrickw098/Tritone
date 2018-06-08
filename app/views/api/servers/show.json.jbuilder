json.servers do
  json.set! @server.id do
    json.extract! @server, :id, :name
    json.user_ids @server.user_ids
    json.channel_ids @server.channel_ids
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :id, :name, :message_ids
    end
  end
end

json.users do
  @server.users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :display_name, :avatar_url
      json.server_ids user.sorted_servers
    end
  end
end
