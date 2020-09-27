class Board < ApplicationRecord
  validates :id, :title, presence: true, message: "Please enter a valid title"
  
has_many :associated_pins,
  class_name: :JoinPinBoard,
  foreign_key: :board_id,
  dependent: :destroy
  
has_many :pins,
  through: :associated_pins,
  source: :pin

belongs_to :user 

end