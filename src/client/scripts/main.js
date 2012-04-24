require(["unit"], function(Unit) {
  var unit = new Unit('player-1', 10, 10),
      force = {
        x: 0,
        y: 0
      };

  (function animloop(time){
    //if (time % 100 === 0) {
      render();
      //console.log(time);
    //}
    console.log(unit.getPos().x + ', ' + unit.getPos().y);
    //console.log(unit.getPos());
    window.webkitRequestAnimationFrame(animloop, unit.container);
  })(0);

  function render() {
    unit.setForce(force);
    unit.update();
  }

  document.addEventListener('keydown', function (evt) {
    // Left
    if (force.x === 0 && evt.keyCode === 37) {
      force.x = -1;
    }
    // Up
    else if (force.y === 0 && evt.keyCode === 38) {
      force.y = -1;
    }
    // Right
    else if (force.x === 0 && evt.keyCode === 39) {
      force.x = 1;
    }
    // Down
    else if (force.y === 0 && evt.keyCode === 40) {
      force.y = 1;
    }
  });

  document.addEventListener('keyup', function (evt) {
    // Left
    // Right
    if (evt.keyCode === 37 || evt.keyCode === 39) {
      force.x = 0;
    }
    // Up
    // Down
    else if (evt.keyCode === 38 || evt.keyCode === 40) {
      force.y = 0;
    }
  });
});