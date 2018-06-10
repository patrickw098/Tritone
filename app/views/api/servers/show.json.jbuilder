json.servers do
  json.partial! 'api/servers/server', server: @server
end

json.channels do
  @server.channels.each do |channel|
    json.partial! 'api/channels/channel', channel: channel
  end
end

json.users do
  @server.users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end
