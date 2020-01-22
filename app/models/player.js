import Model, { attr } from '@ember-data/model';

export default class PlayerModel extends Model {
  @attr('string') name;
  @attr('number') score;
}
