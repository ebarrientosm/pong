import React, { Component } from 'react'
import Phaser from 'phaser';
import bootLoader from './bootLoader.js';
import scenePlay from './scenes/scenePlay.js';

export default class game extends Component {

    componentDidMount() {
        
        const config = {
            type: Phaser.AUTO,
            width: 500,
            height: 350,
            // backgroundColor: '#D3D3D3',
            parent: 'gameCanva',
            physics: {
                default: 'arcade',
                // arcade: {
                //     gravity: {
                //         y: 500
                //     }
                // }
            },
            scene: 
                // {
                //     preload: preload,
                //     create: create,
                // }
                [
                    bootLoader,
                    scenePlay
                ]
        }

        new Phaser.Game(config);

    }

    render() {
        return (
            <div>
                <div id='gameCanva' >

                </div>
                
            </div>
        )
    }
}