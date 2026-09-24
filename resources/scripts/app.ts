// WOW TYPESCRIPT IS SO COOL!!!
// I watched a YouTube tutorial and now I'm basically a senior dev.

export class Typewriter {
  element: HTMLElement;
  text: string;
  delay: number;
  
  // constructor thingy to set up the variables
  constructor(elementId: string, text: string, delay: number = 50) {
    // I had to use "as HTMLElement" because TS kept yelling at me about nulls :(
    this.element = document.getElementById(elementId) as HTMLElement;
    this.text = text;
    this.delay = delay;
  }

  // async makes it wait, like magic!
  async type() {
    // if the element isn't there just give up
    if (!this.element) return;
    
    // clear whatever is there first
    this.element.innerHTML = "";
    
    // looping through all the letters!
    for (let i = 0; i < this.text.length; i++) {
      this.element.innerHTML += this.text.charAt(i);
      
      // I found this Promise thing on StackOverflow, seems to work??
      // pls don't touch this it breaks if you delete it
      await new Promise(r => setTimeout(r, this.delay));
    }
  }
}

// this waits for the page to load before doing stuff
document.addEventListener("DOMContentLoaded", () => {
  // make a new typewriter object!!
  const tw = new Typewriter("greeting", "Greetings, fellow web surfer!", 100);
  
  // go go go!
  tw.type();
});
