json.extract! @user, :id, :username, :avatar_url, :display_name

# friendslist = @user.friendships.select {|friendship| friendship.accepted == true }
# friendslist.map! { |f| f.friend_id}
#
# json.friends do
#   @user.friends.each do |friend|
#     if friendslist.include?(friend.id)
#       json.set! friend.id do
#         json.extract! friend, :id, :display_name, :avatar_url
#       end
#     end
#   end
# end
#
# friendreqs = @user.friends_of.select {|fr| fr.accepted == false }
# friendreqs.map! { |f| f.user_id }
#
# json.friend_requests do
#   @user.friend_requests.each do |friend_request|
#     if friendreqs.include?(friend_request.id)
#       json.set! friend_request.id do
#         json.extract! friend_request, :id, :display_name, :avatar_url
#       end
#     end
#   end
# end
