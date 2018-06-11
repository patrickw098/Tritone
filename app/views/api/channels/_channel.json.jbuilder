json.set! channel.id do
  json.extract! channel, :id, :name, :creator_id
  json.message_ids channel.sorted_messages
end
