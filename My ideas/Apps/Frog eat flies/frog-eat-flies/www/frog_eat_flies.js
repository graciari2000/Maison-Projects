class Example extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('background', 'https://play.rosebud.ai/assets/swamp background.png?Sflm');
        this.load.image('frog', 'https://play.rosebud.ai/assets/green frog character.png?AIuv');
        this.load.image('fly', 'https://play.rosebud.ai/assets/small black fly.png?CqLI');
        this.load.spritesheet('frogAnim', 'frog_animation_spritesheet.png', { frameWidth: 64, frameHeight: 64 });
    }

    create() {
        // Background
        const background = this.add.image(400, 300, 'background').setScale(2);

        // Frog
        this.frog = this.physics.add.sprite(400, 500, 'frog');
        this.frog.setCollideWorldBounds(true).setScale(0.2);

        // Score
        this.score = 0;
        this.scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '16px', fill: '#fff' });

        // Lives
        this.lives = 3;
        this.livesText = this.add.text(10, 30, 'Lives: 3', { fontSize: '16px', fill: '#fff' });

        // Flies
        this.flies = this.physics.add.group();
        this.spawnFlies();

        this.physics.add.overlap(this.frog, this.flies, this.catchFly, null, this);

        // Movement
        this.cursors = this.input.keyboard.createCursorKeys();

        // Fly respawn
        this.time.addEvent({
            delay: 5000,
            loop: true,
            callback: this.spawnFlies,
            callbackScope: this,
        });

        // Timer to lose lives
        this.time.addEvent({
            delay: 10000,
            loop: true,
            callback: () => {
                this.lives--;
                this.livesText.setText('Lives: ' + this.lives);
                if (this.lives <= 0) {
                    this.scene.restart();
                }
            },
        });
    }

    spawnFlies() {
        for (let i = 0; i < 3; i++) {
            const fly = this.flies.create(Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), 'fly');
            fly.setScale(0.1).setCollideWorldBounds(true);
        }
    }

    catchFly(frog, fly) {
        fly.destroy();
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.frog.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.frog.setVelocityX(160);
        } else {
            this.frog.setVelocityX(0);
        }
        if (this.cursors.up.isDown) {
            this.frog.setVelocityY(-160);
        } else if (this.cursors.down.isDown) {
            this.frog.setVelocityY(160);
        } else {
            this.frog.setVelocityY(0);
        }
    }
}