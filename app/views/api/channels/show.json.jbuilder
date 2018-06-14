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
    json.extract! current_user, :id, :display_name, :online_status, :avatar_url
    json.server_ids current_user.sorted_servers
    json.dm_ids dm_user
  end
end
