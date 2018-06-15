json.users do
  json.set! current_user.id do
    json.partial! 'api/users/user', user: current_user
  end

  json.friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/user', user: friend
    end
  end
end
