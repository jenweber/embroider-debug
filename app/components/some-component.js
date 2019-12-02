import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import move from 'ember-animated/motions/move';
import {easeOut, easeIn } from 'ember-animated/easings/cosine';


export default class SomeComponentComponent extends Component {
  @tracked counter = 0

  @action
  increment() {
    this.counter += 1;
  }

  @tracked showThing = false

  @action
  toggleThing() {
    this.showThing = !this.showThing;
  }


  *transition ({ insertedSprites, keptSprites, removedSprites }) {
    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ x: window.innerWidth });
      move(sprite, { easing: easeOut });
    }

    for (let sprite of keptSprites) {
      move(sprite);
    }

    for (let sprite of removedSprites) {
      sprite.endAtPixel({ x: window.innerWidth });
      move(sprite, { easing: easeIn });
    }
  }
}
