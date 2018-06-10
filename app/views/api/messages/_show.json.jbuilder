json.messages do
  json.partial! 'api/messages/message', message: message
end

json.servers do
  json.partial! 'api/servers/server', server: message.server
end

json.channels do
  json.partial! 'api/channels/channel', server: message.channel
end
