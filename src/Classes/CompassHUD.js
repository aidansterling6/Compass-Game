class CompassHUD {
    constructor(scene, x, y, targetX, targetY, texture, needleTexture) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.scene = scene;
        this.compass = null; // Initialize pipes as null, will be set in initializePipes
        this.compassID = null;
        this.target = null;
        this.sprite = this.scene.physics.add.sprite(x, y, texture, null).setOrigin(0.5, 0.5).setScale(4);
        this.needle = this.scene.physics.add.sprite(x, y, needleTexture, null).setOrigin(0.5, 0.5).setScale(0.1);
        this.updateNeedle();

        this.sprite.on('drag', (pointer, dragX, dragY) => {
            this.x = dragX;
            this.y = dragY;
            this.sprite.x = dragX;
            this.sprite.y = dragY;
            this.needle.x = dragX;
            this.needle.y = dragY
            this.updateNeedle();
        });
    }

    updateNeedle(){
        this.needle.angle = Math.atan2(-((this.x + this.scene.playerx) - this.targetX), (this.y + this.scene.playery) - this.targetY).toDeg();
        console.log(this.scene.playerx);
        console.log(this.scene.playery);
    }

    setVisible(bVisable){
        this.sprite.setVisible(bVisable);
        this.needle.setVisible(bVisable);
    }
}
