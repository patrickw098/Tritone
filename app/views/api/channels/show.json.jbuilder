json.channels do
  json.partial! 'api/channels/channel', channel: @channel
end

json.servers do
  json.partial! 'api/servers/server', server: @channel.server
end

json.messages do
  @channel.messages.each do |message|
    json.partial! 'api/messages/message', message: message
  end
end
