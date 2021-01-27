# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Board.destroy_all
Pin.destroy_all 
JoinPinsBoard.destroy_all

user1 = User.create!(email: 'pinteriors@catherine.com', password: 'welcome1', first_name: 'Demo', last_name: 'User')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')
user1.photo.attach(io: file, filename: 'karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')


user2 = User.create!(email: 'jon@pinteriors.com', password: 'welcome1')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')
user2.photo.attach(io: file, filename: 'karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')


user3 = User.create!(email: 'adel@pinteriors.com', password: 'welcome1')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')
user3.photo.attach(io: file, filename: 'karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')


user4 = User.create(email: 'eugene@pinteriors.com', password: 'welcome1')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')
user4.photo.attach(io: file, filename: 'karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')


user5 = User.create(email: 'patrick@pinteriors.com', password: 'welcome1')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')
user5.photo.attach(io: file, filename: 'karsten-winegeart-Qb7D1xw28Co-unsplash.jpeg')

# PINS

# USER ONE PINS

pin1 = Pin.create!(title: 'Tabouret Berger Stool', description: 'Nordic minimalism--milking stool', user_id: user1.id, source_link: 'www.dwr.com')
file = open('https://pinteriors-seeds.s3.amazonaws.com/pin1.png')
pin1.photo.attach(io: file, filename: 'pin1.png')



pin2 = Pin.create!(title: 'Modern Office', description: 'workspace--lunchroom idea', user_id: user1.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin2.jpg')
pin2.photo.attach(io: file, filename: 'pin2.jpg')

# USER TWO PINS


pin3 = Pin.create!(title: 'Restaurant', description: 'love these stools', user_id: user2.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin3.jpg')
pin3.photo.attach(io: file, filename: 'pin3.jpg')



pin4 = Pin.create!(title: 'Saarinen Table', description: 'breakfast space inspiration', user_id: user2.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin4.jpg')
pin4.photo.attach(io: file, filename: 'pin4.jpg')



pin5 = Pin.create!(title: 'Bathroom Dresser', description: 'clean bathroom organization', user_id: user2.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin5.jpg')
pin5.photo.attach(io: file, filename: 'pin5.jpg')




pin6 = Pin.create!(title: 'Office Chairs', description: 'grey colorway for office space', user_id: user2.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin6.jpg')
pin6.photo.attach(io: file, filename: 'pin6.jpg')



pin7 = Pin.create!(title: 'Office Lounge', description: 'Rich sage office lounge chair with side table', user_id: user2.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin7.jpg')
pin7.photo.attach(io: file, filename: 'pin7.jpg')




pin8 = Pin.create!(title: 'Chairs', description: 'interesting danish chairs', user_id: user2.id, source_link: 'www.dwr.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin8.jpg')
pin8.photo.attach(io: file, filename: 'pin8.jpg')





pin9 = Pin.create!(title: 'Fixtures', description: 'light fixtures--possible ikea option', user_id: user2.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin9.jpg')
pin9.photo.attach(io: file, filename: 'pin9.jpg')





pin10 = Pin.create!(title: 'Dining Table', description: 'walnut dining table--cali modern ideas', user_id: user2.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin10.jpg')
pin10.photo.attach(io: file, filename: 'pin10.jpg')


# USER THREE PINS

pin11 = Pin.create!(title: 'Modern Architechture', description: 'love this building', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin11.jpg')
pin11.photo.attach(io: file, filename: 'pin11.jpg')


pin12 = Pin.create!(title: 'Warm Kitchen', description: 'warm kitchen--butcher block counter', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin12.jpg')
pin12.photo.attach(io: file, filename: 'pin12.jpg')


pin13 = Pin.create!(title: 'Office Loft', description: 'interesting loft/office space', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin13.jpg')
pin13.photo.attach(io: file, filename: 'pin13.jpg')


pin14 = Pin.create!(title: 'Bedroom Plan', description: 'Nelson bench at foot of bed', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin14.jpg')
pin14.photo.attach(io: file, filename: 'pin14.jpg')


pin15 = Pin.create!(title: 'Home Architechture', description: 'amazing rock pond', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin15.jpg')
pin15.photo.attach(io: file, filename: 'pin15.jpg')


pin16 = Pin.create!(title: 'Commerical Architechture', description: 'creative stair design', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin16.jpg')
pin16.photo.attach(io: file, filename: 'pin16.jpg')


pin17 = Pin.create!(title: 'All White', description: 'futuristic commerical architechture', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin17.jpg')
pin17.photo.attach(io: file, filename: 'pin17.jpg')


pin18 = Pin.create!(title: 'Bedroom Furniture', description: 'beautiful walnut commode with brass planter', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin18.jpg')
pin18.photo.attach(io: file, filename: 'pin18.jpg')


pin19 = Pin.create!(title: 'Eames', description: 'Eames Lounge and Ottomon in rich toffee leather', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin19.jpg')
pin19.photo.attach(io: file, filename: 'pin19.jpg')


pin20 = Pin.create!(title: 'Living room', description: 'black and white colorway for living room space', user_id: user3.id, source_link: 'www.pinterest.com')
file = open('https://pinteriors-seeds.s3.us-east-2.amazonaws.com/pin20.jpg')
pin20.photo.attach(io: file, filename: 'pin20.jpg')



# BOARDS

# USER ONE BOARDS

board1 = Board.create!(title: 'Living room ideas', description: 'MCM', user_id: user1.id)
board2 = Board.create!(title: 'Kitchen plan', description: 'white/neutral kitchen plan', user_id: user1.id)


# USER TWO BOARDS 

board3 = Board.create!(title: 'Ideas', description: 'MCM', user_id: user2.id)
board4 = Board.create!(title: 'House plan', description: 'modern inspired home decor', user_id: user2.id)

# USER THREE BOARD 

board5 = Board.create!(title: 'Modern Inspo', description: 'random', user_id: user3.id)
board6 = Board.create!(title: 'loved images', description: 'misc', user_id: user3.id)


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

# BOARD 5 PINS
pinboard11 = JoinPinsBoard.create!(pin_id: pin11.id, board_id: board5.id)
pinboard12 = JoinPinsBoard.create!(pin_id: pin12.id, board_id: board5.id)
pinboard13 = JoinPinsBoard.create!(pin_id: pin13.id, board_id: board5.id)
pinboard14 = JoinPinsBoard.create!(pin_id: pin14.id, board_id: board5.id)
pinboard15 = JoinPinsBoard.create!(pin_id: pin15.id, board_id: board5.id)
pinboard16 = JoinPinsBoard.create!(pin_id: pin16.id, board_id: board5.id)

# BOARD 6 PINS

pinboard17 = JoinPinsBoard.create!(pin_id: pin17.id, board_id: board5.id)
pinboard18 = JoinPinsBoard.create!(pin_id: pin18.id, board_id: board5.id)
pinboard19 = JoinPinsBoard.create!(pin_id: pin19.id, board_id: board5.id)
pinboard20 = JoinPinsBoard.create!(pin_id: pin20.id, board_id: board5.id)
