json.user do
  json.partial! 'api/users/user', user: @user
end

json.servers do
  @user.servers.each do |server|
    json.partial! 'api/servers/server', server: server
  end
end

# json.channels do
#   @user.channels.each do |channel|
#     json.set! channel.id do
#       json.extract! channel, :id, :name, :message_ids
#     end
#   end
# end
