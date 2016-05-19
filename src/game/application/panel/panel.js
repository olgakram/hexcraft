'use strict';

import options from './panel.json';
import http from '../http.js';
import GUI from '../gui.js';

export default class Panel extends PIXI.Container {
  constructor() {
    super();
    this.GUI = new GUI(options);
    this.addChild(this.GUI);

    let graphics = new PIXI.Graphics();

    graphics.beginFill(0xFFFFFF, 0.15);
    graphics.drawRect(0, 10, 800, 55);
    graphics.endFill();
    this.addChild(graphics);

    let Decorator = new PIXI.Graphics();

    graphics.beginFill(0xFFFFFF, 0.25);
    graphics.drawRect(0, 60, 800, 5);
    graphics.endFill();
    this.addChild(Decorator);

    const username = window.localStorage.getItem('username');
    this.GUI.username.text = username;
  }

  logout () {
    const token = window.localStorage.getItem('token');

    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    http.post('/api/auth/logout', {
      token: token
    });

    document.location.href = '/';
  }

  showExit() {
    this.GUI.logout.visible = true;
    this.GUI.logout.on('click', this.logout);
    this.GUI.logout.on('touchstart', this.logout);
  }

  showCapitulation() {
    this.GUI.surrender.visible = true;
    this.GUI.surrender.on('click', this.surrender.bind(this));
    this.GUI.surrender.on('touchstart', this.surrender.bind(this));
  }

  surrender() {
    const token = window.localStorage.getItem('token');
    http.post(`/api/games/${this.game.id}/surrender`, {
      token: token
    });
  }

  log(text){
    this.GUI.status.text = text;
  }

  update(){}
}
