# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(email: 'pinteriors@catherine.com', password: 'welcome1')
user2 = User.create!(email: 'jon@pinteriors.com', password: 'welcome1')
user3 = User.create!(email: 'adel@pinteriors.com', password: 'welcome1')
user4 = User.create(email: 'eugene@pinteriors.com', password: 'welcome1')
user5 = User.create(email: 'patrick@pinteriors.com', password: 'welcome1')

pin1 = Pin.create!(title: 'Milking stool', description: 'poss option for steven''s renno', user_id: user1.id, source_link: 'www.dwr.com')
file = File.open('app/assets/images/backgroundImage2.png')
pin1.photo.attach(io: file, filename: 'backgroundImage2.png')

pin2 = Pin.create!(title: 'Sofa', description: 'sectional for new house', user_id: user1.id, source_link: 'www.dwr.com')
file = File.open('app/assets/images/backgroundImage.png')
pin2.photo.attach(io: file, filename: 'backgroundImage.png')

board1 = Board.create!(title: 'Living room ideas', description: 'MCM', user_id: user1.id)
board2 = Board.create!(title: 'Kitchen plan', description: 'white/neutral kitchen plan', user_id: user1.id)
