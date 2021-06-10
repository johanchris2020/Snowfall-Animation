class Snow {
    constructor(x, y) {
        var options = {
            friction: 0.01,
            restitution: 0.1
        }
        this.body = Bodies.circle(x, y, 5, options)
        this.radius = 5;
        this.img = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    snow() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, { x: random(0, 1200), y: random(0, 720) })
        }
    }

    display() {
        imageMode(CENTER);
        image(this.img, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}