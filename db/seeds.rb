# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({ username: "Parzival", password: "artemis"})
User.create({ username: "Art3mis", password: "savetheworld"})
User.create({ username: "Aech", password: "imcool"})
User.create({ username: "Daito", password: "samurai"})
User.create({ username: "Shoto", password: "ninjas"})
