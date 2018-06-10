json.servers do
  json.partial! 'api/servers/show', server: channel.server
end

json.users do
  channel.server.users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end
