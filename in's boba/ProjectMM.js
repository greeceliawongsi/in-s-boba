(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ProjectMM_atlas_", frames: [[0,6006,1366,768],[0,4004,2000,2000],[4004,2002,2000,2000],[6006,4004,2000,2000],[6006,2002,2000,2000],[2002,4004,2000,2000],[4004,4004,2000,2000],[4004,0,2000,2000],[0,0,2000,2000],[2002,0,2000,2000],[2002,2002,2000,2000],[6006,0,2000,2000],[0,2002,2000,2000]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14copy = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15copy = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15copy2 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["ProjectMM_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(-26.8,-100,0.073,0.073,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15copy2();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-28.5,0.029,0.029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15copy2();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-28.5,0.029,0.029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap14copy();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-28.5,0.028,0.028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap14copy();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-28.5,0.028,0.028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;
	this.instance.setTransform(-129.7,-34.7,0.095,0.095,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-129.7,259.5,259.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("A2QEdIAAo5MAshAAAIAAI5g");
	this.shape.setTransform(427.5,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("A2QEdIAAo5MAshAAAIAAI5g");
	this.shape_1.setTransform(712.5,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("EAsiAEdIAAo5MAsiAAAIAAI5gEhZDAEdIAAo5MAsiAAAIAAI5g");
	this.shape_2.setTransform(570,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,1140,57), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC66FF").s().p("A2QEdIAAo5MAshAAAIAAI5g");
	this.shape.setTransform(427.5,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33FF").s().p("A2QEdIAAo5MAshAAAIAAI5g");
	this.shape_1.setTransform(712.5,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC99FF").s().p("EAsiAEdIAAo5MAsiAAAIAAI5gEhZDAEdIAAo5MAsiAAAIAAI5g");
	this.shape_2.setTransform(570,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,1140,57), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("A2QEdIAAo5MAshAAAIAAI5g");
	this.shape.setTransform(427.5,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("A2QEdIAAo5MAshAAAIAAI5g");
	this.shape_1.setTransform(712.5,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("EAsiAEdIAAo5MAsiAAAIAAI5gEhZDAEdIAAo5MAsiAAAIAAI5g");
	this.shape_2.setTransform(570,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,1140,57), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.028,0.028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,57,57), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15copy();
	this.instance.parent = this;
	this.instance.setTransform(0,28.5,0.028,0.028,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,77.8,77.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15copy();
	this.instance.parent = this;
	this.instance.setTransform(28.5,0,0.028,0.028,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,77.8,77.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.029,0.029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,57,57), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.028,0.028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,56.9,56.9), null);


(lib.buttonProfile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBBMQgOgMgJgRQgLgWAAgYQAAggAUgaQARgXAbgKQATgJAXAAQAlAAAaAVQANAKAIAPQAJARAAAPQAAANgFAIQgFAHgJAAIhbAAQgGAAAAAFQAAANAOALQANALAQAAQAJABAMgEQALgEAHgFQAHgFAEAAQAFAAAFAGQAFAHAAAHQAAAOgSANQgfAXgpAAQgoAAgbgYgAgLg3QgGAHAAAJQAAAGADACQACACAHABIATAAQANAAAAgMQAAgKgGgHQgGgHgKAAQgKAAgGAJg");
	this.shape.setTransform(158.4,204.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvCBQgHgCgEgFQgFgFAAgHQAAgEADgDQACgCAIgDQAIgEACgPQADgZAAgvQAAgvgDgNQgDgOgLgGQgIgGgDgDQgDgFAAgGQAAgKAJgGQAJgIAUgGQAOgEAUgEQAWgDAKAAQAPgBAAAUIgCAcQgCAkgBAcIAAA+QAAAqACAHQABAHAIAEQAHADADACQACADAAAFQAAAGgEAGQgFAFgIACQgOAEghAAQglABgPgHg");
	this.shape_1.setTransform(140.4,200.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyCCQgHgCgEgFQgEgFAAgGQAAgGACgCQACgDAJgHQAGgEACgLQADgKAAgUIgBgYIgBgVQgBgHgKgEQgMgFAAgKQAAgNAPgGQAWgIAZgGQAYgGAOAAQALAAAAAMIAABxQAAANACAGQADAHAHAFQAGAEACADQACADAAAFQAAAZhAAAQghAAgUgFgAgzhPQgMgHAAgMQAAgRAYgKQAZgJAUAAQARAAAKAGQAKAGAAALQAAAPgPAJQgYAOghAAQgOAAgIgGg");
	this.shape_2.setTransform(126,200.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRBtQAAgGADgEQACgDAKgEQAKgEACgNQAEgTAAgWQAAgKgEgEQgDgEgJABQgLAAgDgBQgDgCABgEIABgXQABgGABgCQACgBAIgBQAHAAAAgHQAAgCgFgKQgJgQAAgRQAAgXAQgPQAYgWAsAAQAlAAAWARQARANAAASQAAANgJAIQgIAJgMAAQgOAAgNgKQgEgCgLgNQgJgJgHAAQgFAAgEAEQgEAEAAAFQAAAQAcARIAMAJIAGAJQABACAFAAIAYAAQAGAAADACQADACgBAEIgBAWQgBAHgBACQgCACgGAAIgHAAIgFgBQgJAAgDAGQgDAFAAAPQAAAVAFAOQACAGADADQADADAIACQARAFAAAOQAAAOgUAHQgUAGgtAAQhDAAAAgbg");
	this.shape_3.setTransform(110.3,200.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhUBJQgdgaAAgpQAAgtAjgeQAkgeAyAAQAkAAAbASQATAOAMAVQAMAWAAAYQAAAqgnAeQglAcgvAAQgvAAgcgbgAgUgvQgFAFAAALQAAAMAEATQAEAUAGAQQAGAQANAAQARAAAAgWQAAgQgEgVQgEgUgHgOQgGgNgLAAQgIAAgFAHg");
	this.shape_4.setTransform(89.6,204.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhWBdQgQgGgBgNQAAgKAMgJQAGgDACgDQACgDABgGQADgRAAgvQAAgJgCgEQgCgEgGgCQgOgGAAgKQAAgJAKgHQAJgHAXgGQAegJAVgBQAKAAACADQACADABAQQABAJAGAAQAEAAADgGQAQgYAZAAQASAAALALQAGAGADAJQADAJAAAIQAAAJgDAKQgFAJgHAHQgNALgRAAQgLAAgGgDQgHgEgLgKQgEgEgEAAQgFAAgCAGQgBAGAAATQAAAdACALQABAGADACQACACAIADQARAFAAANQAAAIgFAGQgGAGgJACQgSAEgkAAQgiAAgSgGg");
	this.shape_5.setTransform(67.5,204.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah7BvQAAgGADgDQADgCAMgHQAHgDABgHQABgGABglIAAhlQAAgUgDgGQgDgFgMgDQgRgGAAgMQAAgJAHgEQAHgFAOAAIAYAAIALAAIAmAAIAngDIAVgBQAgAAAZAMQArAXAAAxQAAAogeAXQgdAXgpAAIgZgBIgJgBQgGAAAAAGIAAABIACAhQAAAJADAEQADAFAJAFQAMAHAAAIQAAAMgSAHQgSAGgjAAQhIAAAAgZgAgHhWIAABDQAAAHADACQAFADAIAAQANgBAJgHQANgKAAgZQAAgZgPgMQgJgGgOgBQgNAAAAAIg");
	this.shape_6.setTransform(43.1,200.6);

	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhXBdQgPgGAAgNQAAgKALgJQAGgDACgDQACgDABgGQADgRAAgvQAAgJgCgEQgCgEgGgCQgNgGAAgKQAAgJAJgHQAJgHAXgGQAegJAVgBQAJAAADADQACADABAQQACAJAFAAQADAAAEgGQAQgYAZAAQASAAALALQAGAGADAJQAEAJAAAIQAAAJgFAKQgEAJgHAHQgMALgSAAQgKAAgHgDQgHgEgLgKQgEgEgDAAQgGAAgCAGQgBAGAAATQAAAdACALQACAGACACQACACAIADQASAFAAANQAAAIgGAGQgFAGgKACQgTAEgjAAQgiAAgTgGg");
	this.shape_7.setTransform(67.2,204.3);

	this.instance_1 = new lib.Bitmap8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhBBMQgOgMgJgQQgLgXAAgYQAAgfAUgbQARgXAbgLQATgIAXAAQAlAAAaAVQANALAIAOQAJAQAAAQQAAANgFAIQgFAHgJAAIhbAAQgGAAAAAGQAAAMAOAMQANAKAQABQAJgBAMgDQALgEAHgFQAHgFAEAAQAFAAAFAHQAFAFAAAHQAAAOgSANQgfAYgpAAQgoAAgbgYgAgLg4QgGAJAAAIQAAAGADACQACADAHgBIATAAQANAAAAgLQAAgKgGgHQgGgHgKAAQgKAAgGAIg");
	this.shape_8.setTransform(158.2,204.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvCCQgHgDgEgFQgFgGAAgFQAAgFADgCQACgDAIgEQAIgDACgPQADgZAAgvQAAgvgDgOQgDgNgLgHQgIgFgDgEQgDgEAAgGQAAgJAJgIQAJgGAUgHQAOgEAUgDQAWgFAKAAQAPABAAATIgCAdQgCAigBAeIAAA+QAAApACAHQABAGAIAEQAHAEADACQACADAAAFQAAAHgEAEQgFAGgIACQgOAFghgBQglAAgPgFg");
	this.shape_9.setTransform(140.2,200.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhUBJQgdgaAAgpQAAgtAjgdQAkgfAyAAQAkAAAbASQATANAMAWQAMAWAAAYQAAAqgnAdQglAdgvAAQgvAAgcgbgAgUgwQgFAHAAAKQAAAMAEATQAEAVAGAPQAGAQANAAQARAAAAgWQAAgRgEgTQgEgWgHgMQgGgNgLgBQgIAAgFAGg");
	this.shape_10.setTransform(89.4,204.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhXBdQgPgGgBgNQAAgKAMgJQAGgDACgDQACgDABgGQADgRAAgvQAAgJgCgEQgCgEgGgCQgOgGAAgKQAAgJAKgHQAKgHAWgGQAegJAVgBQAJAAADADQACADACAQQAAAJAGAAQADAAAEgGQAQgYAZAAQASAAALALQAGAGADAJQAEAJgBAIQAAAJgDAKQgFAJgHAHQgNALgSAAQgKAAgGgDQgHgEgLgKQgEgEgEAAQgFAAgBAGQgCAGAAATQAAAdACALQABAGADACQACACAIADQARAFAAANQABAIgGAGQgFAGgKACQgSAEgkAAQgjAAgSgGg");
	this.shape_11.setTransform(67.3,204.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah7BwQAAgHADgCQADgEAMgFQAHgEABgGQABgIABgjIAAhmQAAgUgDgFQgDgGgMgDQgRgFAAgNQAAgJAHgFQAHgEAOAAIAYABIALAAIAmgBIAngEIAVgBQAgABAZANQArAWAAAyQAAAogeAXQgdAWgpAAIgZgCIgJAAQgGAAAAAHIAAABIACAfQAAAKADAFQADAEAJAFQAMAHAAAIQAAAMgSAHQgSAHgjgBQhIABAAgZgAgHhWIAABCQAAAIADABQAFADAIAAQANABAJgIQANgLAAgXQAAgagPgLQgJgIgOABQgNAAAAAHg");
	this.shape_12.setTransform(42.8,200.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhBBMQgOgMgJgRQgLgWAAgYQAAggAUgaQARgXAbgKQATgJAXAAQAlAAAaAVQANAKAIAPQAJARAAAPQAAANgFAIQgFAHgJAAIhbAAQgGAAAAAFQAAANAOALQANAMAQgBQAJABAMgEQALgEAHgFQAHgFAEAAQAFAAAFAGQAFAGAAAHQAAAOgSANQgfAYgpAAQgoAAgbgYgAgLg3QgGAHAAAJQAAAGADACQACADAHAAIATAAQANAAAAgMQAAgLgGgGQgGgHgKAAQgKAAgGAJg");
	this.shape_13.setTransform(158.2,204.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvCBQgHgCgEgFQgFgGAAgGQAAgEADgDQACgCAIgDQAIgEACgPQADgZAAgvQAAgvgDgNQgDgOgLgGQgIgGgDgDQgDgFAAgGQAAgKAJgGQAJgIAUgGQAOgEAUgEQAWgDAKAAQAPAAAAATIgCAcQgCAkgBAcIAAA+QAAAqACAHQABAGAIAFQAHADADACQACADAAAFQAAAGgEAGQgFAFgIACQgOAEghABQglAAgPgHg");
	this.shape_14.setTransform(140.2,200.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhUBJQgdgZAAgqQAAgtAjgeQAkgeAyAAQAkAAAbATQATANAMAVQAMAWAAAYQAAAqgnAeQglAcgvAAQgvAAgcgbgAgUgvQgFAFAAALQAAAMAEATQAEAVAGAPQAGAQANAAQARAAAAgWQAAgQgEgVQgEgUgHgOQgGgNgLAAQgIAAgFAHg");
	this.shape_15.setTransform(89.4,204.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhWBdQgRgGABgNQAAgKALgJQAGgDACgDQACgDABgGQADgRAAgvQAAgJgCgEQgCgEgGgCQgOgGAAgKQAAgJAKgHQAJgHAXgGQAegJAVgBQAKAAACADQACADABAQQACAJAFAAQAEAAADgGQAQgYAZAAQASAAALALQAFAGAEAJQADAJABAIQAAAJgFAKQgEAJgHAHQgMALgSAAQgKAAgHgDQgHgEgLgKQgEgEgEAAQgFAAgCAGQgBAGAAATQAAAdACALQACAGACACQACACAIADQASAFAAANQgBAIgFAGQgGAGgJACQgSAEgkAAQgjAAgRgGg");
	this.shape_16.setTransform(67.3,204.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ah7BvQAAgFADgEQADgCAMgHQAHgDABgGQABgIABgkIAAhlQAAgUgDgGQgDgFgMgDQgRgGAAgMQAAgJAHgEQAHgFAOAAIAYAAIALAAIAmAAIAngDIAVgBQAgAAAZAMQArAXAAAyQAAAngeAXQgdAXgpAAIgZgCIgJAAQgGAAAAAGIAAABIACAhQAAAJADAEQADAFAJAFQAMAHAAAIQAAAMgSAHQgSAGgjABQhIAAAAgagAgHhWIAABCQAAAIADABQAFAEAIAAQANAAAJgIQANgKAAgZQAAgZgPgMQgJgHgOAAQgNAAAAAIg");
	this.shape_17.setTransform(42.9,200.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AvcRkMAAAgjHIe5AAMAAAAjHg");
	this.shape_18.setTransform(98.9,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6,p:{x:43.1}},{t:this.shape_5},{t:this.shape_4,p:{x:89.6}},{t:this.shape_3,p:{x:110.3,y:200.6}},{t:this.shape_2,p:{x:126,y:200.7}},{t:this.shape_1,p:{x:140.4}},{t:this.shape,p:{x:158.4}}]}).to({state:[{t:this.instance_1},{t:this.shape_6,p:{x:42.8}},{t:this.shape_7},{t:this.shape_4,p:{x:89.3}},{t:this.shape_3,p:{x:110,y:200.6}},{t:this.shape_2,p:{x:125.7,y:200.7}},{t:this.shape_1,p:{x:140.1}},{t:this.shape,p:{x:158.1}}]},1).to({state:[{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:110.1,y:200.5}},{t:this.shape_2,p:{x:125.8,y:200.6}},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_18},{t:this.instance_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_3,p:{x:110.1,y:200.5}},{t:this.shape_2,p:{x:125.8,y:200.6}},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,225);


(lib.buttonlocation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWCSIgfgDIgJABIgNABQgOAAgHgHQgMgLgLgXQgKgYAAgQQAAgbAVAAQAJAAAGAGQAHAFAWAXQAMANAIAFQAIAFAJgBQAKAAAFgEQAHgFAAgJQAAgNgXgLQgwgYgUgYQgVgYgBggQABgjAVgZQAfgkA0AAQAOAAAhAGIALACQAFAAAPgFQAGgDAFAAQAOAAANARQALAOAHARQAIAQAAAMQAAALgJAIQgIAIgMAAQgLAAgHgFQgJgFgRgRQgUgSgMAAQgIAAgFAGQgHAGAAAIQAAAPAbAMQAyAXAbAYQAWAXAAAgQAAApgkAbQgeAYgtAAQgMAAgdgEg");
	this.shape.setTransform(213.4,306.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AikCuQgYgNAAgUQAAgIAEgFQADgEALgFQAPgHADgTQAEgTABhWQgChIgDgJQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgPgEQgJgBgGgIQgGgGAAgKQAAgMAIgJQAJgIASgJQBIghAqAAQASAAAEADQAFADAAAMQAAALAHAAQADAAAPgLQANgJATgFQAUgGAQAAQAlAAAdAZQAWAVANAdQANAgAAAiQAABJgyAwQgnAlgxAAQgYAAgbgMIgHgCQgJAAAAARQAAAYAOAKQAPAKADADQACADAAAIQAAARgTALQgTAJgkAAQg/AAgwgZgAgNhVIgEBQIgBAJQAAAJAIAGQAIAFAMAAQApAAAAhBQAAgsgRgSQgLgKgOAAQgUAAgCAcg");
	this.shape_1.setTransform(179,311.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbCBQgGgIgFAAQgGAAgKAHQgcAWglAAQgmAAgYgQQgQgMgJgQQgJgSAAgTQAAgeAZgYQAmgkBNAAQARgBAEgDQADgDAAgNQAAgfgFgNQgHgOgPAAQgIAAgHAFQgHAFgKAPQgbAkgbABQgPAAgJgJQgJgIAAgOQAAgPALgOQALgNAUgLQA1gcA4AAQAzAAAkAZQASAOAIATQAIARgBAfIAAArQAAAtAGAOQADAGAEABQACADAKABQAJABAAALQAAAOgLAPQgMAQgRAKQgWANgYAAQgfAAgSgVgAghAeQgJALAAAOQAAAPAGAIQAIAJAKAAQAXAAAAgoQAAgQgEgFQgCgGgJgBQgNAAgKALg");
	this.shape_2.setTransform(142.3,306.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABPDHQgbgIAAgTQAAgHADgFQAEgEAOgMQAIgGADgSQADgSAAgqQAAgXgCgHQgDgHgHgBQgIAAgIAMQgHALgPAhIgkBPQgIAVgFAGQgGAHgHAAQgGAAgFgGQgDgDgMgWIgTgoIgnhXQgIgSgIAAQgKAAgBAPQgCAjAAAdQAAAfADALQACAHAEACIASALQAKAFAAAMQAAAhhUAAQhHAAAAggQAAgJADgDQAEgEAPgHQAKgEADgIQAEgIACgVQADgYACg2QACg0AAgmQAAgwgHgQQgDgHgDgCQgDgDgKgFQgVgKAAgQQAAgKAIgJQAIgIANgDQANgFAVgCQAWgDAPAAQAlAAAQAGQAHADAFAFQAEAFAIAQIA9BvQAKATAEAFQADADAHAAQAFAAAFgEQAFgEAGgMIAphRIAKgUQAOgeAOgJQASgNAvAAQBTAAAAAmQAAAJgDAFQgDAFgKAHQgOALgDASQgHApAAA6QAABKAHA4QACAOAEAFQADAFAQAKQAKAHAAALQAAAVgbAJQgOAEgQABQgPACggAAQgyAAgYgHg");
	this.shape_3.setTransform(98.7,300.7);

	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.15,0.15);

	this.instance_1 = new lib.Bitmap10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.15,0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A29bSMAAAg2jMAt7AAAMAAAA2jg");
	this.shape_4.setTransform(147,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:0,y:0}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{x:1282,y:857}},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.instance,p:{x:1282,y:857}},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,336.5);


(lib.btnMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeBhQgEgCAAgHQgBgMgGAAIgFABIgMAIQgSAOgXgBQgmAAgPgVQgNgTAAgqIAAgaIAAgJQAAgRgCgIQgEgJgIgEQgHgDgDgDQgCgCAAgFQABgPAWgEQAmgJAmAAQAMAAAAAKIAABpQAAAiAWAAQAFAAAFgDQAGgEACgEQAFgJAAggQgBgggCgLQgBgFgBgDIgIgFQgLgGAAgJQAAgMATgFQAkgJAkAAQATAAAAAVIAAAJIAAAXIAABVQAAAGALAGQAKAFgBAJQAAARgpAKQgYAFgXAAQgKAAgDgBg");
	this.shape.setTransform(141.6,204.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWBeQgMgFAAgLIABgGIAIgJQAIgIAAguQAAgagGgNQgFgLgOAAQgMAAgFAJQgFAIAAAWIAAAmQAAALACAFQABAEAIAMQACAEAAAEQAAAMgQAFQgQAGgiAAQg2AAAAgXQAAgEACgDQABgCAHgFQAFgDABgFIADgYIABgtQAAgOgCgEQgCgEgKgGQgIgGAAgHQAAgIAGgFQAHgFAWgIQASgGASgFQARgEAHAAQAFAAAFAEQADAEAAAGIAAAFIAAADQAAAJAIAAQAFAAAFgHQAQgZAgAAQAYAAASANQAMAJAFANQAFAMABAYIADBEQAAAIACAEQACADAKALQADADAAAGQAAANgPAFQgQAFgnAAQgbAAgLgFg");
	this.shape_1.setTransform(114.6,204.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBMQgOgMgJgRQgLgWAAgYQAAggAUgaQARgXAbgKQATgJAXAAQAlAAAaAVQANAKAIAPQAJARAAAPQAAANgFAIQgFAHgJAAIhbAAQgGAAAAAFQAAANAOALQANALAQAAQAJABAMgEQALgEAHgFQAHgFAEAAQAFAAAFAGQAFAHAAAHQAAAOgSANQgfAXgpAAQgoAAgbgYgAgLg3QgGAHAAAJQAAAGADACQACACAHABIATAAQANAAAAgMQAAgKgGgHQgGgHgKAAQgKAAgGAJg");
	this.shape_2.setTransform(90.7,204.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA1CFQgSgGAAgMQAAgFACgDQACgDAKgIQAFgEACgMQACgMAAgcQAAgPgCgFQgBgFgFAAQgFAAgFAIQgFAHgLAWIgXA1QgFANgEAFQgDAEgFAAQgEAAgEgDIgJgSIgNgaIgag6QgFgMgGAAQgGAAgBAKIgBArQAAAUACAHQABAFACACIAMAHQAHADAAAIQAAAWg4AAQgvAAAAgVQAAgGACgCQACgCALgFQAGgDACgFQADgFABgPIADgzIACg8QAAgggFgMIgEgFIgIgGQgOgGAAgLQAAgHAFgFQAFgGAJgCQAIgDAPgBQAOgCAKAAQAZAAAKAEQAFACADADQADADAGALIAoBKQAHANACACQACADAFAAQADAAAEgDIAHgLIAbg1IAHgOQAJgTAKgHQAMgIAfAAQA3AAAAAZQAAAGgCADQgCADgHAFQgJAHgCANQgEAbAAAnQAAAwAEAmQABAJADADQACAEAKAGQAHAFAAAIQAAAOgSAFQgJADgKABIggABQghAAgQgEg");
	this.shape_3.setTransform(62.4,200.5);

	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1,0.1);

	this.instance_1 = new lib.Bitmap9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AuvSzMAAAgllIdfAAMAAAAllg");
	this.shape_4.setTransform(94.4,120.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,225);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Taro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2QEdIAAo5MAshAAAIAAI5g");
	var mask_graphics_14 = new cjs.Graphics().p("A2QEdIAAo5MAshAAAIAAI5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:142.5,y:28.5}).wait(14).to({graphics:mask_graphics_14,x:142.5,y:28.5}).wait(1));

	// Layer_2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(570,28.5,1,1,0,0,0,570,28.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:509},0).wait(1).to({x:447.9},0).wait(1).to({x:386.8},0).wait(1).to({x:325.7},0).wait(1).to({x:264.7},0).wait(1).to({x:203.6},0).wait(1).to({x:142.5},0).wait(1).to({x:81.4},0).wait(1).to({x:20.3},0).wait(1).to({x:-40.7},0).wait(1).to({x:-101.8},0).wait(1).to({x:-162.9},0).wait(1).to({x:-224},0).wait(1).to({x:-285.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,57);


(lib.Oreo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2QEdIAAo5MAshAAAIAAI5g");
	var mask_graphics_14 = new cjs.Graphics().p("A2QEdIAAo5MAshAAAIAAI5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:142.5,y:28.5}).wait(14).to({graphics:mask_graphics_14,x:142.5,y:28.5}).wait(1));

	// Layer_2
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(570,28.5,1,1,0,0,0,570,28.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:509},0).wait(1).to({x:447.9},0).wait(1).to({x:386.8},0).wait(1).to({x:325.7},0).wait(1).to({x:264.7},0).wait(1).to({x:203.6},0).wait(1).to({x:142.5},0).wait(1).to({x:81.4},0).wait(1).to({x:20.3},0).wait(1).to({x:-40.7},0).wait(1).to({x:-101.8},0).wait(1).to({x:-162.9},0).wait(1).to({x:-224},0).wait(1).to({x:-285.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,57);


(lib.Honey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2QEdIAAo5MAshAAAIAAI5g");
	var mask_graphics_14 = new cjs.Graphics().p("A2QEdIAAo5MAshAAAIAAI5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:142.5,y:28.5}).wait(14).to({graphics:mask_graphics_14,x:142.5,y:28.5}).wait(1));

	// Layer_2
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(570,28.5,1,1,0,0,0,570,28.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:508.9},0).wait(1).to({x:447.7},0).wait(1).to({x:386.6},0).wait(1).to({x:325.4},0).wait(1).to({x:264.3},0).wait(1).to({x:203.1},0).wait(1).to({x:142},0).wait(1).to({x:80.8},0).wait(1).to({x:19.7},0).wait(1).to({x:-41.5},0).wait(1).to({x:-102.6},0).wait(1).to({x:-163.8},0).wait(1).to({x:-224.9},0).wait(1).to({x:-286.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,57);


// stage content:
(lib.ProjectMM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnMaps.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.google.co.id/maps/place/PIK+Avenue/@-6.1091181,106.7382264,17z/data=!3m1!4b1!4m5!3m4!1s0x2e6a1d3b08d73ce5:0xa57ef5bb9b685927!8m2!3d-6.1091234!4d106.7404151?hl=id&authuser=0", "_blank");
		}
	}
	this.frame_19 = function() {
		this.stop()
		
		function Menu(){
			this.gotoAndPlay(29)
		}
		this.btnMenu.addEventListener("click", Menu.bind(this))
		this.stop()
		
		this.btnProfile.addEventListener("click", Profile.bind(this))
		function Profile(){
			this.gotoAndStop(24)
		}
	}
	this.frame_29 = function() {
		playSound("_1minuteHappyBackgroundMusic");
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(15).call(this.frame_44).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(275,200.1,0.994,0.994);
	this.___camera___instance.depth = 0;
	this.___camera___instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(29).to({_off:false},0).to({scaleX:0.86,scaleY:0.86,y:200},15).wait(1));

	// Animasi3
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(372.5,195.6,0.285,0.285,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,y:195.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-29.9,y:195.6},0).wait(1).to({rotation:-30},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-60,x:372.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-29.9},0).wait(1).to({rotation:-30},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.6,regY:0.7,rotation:0,x:372.7},0).to({_off:true},1).wait(25));

	// Animasi2
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.6,195.7,0.22,0.22,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,x:192.5,y:195.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:29.8,x:192.7,y:195.7},0).wait(1).to({rotation:29.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:59.9},0).wait(1).to({rotation:60},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:29.8,x:192.8,y:195.8},0).wait(1).to({rotation:29.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:1.2,regY:0.3,scaleX:0.22,scaleY:0.22,rotation:0},0).to({_off:true},1).wait(25));

	// Animasi1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(287.5,166.5,1,1,0,0,0,28.5,28.5);

	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(287.5,166.6,1,1,0,0,0,38.9,38.9);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(287.4,166.4,1,1,0,0,0,28.4,28.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(287.5,166.5,1,1,0,0,0,38.9,38.9);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287.4,166.4,1,1,0,0,0,28.4,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(4).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({regX:28.5,regY:28.5,x:287.5,y:166.5},0).wait(3).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(4).to({_off:true},1).wait(26));

	// btnMaps
	this.btnMaps = new lib.buttonlocation();
	this.btnMaps.name = "btnMaps";
	this.btnMaps.parent = this;
	this.btnMaps.setTransform(396.7,316.8,0.237,0.212,0,0,0,149.9,150.4);
	new cjs.ButtonHelper(this.btnMaps, 0, 1, 2, false, new lib.buttonlocation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMaps).to({_off:true},20).wait(25));

	// Oreo
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(1,0,0,1,-1000,-1000)).s().p("ApIiCIJImqIJKGpIjfKvIrTABg");
	this.shape.setTransform(-115.1,267.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.936,0,0,0.936,-935.5,-935.6)).s().p("Ao+h+II+mmII/GhIjZKlIrGADg");
	this.shape_1.setTransform(-100.8,266.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.871,0,0,0.871,-871.2,-871.3)).s().p("Aozh7IIymgII1GZIjTKaIq5ADg");
	this.shape_2.setTransform(-86.6,265.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.807,0,0,0.807,-806.7,-807)).s().p("Aoph5IInmZIIsGPIjOKQIqsAGg");
	this.shape_3.setTransform(-72.3,264.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.742,0,0,0.743,-742.3,-742.6)).s().p("Aofh2IIcmUIIjGIIjJKGIqfAGg");
	this.shape_4.setTransform(-58,264);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.678,0,0,0.678,-677.9,-678.3)).s().p("AoUhyIIQmPIIZF/IjEJ7IqRAJg");
	this.shape_5.setTransform(-43.8,263);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.613,0,0,0.614,-613.5,-613.9)).s().p("AoJhvIIEmJIIPF3Ii9JvIqFALg");
	this.shape_6.setTransform(-29.5,262.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.549,0,0,0.55,-549,-549.6)).s().p("An/htIH5mDIIGFvIi4JlIp4ANg");
	this.shape_7.setTransform(-15.3,261.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.485,0,0,0.485,-484.6,-485.2)).s().p("An0hqIHtl9IH8FnIizJaIpqAOg");
	this.shape_8.setTransform(-1,260.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.42,0,0,0.421,-420.2,-420.9)).s().p("AnqhnIHil4IHzFfIiuJQIpdAQg");
	this.shape_9.setTransform(13.3,259.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.356,0,0,0.357,-355.8,-356.6)).s().p("AnfhjIHWlyIHpFWIinJEIpRARg");
	this.shape_10.setTransform(27.5,258.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.291,0,0,0.292,-291.3,-292.2)).s().p("AnUhgIHKltIHfFOIiiI6IpCATg");
	this.shape_11.setTransform(41.8,257.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.227,0,0,0.228,-226.9,-227.9)).s().p("AnKheIG/lnIHWFHIicIvIo2AUg");
	this.shape_12.setTransform(56.1,256.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.162,0,0,0.163,-162.5,-163.6)).s().p("AnAhbIG0lhIHNE9IiYIlIopAXg");
	this.shape_13.setTransform(70.3,255.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.098,0,0,0.099,-98.1,-99.2)).s().p("Am1hXIGplcIHCE1IiSIbIobAXg");
	this.shape_14.setTransform(84.6,254.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],7), null, new cjs.Matrix2D(0.034,0,0,0.035,-33.6,-34.9)).s().p("AmrhUIGdlWIG5EsIiLIQIoQAag");
	this.shape_15.setTransform(98.9,253.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Taro
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(1,0,0,1,-1000,-1000)).s().p("AkqDwQh8hjAAiNQAAiMB8hjQB8hkCuAAQCvAAB8BkQB8BjAACMQAACNh8BjQh8BkivAAQiuAAh8hkg");
	this.shape_16.setTransform(-101.8,152.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.936,0,0,0.936,-935.5,-935.8)).s().p("AknDwQh7hjAAiNQAAiMB7hjQB7hjCsAAQCtAAB7BjQB7BjAACMQAACNh7BjQh7BjitAAQisAAh7hjg");
	this.shape_17.setTransform(-88.8,153.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.871,0,0,0.872,-871.1,-871.6)).s().p("AkjDvQh6hjAAiMQAAiLB6hjQB4hjCrAAQCsAAB5BjQB5BjAACLQAACMh5BjQh5BjisAAQirAAh4hjg");
	this.shape_18.setTransform(-75.7,153.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.807,0,0,0.807,-806.6,-807.4)).s().p("AkgDuQh5hiAAiMQAAiLB5hjQB4hjCoAAQCqAAB4BjQB4BjAACLQAACMh4BiQh4BjiqAAQioAAh4hjg");
	this.shape_19.setTransform(-62.6,154.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.742,0,0,0.743,-742.2,-743.3)).s().p("AkeDuQh2hjAAiLQAAiLB2hiQB3hjCnAAQCoAAB2BjQB3BiAACLQAACLh3BjQh2BjioAAQinAAh3hjg");
	this.shape_20.setTransform(-49.5,155.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.678,0,0,0.679,-677.7,-679.1)).s().p("AkaDuQh2hjAAiLQAAiKB2hjQB1hiClAAQCmAAB1BiQB2BjAACKQAACLh2BjQh1BiimAAQilAAh1hig");
	this.shape_21.setTransform(-36.5,155.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.613,0,0,0.615,-613.3,-614.9)).s().p("AkXDtQh0hiAAiLQAAiKB0hiQB0hiCjAAQCkAAB0BiQB0BiAACKQAACLh0BiQh0BiikAAQijAAh0hig");
	this.shape_22.setTransform(-23.4,156.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.549,0,0,0.551,-548.8,-550.7)).s().p("AkUDsQhzhiAAiKQAAiKBzhiQByhhCiAAQCjAAByBhQBzBiAACKQAACKhzBiQhyBiijAAQiiAAhyhig");
	this.shape_23.setTransform(-10.3,157.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.484,0,0,0.486,-484.4,-486.4)).s().p("AkRDsQhxhhAAiLQAAiJBxhiQByhhCfgBQCgABByBhQBxBiAACJQAACLhxBhQhyBhigAAQifAAhyhhg");
	this.shape_24.setTransform(2.8,157.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.42,0,0,0.422,-419.9,-422.3)).s().p("AkNDrQhxhhAAiKQAAiJBxhhQBvhiCeAAQCeAABxBiQBwBhAACJQAACKhwBhQhxBiieAAQieAAhvhig");
	this.shape_25.setTransform(15.9,158.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.355,0,0,0.358,-355.5,-358.1)).s().p("AkLDqQhvhhAAiJQAAiJBvhhQBvhhCcAAQCdAABvBhQBuBhAACJQAACJhuBhQhvBiidAAQicAAhvhig");
	this.shape_26.setTransform(29,159.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.291,0,0,0.294,-291,-293.9)).s().p("AkHDqQhuhgAAiKQAAiIBuhhQBthhCaAAQCbAABuBhQBtBhAACIQAACKhtBgQhuBhibAAQiaAAhthhg");
	this.shape_27.setTransform(42,159.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.227,0,0,0.23,-226.6,-229.7)).s().p("AkEDqQhshhAAiJQAAiIBshgQBrhhCZAAQCZAABsBhQBsBgABCIQgBCJhsBhQhsBgiZAAQiZAAhrhgg");
	this.shape_28.setTransform(55.1,160.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.162,0,0,0.165,-162.2,-165.5)).s().p("AkBDpQhrhgAAiJQAAiIBrhgQBrhgCWAAQCXAABrBgQBrBgAACIQAACJhrBgQhrBgiXAAQiWAAhrhgg");
	this.shape_29.setTransform(68.2,161.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.098,0,0,0.101,-97.7,-101.3)).s().p("Aj+DpQhphhgBiIQABiHBphgQBphhCVAAQCVAABqBhQBpBgAACHQAACIhpBhQhqBgiVgBQiVABhphgg");
	this.shape_30.setTransform(81.3,161.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],4), null, new cjs.Matrix2D(0.033,0,0,0.037,-33.3,-37.2)).s().p("Aj7DoQhohgAAiIQAAiHBohgQBohgCTAAQCUAABoBgQBoBgAACHQAACIhoBgQhoBgiUAAQiTAAhohgg");
	this.shape_31.setTransform(94.3,162.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},29).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

	// Honey
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(1,0,0,1,-1000,-1000)).s().p("Am6FdIAAq5IN1AAIAAK5g");
	this.shape_32.setTransform(-100.8,42.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.936,0,0,0.936,-935.6,-935.6)).s().p("AmwFYIAAqvINgAAIAAKvg");
	this.shape_33.setTransform(-87.8,44);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.871,0,0,0.871,-871.2,-871.2)).s().p("AmlFUIAAqnINLAAIAAKng");
	this.shape_34.setTransform(-74.8,45.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.807,0,0,0.807,-806.8,-806.8)).s().p("AmaFQIAAqfIM1AAIAAKfg");
	this.shape_35.setTransform(-61.8,47.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.742,0,0,0.742,-742.4,-742.4)).s().p("AmQFMIAAqXIMhAAIAAKXg");
	this.shape_36.setTransform(-48.9,49.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.678,0,0,0.678,-677.9,-678)).s().p("AmFFHIAAqNIMLAAIAAKNg");
	this.shape_37.setTransform(-35.9,51);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.614,0,0,0.614,-613.5,-613.5)).s().p("Al7FDIAAqFIL3AAIAAKFg");
	this.shape_38.setTransform(-22.9,52.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.549,0,0,0.549,-549.1,-549.1)).s().p("AlwE/IAAp9ILhAAIAAJ9g");
	this.shape_39.setTransform(-9.9,54.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.485,0,0,0.485,-484.7,-484.7)).s().p("AlmE7IAAp1ILNAAIAAJ1g");
	this.shape_40.setTransform(3.1,56.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.42,0,0,0.42,-420.3,-420.3)).s().p("AlbE3IAApsIK3AAIAAJsg");
	this.shape_41.setTransform(16.1,58);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.356,0,0,0.356,-355.9,-355.9)).s().p("AlREyIAApjIKjAAIAAJjg");
	this.shape_42.setTransform(29.1,59.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.291,0,0,0.291,-291.5,-291.5)).s().p("AlGEuIAApbIKNAAIAAJbg");
	this.shape_43.setTransform(42.1,61.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.227,0,0,0.227,-227,-227.1)).s().p("Ak7EqIAApTIJ4AAIAAJTg");
	this.shape_44.setTransform(55.1,63.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.163,0,0,0.163,-162.6,-162.6)).s().p("AkxElIAApKIJjAAIAAJKg");
	this.shape_45.setTransform(68.1,64.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.098,0,0,0.098,-98.2,-98.3)).s().p("AkmEhIAApBIJNAAIAAJBg");
	this.shape_46.setTransform(81.1,66.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ProjectMM_atlas_"],5), null, new cjs.Matrix2D(0.034,0,0,0.034,-33.8,-33.8)).s().p("AkcEdIAAo5II5AAIAAI5g");
	this.shape_47.setTransform(94.1,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},29).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	// Menu1
	this.text = new cjs.Text("Oreo Milk Tea Boba\nMilk Tea + Oreo + 100% Honey", "bold 16px 'Comic Sans MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 281;
	this.text.parent = this;
	this.text.setTransform(325.5,229.8);

	this.text_1 = new cjs.Text("Taro Milk Tea Boba\nMilk Tea + Taro + 100% Honey", "bold 16px 'Comic Sans MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 281;
	this.text_1.parent = this;
	this.text_1.setTransform(325.5,131.7);

	this.text_2 = new cjs.Text("Honey Milk Tea Boba\nMilk Tea + 100% Honey", "bold 16px 'Comic Sans MS'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 281;
	this.text_2.parent = this;
	this.text_2.setTransform(325.5,41.9);

	this.instance_7 = new lib.Oreo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(325.5,256.3,1,1,0,0,0,142.5,28.5);

	this.instance_8 = new lib.Taro();
	this.instance_8.parent = this;
	this.instance_8.setTransform(325.5,158.2,1,1,0,0,0,142.5,28.5);

	this.instance_9 = new lib.Honey();
	this.instance_9.parent = this;
	this.instance_9.setTransform(325.5,68.4,1,1,0,0,0,142.5,28.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEFEEB").s().p("EgqzAe/MAAAg9+MBVnAAAMAAAA9+g");
	this.shape_48.setTransform(275.3,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.text_2},{t:this.text_1},{t:this.text}]},29).wait(16));

	// btnMenu
	this.btnMenu = new lib.btnMenu();
	this.btnMenu.name = "btnMenu";
	this.btnMenu.parent = this;
	this.btnMenu.setTransform(282.7,316.7,0.356,0.317,0,0,0,100,100.1);
	new cjs.ButtonHelper(this.btnMenu, 0, 1, 2, false, new lib.btnMenu(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMenu).wait(19).to({_off:true},1).wait(25));

	// Video+profile
	this.instance_10 = new lib.an_Video({'id': 'instance_10', 'src':'videos/MM(1).mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance_10.setTransform(274.8,104.8,0.701,0.582,0,0,0,199.7,149.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_49.setTransform(315.6,358.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_50.setTransform(312.6,354.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAtQgGgCAAgEQAAgFAEAAIAHABIALABQAKgBAFgKQACgHAAgPQgDAGgEADQgEADgFAAQgLAAgGgHQgHgIABgKQAAgQAJgJQAIgKAPAAIAJABQAEACACADQAGAAABAHIgCAKIgCALIgBATQAAALgCAIQgDAJgGAEQgGAGgMAAIgOgBgAgKgcQgFAHAAAKQAAAJADADQADAEAGAAQAFAAAGgGQAEgGABgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_51.setTransform(307.6,357.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgUAtQgGgCAAgEQAAgFAEAAIAHABIALABQAKgBAFgKQACgHAAgPQgDAGgEADQgEADgFAAQgLAAgGgHQgHgIABgKQAAgQAJgJQAIgKAPAAIAJABQAEACACADQAGAAABAHIgCAKIgCALIgBATQAAALgCAIQgDAJgGAEQgGAGgMAAIgOgBgAgKgcQgFAHAAAKQAAAJADADQADAEAGAAQAFAAAGgGQAEgGABgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_52.setTransform(301.3,357.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAAAAIIAAAHQALgNAIAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_53.setTransform(295.2,355.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_54.setTransform(290.5,354.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgDAoQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIAAgHIABgGIgCghIgMgBQgFgBAAgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIAMACIAAgIIAAgHQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgBQAFAAAAAIIABAGIAAADIgBAEIAJgCIAIABQADABAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgCgBIgDAAIgIABIABAhIAAADIAAACQAAANgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_55.setTransform(285.9,355);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AANAbQgHAEgJABQgHAAgFgEQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAQIACALIAEABIADAAQAHABAJgDIAAgLIAAgLIABgWQAAgEAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_56.setTransform(276.5,356);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgDAoQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIAAgHIABgGIgCghIgMgBQgFgBAAgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIAMACIAAgIIAAgHQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgBQAFAAAAAIIABAGIAAADIgBAEIAJgCIAIABQADABAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgCgBIgDAAIgIABIABAhIAAADIAAACQAAANgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_57.setTransform(270.6,355);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AANAbQgHAEgJABQgHAAgFgEQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAQIACALIAEABIADAAQAHABAJgDIAAgLIAAgLIABgWQAAgEAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_58.setTransform(264.7,356);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAFIAAAJIgBAKIABAEIAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgGAAAAgPIAAgKIABgKIgBgJIAAgJQAAgNAGgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAADIgBAEIAAAFQADgGAGgFQAGgEAEgBQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADALIADAPIAEAgQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFAAAAgGIgCgSIgCgRIgCgIQgCgEgDAAQgCgBgGAEIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_59.setTransform(257.1,356);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgWAaIAAgnIAAgFIABgHQAAgFAFAAQAGAAgBAKQALgMANAAQAFAAACAEQACAEABAHIAAAEQgBAHgGAAQgEAAAAgFIAAgFIAAgEQgKABgEADQgGAFgDAHIAAAeQAAAGgFABQgGgBAAgGg");
	this.shape_60.setTransform(249.8,356);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANAAQAJABAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAEAFADQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAFQgIAEgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_61.setTransform(243.6,356);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_62.setTransform(236.9,354.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHABgPQgEAGgEADQgFADgEAAQgKAAgHgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAgBAHIgBAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQAAAJADADQADAEAGAAQAFAAAFgGQAGgGABgGIACgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_63.setTransform(457.1,339.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgFIABgQIACgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAABAHIAAAHQAKgNAIAAQAKAAADAIQADAGAAAKIAAAGIAAAEIACAMIABANQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_64.setTransform(451.1,337.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_65.setTransform(444.8,337.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgOAtQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgGANgbIgVgnIgCgEIgBgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQAKAOAKAZIAJgUIAJgSQACgDADAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIACAEIgBADIgUAqIgLAaIgDAMQgCAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_66.setTransform(438.6,339.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_67.setTransform(430.6,336.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQACAAACADIAGACIAHABQAEAAAEgBQAFgCAAgDQAAgIgLgDIgFgBIgLgEQgFgDABgGQAAgMALgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIABAFIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIADAAQANADAGAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgHAAgHgDg");
	this.shape_68.setTransform(425.8,337.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_69.setTransform(420,337.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIgBAGIAAAFIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAAAAHIAAAHQALgNAIAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_70.setTransform(414,337.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_71.setTransform(409.3,336.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_72.setTransform(404.1,336.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAEIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgRIgCgSIgCgIQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_73.setTransform(396,337.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgQAYQgIgHAAgOQgBgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAAMgHAJQgHALgMAAQgJAAgHgIgAgJgLQgEAHAAAHQAAAIAEAFQAEAEAFAAQAFAAAFgEQAFgFAAgJQABgVgNAAQgIAAgEAIg");
	this.shape_74.setTransform(388,337.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAPAsIgJgOIgJgOIgKAHIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgOIAAgUIABgUIgBgFIAAgHQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAFIgBATIAAAUIAOgNIANgNQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDgBgCgDg");
	this.shape_75.setTransform(382.2,336.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIgBAGIAAAFIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAAAAHIAAAHQALgNAIAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_76.setTransform(372.2,337.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_77.setTransform(365.9,337.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAsIgJgOIgJgOIgKAHIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgOIAAgUIABgUIgBgFIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAFIgBATIAAAUIAOgNIANgNQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDgBgCgDg");
	this.shape_78.setTransform(360,336.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_79.setTransform(353.5,337.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgWAvQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgXIAAgXIgBgWIgBgMQABgEABgDQACgEADAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBADIAKgFIAIgBQAMAAAFAKQAFAIAAAOQgBALgGAJQgHAIgMAAQgFAAgGgCIAAAcQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgFgeIgIAGIACAbQAGACAFAAQAHABAEgGQAEgDAAgIQAAgKgDgGQgDgFgFAAQgFAAgEACg");
	this.shape_80.setTransform(347.4,339.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_81.setTransform(341,337.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgWAbIAAgoIAAgFIABgHQAAgFAFgBQAFABAAAJQALgKANgBQAFABACADQACADABAIIAAAEQgBAHgGAAQgEAAAAgGIAAgEIAAgFQgKACgEADQgGAEgDAIIAAAfQAAAFgFAAQgGAAAAgFg");
	this.shape_82.setTransform(335.3,337.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJgBAGAEQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgCQAGgBACgDQACgDADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgIQAJgEAFgFQgFgEgJAAQgGAAgFAGg");
	this.shape_83.setTransform(329.1,337.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAEIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgRIgCgSIgCgIQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_84.setTransform(321.3,337.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_85.setTransform(309.9,337.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_86.setTransform(303.4,336.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_87.setTransform(296.9,337.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAEIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgRIgCgSIgCgIQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_88.setTransform(289.4,337.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAOAcIgCgNIAAgMIAAgFIAAgFQAAgNgEAAQgHAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgFIABgQIABgQIAAgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAABAHIAAAHQAJgNAKAAQAJAAADAIQADAGAAAKIAAAGIAAAEIACAMIABANQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_89.setTransform(278.2,337.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_90.setTransform(271.9,337.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_91.setTransform(265.4,336.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_92.setTransform(255.3,337.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQACAAADADIAFACIAHABQAEAAADgBQAGgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDgBgGQAAgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABABAAIAAAFIABAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIAEAAQAMADAGAEQAKAFAAAMQAAAJgJAFQgHAEgJAAQgHAAgHgDg");
	this.shape_93.setTransform(249.2,337.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_94.setTransform(243.4,337.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAEADIAFACIAHABQAEAAAEgBQAFgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDAAgGQAAgMALgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIABAFIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIAEAAQAMADAGAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgIAAgGgDg");
	this.shape_95.setTransform(237.3,337.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAABAHIAAAHQAJgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_96.setTransform(228.1,337.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_97.setTransform(221.7,337.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgVAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgXIAAgXIgBgWIAAgMQAAgEABgDQABgEAEAAQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAADIAJgFIAIgBQAMAAAGAKQADAIAAAOQABALgHAJQgHAIgMAAQgEAAgIgCIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgEgeIgJAGIABAbQAHACAFAAQAIABADgGQADgDAAgIQABgKgDgGQgCgFgGAAQgFAAgDACg");
	this.shape_98.setTransform(215.6,339.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_99.setTransform(209.3,337.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAABAHIAAAHQAJgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_100.setTransform(203.3,337.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_101.setTransform(197.1,337.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAEIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgRIgCgSIgCgIQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_102.setTransform(189.5,337.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_103.setTransform(183.3,336.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_104.setTransform(178.5,337.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHABgPQgEAGgEADQgFADgEAAQgKAAgHgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAgBAHIgBAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQAAAJADADQADAEAGAAQAFAAAFgGQAGgGABgGIACgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_105.setTransform(172.3,339.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_106.setTransform(166.2,337.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgXIABgYIABgQQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAIgCAKAAQAJAAAJAHQAMAIAAAMQAAAOgMAIQAIAEAFAEQAFAFgBAFQABAHgJAHQgEAEgHACQgLAGgVAAQgCAAgCgDgAgRAXIAAAMQAPgBAJgEIAIgEQADgDAAgCQAAgDgIgDIgKgEIgGgBIgCAAIgCAAIgHAAIAAANgAgPgiIAAAKIgBAXIAJAAQAHAAAGgFQAGgFAAgIQAAgGgGgFQgGgEgGAAIgJAAg");
	this.shape_107.setTransform(159.7,336.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_108.setTransform(150.7,340.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_109.setTransform(146.1,337.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_110.setTransform(139.5,336.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_111.setTransform(133.1,337.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAEIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgRIgCgSIgCgIQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_112.setTransform(125.5,337.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgWAvQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgXIAAgXIgBgWIgBgMQABgEABgDQACgEADAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBADIAKgFIAIgBQAMAAAFAKQAFAIAAAOQAAALgHAJQgHAIgMAAQgEAAgIgCIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgFgeIgIAGIABAbQAHACAFAAQAHABAEgGQADgDAAgIQAAgKgCgGQgDgFgFAAQgEAAgFACg");
	this.shape_113.setTransform(114.2,339.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_114.setTransform(107.8,337.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgVAbIAAgoIAAgFIAAgHQAAgFAFgBQAFABAAAJQALgKANgBQAFABACADQACADABAIIAAAEQgBAHgGAAQgEAAAAgGIAAgEIAAgFQgKACgEADQgGAEgDAIIAAAfQABAFgHAAQgEAAAAgFg");
	this.shape_115.setTransform(102.1,337.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_116.setTransform(97.5,336.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQACAAACADIAGACIAHABQAEAAAEgBQAFgCAAgDQAAgIgLgDIgFgBIgLgEQgFgDABgGQAAgMALgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIABAFIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIADAAQANADAGAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgHAAgHgDg");
	this.shape_117.setTransform(92.8,337.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIgBgFIACgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAABAIIAAAHQAJgNAJAAQAKAAAEAIQACAFAAALIAAAGIAAAEIACANIAAAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_118.setTransform(462.4,319.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_119.setTransform(456.2,319.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgWAaIAAgnIAAgFIABgHQAAgFAFAAQAGAAgBAKQALgMANAAQAFAAACAEQACAEAAAHIAAAEQAAAHgGAAQgEAAAAgFIAAgFIAAgEQgKABgEADQgGAEgDAIIAAAeQAAAGgFABQgGgBAAgGg");
	this.shape_120.setTransform(450.5,319.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AANAbQgHAEgJABQgHAAgFgEQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAQIACAKIAEACIADAAQAHABAJgDIAAgLIAAgLIABgWQAAgEAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_121.setTransform(444.4,319.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgWAvQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYIAAgVIgBgYIAAgLQAAgEABgDQACgEADABQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBADIAKgFIAIgCQAMAAAFALQAEAIABAOQAAALgHAJQgHAIgMAAQgEAAgIgCIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgFgdIgIAFIABAbQAHADAFAAQAHAAAEgGQADgEAAgHQAAgLgCgFQgDgFgFAAQgEAAgFADg");
	this.shape_122.setTransform(438.2,320.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAFIAAAJIgBAKIABAEIAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgGAAAAgPIAAgKIABgKIgBgJIAAgJQAAgNAGgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAADIgBAEIAAAFQADgGAGgFQAGgEAEgBQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADALIADAPIAEAgQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFAAAAgGIgCgSIgCgRIgCgIQgCgEgDAAQgCgBgGAEIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_123.setTransform(430.4,319.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_124.setTransform(422.7,319.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgQAZQgIgHAAgNQAAgKAIgNQAIgOAKABQAGAAAHACQAJADAAAFQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBIgDgCQgDgCgIgBQgFAAgFALQgFAJgBAGQABAJAFADQAEAFAHAAQAEAAADgCIAHgEIACgBQABAAABABQAAAAABAAQAAAAABAAQAAABABAAIABAEQAAAEgJAEQgHADgGAAQgKABgJgIg");
	this.shape_125.setTransform(416.7,319.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIgBgFIACgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAABAIIAAAHQAJgNAJAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_126.setTransform(407.1,319.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_127.setTransform(400.8,319.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgTAtQgIgCABgEQAAgFAEAAIAHABIALABQAKgBAEgKQADgHAAgPQgDAGgEADQgFADgEAAQgKAAgHgHQgGgIAAgKQgBgQAKgJQAIgKAQAAIAJABQADACACADQAGAAABAHIgCAKIgBALIgCATQAAALgCAIQgCAJgHAEQgGAGgNAAIgMgBgAgKgcQgFAHgBAKQABAJADADQADAEAHAAQAEAAAGgGQAEgGABgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_128.setTransform(394.6,321.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgEAAQgHgBgFAIQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgFIABgQIACgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAABAIIAAAHQAJgNAKAAQAJAAADAIQADAFAAALIAAAGIAAAEIACANIAAAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_129.setTransform(388.5,319.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAEAFADQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAFQgIADgJAAQgMAAgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_130.setTransform(382.2,319.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_131.setTransform(375.4,317.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgVQAAgGAFAAQAGAAAAAGIgBAVIAAAUIgBAdIAAANQgBAGgEAAQgGAAAAgGg");
	this.shape_132.setTransform(366.8,317.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_133.setTransform(362.1,319.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgDAoQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAgHIABgGIgCghIgMgBQgFgBAAgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABgBAAAAIAMACIAAgIIAAgHQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgBQAFAAAAAIIABAGIAAADIgBAEIAJgCIAIABQADABAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgCgBIgDAAIgIABIABAhIAAADIAAACQAAANgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_134.setTransform(356.3,318.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAOAcIgCgMIAAgNIAAgEIAAgGQAAgMgEAAQgHgBgFAIQgFAHgDAKIgBAFIAAAGIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgFIABgQIABgQIAAgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQAFAAABAIIAAAHQAJgNAKAAQAJAAADAIQADAFAAALIAAAGIAAAEIACANIABAMQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_135.setTransform(350.5,319.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAEAFADQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAFQgIADgJAAQgMAAgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_136.setTransform(344.2,319.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAPAsIgJgOIgJgNIgKAGIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgOIAAgTIABgVIgBgFIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAFIgBAUIAAATIAOgNIANgNQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgDg");
	this.shape_137.setTransform(338,317.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAOAcIgCgMIAAgNIAAgEIAAgGQAAgMgEAAQgHgBgFAIQgFAHgDAKIgBAFIAAAGIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIAAgFIAAgQIABgQIAAgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQAFAAAAAIIAAAHQAKgNAKAAQAJAAADAIQADAFAAALIAAAGIAAAEIACANIABAMQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_138.setTransform(327.9,319.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_139.setTransform(321.7,319.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_140.setTransform(315.2,317.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgOAtQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAgGANgbIgVgnIgCgEIgCgFQAAAAABgBQAAgBAAAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQAKAOAKAZIAJgUIAJgSQACgDADAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIACAEIgBADIgUAqIgLAaIgDAMQgCAEgDAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_141.setTransform(304.9,321.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAFIAAAJIgBAKIABAEIAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgGAAAAgPIAAgKIABgKIgBgJIAAgJQAAgNAGgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAADIgBAEIAAAFQADgGAGgFQAGgEAEgBQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADALIADAPIAEAgQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFAAAAgGIgCgSIgCgRIgCgIQgCgEgDAAQgCgBgGAEIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_142.setTransform(297.5,319.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_143.setTransform(289.8,319.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAEAFADQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAFQgIADgJAAQgMAAgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_144.setTransform(283.6,319.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgWAaIAAgnIAAgFIABgHQAAgFAFAAQAGAAAAAKQAKgMANAAQAFAAACAEQACAEAAAHIAAAEQAAAHgFAAQgGAAAAgFIAAgFIAAgEQgJABgEADQgGAEgDAIIABAeQgBAGgFABQgFgBgBgGg");
	this.shape_145.setTransform(277.6,319.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgPAZQgJgHAAgNQAAgKAIgNQAIgOAKABQAGAAAHACQAJADAAAFQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBIgDgCQgDgCgIgBQgEAAgGALQgGAJAAAGQAAAJAGADQAEAFAHAAQAEAAAEgCIAGgEIADgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIACAEQAAAEgJAEQgIADgFAAQgLABgHgIg");
	this.shape_146.setTransform(271.6,319.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_147.setTransform(263.4,318.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAAAAIIAAAHQAKgNAJAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_148.setTransform(258.7,319.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_149.setTransform(253.9,318.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAAAAIIAAAHQAKgNAJAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_150.setTransform(245.6,319.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_151.setTransform(239.4,319.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAPAsIgJgOIgJgNIgKAGIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgOIAAgTIABgVIgBgFIAAgHQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAFIgBAUIAAATIAOgNIANgNQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBABQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgDg");
	this.shape_152.setTransform(233.5,317.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_153.setTransform(227,319.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIgBAFIAAAGIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAAAAIIAAAHQALgNAIAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_154.setTransform(221,319.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AANAbQgHAEgJABQgHAAgFgEQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAQIACAKIAEACIADAAQAHABAJgDIAAgLIAAgLIABgWQAAgEAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_155.setTransform(214.6,319.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgTAtQgIgCABgEQAAgFAEAAIAHABIALABQAKgBAEgKQADgHAAgPQgDAGgEADQgFADgEAAQgKAAgHgHQgGgIAAgKQgBgQAKgJQAIgKAQAAIAJABQADACACADQAGAAABAHIgCAKIgBALIgCATQAAALgCAIQgCAJgHAEQgGAGgNAAIgMgBgAgKgcQgFAHgBAKQABAJADADQADAEAHAAQAEAAAGgGQAEgGABgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_156.setTransform(208.3,321.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_157.setTransform(200.2,318.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAFIAAAJIgBAKIABAEIAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgGAAAAgPIAAgKIABgKIgBgJIAAgJQAAgNAGgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAADIgBAEIAAAFQADgGAGgFQAGgEAEgBQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADALIADAPIAEAgQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFAAAAgGIgCgSIgCgRIgCgIQgCgEgDAAQgCgBgGAEIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_158.setTransform(193.9,319.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_159.setTransform(186.2,319.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAPAsIgJgOIgJgNIgKAGIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgOIAAgTIABgVIgBgFIAAgHQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAFIgBAUIAAATIAOgNIANgNQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgDg");
	this.shape_160.setTransform(180.3,317.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHABgPQgEAGgEADQgFADgEAAQgKAAgHgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAgBAHIgBAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQAAAJADADQADAEAGAAQAFAAAFgGQAGgGABgGIACgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_161.setTransform(170,321.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgFIABgQIACgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAABAIIAAAHQAKgNAIAAQAKAAADAIQADAFAAALIAAAGIAAAEIACANIABAMQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_162.setTransform(164,319.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_163.setTransform(157.7,319.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgOAtQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAgGANgbIgVgnIgCgEIgBgFQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQAKAOAKAZIAJgUIAJgSQACgDADAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIACAEIgBADIgUAqIgLAaIgDAMQgCAEgDAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_164.setTransform(151.5,321.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgWAaIAAgnIAAgFIABgHQAAgFAFAAQAGAAgBAKQALgMANAAQAFAAACAEQADAEgBAHIAAAEQAAAHgGAAQgEAAAAgFIAAgFIAAgEQgKABgEADQgGAEgDAIIAAAeQAAAGgFABQgGgBAAgGg");
	this.shape_165.setTransform(142.3,319.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_166.setTransform(136.3,319.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgTAtQgIgCABgEQAAgFAEAAIAHABIALABQAKgBAEgKQADgHAAgPQgDAGgEADQgFADgEAAQgKAAgHgHQgGgIAAgKQgBgQAKgJQAIgKAQAAIAJABQADACACADQAGAAABAHIgCAKIgBALIgCATQAAALgCAIQgCAJgHAEQgGAGgNAAIgMgBgAgKgcQgFAHgBAKQABAJADADQADAEAHAAQAEAAAGgGQAEgGABgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_167.setTransform(130,321.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAEAFADQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAFQgIADgJAAQgMAAgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_168.setTransform(123.8,319.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQACAAADADIAGACIAGABQAEAAADgBQAGgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDgBgGQAAgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABAFIABAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCgHIgNAEQgIAEAAAGIAEAAQALADAHAEQAJAFAAAMQABAJgJAFQgGAEgKAAQgHAAgHgDg");
	this.shape_169.setTransform(117.5,319.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AANAbQgHAEgJABQgHAAgFgEQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAQIACAKIAEACIADAAQAHABAJgDIAAgLIAAgLIABgWQAAgEAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_170.setTransform(108.1,319.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAADADIAHACIAGABQAEAAAEgBQAFgCAAgDQAAgIgLgDIgFgBIgLgEQgFgDABgGQgBgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIACAFIAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCgHIgNAEQgIAEAAAGIADAAQAMADAHAEQAKAFgBAMQAAAJgHAFQgIAEgJAAQgHAAgHgDg");
	this.shape_171.setTransform(102,319.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AANAbQgHAEgJABQgHAAgFgEQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAQIACAKIAEACIADAAQAHABAJgDIAAgLIAAgLIABgWQAAgEAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_172.setTransform(96.2,319.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgXAnQgKgEgBgJQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQACABACADQAEAEACACQAFADAJAAQAIAAAHgEQAKgFAAgJQAAgHgHgEQgIgEgJAAQgJAAgGgDQgJgFAAgIQAAgKAMgJQALgIALAAIAMACQAKACAAAEQAAAFgFAAIgIgBIgJgCQgIABgHAEQgGAEAAAHQAAAFAIABIAMACQANABAHAIQAIAFAAAJQgBAOgNAJQgKAHgOAAQgLAAgJgFg");
	this.shape_173.setTransform(89.1,318.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_174.setTransform(463.9,304);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_175.setTransform(460.9,299.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAIIgDADIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgSIgCgQIgCgJQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_176.setTransform(454.6,301.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_177.setTransform(446.9,301.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgVQAAgGAFAAQAGAAAAAGIgBAVIAAAUIgBAdIAAANQgBAGgEAAQgGAAAAgGg");
	this.shape_178.setTransform(442.2,299.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_179.setTransform(437.6,301.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQACAAACADIAGACIAHABQAEAAAEgBQAFgCAAgDQAAgIgLgDIgFgBIgLgEQgFgDABgGQAAgMALgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIABAFIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIADAAQANADAGAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgHAAgHgDg");
	this.shape_180.setTransform(428,301.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_181.setTransform(423.8,299.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAOAcIgCgNIAAgMIAAgFIAAgFQAAgNgEAAQgHAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgFIABgQIABgQIAAgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABABAHIAAAHQAJgNAKAAQAJAAADAIQADAGAAAKIAAAGIAAAEIACAMIABANQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_182.setTransform(419,301.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_183.setTransform(412.8,301.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAIIgDADIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgSIgCgQIgCgJQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_184.setTransform(405.2,301.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgMANABQAJgBAGAEQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgCQAGgBACgDQACgDADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgIQAJgEAFgFQgFgEgJAAQgGAAgFAGg");
	this.shape_185.setTransform(397.4,301.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgVAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYIAAgWIgBgWIAAgMQAAgEABgDQACgEADAAQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAADIAJgFIAIgBQAMAAAGAKQADAIAAAOQAAALgGAJQgHAIgMAAQgFAAgHgCIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgEgeIgIAGIAAAbQAHACAFAAQAHABAEgGQADgDAAgIQAAgKgCgGQgCgFgGAAQgEAAgEACg");
	this.shape_186.setTransform(391,302.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_187.setTransform(382.7,299.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgUAtQgGgCAAgEQAAgFAEAAIAIABIAKABQAKgBAFgKQACgHAAgPQgDAGgEADQgFADgEAAQgLAAgGgHQgHgIABgKQAAgQAJgJQAIgKAPAAIAJABQAEACACADQAHAAAAAHIgCAKIgCALIgBATQAAALgCAIQgDAJgGAEQgHAGgLAAIgOgBgAgKgcQgGAHABAKQgBAJAEADQADAEAGAAQAFAAAFgGQAGgGAAgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_188.setTransform(377.7,302.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_189.setTransform(371.6,301.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_190.setTransform(365.2,299.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgMANABQAJgBAGAEQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgCQAGgBACgDQACgDADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgIQAJgEAFgFQgFgEgJAAQgGAAgFAGg");
	this.shape_191.setTransform(358.4,301.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAEADIAFACIAHABQAEAAAEgBQAFgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDAAgGQAAgMALgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIABAFIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIAEAAQAMADAGAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgIAAgGgDg");
	this.shape_192.setTransform(352.1,301.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_193.setTransform(342.7,301.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_194.setTransform(336.1,299.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_195.setTransform(329.7,301.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAIIgDADIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgSIgCgQIgCgJQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_196.setTransform(322.1,301.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABABAHIAAAHQAJgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_197.setTransform(310.9,301.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_198.setTransform(304.7,301.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAPAsIgJgOIgJgOIgKAHIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgOIAAgUIABgUIgBgFIAAgHQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAFIgBATIAAAUIAOgNIANgNQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDgBgCgDg");
	this.shape_199.setTransform(298.8,299.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_200.setTransform(292.2,301.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABAAAHIAAAHQALgNAIAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_201.setTransform(286.2,301.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHABgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHAAAJgCIAAgMIAAgKIABgVQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAEIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_202.setTransform(279.9,301.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHAAgPQgDAGgEADQgFADgEAAQgLAAgGgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAAAAHIgCAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQgBAJAEADQADAEAGAAQAFAAAFgGQAGgGAAgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_203.setTransform(273.6,302.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAEAAIAIABIAKABQAKgBAFgKQACgHAAgPQgDAGgEADQgFADgEAAQgLAAgGgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAAAAHIgCAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQgBAJAEADQADAEAGAAQAFAAAFgGQAGgGAAgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_204.setTransform(267.3,302.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIgBgFIACgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABABAHIAAAHQAJgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_205.setTransform(261.3,301.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgMANABQAJgBAGAEQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgCQAGgBACgDQACgDADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgIQAJgEAFgFQgFgEgJAAQgGAAgFAGg");
	this.shape_206.setTransform(254.9,301.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAIIgDADIAAAKIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAGQADgFAGgFQAGgGAEAAQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADAKIADAQIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgSIgCgQIgCgJQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_207.setTransform(247,301.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIgBAGIAAAFIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABAAAHIAAAHQALgNAIAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_208.setTransform(235.8,301.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_209.setTransform(229.6,301.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgUAtQgGgCAAgEQAAgFAEAAIAIABIAKABQAKgBAFgKQACgHAAgPQgDAGgEADQgFADgEAAQgLAAgGgHQgHgIABgKQAAgQAJgJQAIgKAPAAIAJABQAEACACADQAHAAAAAHIgCAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQgBAJAEADQADAEAGAAQAFAAAFgGQAGgGAAgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_210.setTransform(223.3,302.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABAAAHIAAAHQAKgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_211.setTransform(217.3,301.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgMANABQAJgBAGAEQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgCQAGgBACgDQACgDADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgIQAJgEAFgFQgFgEgJAAQgGAAgFAGg");
	this.shape_212.setTransform(210.9,301.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_213.setTransform(204.1,299.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgGANIgCgFIAEgIIAEgKQAAgBABgBQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgJASQAAAEgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_214.setTransform(195.8,304.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_215.setTransform(190.8,301.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAEADIAFACIAHABQAEAAADgBQAGgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDgBgGQAAgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAFIABAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIAEAAQAMADAGAEQAKAFAAAMQAAAJgIAFQgIAEgJAAQgIAAgGgDg");
	this.shape_216.setTransform(184.8,301.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_217.setTransform(179,301.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_218.setTransform(174.5,299.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_219.setTransform(169.3,299.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_220.setTransform(159.1,301.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_221.setTransform(152.7,299.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgQAYQgIgHAAgOQgBgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAAMgHAJQgHALgMAAQgJAAgHgIgAgJgLQgEAHAAAHQAAAIAEAFQAEAEAFAAQAFAAAFgEQAFgFAAgJQABgVgNAAQgIAAgEAIg");
	this.shape_222.setTransform(145.9,301.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_223.setTransform(139.5,299.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_224.setTransform(129.3,301.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_225.setTransform(122.8,299.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_226.setTransform(116.3,301.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgVAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYIAAgWIgBgWIAAgMQAAgEABgDQACgEADAAQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAADIAJgFIAIgBQAMAAAGAKQADAIAAAOQAAALgGAJQgHAIgMAAQgFAAgGgCIAAAcQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgEgeIgIAGIABAbQAGACAFAAQAHABAEgGQADgDAAgIQAAgKgCgGQgCgFgGAAQgEAAgEACg");
	this.shape_227.setTransform(110.2,302.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgLIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACABQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_228.setTransform(105.4,299.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgVAbIAAgoIAAgFIAAgHQAAgFAFgBQAFABABAJQAKgKANgBQAFABACADQADADAAAIIAAAEQgBAHgGAAQgEAAgBgGIAAgEIAAgFQgJACgEADQgFAEgEAIIABAfQAAAFgHAAQgEAAAAgFg");
	this.shape_229.setTransform(101,301.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_230.setTransform(95,301.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_231.setTransform(88.4,299.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQACAAADADIAFACIAHABQAEAAADgBQAGgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDgBgGQAAgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAFIABAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIAEAAQAMADAGAEQAKAFAAAMQAAAJgJAFQgHAEgJAAQgHAAgHgDg");
	this.shape_232.setTransform(460.3,282.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgCACgCQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_233.setTransform(456,281.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgFIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAAAAHIAAAGQAKgMAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_234.setTransform(451.3,283.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_235.setTransform(445,283.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgUQAAgFgCgEQgEACgEAEIgHAIIgDADIAAAJIgBAKIABAFIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGABAAgQIAAgKIABgJIgBgKIAAgJQAAgMAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgBADIAAAHQADgHAGgEQAGgGAEAAQAJAAADAJQADgEAEgCQAFgCAFAAQAKAAADAKIADARIAEAgQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAAAgEIgCgSIgCgRIgCgIQgCgFgDgBQgCAAgGAEIgHAFIAAALIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_236.setTransform(437.5,283.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AAPAsIgCgOIgBgNIAAgFIAAgEQAAgLgFAAQgHAAgFAGIgJANQABAWgCAEQgCAEgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIAAgIIAAgJIABgpIAAgKIAAgFIgBgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAABAFIABAKIgBANIAAAMIAAAGQAFgHAFgDQAFgDAGAAQAKAAADAGQADAFAAAJIAAALIABAMIADAMIAAACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgCgEg");
	this.shape_237.setTransform(425.9,281.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgLIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgCACgCQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_238.setTransform(420.9,281.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_239.setTransform(415.7,281.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgLANAAQAJAAAGADQAIAEAAAIQAAAGgHAEIgMAGIgVAKQADAFAFADQAFACAFAAIAKgCQAGgBACgDQACgEADAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAGgLAEQgIAEgJABQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgEAFgFQgFgEgJAAQgGAAgFAFg");
	this.shape_240.setTransform(409,283.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgVQAAgGAFAAQAGAAAAAGIgBAVIAAAUIgBAdIAAANQgBAGgEAAQgGAAAAgGg");
	this.shape_241.setTransform(404,281.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgCACgCQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACACQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_242.setTransform(397.3,281.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgUQAAgFgCgEQgEACgEAEIgHAIIgDADIAAAJIgBAKIABAFIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGABAAgQIAAgKIABgJIgBgKIAAgJQAAgMAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgBADIAAAHQADgHAGgEQAGgGAEAAQAJAAADAJQADgEAEgCQAFgCAFAAQAKAAADAKIADARIAEAgQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAAAgEIgCgSIgCgRIgCgIQgCgFgDgBQgCAAgGAEIgHAFIAAALIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_243.setTransform(391,283.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_244.setTransform(383.3,283.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAPAsIgJgOIgJgOIgKAIIgBARQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgPIAAgTIABgUIgBgGIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABgBQAAABABAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIAAAGIgBATIAAATIAOgLIANgOQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQgHAIgKAJIANARQAIAMAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDAAgCgEg");
	this.shape_245.setTransform(377.4,281.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_246.setTransform(367.3,283.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_247.setTransform(360.9,281.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgQAYQgIgHAAgOQgBgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAAMgHAJQgHALgMAAQgJAAgHgIgAgJgLQgEAHAAAHQAAAIAEAFQAEAEAFAAQAFAAAFgEQAFgFAAgJQABgVgNAAQgIAAgEAIg");
	this.shape_248.setTransform(354.1,283.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgaAsQgDgCAAgDIAAgQIACgXIABgYIABgQQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAIgCAKAAQAJAAAJAHQALAIAAAMQAAAOgLAIQAIAEAFAEQAEAFAAAFQABAHgJAHQgFAEgFACQgMAGgVAAQgCAAgCgDgAgRAXIAAAMQAPgBAIgEIAIgEQAEgDAAgCQAAgDgHgDIgLgEIgGgBIgBAAIgDAAIgGAAIgBANgAgPgiIAAAKIgBAXIAJAAQAHAAAGgFQAGgFAAgIQAAgGgGgFQgGgEgGAAIgJAAg");
	this.shape_249.setTransform(347.6,281.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_250.setTransform(338.6,285.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAPAsIgJgOIgJgOIgKAIIgBARQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgPIAAgTIABgUIgBgGIAAgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABgBQAAABABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIAAAGIgBATIAAATIAOgLIANgOQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQgHAIgKAJIANARQAIAMAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDAAgCgEg");
	this.shape_251.setTransform(334.3,281.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_252.setTransform(327.7,283.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQACAAADADIAFACIAHABQAEAAADgBQAGgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDgBgGQAAgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABABAAIAAAFIABAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIAEAAQAMADAGAEQAKAFAAAMQAAAJgJAFQgHAEgJAAQgHAAgHgDg");
	this.shape_253.setTransform(321.7,282.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_254.setTransform(315.9,283.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgUQAAgFgCgEQgEACgEAEIgHAIIgDADIAAAJIgBAKIABAFIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGABAAgQIAAgKIABgJIgBgKIAAgJQAAgMAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgBADIAAAHQADgHAGgEQAGgGAEAAQAJAAADAJQADgEAEgCQAFgCAFAAQAKAAADAKIADARIAEAgQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAAAgEIgCgSIgCgRIgCgIQgCgFgDgBQgCAAgGAEIgHAFIAAALIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_255.setTransform(308.4,283.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgLIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgCACgCQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACACQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_256.setTransform(302.2,281.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_257.setTransform(296.9,281.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHAAgFgDQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAPIACAMIAEABIADABQAHgBAJgCIAAgMIAAgJIABgWQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAANIAAADIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_258.setTransform(286.8,283.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgVAbIAAgoIAAgGIAAgFQAAgHAFAAQAFAAAAAKQALgLANAAQAFABACADQACAEABAHIAAAEQgBAHgGAAQgEAAAAgGIAAgDIAAgGQgKABgEAFQgFADgEAIIAAAfQABAFgHAAQgEAAAAgFg");
	this.shape_259.setTransform(281.1,283.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_260.setTransform(275,283.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_261.setTransform(268.6,281.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHABgPQgEAGgEADQgFADgEAAQgKAAgHgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAgBAHIgBAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQAAAJADADQADAEAHAAQAEAAAFgGQAGgGABgGIACgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_262.setTransform(258.2,284.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgFIgBgFIABgQIACgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAABAHIAAAGQAKgMAIAAQAKAAADAIQADAGAAAKIAAAGIAAAEIACAMIAAANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_263.setTransform(252.2,283.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_264.setTransform(245.9,283.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgOAtQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgGANgbIgVgnIgCgEIgCgFQABAAAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQAKAOAKAZIAJgUIAJgSQACgDADAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIACAEIgBADIgUAqIgLAaIgDAMQgCAEgDAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_265.setTransform(239.7,284.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHAAgFgDQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAPIACAMIAEABIADABQAHgBAJgCIAAgMIAAgJIABgWQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAANIAAADIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_266.setTransform(230.1,283.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_267.setTransform(223.5,281.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_268.setTransform(217.1,283.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgUQAAgFgCgEQgEACgEAEIgHAIIgDADIAAAJIgBAKIABAFIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGABAAgQIAAgKIABgJIgBgKIAAgJQAAgMAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgBADIAAAHQADgHAGgEQAGgGAEAAQAJAAADAJQADgEAEgCQAFgCAFAAQAKAAADAKIADARIAEAgQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAAAgEIgCgSIgCgRIgCgIQgCgFgDgBQgCAAgGAEIgHAFIAAALIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_269.setTransform(209.5,283.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_270.setTransform(198.3,283.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgWAbIAAgoIAAgGIABgFQAAgHAFAAQAGAAAAAKQAKgLANAAQAFABACADQACAEAAAHIAAAEQAAAHgFAAQgGAAAAgGIAAgDIAAgGQgJABgEAFQgGADgDAIIABAfQgBAFgFAAQgFAAgBgFg");
	this.shape_271.setTransform(192.6,283.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_272.setTransform(186.5,283.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgLIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgCACgCQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_273.setTransform(182,281.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgDAoQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgGIABgHIgCghIgMgBQgFAAAAgFQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAIAMABIAAgIIAAgHQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgCQAFAAAAAJIABAEIAAAEIgBADIAJgBIAIABQADABAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgCAAIgDAAIgIABIABAhIAAACIAAAEQAAAMgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_274.setTransform(177.4,282.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHAAgFgDQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAPIACAMIAEABIADABQAHgBAJgCIAAgMIAAgJIABgWQAAgGAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAANIAAADIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_275.setTransform(171.6,283.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgUQAAgFgCgEQgEACgEAEIgHAIIgDADIAAAJIgBAKIABAFIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGABAAgQIAAgKIABgJIgBgKIAAgJQAAgMAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgBADIAAAHQADgHAGgEQAGgGAEAAQAJAAADAJQADgEAEgCQAFgCAFAAQAKAAADAKIADARIAEAgQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAAAgEIgCgSIgCgRIgCgIQgCgFgDgBQgCAAgGAEIgHAFIAAALIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_276.setTransform(163.9,283.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgFIAAgFQAAgNgFAAQgGAAgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgFIgBgFIABgQIACgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGAAABAHIAAAGQAKgMAIAAQAKAAADAIQADAGAAAKIAAAGIAAAEIACAMIABANQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_277.setTransform(152.7,283.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_278.setTransform(146.5,283.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAPAsIgJgOIgJgOIgKAIIgBARQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgPIAAgTIABgUIgBgGIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABgBQAAABABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIAAAGIgBATIAAATIAOgLIANgOQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQgHAIgKAJIANARQAIAMAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDAAgCgEg");
	this.shape_279.setTransform(140.6,281.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgVQAAgGAFAAQAGAAAAAGIgBAVIAAAUIgBAdIAAANQgBAGgEAAQgGAAAAgGg");
	this.shape_280.setTransform(135.5,281.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgFApQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgLIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAALQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBgAgDgfQgCgCAAgDQAAgCACgCQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_281.setTransform(132.3,281.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgVAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgXIAAgXIgBgWIgBgMQABgEABgDQABgDAEgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBADIAKgFIAIgBQAMAAAFAKQAFAIAAAOQgBAMgGAIQgHAIgMAAQgFAAgGgCIAAAcQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgFgeIgHAHIABAaQAGADAFgBQAIABADgGQAEgEAAgHQAAgLgDgFQgDgFgFAAQgEAAgFACg");
	this.shape_282.setTransform(127.4,284.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgUQAAgFgCgEQgEACgEAEIgHAIIgDADIAAAJIgBAKIABAFIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGABAAgQIAAgKIABgJIgBgKIAAgJQAAgMAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgBADIAAAHQADgHAGgEQAGgGAEAAQAJAAADAJQADgEAEgCQAFgCAFAAQAKAAADAKIADARIAEAgQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAAAgEIgCgSIgCgRIgCgIQgCgFgDgBQgCAAgGAEIgHAFIAAALIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_283.setTransform(119.7,283.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_284.setTransform(112,283.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAOAcIgCgNIAAgMIAAgFIAAgFQAAgNgEAAQgHAAgFAIQgFAHgDAKIgBAGIAAAFIAAAFIAAAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBgBgBIAAgFIAAgFIAAgQIABgQIAAgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAFAAAAAHIAAAGQALgMAJAAQAJAAADAIQADAGAAAKIAAAGIAAAEIABAMIACANQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFABgBgGg");
	this.shape_285.setTransform(106,283.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgLANAAQAJAAAGADQAIAEAAAIQAAAGgHAEIgMAGIgVAKQADAFAFADQAFACAFAAIAKgCQAGgBACgDQACgEADAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAGgLAEQgIAEgJABQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgEAFgFQgFgEgJAAQgGAAgFAFg");
	this.shape_286.setTransform(99.6,283.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgUQAAgFgCgEQgEACgEAEIgHAIIgDADIAAAJIgBAKIABAFIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGABAAgQIAAgKIABgJIgBgKIAAgJQAAgMAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgBADIAAAHQADgHAGgEQAGgGAEAAQAJAAADAJQADgEAEgCQAFgCAFAAQAKAAADAKIADARIAEAgQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAAAgEIgCgSIgCgRIgCgIQgCgFgDgBQgCAAgGAEIgHAFIAAALIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_287.setTransform(91.7,283.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgGAMIgCgDIAEgJIAEgLQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABIgJATQAAADgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_288.setTransform(458.7,268.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAPAsIgJgOIgJgNIgKAHIgBARQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgPIAAgSIABgUIgBgHIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIAAAHIgBATIAAASIAOgLIANgOQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgHAIgKAJIANARQAIAMAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDABgCgEg");
	this.shape_289.setTransform(453.9,263.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAAgKIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgDACgBQABgBAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADABACACQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_290.setTransform(448.9,263.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgEIAAgGQAAgMgFgBQgGABgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgFIAAgFIABgQIABgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGgBAAAIIAAAGQAKgMAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFAAgBgFg");
	this.shape_291.setTransform(444.1,264.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AANAbQgHAFgJAAQgHgBgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAPIACALIAEACIADABQAHAAAJgDIAAgLIAAgKIABgXQAAgEAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAANIAAADIAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_292.setTransform(437.8,265);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_293.setTransform(428.1,265);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgUAtQgGgCAAgEQAAgFAEAAIAHABIALABQAKgBAFgKQACgHAAgPQgDAGgEADQgEADgFAAQgLAAgGgHQgHgIABgKQAAgQAJgJQAIgKAPAAIAJABQAEACACADQAGAAABAHIgCAKIgCALIgBATQAAALgCAIQgDAJgGAEQgGAGgMAAIgOgBgAgKgcQgFAHAAAKQAAAJADADQADAEAGAAQAFAAAGgGQAEgGABgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_294.setTransform(421.9,266.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AANAbQgHAFgJAAQgHgBgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAPIACALIAEACIADABQAHAAAJgDIAAgLIAAgKIABgXQAAgEAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAANIAAADIAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_295.setTransform(415.7,265);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgSAqIAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAEAAADAIIADAFQADADACAAQADAAABgEIACgFIgCgjIgCgfQAAgDACgCQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIAEACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIACAgIACAkQAAAIgGAGQgEAIgIAAQgMgBgIgSgAADgwQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgCABgCQACgCAEgBQACABACACQACACAAACQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQgCACgCAAQgEAAgCgCg");
	this.shape_296.setTransform(409.7,265.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_297.setTransform(401.3,265);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgOAtQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAgGANgbIgUgnIgDgEIgCgFQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQAKAOALAZIAIgUIAJgSQACgDADAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIACAEIgBADIgUAqIgLAaIgDAMQgCAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_298.setTransform(395,266.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAOAcIgCgNIAAgMIAAgEIAAgGQAAgMgEgBQgHABgFAHQgFAHgDAKIgBAFIAAAGIAAAFIAAAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgFIgBgFIABgQIABgQIAAgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAFgBAAAIIAAAGQAKgMAKAAQAJAAADAIQADAGAAAKIAAAGIAAAEIACAMIABANQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFAAgBgFg");
	this.shape_299.setTransform(389.1,264.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgSAAQAAgDAFAAIANAAIANgBQAGAAAAAEQAAADgFABIgbABQgFAAAAgFg");
	this.shape_300.setTransform(383.4,264.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_301.setTransform(378,265);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_302.setTransform(371.5,263.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgQAYQgIgHAAgOQgBgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAAMgHAJQgHALgMAAQgJAAgHgIgAgJgLQgEAHAAAHQAAAIAEAFQAEAEAFAAQAFAAAFgEQAFgFAAgJQABgVgNAAQgIAAgEAIg");
	this.shape_303.setTransform(364.7,265);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgaAsQgDgCABgDIAAgQIABgXIABgYIAAgQQABAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAIgCAKAAQAKAAAIAHQAMAIAAAMQAAAOgMAIQAJAEAEAEQAFAFgBAFQAAAHgIAHQgEAEgHACQgMAGgTAAQgDAAgCgDgAgRAXIAAAMQAPgBAJgEIAIgEQADgDAAgCQAAgDgIgDIgKgEIgGgBIgCAAIgCAAIgHAAIAAANgAgPgiIAAAKIgBAXIAJAAQAHAAAGgFQAGgFAAgIQAAgGgGgFQgGgEgGAAIgJAAg");
	this.shape_304.setTransform(358.3,263.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_305.setTransform(349.2,267.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgEIAAgGQAAgMgFgBQgGABgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgFIAAgFIABgQIABgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGgBAAAIIAAAGQALgMAIAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFAAgBgFg");
	this.shape_306.setTransform(344.7,264.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_307.setTransform(338.5,265);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgDApQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAgGIABgHIgCghIgMgBQgFAAAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIAMABIAAgIIAAgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgCQAFAAAAAJIABAEIAAAEIgBAEIAJgBIAIAAQADABAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgCAAIgDAAIgIABIABAhIAAACIAAAEQAAAMgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_308.setTransform(332.7,264);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_309.setTransform(326.9,265);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AANAbQgHAFgJAAQgHgBgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAPIACALIAEACIADABQAHAAAJgDIAAgLIAAgKIABgXQAAgEAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAANIAAADIAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_310.setTransform(320.8,265);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_311.setTransform(314.3,263.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_312.setTransform(304.1,265);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AAOAcIgBgNIgBgMIAAgEIAAgGQAAgMgFgBQgGABgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgFIgBgFIABgQIACgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGgBABAIIAAAGQAKgMAIAAQAKAAADAIQADAGAAAKIAAAGIAAAEIACAMIABANQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFAAgBgFg");
	this.shape_313.setTransform(298.1,264.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgWAaIAAgnIAAgGIABgFQAAgHAFABQAGgBgBAKQALgLANABQAFgBACAEQACADAAAIIAAAEQAAAHgGAAQgEAAAAgGIAAgDIAAgGQgKABgEAFQgGAEgDAHIAAAeQAAAHgFgBQgGABAAgHg");
	this.shape_314.setTransform(292.2,265);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_315.setTransform(286.2,265);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AADARIgCgOIgBgMIgFAKIgIAYIgDAEQgBADgEAAQgEAAgEgRIgFgXIgBgJIgBgJQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAEgBQAEAAABAEIACAJIAAAIIAEAZIANgoQACgGAEAAQAEAAACAHIAEAVIAEAWIAEgQIAIgfQAAgDAEAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEIAAADIgLAqQgCAFgEAFQgCADgDAAQgHAAgEgPg");
	this.shape_316.setTransform(279.1,265);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgMANAAQAJAAAGAEQAIAEAAAIQAAAGgHAEIgMAGIgVAKQADAFAFADQAFACAFAAIAKgBQAGgCACgEQACgDADAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAGgLAFQgIADgJAAQgMABgIgHgAgLgPQgFAGgCAKIASgIQAJgEAFgEQgFgFgJAAQgGAAgFAFg");
	this.shape_317.setTransform(271.9,264.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgVAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgXIAAgXIgBgXIAAgLQAAgEABgDQACgDADgBQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAADIAJgFIAIgCQAMAAAGALQADAIAAAOQAAALgGAIQgHAJgMAAQgFAAgHgCIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgEgdIgIAGIAAAaQAHACAFABQAHgBAEgFQADgDABgIQgBgLgCgFQgCgFgGAAQgEAAgEADg");
	this.shape_318.setTransform(265.4,266.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAOAcIgCgNIAAgMIAAgEIAAgGQAAgMgEgBQgHABgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgFIgBgFIABgQIABgQIAAgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAFgBABAIIAAAGQAJgMAKAAQAJAAADAIQADAGAAAKIAAAGIAAAEIACAMIABANQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFAAgBgFg");
	this.shape_319.setTransform(255.7,264.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AANAbQgHAFgJAAQgHgBgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAPIACALIAEACIADABQAHAAAJgDIAAgLIAAgKIABgXQAAgEAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAANIAAADIAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_320.setTransform(249.4,265);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgVAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgXIAAgXIgBgXIgBgLQAAgEACgDQABgDAEgBQABAAAAABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAADIAJgFIAIgCQAMAAAGALQAEAIgBAOQAAALgGAIQgHAJgMAAQgFAAgGgCIAAAcQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgEgdIgIAGIABAaQAGACAFABQAHgBAEgFQADgDABgIQgBgLgCgFQgCgFgGAAQgEAAgEADg");
	this.shape_321.setTransform(243.2,266.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AANAbQgHAFgJAAQgHgBgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAPIACALIAEACIADABQAHAAAJgDIAAgLIAAgKIABgXQAAgEAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAANIAAADIAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_322.setTransform(236.9,265);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_323.setTransform(230.8,265);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgDApQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIAAgGIABgHIgCghIgMgBQgFAAAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIAMABIAAgIIAAgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgCQAFAAAAAJIABAEIAAAEIgBAEIAJgBIAIAAQADABAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgCAAIgDAAIgIABIABAhIAAACIAAAEQAAAMgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_324.setTransform(224.9,264);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_325.setTransform(219.2,265);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_326.setTransform(209.6,265);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgKIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgDACgBQABgBAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADABACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_327.setTransform(205,263.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgUQAAgFgCgEQgEACgEAEIgHAIIgDAEIAAAIIgBAKIABAGIAAAEQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgGgBAAgPIAAgKIABgJIgBgJIAAgJQAAgOAGAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAIAAAEIgBAEIAAAGQADgGAGgGQAGgEAEAAQAJgBADAKQADgFAEgCQAFgCAFAAQAKAAADAKIADARIAEAfQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAAAgEIgCgSIgCgRIgCgIQgCgGgDAAQgCABgGADIgHAFIAAALIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_328.setTransform(198.7,265);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAAgKIAAgKIABgNIAAgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAOIgBANIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgDACgBQABgBAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADABACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_329.setTransform(192.5,263.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAPAsIgJgOIgJgNIgKAHIgBARQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgPIAAgSIABgUIgBgHIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAGIAAAHIgBATIAAASIAOgLIANgOQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgHAIgKAJIANARQAIAMAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDABgCgEg");
	this.shape_330.setTransform(187.9,263.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAOAcIgCgNIAAgMIAAgEIAAgGQAAgMgEgBQgHABgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgFIgBgFIABgQIABgQIAAgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAGgBABAIIAAAGQAJgMAKAAQAJAAADAIQADAGAAAKIAAAGIAAAEIACAMIABANQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFAAgBgFg");
	this.shape_331.setTransform(177.8,264.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_332.setTransform(171.6,265);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AAQArIgDgNIgBgOIAAgEIAAgFQABgJgGgBQgHABgFAFIgJANQAAAWgBAEQgCAEgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgCIABgIIAAgJIAAgqIABgKIgBgFIgBgFQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAEAAABAFIABAKIgBANIAAANIAAAEQAFgGAGgDQAEgDAGAAQAKAAADAGQACAEABAKIABALIABAMIABAMIABABQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_333.setTransform(165.2,263.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_334.setTransform(158.7,265);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_335.setTransform(152.3,263.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgGAMIgCgDIAEgJIAEgLQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABIgJATQAAADgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_336.setTransform(143.8,268.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgDApQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAgGIABgHIgCghIgMgBQgFAAAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAMABIAAgIIAAgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgCQAFAAAAAJIABAEIAAAEIgBAEIAJgBIAIAAQADABAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgCAAIgDAAIgIABIABAhIAAACIAAAEQAAAMgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_337.setTransform(139,264);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgMANAAQAJAAAGAEQAIAEAAAIQAAAGgHAEIgMAGIgVAKQADAFAFADQAFACAFAAIAKgBQAGgCACgEQACgDADAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAGgLAFQgIADgJAAQgMABgIgHgAgLgPQgFAGgCAKIASgIQAJgEAFgEQgFgFgJAAQgGAAgFAFg");
	this.shape_338.setTransform(133.1,264.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAEARIgDgOIgBgMIgEAKIgJAYIgDAEQgBADgEAAQgEAAgEgRIgFgXIgBgJIgBgJQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAEgBQAFAAAAAEIACAJIABAIIADAZIANgoQADgGADAAQAEAAACAHIAEAVIAEAWIAEgQIAIgfQAAgDAFAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAIABAEIAAADIgLAqQgCAFgEAFQgCADgDAAQgHAAgDgPg");
	this.shape_339.setTransform(125.7,265);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_340.setTransform(118.7,265);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHABgPQgEAGgEADQgFADgEAAQgKAAgHgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAgBAHIgBAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQAAAJADADQADAEAGAAQAFAAAFgGQAGgGABgGIACgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_341.setTransform(112.4,266.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AAOAcIgCgNIAAgMIAAgEIAAgGQAAgMgFgBQgGABgFAHQgFAHgDAKIgBAFIAAAGIAAAFIAAAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgFIAAgFIABgQIAAgQIAAgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAFgBAAAIIAAAGQALgMAIAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFAAgBgFg");
	this.shape_342.setTransform(106.3,264.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgKQAHgMANAAQAJAAAGAEQAIAEAAAIQAAAGgHAEIgMAGIgVAKQADAFAFADQAFACAFAAIAKgBQAGgCACgEQACgDADAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAGgLAFQgIADgJAAQgMABgIgHgAgLgPQgFAGgCAKIASgIQAJgEAFgEQgFgFgJAAQgGAAgFAFg");
	this.shape_343.setTransform(100,264.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgVAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgXIAAgXIgBgXIAAgLQAAgEABgDQACgDADgBQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAADIAJgFIAIgCQAMAAAGALQADAIAAAOQAAALgGAIQgHAJgMAAQgFAAgHgCIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgEgdIgIAGIAAAaQAHACAFABQAHgBAEgFQADgDAAgIQAAgLgCgFQgCgFgGAAQgEAAgEADg");
	this.shape_344.setTransform(93.5,266.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AAOAcIgCgMIAAgNIAAgEIAAgGQAAgMgEAAQgHAAgFAHQgFAHgDAKIgBAFIAAAGIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgFIABgQIABgQIAAgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQAFAAABAIIAAAHQAJgNAKAAQAJAAADAIQADAFAAALIAAAGIAAAEIACANIABAMQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFgBgBgFg");
	this.shape_345.setTransform(449.1,246.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_346.setTransform(442.8,246.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AAQArIgDgNIgBgOIAAgEIAAgFQABgKgGABQgHAAgFAFIgJANQAAAWgBAEQgCAEgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgCIABgIIAAgJIAAgpIABgKIgBgGIgBgFQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAEAAABAFIABAKIgBANIAAANIAAAEQAFgGAFgDQAFgDAGAAQAJAAAEAGQADAEAAAKIABALIABAMIACAMIAAABQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_347.setTransform(436.5,245.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_348.setTransform(430,246.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_349.setTransform(423.5,245.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGAAgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIgBgFIACgQIABgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAABAIIAAAHQAJgNAJAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFgBgBgFg");
	this.shape_350.setTransform(413.4,246.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_351.setTransform(407.1,246.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AAPAsIgJgOIgJgNIgKAGIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgPIAAgSIABgUIgBgGIAAgHQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAGIgBATIAAATIAOgNIANgNQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgDg");
	this.shape_352.setTransform(401.3,245.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_353.setTransform(394.7,246.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGAAgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAAAAIIAAAHQAKgNAJAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFgBgBgFg");
	this.shape_354.setTransform(388.7,246.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AANAbQgHAFgJAAQgHAAgFgEQgGgDgBgIQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAJIgBAJIABAQIACAKIAEACIADAAQAHAAAJgCIAAgLIAAgKIABgXQAAgEAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGg");
	this.shape_355.setTransform(382.4,246.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHABgPQgEAGgEADQgFADgEAAQgKAAgHgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAgBAHIgBAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQAAAJADADQADAEAGAAQAFAAAFgGQAGgGABgGIACgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_356.setTransform(376.1,248.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHABgPQgEAGgEADQgFADgEAAQgKAAgHgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAgBAHIgBAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQAAAJADADQADAEAGAAQAFAAAFgGQAGgGABgGIACgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_357.setTransform(369.8,248.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AAOAcIgCgMIAAgNIAAgEIAAgGQAAgMgFAAQgGAAgFAHQgFAHgDAKIgBAFIAAAGIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQAFAAAAAIIAAAHQALgNAIAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFgBgBgFg");
	this.shape_358.setTransform(363.7,246.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgKANgBQAJABAGADQAIAEAAAIQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAFQgIADgJAAQgMAAgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_359.setTransform(357.4,246.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgGgCgEQgEACgEAEIgHAHIgDAFIAAAJIgBAJIABAGIAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgGAAAAgQIAAgJIABgKIgBgJIAAgJQAAgNAGgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABIAAADIgBAEIAAAFQADgGAGgFQAGgEAEAAQAJAAADAJQADgFAEgCQAFgCAFAAQAKAAADALIADAQIAEAfQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFAAAAgGIgCgSIgCgRIgCgIQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_360.setTransform(349.5,246.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AAPAsIgJgOIgJgNIgKAGIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgPIAAgSIABgUIgBgGIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAGIgBATIAAATIAOgNIANgNQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgDg");
	this.shape_361.setTransform(338.4,245.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_362.setTransform(331.9,246.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFQgEABgEAAQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_363.setTransform(325.4,245.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgCACgDQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_364.setTransform(320.4,245.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgDAqQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIAAgCIAAgJIgBgIIgCgWIgBgYIgFAAQgNAAgHgBQgFgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAKABIAJABIALAAIAJAAIANAAIANABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgNAAIgNgBIgFAAIADAaIABAZIAAAGIABAGQgBAFgBACQgCAEgDAAIgDgCg");
	this.shape_365.setTransform(315.2,245.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_366.setTransform(305.6,249.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_367.setTransform(301.1,246.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgPAtQAAAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAgGANgbIgVgnIgCgEIgBgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAJAOAKAZIAJgUIAJgSQABgDAEAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIABAEIAAADIgUAqIgKAaIgEAMQgBAEgEAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_368.setTransform(294.8,248.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGAAgFAHQgFAHgDAKIgBAFIAAAGIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAAAAIIAAAHQALgNAIAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFgBgBgFg");
	this.shape_369.setTransform(288.9,246.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AAOAcIgCgMIAAgNIAAgEIAAgGQAAgMgFAAQgGAAgFAHQgFAHgDAKIgBAFIAAAGIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQAFAAAAAIIAAAHQALgNAIAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFgBgBgFg");
	this.shape_370.setTransform(282.7,246.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgCACgDQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_371.setTransform(278,245.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_372.setTransform(273.2,246.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgVQAAgGAFAAQAGAAAAAGIgBAVIAAAUIgBAdIAAANQgBAGgEAAQgGAAAAgGg");
	this.shape_373.setTransform(268.5,245.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgCACgDQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_374.setTransform(261.8,245.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgGgCgEQgEACgEAEIgHAHIgDAFIAAAJIgBAJIABAGIAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgGAAAAgQIAAgJIABgKIgBgJIAAgJQAAgNAGgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABIAAADIgBAEIAAAFQADgGAGgFQAGgEAEAAQAJAAADAJQADgFAEgCQAFgCAFAAQAKAAADALIADAQIAEAfQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFAAAAgGIgCgSIgCgRIgCgIQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_375.setTransform(255.5,246.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_376.setTransform(247.8,246.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgVQAAgGAFAAQAGAAAAAGIgBAVIAAAUIgBAdIAAANQgBAGgEAAQgGAAAAgGg");
	this.shape_377.setTransform(243.2,245.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_378.setTransform(238.5,246.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGAAgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAAAAIIAAAHQAKgNAJAAQAKAAAEAIQACAFAAALIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFgBgBgFg");
	this.shape_379.setTransform(229,246.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_380.setTransform(222.7,246.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AAQArIgDgNIgBgOIAAgEIAAgFQABgKgGABQgHAAgFAFIgJANQAAAWgBAEQgCAEgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgCIAAgIIAAgJIAAgpIABgKIgBgGIAAgFQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAEAAABAFIABAKIgBANIAAANIAAAEQAFgGAFgDQAFgDAGAAQAJAAAEAGQADAEAAAKIABALIABAMIACAMIAAABQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_381.setTransform(216.4,245.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_382.setTransform(209.9,246.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_383.setTransform(203.4,245.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgSABQAAgEAFAAIANgBIANAAQAGAAAAAEQAAAEgFAAIgbABQgFAAAAgEg");
	this.shape_384.setTransform(197.4,246.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGAAgFAHQgFAHgDAKIAAAFIgBAGIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgFIABgQIACgQIgBgFIAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGAAABAIIAAAHQAKgNAIAAQAKAAADAIQADAFAAALIAAAGIAAAEIACANIAAAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFgBgBgFg");
	this.shape_385.setTransform(191.9,246.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_386.setTransform(185.7,246.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAPArIgCgNIgBgOIAAgEIAAgFQAAgKgFABQgHAAgFAFIgJANQABAWgCAEQgCAEgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgCIAAgIIAAgJIABgpIAAgKIAAgGIgBgFQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAABAFIABAKIgBANIAAANIAAAEQAFgGAFgDQAFgDAGAAQAKAAADAGQADAEAAAKIAAALIABAMIADAMIAAABQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgCgFg");
	this.shape_387.setTransform(179.3,245.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_388.setTransform(172.8,246.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_389.setTransform(166.4,245.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_390.setTransform(156.2,246.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgDApQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIAAgHIABgGIgCghIgMgBQgFAAAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIAMABIAAgIIAAgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgCQAFAAAAAIIABAGIAAADIgBAEIAJgBIAIAAQADABAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgCgBIgDAAIgIABIABAhIAAACIAAADQAAANgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_391.setTransform(150.3,245.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgWAaIAAgnIAAgFIABgHQAAgFAFAAQAGAAAAAKQAKgLANAAQAFAAACADQACAEAAAHIAAAEQAAAHgFAAQgGAAAAgFIAAgFIAAgEQgJABgEADQgGAFgDAHIABAeQgBAHgGAAQgEAAgBgHg");
	this.shape_392.setTransform(144.9,246.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgKANgBQAJABAGADQAIAEAAAIQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAFQgIADgJAAQgMAAgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_393.setTransform(138.7,246.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQACAAACADIAGACIAHABQAEAAAEgBQAFgCAAgDQAAgIgLgDIgFgBIgLgEQgFgDABgGQAAgMALgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIABAFIAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIADAAQANADAGAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgIAAgGgDg");
	this.shape_394.setTransform(132.4,246.5);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgFAqQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAAgKIAAgKIABgOIAAgMQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAMIgBAOIABAKIAAAKQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAgBAAgAgDgfQgCgCAAgDQAAgCACgDQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQADAAACACQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgCACgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_395.setTransform(124.6,245.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgGgCgEQgEACgEAEIgHAHIgDAFIAAAJIgBAJIABAGIAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgGAAAAgQIAAgJIABgKIgBgJIAAgJQAAgNAGgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABIAAADIgBAEIAAAFQADgGAGgFQAGgEAEAAQAJAAADAJQADgFAEgCQAFgCAFAAQAKAAADALIADAQIAEAfQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFAAAAgGIgCgSIgCgRIgCgIQgCgEgDAAQgCAAgGADIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_396.setTransform(118.3,246.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_397.setTransform(110.6,246.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgVQAAgGAFAAQAGAAAAAGIgBAVIAAAUIgBAdIAAANQgBAGgEAAQgGAAAAgGg");
	this.shape_398.setTransform(105.9,245.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_399.setTransform(101.3,246.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgVAbIAAgoIAAgFIAAgHQAAgFAFgBQAFAAABALQAKgMANAAQAFAAACAEQADADAAAIIAAAEQgBAHgGAAQgEAAgBgFIAAgFIAAgEQgJABgEADQgFAEgEAIIABAfQAAAFgHABQgEgBAAgFg");
	this.shape_400.setTransform(446.6,228.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_401.setTransform(440.6,228.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgTAtQgIgCAAgEQAAgFAGAAIAGABIALABQAKgBAEgKQADgHABgPQgEAGgEADQgEADgFAAQgKAAgHgHQgGgIgBgKQAAgQAJgJQAKgKAPAAIAJABQADACACADQAGAAAAAHIgBAKIgBALIgCATQAAALgCAIQgCAJgHAEQgGAGgNAAIgMgBgAgKgcQgFAHgBAKQABAJADADQADAEAHAAQAEAAAGgGQAEgGACgGIACgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_402.setTransform(434.3,230.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_403.setTransform(428.1,228.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQACAAACADIAHACIAGABQAEAAADgBQAGgCAAgDQAAgIgLgDIgFgBIgLgEQgFgDAAgGQAAgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABAFIABAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCgHIgNAEQgIAEAAAGIADAAQAMADAHAEQAJAFAAAMQABAJgJAFQgGAEgKAAQgIAAgGgDg");
	this.shape_404.setTransform(421.8,228.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHAAgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHABAJgDIAAgLIAAgLIABgVQAAgFAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_405.setTransform(412.4,228.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQACAAADADIAFACIAHABQAEAAADgBQAGgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDgBgGQAAgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAFIABAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIAEAAQAMADAGAEQAKAFAAAMQAAAJgJAFQgHAEgJAAQgHAAgHgDg");
	this.shape_406.setTransform(406.3,228.3);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHAAgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHABAJgDIAAgLIAAgLIABgVQAAgFAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_407.setTransform(400.5,228.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAEADIAFACIAHABQAEAAAEgBQAFgCAAgDQAAgIgLgDIgFgBIgLgEQgEgDAAgGQAAgMALgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIABAFIAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgHIgOAEQgIAEAAAGIAEAAQALADAHAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgIAAgGgDg");
	this.shape_408.setTransform(394.4,228.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgZAvQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCIAJgVIAKgUIAOghQADgIADgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgBADIgFAJIgEAKIgMAXIgMAbIgFANQgCADgDAAIgDgBgAAJArQgFgFAAgIQAAgIAEgGQAFgGAJAAQAIAAAGAFQAGAFAAAHQAAAJgFAGQgGAGgJAAQgIAAgFgFgAAPAXQgCADAAAEQAAAEADACQACACAFAAQAFAAACgDQACgCAAgGQAAgDgDgCQgDgCgEAAQgEAAgDADgAglgSQgEgFAAgIQAAgGAGgFQAFgFAGAAQAIAAAFAFQAFAGAAAIQAAAHgGAFQgFAEgHAAQgIAAgFgGgAgdgkQgDACAAADQAAAEACADQACACAEAAIAFgBQADgCAAgDQAAgFgCgCQgCgCgEAAIgFABg");
	this.shape_409.setTransform(383.4,226.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgZAeQgGgMAAgTQAAgRAIgMQAJgPAPAAQAQAAAIANQAHALAAAQQAAAZgIANQgIANgQAAQgRAAgIgQgAgPgXQgFAJAAAMQAAASAFAJQAFAKAKAAQAMAAAFgOQAEgKAAgOQAAgPgFgIQgFgIgKAAQgJAAgHALg");
	this.shape_410.setTransform(374.7,227);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgZAeQgGgMAAgTQAAgRAIgMQAJgPAPAAQAQAAAIANQAHALAAAQQAAAZgIANQgIANgQAAQgRAAgIgQgAgPgXQgFAJAAAMQAAASAFAJQAFAKAKAAQAMAAAFgOQAEgKAAgOQAAgPgFgIQgFgIgKAAQgJAAgHALg");
	this.shape_411.setTransform(367.6,227);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AABAtIgKAAIgGAAQgDgCAAgDQAAgGAJAAIADAAIADAAIgBgIIAAgIIABgVIABgWQgIAFgCAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgDAFgEIAIgHQAEgFAFAAQAEAAAAAEIAAAFIgBADIAAAGIABAGIgCATIgBATIAAAIIABAIIAGAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_412.setTransform(361.4,226.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIgBgFIACgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABABAHIAAAHQAJgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIACANIAAAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_413.setTransform(352.2,228.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_414.setTransform(345.9,228.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AAPAsIgJgOIgJgOIgKAHIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgOIAAgTIABgVIgBgFIAAgHQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAFIgBATIAAAUIAOgNIANgNQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDgBgCgDg");
	this.shape_415.setTransform(340.1,226.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_416.setTransform(333.5,228.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABAAAHIAAAHQAKgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_417.setTransform(327.5,228.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AANAcQgHADgJAAQgHAAgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIIgBAJIABAQIACALIAEABIADAAQAHABAJgDIAAgLIAAgLIABgVQAAgFAFgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAAALIAAAMIAAAFIAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgFg");
	this.shape_418.setTransform(321.2,228.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgTAtQgIgCABgEQAAgFAEAAIAHABIALABQAKgBAEgKQADgHAAgPQgDAGgEADQgEADgFAAQgLAAgGgHQgGgIAAgKQgBgQAKgJQAIgKAQAAIAJABQADACACADQAGAAABAHIgCAKIgBALIgCATQAAALgCAIQgDAJgGAEQgGAGgMAAIgNgBgAgKgcQgFAHgBAKQABAJADADQADAEAGAAQAFAAAGgGQAEgGABgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_419.setTransform(314.9,230.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgTAtQgIgCABgEQAAgFAEAAIAHABIALABQAKgBAFgKQACgHAAgPQgDAGgEADQgFADgEAAQgLAAgGgHQgGgIAAgKQgBgQAKgJQAIgKAQAAIAJABQADACACADQAGAAABAHIgCAKIgBALIgCATQAAALgCAIQgDAJgGAEQgGAGgNAAIgMgBgAgKgcQgFAHgBAKQABAJADADQADAEAGAAQAFAAAGgGQAEgGABgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_420.setTransform(308.6,230.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIgBAGIAAAFIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIAAgQIAAgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQAFABAAAHIAAAHQALgNAIAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_421.setTransform(302.5,228.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_422.setTransform(296.2,228.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgDAiQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgVIgBgTQAAgHgCgDQgEACgEAEIgHAHIgDAFIAAAJIgBAKIABAEIAAAFQAAAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgOIAAgKIABgKIgBgKIAAgJQAAgNAGAAQABABAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQABAAAAABQAAAAAAABIAAADIgBADIAAAGQADgFAGgFQAGgFAEgBQAJABADAIQADgEAEgCQAFgCAFAAQAKAAADALIADAPIAEAhQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgFgBAAgFIgCgSIgCgRIgCgIQgCgEgDAAQgCgBgGAEIgHAGIAAAKIACAPIABAPQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACQgBAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_423.setTransform(288.3,228.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIAAgFIABgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABABAHIAAAHQAJgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_424.setTransform(277.1,228.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_425.setTransform(270.9,228.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgUAtQgGgCgBgEQABgFAFAAIAHABIAKABQAKgBAFgKQACgHAAgPQgDAGgEADQgFADgEAAQgLAAgGgHQgHgIAAgKQABgQAIgJQAKgKAOAAIAJABQAEACACADQAHAAAAAHIgCAKIgCALIgBATQAAALgCAIQgDAJgFAEQgIAGgLAAIgOgBgAgKgcQgGAHABAKQgBAJAEADQADAEAGAAQAFAAAFgGQAGgGAAgGIADgTIgFgDIgFgBQgKAAgGAIg");
	this.shape_426.setTransform(264.6,230.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgMgFAAQgGgBgFAIQgFAHgDAKIAAAGIgBAFIABAFIAAAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIgBgFIACgQIABgQIgBgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAGABABAHIAAAHQAJgNAJAAQAKAAAEAIQACAGAAAKIAAAGIAAAEIABANIABAMQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_427.setTransform(258.6,228.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_428.setTransform(252.2,228.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgUAnQgIgIAAgMQAAgQAIgIQAJgJAMAAQAGAAAEACIAFAEIACghQABgFAFAAQAFAAAAAFIgDAkIAAAQQAAATACAKIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABQgDAAgCgFIgJAFIgIABQgMAAgIgIgAgNABQgFAGAAALQAAAIAGAFQAFAFAHAAQAEAAADgBIAHgFIABgCIAAgKIAAgHIAAgGQgCgFgDgBQgEgDgFAAQgJAAgFAFg");
	this.shape_429.setTransform(245.4,226.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgGAqIABgVIABgVIAAgUIAAgVQAAgGAFAAQAGAAAAAGIgBAVIAAAUIgBAdIAAANQgBAGgEAAQgGAAAAgGg");
	this.shape_430.setTransform(236.8,226.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_431.setTransform(232.1,228.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AAOAcIgCgMIAAgNIAAgEIAAgGQAAgMgEAAQgHgBgFAIQgFAHgDAKIgBAGIAAAFIAAAFIAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgGIAAgFIAAgQIABgQIAAgGIAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQAFABAAAHIAAAHQALgNAJAAQAJAAADAIQADAGAAAKIAAAGIAAAEIABANIACAMQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgFAAgBgGg");
	this.shape_432.setTransform(226.1,228.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_433.setTransform(219.7,228.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AAPAsIgJgOIgJgOIgKAHIgBASQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgIIAAgOIABgOIAAgTIABgVIgBgFIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAFIgBATIAAAUIAOgNIANgNQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQgHAIgKAJIANARQAIAMAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDgBgCgDg");
	this.shape_434.setTransform(213.6,226.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgVAbIAAgoIAAgFIAAgHQAAgFAFgBQAFAAAAALQALgMANAAQAFAAACAEQACADABAIIAAAEQgBAHgGAAQgEAAAAgFIAAgFIAAgEQgKABgEADQgGAEgDAIIAAAfQABAFgHABQgEgBAAgFg");
	this.shape_435.setTransform(207.4,228.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAIgLQAHgLANABQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAFIgVALQADAFAFACQAFACAFAAIAKgBQAGgCACgEQACgCADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAHgLAEQgIAFgJAAQgMgBgIgGgAgLgOQgFAFgCAKIASgHQAJgGAFgDQgFgFgJAAQgGAAgFAGg");
	this.shape_436.setTransform(201.2,228.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgDAoQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgHIABgGIgCghIgMgBQgFgBAAgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAIAMABIAAgHIAAgHQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgBQAFAAAAAIIABAGIAAADIgBADIAJgBIAIABQADABAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgCgBIgDAAIgIABIABAhIAAADIAAACQAAANgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_437.setTransform(195.1,227.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgWAvQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYIAAgVIgBgYIAAgLQgBgEACgDQACgDADAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBADIAKgFIAIgCQAMAAAFALQAEAIABAOQAAALgHAJQgHAIgMAAQgEAAgIgCIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgFgdIgIAFIABAbQAHADAFAAQAIAAADgGQAEgDgBgIQAAgKgCgGQgDgFgFAAQgFAAgEADg");
	this.shape_438.setTransform(185.6,229.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgQAYQgIgHAAgOQgBgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAAMgHAJQgHALgMAAQgJAAgHgIgAgJgLQgEAHAAAHQAAAIAEAFQAEAEAFAAQAFAAAFgEQAFgFAAgJQABgVgNAAQgIAAgEAIg");
	this.shape_439.setTransform(179.2,228.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AAQAsIgDgOIgBgOIAAgEIAAgFQABgKgGABQgHAAgFAFIgJANQAAAWgBAEQgCAEgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIABgIIAAgJIAAgoIABgKIgBgGIgBgGQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAEAAABAFIABAKIgBANIAAAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAADAGQACAFABAJIABALIABAMIABAMIABACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgBgEg");
	this.shape_440.setTransform(172.9,227);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgWAoQgLgFgBgJQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQADAAADADQACAEADACQAFADAJAAQAIAAAIgEQAJgFABgJQgBgHgHgEQgIgEgJAAQgJAAgHgDQgIgFAAgIQAAgKAMgJQALgIALAAIAMACQAKACAAAEQAAAFgFAAIgJgBIgIgBQgJAAgGAEQgGAFAAAGQAAAEAJACIALACQANABAHAHQAIAGgBAJQABAOgNAJQgMAHgNAAQgLAAgIgEg");
	this.shape_441.setTransform(165.3,227.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AASAeIgDgFIgKAFIgGABQgOAAgGgHQgGgHAAgPQAAgNAKgKQAJgKANAAQAFAAAGADQAIADAAAEIgBADIgBAHIgBAMIABAMIAEAKIABADIABABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAIQAAAKADAFQADAEAHAAQAFAAADgCIAGgEIgCgWIABgFIABgHIgEgBIgCgBQgIAAgHAIg");
	this.shape_442.setTransform(154.6,228.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgRArQgCADgCAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgFIAAgEIgBgTIAAgRIAAgQIAAgQQAAgDACgDQACgEADAAQAEAAAAAFIAAADIAAACIgBANIAAAOIAKgFIAHgBQANAAAIAJQAHAIAAANQAAANgJAJQgIAKgMAAQgJAAgHgEgAgIgCIgJAFIAAAKIAAAJIAAAJIAIAEIAIABQAIAAAFgGQAFgGAAgJQAAgIgEgGQgFgFgIAAQgDAAgFACg");
	this.shape_443.setTransform(148.2,227);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgQAYQgIgHAAgOQgBgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAAMgHAJQgHALgMAAQgJAAgHgIgAgJgLQgEAHAAAHQAAAIAEAFQAEAEAFAAQAFAAAFgEQAFgFAAgJQABgVgNAAQgIAAgEAIg");
	this.shape_444.setTransform(141.3,228.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgaAsQgCgCgBgDIAAgQIABgXIACgYIAAgQQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAHgCAKAAQAJAAAKAHQALAIAAAMQgBAOgLAIQAIAEAFAEQAFAFAAAFQgBAHgHAHQgGAEgFACQgNAGgTAAQgDAAgCgDgAgRAXIAAAMQAPgBAIgEIAIgEQAEgDAAgCQAAgDgHgDIgLgEIgFgBIgDAAIgCAAIgHAAIAAANgAgOgiIAAAKIgCAXIAJAAQAIAAAFgFQAGgFAAgIQAAgGgGgFQgGgEgGAAIgIAAg");
	this.shape_445.setTransform(134.9,227);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQACAAACADIAHACIAGABQAEAAADgBQAGgCAAgDQAAgIgLgDIgFgBIgLgEQgFgDAAgGQAAgMAMgFIAKgEIALgEIAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABAFIABAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCgHIgNAEQgIAEAAAGIAEAAQALADAHAEQAJAFAAAMQABAJgJAFQgGAEgKAAQgIAAgGgDg");
	this.shape_446.setTransform(124.3,228.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgDANIgBgGIAAgEIAAgFIAAgIQABgEADAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAEIAAADIAAAFIAAAFQAAAHgFAAQgCAAgBgCg");
	this.shape_447.setTransform(119.2,223.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgmAtQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgIIAAgHIAAgLIABgKIgBgLIAAgMIAAgKIgBgLQAAgDACgCQACgCADAAQADAAAFAHQAOAVALAPQANAPARAQIAAgHIAAgIQAAgYgCgPIgCgGIgBgHQAAgGAGAAQAKAAAAAlIAAATIAAATIgBAJQgBAGgFAAQgEAAgEgEQgXgXgegoIAAAMIAAANIAAAOIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_448.setTransform(112.3,227.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgYArQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAIAMgBIABgKIgBgKIAAgKIABggIgHAAIgIAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIASAAQAKAAARACQAFABAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEABIgKAAIgJgCIgBAfIAAAKIAAAKIAAAKIASAAQAAAAABAAQAAAAABABQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgBAAAAAAIgKAAIgKAAIgKABIgLABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_449.setTransform(104.3,227.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgbA1QgCgDAAgEIAAgYIAAgZIgBgYIgBgOQAAgFADgEQACgFAGABQADgBACADQADADAAADIAAABIAJgEIAIgCQAPABAHANQAFAJAAAPQAAAOgIAJQgJALgPAAIgKgCIgBAbQAAAEgCADQgDADgEgBQgEABgDgDgAgCgfQgFACgEAEIABAaQAFACAFAAQAHAAADgDQAEgFAAgIIgBgMQgCgHgGgBQgEAAgDACg");
	this.shape_450.setTransform(322.8,211);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgVAcQgJgJgBgQQAAgNAIgMQAKgNARAAQANAAAIAKQAHAKAAAOQAAAOgIALQgJAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAIAFAEQADAEAFAAQAFAAAEgEQAFgFAAgHQABgVgMAAQgHAAgFAIg");
	this.shape_451.setTransform(315.5,209.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AAPAwQgCgFAAgKIgCgPIABgFIAAgFIAAgGQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgIAAgEAFIgJANQAAAYgCAFQgCAFgGAAQgEAAgDgCQgCgDAAgDIAAgEIABgSIAAgrIAAgCIABgKIgBgGIAAgGQgBgEADgDQADgCAEAAQAGAAADAHIAAAMIAAAOIAAAMQAFgEAFgDQAEgCAHAAQALAAAFAGQAEAFABAJIABAQIABANIACANIAAACQAAAEgCACQgDADgEAAQgHAAgCgHg");
	this.shape_452.setTransform(308.3,207.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgjArQgIgGAAgJQAAgEADgCQACgDAEAAQAHAAACAGQAEAJANAAQAKAAAMgGQALgFgBgGQABgIgIgDQgEgCgOAAQgMgBgIgDQgNgFAAgKQAAgNAOgKQAOgLAPAAQAGAAAKADQAMADAAAFQAAAEgDACQgCADgFAAIgJgBIgJgBQgIAAgHADQgIAFAAAEQAAABAAABQAAAAABABQAAAAAAABQABAAABAAQABADAGAAIAQABQAOABAIAHQAKAHAAAOQAAARgUAJQgOAGgTABQgQAAgKgIg");
	this.shape_453.setTransform(299.5,208.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AAQAfIgKAEIgHABQgRAAgHgIQgJgJAAgRQABgPALgLQAMgLAQAAQAGAAAIADQAKAFAAAFQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIAAAHIgBAJQAAAMACAFIADAHIADAGQgBAEgCACQgDACgDAAQgDAAgHgFgAgIgMQgHAHAAAIQAAAJADAEQADAFAHAAIAGgCIAHgEIgCgWIAAgFIABgGIgCgBIgBAAQgJAAgGAHg");
	this.shape_454.setTransform(285.3,209.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgTAyQgCADgEAAQgDAAgDgDQgCgCAAgEIAAgFIAAgEIAAhLQAAgEACgEQADgFAFABQAHAAAAAHIAAADIgBACIAAAaIAKgEIAHgCQAQAAAJAMQAJAJAAAQQAAAPgKAKQgLAMgOAAQgJAAgJgEgAgHAAIgKAEIAAAcQAJAFAHAAQAHAAAGgHQAFgFAAgIQAAgJgEgGQgFgEgIgBQgCAAgFADg");
	this.shape_455.setTransform(277.4,207.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgVAcQgJgJgBgQQAAgNAIgMQAKgNARAAQANAAAIAKQAHAKAAAOQAAAOgIALQgJAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAIAFAEQADAEAFAAQAFAAAEgEQAFgFAAgHQABgVgMAAQgHAAgFAIg");
	this.shape_456.setTransform(269.8,209.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AggAyQgDgDAAgEIAAhFIAAgJIAAgIQABgHALgBQAFgBALAAQAMAAALAIQANAJAAAOQAAAIgCAFQgCAEgGAEQAHADAEAGQAGAHAAAHQAAAJgKAIQgGAFgHADQgOAFgYAAQgEAAgDgDgAgRAjQALAAANgEQALgDAAgEQAAgFgHgEQgGgDgFgBIgRAAgAgRgiIAAAOIAAANIAJABQATgCAAgNQAAgFgGgEQgFgFgHAAIgKABg");
	this.shape_457.setTransform(262.3,207.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgSAjQgKgEAAgHQAAgHAIAAIAJACIAJACQAMAAAAgGQAAgDgJgEIgRgIQgJgGAAgKQAAgNAOgEQAIgDAQAAQAHAAADACQAEACAAAGQAAAMgGAAQgHAAgBgGIgFAAQgPAAAAAEQAAADAIAEQANAGAFADQAKAHAAAIQAAAMgLAGQgIAEgMAAQgJAAgHgCg");
	this.shape_458.setTransform(248.5,209.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgGAOQgCgDgBgDIADgQQABgHAGAAQAEAAACACQACACAAAEIgCAPQAAADgCACQgDADgDAAQgDAAgCgCg");
	this.shape_459.setTransform(243.7,203.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AguAzQgCgDAAgDIAAgIIABgIIAAgMIAAgMIAAgLIAAgNIgBgMIgBgLQAAgEAEgEQADgDAEAAQAFAAAGAJQAdArAdAaIAAgKIAAgrIgBgHIgBgIQAAgJAKAAQALAAAAAhIgBALIAAApIgBAKQgBAIgJAAQgEAAgGgFQgZgXgfgoIgBAUIAAAQIABAPQAAAUgKAAQgFAAgDgDg");
	this.shape_460.setTransform(236.8,207.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgfAwQgCgDAAgEQAAgDACgDQAEgCADgBIAOAAIgBgeQAAgSACgPIgPAAQgEAAgDgDQgCgCAAgEQAAgEACgDQADgCADAAIATAAQANgBATADQAIACAAAHQAAAFgDACQgCACgEAAIgRgCIgBAgIAAAdIASAAQADAAADACQADADAAAEQAAAEgDACQgDACgDABIgMAAIgLAAIgMABIgOABQgEABgDgDg");
	this.shape_461.setTransform(227.6,207.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_10}]},24).to({state:[]},1).wait(20));

	// BGprofile
	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FEFEEB").s().p("EgqzAe/MAAAg9+MBVnAAAMAAAA9+g");
	this.shape_462.setTransform(276,200.5);
	this.shape_462._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_462).wait(24).to({_off:false},0).to({_off:true},1).wait(20));

	// Guide2
	this.instance_11 = new lib.Tween2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(52.7,208.5);

	this.instance_12 = new lib.Tween3("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(170.5,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},19).to({state:[]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,guide:{path:[52.7,208.5,49.8,198.1,52.4,187.1,55,176,62.4,167.9,70.3,159.2,85.9,152.6,89,151.3,99.4,147.4,107.8,144.2,112.7,141.9,135.3,131.2,151,110.5,166.5,90,170.7,65.7]}},19).wait(26));

	// Guide1
	this.instance_13 = new lib.Tween4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(488.3,214.6);

	this.instance_14 = new lib.Tween5("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(379.5,57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},19).to({state:[]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,guide:{path:[488.3,214.6,483.5,198.1,472.2,184.5,460.9,170.9,445.5,163.1,443.4,162,427.3,155.2,416.2,150.6,410,145.8,403.5,140.7,399.1,133.6,394.6,126.4,393,118.3,391.8,112,391.9,102.2,392.2,87.3,392.1,86,391.8,76.8,389.2,69.8,386.1,61.5,379.9,57.1]}},19).wait(26));

	// btnProfile
	this.btnProfile = new lib.buttonProfile();
	this.btnProfile.name = "btnProfile";
	this.btnProfile.parent = this;
	this.btnProfile.setTransform(133.1,285,0.356,0.317,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnProfile, 0, 1, 2, false, new lib.buttonProfile(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnProfile).wait(19).to({_off:true},1).wait(25));

	// BG+LOGO
	this.instance_15 = new lib.Bitmap2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(247,53,0.043,0.043);

	this.instance_16 = new lib.Bitmap1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,0.403,0.521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).to({state:[]},20).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,736.7,529.9);
// library properties:
lib.properties = {
	id: '15964F89623487479BEA1926F1BC0F35',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ProjectMM_atlas_.png?1575592251385", id:"ProjectMM_atlas_"},
		{src:"sounds/_1minuteHappyBackgroundMusic.mp3?1575592251549", id:"_1minuteHappyBackgroundMusic"},
		{src:"components/lib/jquery-2.2.4.min.js?1575592251549", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1575592251549", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1575592251549", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['15964F89623487479BEA1926F1BC0F35'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;