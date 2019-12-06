
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  // Background
  const stageBackground = new Stage(12, 7);
  stageBackground.mount(container);
  const background = document.querySelector('.stage');

  //Pacman
  const pacman = new Pacman();
  pacman.mount(background);
  

  //Entity
  const entity1 = new Entity(3,4);
  entity1.mount(background);

  const entity2 = new Entity(9,3);
  entity2.mount(background);

  const entity3 = new Entity(1,3);
  entity3.mount(background);

  const entity4 = new Entity(2,4);
  entity4.mount(background);

  const entity5 = new Entity(8,2);
  entity5.mount(background);

  const entity6 = new Entity(0,1);
  entity6.mount(background);

});