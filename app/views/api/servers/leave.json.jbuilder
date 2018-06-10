json.servers do
  json.partial! 'api/servers/server', server: @server
end

json.channels do
  @server.channels.each do |channel|
    json.partial! 'api/channels/channel', channel: channel
  end
end

json.users do
  json.set! current_user.id do
      json.partial! 'api/users/user', user: current_user
  end
end


json.server_memberships do
  current_user.server_memberships.each do |server_membership|
    json.set! server_membership.id do
      json.extract! server_membership, :server_id
    end
  end
end
