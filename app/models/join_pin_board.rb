class JoinPinBoard < ApplicationRecord
  validates :board_id, :pin_id, presence: true

  belongs_to :pin 
  belongs_to :board

end