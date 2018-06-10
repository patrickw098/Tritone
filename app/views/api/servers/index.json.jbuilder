json.servers do
  @servers.each do |server|
    json.partial! 'api/servers/server', server: server
  end
end
