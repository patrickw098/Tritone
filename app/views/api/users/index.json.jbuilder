json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :display_name, :online_status
    end
  end
end
