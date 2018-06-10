json.messages do
  json.set! message.id do
    json.extract! message, :id, :channel_id, :author_id, :body
    json.created_at message.created_at.localtime.to_formatted_s
    json.author message.author.display_name
  end
end

json.channels do
  json.set! message.channel.id do
    json.extract! message.channel, :id, :name, :message_ids, :creator_id
  end
end
