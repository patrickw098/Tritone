json.user do
  json.partial! 'api/users/user', user: @user
end

json.servers do
  @user.servers.each do |server|
    json.partial! 'api/servers/server', server: server
  end
end

json.server_memberships do
  @user.server_memberships.each do |server_membership|
    json.set! server_membership.id do
      json.extract! server_membership, :server_id
    end
  end
end

json.channels do
  @user.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :id, :name
      json.message_ids channel.sorted_messages
    end
  end

  @user.dm_channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :id, :name
      json.message_ids channel.sorted_messages
    end
  end
end

json.dms do
  @user.dms.each do |dm|
    dm_user = dm.dm_users.select { |user| user.id != current_user.id }
    dm_user = dm_user.first
    json.set! dm_user.id do
      json.name dm_user.display_name
      json.user_id dm_user.id
      json.color dm_user.avatar_url
      json.server_id dm.id
      json.channel_id dm.channel_ids.first
    end
  end
end
