import Model, { attr } from '@ember-data/model';

export default class GameModel extends Model {
  @attr winner_id;
  @attr loser_id;
}
