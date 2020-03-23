import Phaser from 'phaser';
import Base from '../gameObjects/base.js';

export default class scenePlay extends Phaser.Scene {
    constructor() {
        super({ key: 'scenePlay' });
    }

    create = () => {

        let centerHeight = this.sys.game.config.height/2;
        let centerWidth = this.sys.game.config.width/2;

        this.physics.world.setBoundsCollision(false, false, true, true);

        //ball
        this.ball = this.physics.add.image(centerWidth, centerHeight, 'ball');
        this.ball.setScale(0.03).setAngle(90);
        this.ball.setCollideWorldBounds(true).setBounce(1).setVelocityX(-150);
        // console.log(this.ball);

        //leftBase
        // this.leftBase = this.physics.add.image(30, centerHeight, 'base');
        this.leftBase = new Base(this, 30, centerHeight, 'base');
        this.leftBase.setScale(.20);

        //rightBase
        // this.rightBase = this.physics.add.image(this.sys.game.config.width-30, centerHeight, 'base');
        this.rightBase = new Base(this, this.sys.game.config.width-30, centerHeight, 'base')
        this.rightBase.setScale(.20);

        //divider
        this.divider = this.add.image(centerWidth, centerHeight, 'divider');
        this.divider.setScale(.75).setAlpha(.2);

        //physics
        this.physics.add.collider(this.ball, this.leftBase, this.baseHit, null, this);
        this.physics.add.collider(this.ball, this.rightBase, this.baseHit, null, this);

        //controls
            //rightBase
        this.cursor = this.input.keyboard.createCursorKeys();
            //leftBase
        this.cursorLeftW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursorLefts = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update = () => {
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition (this.sys.game.config.width/2, this.sys.game.config.height/2);
            this.ball.setVelocity(0);
        }

        if (this.cursor.down.isDown) {
            this.rightBase.body.setVelocityY(300);
        } else if (this.cursor.up.isDown) {
            this.rightBase.body.setVelocityY(-300);
        } else {
            this.rightBase.body.setVelocity(0);
        }

        if (this.cursorLeftW.isDown) {
            this.leftBase.body.setVelocityY(-300);
        } else if (this.cursorLefts.isDown) {
            this.leftBase.body.setVelocityY(300);
        } else {
            this.leftBase.body.setVelocityY(0);
        }

        if (this.ball.body.velocity.x === 0 && this.cursor.space.isDown ) {
            this.ball.setVelocityX(-150);    
        }

    }

    baseHit = () => {
        this.ball.setVelocityY( Phaser.Math.Between(-120, 120));
        this.ball.setBounce(1.2)
    }

    

}