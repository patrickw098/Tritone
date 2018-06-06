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

Channel.delete_all

Channel.create({ name: "general", server_id: server1.id })
Channel.create({ name: "riddles discussion", server_id: server1.id })
Channel.create({ name: "Aech's hideout", server_id: server1.id })

ServerMembership.delete_all

membership1 = ServerMembership.create({ member_id: user6.id, server_id: server1.id })
membership1 = ServerMembership.create({ member_id: user2.id, server_id: server1.id })
membership1 = ServerMembership.create({ member_id: user3.id, server_id: server1.id })
membership1 = ServerMembership.create({ member_id: user4.id, server_id: server1.id })
membership1 = ServerMembership.create({ member_id: user5.id, server_id: server1.id })
