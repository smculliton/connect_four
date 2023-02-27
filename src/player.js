class Player {
  constructor (gamePiece, gameBoard, isHuman) {
    this.gamePiece = gamePiece
    this.gameBoard = gameBoard
    this.name = 'Computer'
    this.isHuman = isHuman
  }
}

export { Player }