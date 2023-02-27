class GameBoard {
  constructor() {
    this.columns = {
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
    return this.columns[column] != undefined && this.columns[column].includes('⚪️')
  }

  placeGamePiece(column, player) {
    let chosenColumn = this.columns[column]

    chosenColumn[chosenColumn.indexOf('⚪️')] = player.gamePiece
    console.log(this.columns)
  }

  isFull() {
    for (const column in this.columns) {
      if (this.columns[column].includes('⚪️')) { 
        return false
      }
    }
    return true
  }
}

export { GameBoard }

// var game = new GameBoard()
// console.log(game.isFull())