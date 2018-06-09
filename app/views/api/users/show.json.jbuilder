json.user do
  json.extract! @user, :id, :avatar_url, :display_name, :online_status
  json.server_ids @user.sorted_servers
end

json.servers do
  @user.servers.each do |server|
    json.set! server.id do
      json.extract! server, :id, :name
      json.channel_ids server.channel_ids
      json.user_ids server.user_ids
    end
  end
end

# json.channels do
#   @user.channels.each do |channel|
#     json.set! channel.id do
#       json.extract! channel, :id, :name, :message_ids
#     end
#   end
# end
