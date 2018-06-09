json.message do
  json.extract! @message, :id
end

json.channels do
  json.set! @channel.id do
    json.extract! @channel, :id, :name, :message_ids, :creator_id
  end
end
