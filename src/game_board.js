class GameBoard {
  constructor() {
    this.game_board = {
      a: ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
      b: ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
      c: ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
      d: ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
      e: ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
      f: ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
      g: ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️']
    }
  }

  isValidColumn(column) {
    column != null && column.includes('⚪️')
  }

  placeGamePiece(column, player) {
    column[column.indexAt('⚪️')] = player.game_piece
  }

  isFull() {
    for (const column in this.game_board) {
      if (this.game_board[column].includes('⚪️')) { 
        return false
      }
    }
    return true
  }
}

var game = new GameBoard()
console.log(game.isFull())