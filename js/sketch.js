let button;
let slider;
let val;

const delay = new Tone.FeedbackDelay("8n", 0.5);
const reverb = new Tone.Reverb(1);

const player = new Tone.Players({
  "sound1":"sounds/wind-chimes.mp3",
  "sound2":"sounds/sipping-coffee.mp3",
  "sound3":"sounds/bruh.mp3",
  "sound4":"sounds/vine-boom.mp3"
});//.toDestination();

function play(sound){
  console.log(sound)
  player.player(sound).start();

}

function setup() {
  createCanvas(500, 500);


  player.connect(delay);
  delay.toDestination();
  reverb.toDestination();

  button1 = createButton("sound 1");
  button1.position(10, 20);
  button1.mousePressed(() => play("sound1"));

  button2 = createButton("sound 2");
  button2.position(10, 40);
  button2.mousePressed(() => play("sound2"));
  
  button3 = createButton("sound 3");
  button3.position(10, 60);
  button3.mousePressed(() => play("sound3"));
  
  button4 = createButton("sound 4");
  button4.position(10, 80);
  button4.mousePressed(() => play("sound4"));
  
  slider = createSlider(0, 5, 1);
  slider.position(10, 100);
  slider.style('width', '80px');
  // delay.delayTime.value = slider.value();
  // reverb.decay.value = slider.value();

}

function draw() {
  background(240);
  val = slider.value();
  text("Change the Reverb", 10, 120);
  text(`Reverb = ${val} second(s)`, 90, 105);
}


