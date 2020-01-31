import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { set } from '@ember/object';

export default class GameRunController extends Controller {
  @tracked playerOne;
  playerOneSign = "x";

  @tracked playerTwo;
  playerTwoSign = "o";

  @tracked board = new Array();
  currentPlayer;

  @tracked showGame = 'hide';

  constructor() {
    super(...arguments);

    // initialize board
    for(let j = 0; j < 3; j++){
      for(let i = 0; i < 3; i++){
        this.board.push({ key: [i, j].join(""), value: "-" });
      }
    }
  }

  @action
  startGame(){
    if (this.playerOne == this.playerTwo) {
      alert("Players have to be different");
    } else {
      this.currentPlayer = this.playerOne;
      this.showGame = 'show';
    }
  }

  @action
  playTile(tile){
    if (this.board.get(tile) != null) return false;

    var sign;

    if (this.currentPlayer == this.playerOne) {
      sign = 'x';
    } else {
      sign = 'o';
    }

    // ...invalidate the property when updating it. You can mark the property as `@tracked`, or use `@ember/object#set` to do this.
    // https://emberjs.github.io/rfcs/0478-tracked-properties-updates.html#when-to-use-get-and-set-1
    set(this.board.find(element => element.key == tile), 'value', sign);

    if (this.currentPlayer == this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this.playerOne;
    }
  }

  get boardValues(){
    return this.board;
  }
}
