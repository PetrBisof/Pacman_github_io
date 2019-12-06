// =================== Classes
let thisWidth = 0;
let thisHeight = 0;
let pacmanHeight = 0;
let pacmanWidth = 0;
// Create class Stage
class Stage {
  constructor(tilesWidth, tilesHeight) {
    this.tilesWidth= tilesWidth;
    this.tilesHeight= tilesHeight;
  }
  render() {
    this.width = 85* this.tilesWidth;
    this.height = 85 * this.tilesHeight;
    this.moveWidth = this.width - 85;
    this.moveHeight = this.height - 170;
    this.stageElement = document.createElement('div');
    this.stageElement.className = 'stage';
    this.stageElement.style.width = `${this.width}px`;
    this.stageElement.style.height = `${this.height}px`;
    this.return();
  }
  mount(parent) {
    this.render();
    parent.appendChild(this.stageElement);
  }
  return() {
    thisWidth = this.moveWidth;
    thisHeight = this.moveHeight;
  }
}
// Create class Pacman
class Pacman {
  constructor() {
    
  }
  render() {
    this.pacmanElement = document.createElement('div');
    this.pacmanElement.className = 'entity entity--pac pacboy-active-light';
    this.update();
    this.return();
  }
  mount(parent) {
    this.render();
    parent.appendChild(this.pacmanElement);
  }

  
  update() {
    this.pacmanCounter = 1;
    this.pacmanOneTile = 0;
    this.leftPosition = 0;
    this.topPosition = 0;
    

    //Add event for keyboard
    document.addEventListener('keydown', (event) => {

      //=================== Event for right arrow
      if(event.code === 'ArrowRight') {
        if(this.pacmanCounter === 1) {
          //850PX
          if(this.leftPosition < this.width) {
            console.log(thisHeight)
            console.log(thisWidth)
            this.leftPosition += 85;
            this.pacmanElement.style.left = `${this.leftPosition}px`;
          }
          this.pacmanElement.style.backgroundPositionX = "85px";
          this.pacmanElement.style.backgroundPositionY = "0";
          this.pacmanCounter += 1;
          console.log("counter 1");
     
        } else if (this.pacmanCounter === 2) {
            if(this.leftPosition < thisWidth ) {
              this.leftPosition += 85;
              this.pacmanElement.style.left = `${this.leftPosition}px`;
            } 
            this.pacmanElement.style.backgroundPositionX = "0";
            this.pacmanElement.style.backgroundPositionX = "0";
            console.log("counter 2");
            this.pacmanCounter = 1;          
        }
      }



      //================ Event for the left arrow
      if(event.code === 'ArrowLeft') {
        if(this.pacmanCounter === 1) {

          if(this.leftPosition <= thisWidth && this.leftPosition > 0) {
            console.log("this.leftPosition");
            this.leftPosition -= 85;          
            this.pacmanElement.style.left = `${this.leftPosition}px`;
          }
          this.pacmanElement.style.backgroundPositionX = "0";
          this.pacmanElement.style.backgroundPositionY = "255px";
          this.pacmanCounter += 1;
          console.log("counter 1");
         return  this.pacmanCounter   
          
        } else if (this.pacmanCounter === 2) {
          if(this.leftPosition <= this.Width && this.leftPosition > 0) {
            console.log("this.leftPosition");
            this.leftPosition -= 85;          
            this.pacmanElement.style.left = `${this.leftPosition}px`;
          }
          this.pacmanElement.style.backgroundPositionX = "85px";
          this.pacmanElement.style.backgroundPositionY = "255px";
          console.log("counter 2");
          this.pacmanCounter = 1;
         return  this.pacmanCounter;
        }
      }



      //============== Event up 
      if(event.code === 'ArrowUp') {
        if(this.pacmanCounter === 1) {
          if(this.topPosition > 0) {          
            this.topPosition -= 85;          
            this.pacmanElement.style.top = `${this.topPosition}px`;
          }      
          this.pacmanElement.style.backgroundPositionX = "0";
          this.pacmanElement.style.backgroundPositionY = "85px";
          this.pacmanCounter += 1;
          console.log("counter 1");
         return  this.pacmanCounter    
        } else if (this.pacmanCounter === 2) {
          if(this.topPosition > 0) {
            console.log(this.topPosition);
            this.topPosition -= 85;          
            this.pacmanElement.style.top = `${this.topPosition}px`;
          }
          this.pacmanElement.style.backgroundPositionX = "85px";
          this.pacmanElement.style.backgroundPositionY = "85px";
          console.log("counter 2");
          this.pacmanCounter = 1;
         return  this.pacmanCounter;
        }
      }
       // Event Down
       if(event.code === 'ArrowDown') {
        if(this.pacmanCounter === 1) {
          if(this.topPosition >= 0 && this.topPosition <= thisHeight) {
            console.log(this.topPosition);
            this.topPosition += 85;          
            this.pacmanElement.style.top = `${this.topPosition}px`;
          }

          this.pacmanElement.style.backgroundPositionX = "0";
          this.pacmanElement.style.backgroundPositionY = "170px";
          this.pacmanCounter += 1;
          console.log("counter 1");
         return  this.pacmanCounter    
        } else if (this.pacmanCounter === 2) {
          if(this.topPosition >= 0 && this.topPosition <= thisHeight) {
            console.log(this.topPosition);
            this.topPosition += 85;          
            this.pacmanElement.style.top = `${this.topPosition}px`;
            console.log(this.topPosition);
          }
          this.pacmanElement.style.backgroundPositionX = "85px";
          this.pacmanElement.style.backgroundPositionY = "170px";
          console.log("counter 2");
          this.pacmanCounter = 1;
         return  this.pacmanCounter;
        }
      }
      
    })
  }
  return() {
    pacmanWidth = this.leftPosition;
    pacmanHeight = this.topPosition;
  }
}

console.log(pacmanHeight);
console.log(pacmanWidth);


// ======== Entities

class Entity {

  constructor(width, height) {
    this.height = height;
    this.width = width;
  }
 
  render() {
    this.wallElement = document.createElement('div');
    this.wallElement.className = 'entity entity--wall';
    this.position();
  }
  mount(parent) {
    this.render();
    parent.appendChild(this.wallElement)
  }

  position() {
    this.widthWall = this.width * 85;
    this.heightWall = this.height * 85;
    this.wallElement.style.left = `${this.widthWall}px`;
    this.wallElement.style.top = `${this.heightWall}px`;
    
    if (this.widthWall == pacmanWidth && this.heightWall == pacmanHeight) {
     console.log("same ")
    }
  }
}


// (1) Clicks anywhere on the page, alternate the pacman between opened and closed.
document.addEventListener('click', () => {
  
});