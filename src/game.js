import { GameBoard } from './game_board.js'
import { Player } from './player.js'
import promptSync from 'prompt-sync'
const prompt = promptSync()

class Game {
  constructor() {
    this.gameBoard = new GameBoard()
    this.player1 = new Player('🔴', this.gameBoard, true)
    this.player2 = new Player('🟡', this.gameBoard, false)
    this.currentPlayer = this.player1
  }

  turn() {
    console.log(this.gameBoard.columns)
    selectColumn(this.currentPlayer)
    // this.gameBoard.placeGamePiece
  }

  selectColumn(player) {
    var choice = prompt("Please enter your column:")

    if (this.gameBoard.isValidColumn(choice)) {
      this.gameBoard.placeGamePiece(choice, this.currentPlayer)
    } else {
      console.log("Try again")
      return this.selectColumn(this.currentPlayer)
    }
  }
}

var game = new Game
game.selectColumn(game.currentPlayer)