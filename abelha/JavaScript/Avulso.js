class Obj {
    frame = 1;
    timer = 0;
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    Desenha() {
        var img = new Image();
        img.src = this.color;
        pincel.drawImage(img, this.x, this.y, this.width, this.height);
    }

    // Aqui está o método Animacao, que agora pertence à classe Obj
    Animacao(nome) {
        this.timer += 1;
        if (this.timer > 10) {
            this.timer = 0;
            this.frame += 1;
        }
        if (this.frame > 4) {
            this.frame = 1;
        }
        this.color = "imagem/" + nome + this.frame + ".png";
    }
}

class Abelha extends Obj {
    dir = 0;
    lifes = 3;

    Move() {
        this.x += this.dir;

        // Limitar movimento dentro do canvas (900x720)
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x + this.width > 900) {
            this.x = 900 - this.width;
        }
    }

    Collide(obj) {
        if (this.x < obj.x + obj.width &&
            this.x + this.width > obj.x &&
            this.y < obj.y + obj.height &&
            this.y + this.height > obj.y) {
            return true;
        } else {
            return false;
        }
    }
}

class Aranha extends Obj {
    Move() {
        this.y += 6;
        if (this.y > 900) {
            this.y = -50;
            this.x = Math.random() * (600 - 0);
        }
    }
    MudaPosi()
    {
        this.y = -50;
        this.x = Math.random() * (600 - 0);
    }
}

class Bg extends Obj {
    Move(speed, limit, pos) {
        this.y += speed;
        if (this.y > limit) {
            this.y = pos;
        }
    }
}
class Flor extends Aranha{
    Move() {
        this.y += 6;
        if (this.y > 900) {
            this.y = -50;
            this.x = Math.random() * (600 - 0);
        }
    }
    MudaPosi()
    {
        this.y = -50;
        this.x = Math.random() * (600 - 0);
    }
}
class Text{
    draw(texto, x, y)
    {
        pincel.font="20px Arial";
        pincel.fillStyle = "White";
        pincel.fillText(texto,x, y);
    }
}