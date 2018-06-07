json.servers do
  @servers.all do |server|
    json.set! server.id do
      json.extract! server, :id, :name
    end
  end
end
