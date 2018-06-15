dm_user = user.sorted_dms.map do |dm|
  users = dm.dm_users.select { |user| user.id != current_user.id }
  users.first.id
end

friends_obj = user.confirmed_friends

json.extract! user, :id, :display_name, :online_status, :avatar_url
json.server_ids user.sorted_servers
json.dm_ids dm_user
json.friend_ids friends_obj[:friends]
json.friend_req_ids friends_obj[:friend_reqs]
