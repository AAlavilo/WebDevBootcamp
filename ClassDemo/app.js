class Color {
    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    innerRGB() {
        const { r, g, b } = this;           //Destructure variables from the class
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1.0) {
        return `rgb(${this.innerRGB()}, ${a})`;
    }
}

const color1 = new Color(120, 130, 60);

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
    meow() {
        return "MEOWWWW"
    }
}



class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "MEOWWWW"
    }
}

class Dog extends Pet {
    
    bark() {
        return "WOOOF"
    }
}