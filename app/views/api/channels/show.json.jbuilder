json.channels do
  json.partial! 'api/channels/channel', channel: @channel
end

json.servers do
  json.partial! 'api/servers/server', server: @channel.server
end

json.messages do
  @channel.messages.each do |message|
    json.partial! 'api/messages/message', message: message
  end
end

dm_user = current_user.sorted_dms.map do |dm|
  users = dm.dm_users.select { |user| user.id != current_user.id }
  users.first.id
end

json.users do
  json.set! current_user.id do
    json.partial! 'api/users/user', user: current_user
  end
end
