class Pin < ApplicationRecord
  validates :title, presence: { message: "Please enter a valid title" }
  # validates :photo, presence: true
  
  has_one_attached :photo
  # api board pins routes needs a post and a delete 
  has_many :associated_boards,
    class_name: :JoinPinsBoard,
    foreign_key: :pin_id,
    dependent: :destroy
    #a pin has many associations on the join pin board table. if the pin is destroyed. destroy the association between that pin and that board
  has_many :boards,
    through: :associated_boards,
    source: :board
  
  belongs_to :user 

end