json.channels do
  json.set! @channel.id do
    json.extract! @channel, :id, :name, :message_ids
  end
end

json.servers do
  json.set! @channel.server.id do
    json.extract! @channel.server, :id, :name
    json.user_ids @channel.server.user_ids
    json.channel_ids @channel.server.channel_ids
  end
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :channel_id, :author_id, :body
      json.created_at message.created_at.localtime.to_formatted_s 
      json.author message.author.display_name
    end
  end
end
