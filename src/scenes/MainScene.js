import "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene", active: true });
  }

  preload() {}

  create() {
    const { width, height } = this.game.config;
    this.add
      .text(width / 2, height / 2, "Phaser 3 template", {
        fontSize: "32px",
        color: "white",
      })
      .setOrigin(0.5);
  }
}

export default MainScene;
