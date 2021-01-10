
const ws281x = require('rpi-ws281x');


module.exports = function () { 
  // One time initialization
  ws281x.configure({leds:8, gpio: 18, brightness: 128});
   
  // Create my pixels
  const black = new Uint32Array(8);
  const pixels = new Uint32Array(8);

  const rgb = (r, g, b) => (r << 16) | (g << 8)| b;

   
  // Render pixels to the Neopixel strip
  ws281x.render(black);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const off = () => {
    ws281x.render(black);  
  }

  const set = (leds) => {
    for (let i = 0; i < 8; i++) {

    här är jag, fixa formatet med tinycolor istället. lista av färger
      pixels[i] = rgb(leds[i][0], leds[i][1], leds[i][2])
    }
  }

  // FIXME: transition between colors
  const animate = async (steps) => {
    for (const step of steps) {
      set(step.leds)
      await wait(step.ms)
    }
  }

  return {
    wait,
    set, 
    off,
    animate,
  }
 
}
