# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Server.delete_all
Channel.delete_all
ServerMembership.delete_all
Message.delete_all
DmMembership.delete_all
Friendship.delete_all
FriendRequest.delete_all

user1 = User.create({ username: "demo_user", password: "fireball42" })
user2 = User.create({ username: "Parzival", password: "artemis"})
user3 = User.create({ username: "Art3mis", password: "savetheworld"})
user4 = User.create({ username: "Aech", password: "imcool"})
user5 = User.create({ username: "Daito", password: "samurai"})
user6 = User.create({ username: "Shoto", password: "ninjas"})
user7 = User.create({ username: "Anorak", password: "hallidayparty"})
friendship1 = Friendship.create({ user_id: user1.id })
friendship2 = Friendship.create({ user_id: user2.id })
friendship3 = Friendship.create({ user_id: user3.id })
FriendRequest.create({ user_id: user1.id, friendship_id: friendship2.id})
FriendRequest.create({ user_id: user1.id, friendship_id: friendship3.id})
FriendRequest.create({ user_id: user2.id, friendship_id: friendship1.id})
FriendRequest.create({ user_id: user2.id, friendship_id: friendship3.id})
FriendRequest.create({ user_id: user3.id, friendship_id: friendship1.id})
FriendRequest.create({ user_id: user3.id, friendship_id: friendship2.id})

#

#
# Friendship.create({ user_id: user2.id, friend_id: user6.id, accepted: true })
# Friendship.create({ user_id: user2.id, friend_id: user3.id, accepted: true })
# Friendship.create({ user_id: user2.id, friend_id: user4.id, accepted: true })
# Friendship.create({ user_id: user2.id, friend_id: user5.id, accepted: true })
# Friendship.create({ user_id: user6.id, friend_id: user2.id, accepted: true })
# Friendship.create({ user_id: user3.id, friend_id: user2.id, accepted: true })
# Friendship.create({ user_id: user4.id, friend_id: user2.id, accepted: true })
# Friendship.create({ user_id: user5.id, friend_id: user2.id, accepted: true })


server1 = Server.create({ name: "High Five", creator_id: user2.id, image_url: "http://d1marr3m5x4iac.cloudfront.net/images/block/movies/161783/161783_ba.jpg" })
dm1 = Server.create({ name: "", creator_id: user1.id })

channel1 = Channel.create({ name: "general", server_id: server1.id })
channel2 = Channel.create({ name: "riddles discussion", server_id: server1.id })
channel3 = Channel.create({ name: "Aech's hideout", server_id: server1.id })
channel5 = Channel.create({ name: "general", server_id: dm1.id })
server2 = Server.create({ name: "Thequickbrownfoxjumpsoverthelazydog", creator_id: user2.id })
channel4 = Channel.create({ name: "general", server_id: server2.id })

membership1 = ServerMembership.create({ member_id: user6.id, server_id: server1.id })
membership2 = ServerMembership.create({ member_id: user2.id, server_id: server1.id })
membership3 = ServerMembership.create({ member_id: user3.id, server_id: server1.id })
membership4 = ServerMembership.create({ member_id: user4.id, server_id: server1.id })
membership5 = ServerMembership.create({ member_id: user5.id, server_id: server1.id })
membership6 = ServerMembership.create({ member_id: user1.id, server_id: server1.id })
membership1 = ServerMembership.create({ member_id: user6.id, server_id: server2.id })
membership2 = ServerMembership.create({ member_id: user2.id, server_id: server2.id })
membership3 = ServerMembership.create({ member_id: user3.id, server_id: server2.id })
membership4 = ServerMembership.create({ member_id: user4.id, server_id: server2.id })
membership5 = ServerMembership.create({ member_id: user5.id, server_id: server2.id })
membership6 = ServerMembership.create({ member_id: user1.id, server_id: server2.id })

20.times do
  message = Faker::ChuckNorris.fact
  Message.create({
    body: message,
    channel_id: 1 + rand(3),
    author_id: 2 + rand(6)
  })
end




message1 = Message.create({ body: "hello world!", channel_id: channel1.id, author_id: user1.id })
message2 = Message.create({ body: "demo user testing!", channel_id: channel1.id, author_id: user1.id })
message3 = Message.create({ body: "omg!", channel_id: channel1.id, author_id: user1.id })
message4 = Message.create({ body: "wheeee!", channel_id: channel1.id, author_id: user1.id })
message5 = Message.create({ body: "cooool!", channel_id: channel1.id, author_id: user1.id })
message6 = Message.create({ body: "nope!", channel_id: channel1.id, author_id: user1.id })
message7 = Message.create({ body: "ragh!", channel_id: channel1.id, author_id: user1.id })
message8 = Message.create({ body: "broken!", channel_id: channel1.id, author_id: user1.id })
message9 = Message.create({ body: "i'm the last message!", channel_id: channel1.id, author_id: user1.id })

dmM1 = DmMembership.create({ dm_id: dm1.id, user_id: user1.id })
dmM2 = DmMembership.create({ dm_id: dm1.id, user_id: user2.id })

server = Server.create({ name: "Game of Thrones", creator_id: user7.id, image_url: "http://icons.iconarchive.com/icons/limav/game-of-thrones/256/Stark-icon.png" })
Channel.create( { name: "general", server_id: server.id })
ServerMembership.create( { member_id: user1.id, server_id: server.id })

5.times do
    name = Faker::GameOfThrones.character
    user = User.create({ username: name, password: "password123" })
    ServerMembership.create({ member_id: user.id, server_id: server.id })
  end

4.times do
    channel_name = Faker::GameOfThrones.city
    channel = Channel.create({ name: channel_name, server_id: server.id })
  end

50.times do
  message = Faker::GameOfThrones.quote
  Message.create({
      body: message,
      channel_id: 6 + rand(5),
      author_id: 8 + rand(5)
    })
  end

server = Server.create({ name: "Back to the Future", creator_id: user7.id })
Channel.create( { name: "general", server_id: server.id })

5.times do
    name = Faker::BackToTheFuture.character
    user = User.create({ username: name, password: "password123" })
    ServerMembership.create({ member_id: user.id, server_id: server.id })
  end

4.times do
    channel_name = Faker::BackToTheFuture.date
    channel = Channel.create({ name: channel_name, server_id: server.id })
  end

20.times do
  message = Faker::BackToTheFuture.quote
  Message.create({
      body: message,
      channel_id: 11 + rand(5),
      author_id: 13 + rand(5)
    })
  end



server = Server.create({ name: "Books", creator_id: user7.id })
Channel.create( { name: "general", server_id: server.id })

5.times do
    name = Faker::Book.author
    user = User.create({ username: name, password: "password123" })
    ServerMembership.create({ member_id: user.id, server_id: server.id })
  end

4.times do
    channel_name = Faker::Book.publisher
    channel = Channel.create({ name: channel_name, server_id: server.id })
  end

20.times do
  message = Faker::Book.title
  Message.create({
      body: message,
      channel_id: 16 + rand(5),
      author_id: 18 + rand(5)
    })
  end

server = Server.create({ name: "Coffee", creator_id: user7.id, image_url: "https://cdn1.iconfinder.com/data/icons/hotel-restaurant/512/15-512.png" })
Channel.create( { name: "general", server_id: server.id })
ServerMembership.create( { member_id: user1.id, server_id: server.id })

  5.times do
    name = Faker::Coffee.blend_name
    user = User.create({ username: name, password: "password123" })
    ServerMembership.create({ member_id: user.id, server_id: server.id })
    end

  4.times do
    channel_name = Faker::Coffee.origin
    channel = Channel.create({ name: channel_name, server_id: server.id })
    end

  20.times do
    message = Faker::Coffee.notes
    Message.create({
      body: message,
      channel_id: 21 + rand(5),
      author_id: 23 + rand(5)
    })
  end

  server = Server.create({ name: "One Piece", creator_id: user7.id })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::OnePiece.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::OnePiece.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
        message = Faker::OnePiece.quote
        Message.create({
          body: message,
          channel_id: 26 + rand(5),
          author_id: 28 + rand(5)
        })
      end

  server = Server.create({ name: "Company", creator_id: user7.id })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::Company.name
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::Company.industry
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::Company.buzzword
      Message.create({
          body: message,
          channel_id: 31 + rand(5),
          author_id: 33 + rand(5)
        })
      end


  server = Server.create({ name: "Dogs", creator_id: user7.id })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::Dog.name
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::Dog.breed
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::Dog.meme_phrase
      Message.create({
          body: message,
          channel_id: 36 + rand(5),
          author_id: 38 + rand(5)
        })
      end


  server = Server.create({ name: "Dr Who", creator_id: user7.id })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::DrWho.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::DrWho.catch_phrase
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::DrWho.quote
      Message.create({
          body: message,
          channel_id: 41 + rand(5),
          author_id: 43 + rand(5)
        })
      end

  server = Server.create({ name: "Family Guy", creator_id: user7.id })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::FamilyGuy.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::FamilyGuy.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::FamilyGuy.quote
      Message.create({
          body: message,
          channel_id: 46 + rand(5),
          author_id: 48 + rand(5)
        })
      end


  server = Server.create({ name: "Hey Arnold!", creator_id: user7.id })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::HeyArnold.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::HeyArnold.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::HeyArnold.quote
      Message.create({
          body: message,
          channel_id: 51 + rand(5),
          author_id: 53 + rand(5)
        })
      end

  server = Server.create({ name: "Harry Potter", creator_id: user7.id, image_url: "http://icons.iconarchive.com/icons/artua/harry-potter/256/home-icon.png" })
  Channel.create( { name: "general", server_id: server.id })
  ServerMembership.create( { member_id: user1.id, server_id: server.id })

    5.times do
        name = Faker::HarryPotter.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::HarryPotter.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::HarryPotter.quote
      Message.create({
          body: message,
          channel_id: 56 + rand(5),
          author_id: 58 + rand(5)
        })
  end

  server = Server.create({ name: "Hitchhikers Guide to the Galaxy", creator_id: user7.id })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::HitchhikersGuideToTheGalaxy.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::HitchhikersGuideToTheGalaxy.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::HitchhikersGuideToTheGalaxy.quote
      Message.create({
          body: message,
          channel_id: 61 + rand(5),
          author_id: 63 + rand(5)
        })
      end

  server = Server.create({ name: "The Hobbit", creator_id: user7.id, image_url: "http://www.iconeasy.com/icon/png/Movie%20%26%20TV/LOTR%20-%20Armoury%20of%20the%20Third%20Age/The%20One%20Ring%20%28version%202%29.png" })
  Channel.create( { name: "general", server_id: server.id })
  ServerMembership.create( { member_id: user1.id, server_id: server.id })

    5.times do
        name = Faker::Hobbit.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::Hobbit.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::Hobbit.quote
      Message.create({
          body: message,
          channel_id: 66 + rand(5),
          author_id: 68 + rand(5)
        })
  end

  server = Server.create({ name: "League of Legends", creator_id: user7.id, image_url: "http://2.bp.blogspot.com/-HqSOKIIV59A/U8WP4WFW28I/AAAAAAAAT5U/qTSiV9UgvUY/s1600/icon.png" })
  Channel.create( { name: "general", server_id: server.id })
  ServerMembership.create( { member_id: user1.id, server_id: server.id })

    5.times do
        name = Faker::LeagueOfLegends.champion
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::LeagueOfLegends.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::LeagueOfLegends.quote
      Message.create({
          body: message,
          channel_id: 71 + rand(5),
          author_id: 73 + rand(5)
        })
  end

  server = Server.create({ name: "How I Met Your Mother", creator_id: user7.id })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::HowIMetYourMother.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::HowIMetYourMother.high_five
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::HowIMetYourMother.quote
      Message.create({
          body: message,
          channel_id: 76 + rand(5),
          author_id: 78 + rand(5)
        })
      end

  server = Server.create({ name: "Lord of the Rings", creator_id: user7.id, image_url: "https://vignette.wikia.nocookie.net/lotr/images/9/9b/TheOneRing.jpg/revision/latest?cb=20131116000607" })
  Channel.create( { name: "general", server_id: server.id })

    5.times do
        name = Faker::LordOfTheRings.character
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::LordOfTheRings.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::Hobbit.quote
      Message.create({
          body: message,
          channel_id: 81 + rand(5),
          author_id: 83 + rand(5)
        })
      end

  server = Server.create({ name: "Lovecraft", creator_id: user7.id, image_url: "https://i.redditmedia.com/dVlZ0jsEcGncsxEGHI_aUmfLzZ5fT5HIZ9Y8HTkT-9A.jpg?s=118535f0538693ab0301d561a8594e2f" })
  Channel.create( { name: "general", server_id: server.id })
  ServerMembership.create( { member_id: user1.id, server_id: server.id })

    5.times do
        name = Faker::Lovecraft.deity
        user = User.create({ username: name, password: "password123" })
        ServerMembership.create({ member_id: user.id, server_id: server.id })
      end

    4.times do
        channel_name = Faker::Lovecraft.location
        channel = Channel.create({ name: channel_name, server_id: server.id })
      end

    20.times do
      message = Faker::Lovecraft.fhtagn(3)
      Message.create({
          body: message,
          channel_id: 86 + rand(5),
          author_id: 88 + rand(5)
        })
  end


server = Server.create({ name: "Beer", creator_id: user7.id })
Channel.create( { name: "general", server_id: server.id })

  5.times do
      name = Faker::Beer.name
      user = User.create({ username: name, password: "password123" })
      ServerMembership.create({ member_id: user.id, server_id: server.id })
    end

  4.times do
      channel_name = Faker::Beer.hop
      channel = Channel.create({ name: channel_name, server_id: server.id })
    end


server = Server.create({ name: "Breaking Bad", creator_id: user7.id })
Channel.create( { name: "general", server_id: server.id })

  5.times do
      name = Faker::BreakingBad.character
      user = User.create({ username: name, password: "password123" })
      ServerMembership.create({ member_id: user.id, server_id: server.id })
    end

  4.times do
      channel_name = Faker::BreakingBad.episode
      channel = Channel.create({ name: channel_name, server_id: server.id })
    end

server = Server.create({ name: "Mythology", creator_id: user7.id })
Channel.create( { name: "general", server_id: server.id })

  5.times do
      name = Faker::Ancient.god
      user = User.create({ username: name, password: "password123" })
      ServerMembership.create({ member_id: user.id, server_id: server.id })
    end

  4.times do
      channel_name = Faker::Ancient.primordial
      channel = Channel.create({ name: channel_name, server_id: server.id })
    end

server = Server.create({ name: "Overwatch", creator_id: user7.id })
Channel.create( { name: "general", server_id: server.id })

  5.times do
      name = Faker::Overwatch.hero
      user = User.create({ username: name, password: "password123" })
      ServerMembership.create({ member_id: user.id, server_id: server.id })
    end

  4.times do
      channel_name = Faker::Overwatch.location
      channel = Channel.create({ name: channel_name, server_id: server.id })
    end


server = Server.create({ name: "ESports", creator_id: user7.id })
Channel.create( { name: "general", server_id: server.id })

  5.times do
      name = Faker::Esport.player
      user = User.create({ username: name, password: "password123" })
      ServerMembership.create({ member_id: user.id, server_id: server.id })
    end

  4.times do
      channel_name = Faker::Esport.game
      channel = Channel.create({ name: channel_name, server_id: server.id })
    end
