// const width = 160,
// height = 400,
// frames = 12;
// let currentFrame = 0;

// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext("2d");
// const image = new Image;

// canvas.width = width;
// canvas.height = height;
// image.src = 'sprite.png';

// function draw() {
// 	ctx.clearRect(0, 0, width, height);
// 	//ctx.drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);
// 	// sx -- координата x начальной точки обрезки
// 	// sy -- координата y начальной точки обрезки
// 	// swidth -- ширина обрезанного изображения
// 	// sheight -- высота обрезанного изображения
// 	// координата dx на холсте, куда будет помещено изображение
// 	// координата dy на холсте, куда будет помещено изображение
// 	// dwidth - ширина изображения
// 	// dheight - высота изображения
// 	ctx.drawImage(image, width*currentFrame, 0, width, height, 0, 0, width, height);
// 	if (currentFrame == frames - 1) {
// 		currentFrame = 0;
// 	} else {
// 		currentFrame++;
// 	}
// }
// setInterval(draw, 70);

class Sprite {
	constructor(option) {
		this.width = option.width;
		this.height = option.height;
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext("2d");
		this.image = new Image;
		this.image.src = option.src;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		document.body.append(this.canvas);

		this.frames = option.frames;
		this.currentFrame = 0;
		this.sdvigY = 361*option.sdvigY;
		const func = this.draw.bind(this);
		setInterval(func, option.ms);
	}

	draw() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.ctx.drawImage(this.image, this.width*this.currentFrame, this.sdvigY, this.width, this.height, 0, 0, this.width, this.height);
		if (this.currentFrame === this.frames - 1) {
			this.currentFrame = 0;
		} else {
			this.currentFrame++;
		}
	}
}

const sprite0 = new Sprite({
	width: 160,
	height: 400,
	src: 'sprite.png',
	frames: 12,
	ms: 200,
	sdvigY: 0
});

const sprite1 = new Sprite({
	width: 160,
	height: 400,
	src: 'sprite.png',
	frames: 12,
	ms: 200,
	sdvigY: 1
});

const sprite2 = new Sprite({
	width: 160,
	height: 400,
	src: 'sprite.png',
	frames: 12,
	ms: 200,
	sdvigY: 2
});

const sprite3 = new Sprite({
	width: 160,
	height: 400,
	src: 'sprite.png',
	frames: 12,
	ms: 200,
	sdvigY: 3
});