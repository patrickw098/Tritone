json.messages do
  json.set! message.id do
    json.extract! message, :id, :channel_id, :author_id, :body
    json.created_at message.created_at.localtime.to_formatted_s
    json.author message.author.display_name
  end
end

json.servers do
  json.set! message.server.id do
    json.extract message.server, :id, :name
    json.user_ids message.server.user_ids
    json.channels_ids message.server.channel_ids
  end
end

json.channels do
  json.set! message.channel.id do
    json.extract! message.channel, :id, :name, :message_ids, :creator_id
  end
end
