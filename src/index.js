import "phaser";
import MainScene from "./scenes/MainScene.js";

const config = {
  type: Phaser.AUTO,
  parent: "game-canvas",
  dom: {
    createContainer: true,
  },
  width: 500,
  height: 500,
  scene: [MainScene],
};

const game = new Phaser.Game(config);
