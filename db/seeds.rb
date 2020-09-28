# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
Pin.destroy_all 
JoinPinsBoard.destroy_all

user1 = User.create!(email: 'pinteriors@catherine.com', password: 'welcome1')
user2 = User.create!(email: 'jon@pinteriors.com', password: 'welcome1')
user3 = User.create!(email: 'adel@pinteriors.com', password: 'welcome1')
user4 = User.create(email: 'eugene@pinteriors.com', password: 'welcome1')
user5 = User.create(email: 'patrick@pinteriors.com', password: 'welcome1')


# PINS

# USER ONE PINS

pin1 = Pin.create!(title: 'Milking stool', description: 'poss option for steven''s renno', user_id: user1.id, source_link: 'www.dwr.com')
file = File.open('app/assets/images/pin1.jpeg')
pin1.photo.attach(io: file, filename: 'pin1.jpeg')



pin2 = Pin.create!(title: 'pin2', description: 'i am pin2', user_id: user1.id, source_link: 'www.pinterest.com')
file = File.open('app/assets/images/pin2.jpg')
pin2.photo.attach(io: file, filename: 'pin2.jpg')

# USER TWO PINS


pin3 = Pin.create!(title: 'pin3', description: 'i am pin3', user_id: user2.id, source_link: 'www.pinterest.com')
file = File.open('app/assets/images/pin3.jpg')
pin3.photo.attach(io: file, filename: 'pin3.jpg')



pin4 = Pin.create!(title: 'pin4', description: 'i am pin4', user_id: user2.id, source_link: 'www.pinterest.com')
file = File.open('app/assets/images/pin4.jpg')
pin4.photo.attach(io: file, filename: 'pin4.jpg')



pin5 = Pin.create!(title: 'pin5', description: 'i am pin5', user_id: user2.id, source_link: 'www.pinterest.com')
file = File.open('app/assets/images/pin5.jpg')
pin5.photo.attach(io: file, filename: 'pin5.jpg')




pin6 = Pin.create!(title: 'pin6', description: 'i am pin6', user_id: user2.id, source_link: 'www.pinterest.com')
file = File.open('app/assets/images/pin6.jpg')
pin6.photo.attach(io: file, filename: 'pin6.jpg')



pin7 = Pin.create!(title: 'pin7', description: 'i am pin7', user_id: user2.id, source_link: 'www.pinterest.com')
file = File.open('app/assets/images/pin7.jpg')
pin7.photo.attach(io: file, filename: 'pin7.jpg')




pin8 = Pin.create!(title: 'pin8', description: 'i am pin8', user_id: user2.id, source_link: 'www.dwr.com')
file = File.open('app/assets/images/pin8.jpg')
pin8.photo.attach(io: file, filename: 'pin8.jpg')





pin9 = Pin.create!(title: 'pin9', description: 'i am pin9', user_id: user2.id, source_link: 'www.pinterest.com')
file = File.open('app/assets/images/pin9.jpg')
pin9.photo.attach(io: file, filename: 'pin9.jpg')





pin10 = Pin.create!(title: 'pin10', description: 'i am pin10', user_id: user2.id, source_link: 'www.pinterest.com')
file = File.open('app/assets/images/pin10.jpg')
pin10.photo.attach(io: file, filename: 'pin10.jpg')


# BOARDS

# USER ONE BOARDS

board1 = Board.create!(title: 'Living room ideas', description: 'MCM', user_id: user1.id)
board2 = Board.create!(title: 'Kitchen plan', description: 'white/neutral kitchen plan', user_id: user1.id)


# USER TWO BOARDS 

board3 = Board.create!(title: 'Ideas', description: 'MCM', user_id: user2.id)
board4 = Board.create!(title: 'House plan', description: 'white/neutral kitchen plan', user_id: user2.id)


# PINBOARDS

# BOARD 1 PINS

pinboard1 = JoinPinsBoard.create!(pin_id: pin1.id, board_id: board1.id)
pinboard10 = JoinPinsBoard.create!(pin_id: pin2.id, board_id: board2.id)

# BOARD 3 PINS

pinboard2 = JoinPinsBoard.create!(pin_id: pin3.id, board_id: board3.id)

pinboard3 = JoinPinsBoard.create!(pin_id: pin4.id, board_id: board3.id)

pinboard4 = JoinPinsBoard.create!(pin_id: pin5.id, board_id: board3.id)

pinboard5 = JoinPinsBoard.create!(pin_id: pin6.id, board_id: board3.id)

# BOARD 4 PINS

pinboard6 = JoinPinsBoard.create!(pin_id: pin7.id, board_id: board4.id)

pinboard7 = JoinPinsBoard.create!(pin_id: pin8.id, board_id: board4.id)

pinboard8 = JoinPinsBoard.create!(pin_id: pin9.id, board_id: board4.id)

pinboard9 = JoinPinsBoard.create!(pin_id: pin10.id, board_id: board4.id)
