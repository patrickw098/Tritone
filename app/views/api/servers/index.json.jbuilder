json.servers do
  @servers.each do |server|
    json.set! server.id do
      json.extract! server, :id, :name, :user_ids, :channel_ids
    end
  end
end
