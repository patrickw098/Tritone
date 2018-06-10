json.message do
  json.extract! @message, :id
end

json.channels do
  json.partial! 'api/channels/channel', channel: @channel
end
