import Phaser from 'phaser';

import ball from './assets/ball.png';
import base from './assets/base1.png';
import divider from './assets/divider.png';

export default class bootLoader extends Phaser.Scene {

    constructor() {
        super({key: 'bootLoader'});
    }

    preload = () => {
        this.load.on('complete', ()=> {
            this.scene.start('scenePlay');
        })

        // this.base = this.load.baseURL = base;

        this.load.image('ball', ball);
        this.textures.addBase64('base', base);
        this.textures.addBase64('divider', divider);
        // console.log(this)

    }    

    // create = () => {
    //     this.ball = this.physics.add.image(100, 100, 'ball').setScale(0.03);
        
    //     //physics
    //     this.ball.setCollideWorldBounds(true);
    //     this.ball.setBounce(.5);
    //     // this.ball.setAcceleration(50);
        
    //     //inputKeboard
    //     console.log(Phaser.Input.Keyboard.KeyCodes);
    //     // this.input.keyboard.on('keydown_RIGHT', () => {
    //     //     this.ball.setAcceleration(50, 0);
    //     // })
    //     // this.input.keyboard.on('keyup_RIGHT', () => {
    //     //     this.ball.setAcceleration(-50, 0);
    //     // })

    //     this.cursor = this.input.keyboard.createCursorKeys();
    //     console.log(this.cursor);

    //     this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        
    // }

    // update = (time, delta) => {
    //     if (this.cursor.right.isDown) {
    //         this.ball.x++
    //     } else if (this.cursor.left.isDown) {
    //         this.ball.x--
    //     } else if (this.x.isDown) {
    //         this.ball.setVelocity(0,-300);
    //     }
    // }

}


