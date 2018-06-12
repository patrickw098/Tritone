dm_user = user.sorted_dms.map do |dm|
  users = dm.dm_users.select { |user| user.id != current_user.id }
  users.first.id
end

json.extract! user, :id, :display_name, :online_status
json.server_ids user.sorted_servers
json.dm_ids dm_user
