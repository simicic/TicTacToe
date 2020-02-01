import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class GameRunRoute extends Route {
  @service store;

  model() {
    return RSVP.hash({
      players: this.store.findAll('player')
    });
  }
}
