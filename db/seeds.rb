# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create({ username: "demo_user", password: "fireball42" })
user2 = User.create({ username: "Parzival", password: "artemis"})
user3 = User.create({ username: "Art3mis", password: "savetheworld"})
user4 = User.create({ username: "Aech", password: "imcool"})
user5 = User.create({ username: "Daito", password: "samurai"})
user6 = User.create({ username: "Shoto", password: "ninjas"})
#
Friendship.delete_all
#
# Friendship.create({ user_id: user2.id, friend_id: user6.id, accepted: true })
# Friendship.create({ user_id: user2.id, friend_id: user3.id, accepted: true })
# Friendship.create({ user_id: user2.id, friend_id: user4.id, accepted: true })
# Friendship.create({ user_id: user2.id, friend_id: user5.id, accepted: true })
# Friendship.create({ user_id: user6.id, friend_id: user2.id, accepted: true })
# Friendship.create({ user_id: user3.id, friend_id: user2.id, accepted: true })
# Friendship.create({ user_id: user4.id, friend_id: user2.id, accepted: true })
# Friendship.create({ user_id: user5.id, friend_id: user2.id, accepted: true })

Server.delete_all

server1 = Server.create({ name: "High Five", creator_id: user2.id })
server2 = Server.create({ name: "Thequickbrownfoxjumpsoverthelazydog", creator_id: user2.id })
dm1 = Server.create({ name: "", creator_id: user1.id })

Channel.delete_all

channel1 = Channel.create({ name: "general", server_id: server1.id })
channel2 = Channel.create({ name: "riddles discussion", server_id: server1.id })
channel3 = Channel.create({ name: "Aech's hideout", server_id: server1.id })
channel4 = Channel.create({ name: "general", server_id: server2.id })
channel5 = Channel.create({ name: "general", server_id: dm1.id })

ServerMembership.delete_all

membership1 = ServerMembership.create({ member_id: user6.id, server_id: server1.id })
membership2 = ServerMembership.create({ member_id: user2.id, server_id: server1.id })
membership3 = ServerMembership.create({ member_id: user3.id, server_id: server1.id })
membership4 = ServerMembership.create({ member_id: user4.id, server_id: server1.id })
membership5 = ServerMembership.create({ member_id: user5.id, server_id: server1.id })
membership6 = ServerMembership.create({ member_id: user1.id, server_id: server1.id })

Message.delete_all

message1 = Message.create({ body: "hello world!", channel_id: channel1.id, author_id: user1.id })
message2 = Message.create({ body: "demo user testing!", channel_id: channel1.id, author_id: user1.id })
message3 = Message.create({ body: "omg!", channel_id: channel1.id, author_id: user1.id })
message4 = Message.create({ body: "wheeee!", channel_id: channel1.id, author_id: user1.id })
message5 = Message.create({ body: "cooool!", channel_id: channel1.id, author_id: user1.id })
message6 = Message.create({ body: "nope!", channel_id: channel1.id, author_id: user1.id })
message7 = Message.create({ body: "ragh!", channel_id: channel1.id, author_id: user1.id })
message8 = Message.create({ body: "broken!", channel_id: channel1.id, author_id: user1.id })
message9 = Message.create({ body: "i'm the last message!", channel_id: channel1.id, author_id: user1.id })

DmMembership.delete_all

dmM1 = DmMembership.create({ dm_id: dm1.id, user_id: user1.id })
dmM2 = DmMembership.create({ dm_id: dm1.id, user_id: user2.id })
