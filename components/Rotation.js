//Maze Rotation
AFRAME.registerComponent("maze-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRoation < 0.1) {
          this.data.speedOfRoation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRoation > -0.1) {
          this.data.speedOfRoation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRoation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

//Car rotation component
AFRAME.registerComponent("car-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      //get the data from the attributes
      this.data.speedOfRoation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("position");

      var carRotation = this.data.speedOfRoation;
      var carPosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (carRotation.x < 10) {
          //carRotation.x += 0.5;
          this.el.setAttribute("rotation", carRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (carRotation.x > -10) {
          //carRotation.x -= 0.5;
          this.el.setAttribute("rotation", carRotation);
        }
      }
      // if (e.key === "ArrowUp") {
      //   if (carRotation.z < 20) {
      //     carRotation.z += 0.5;
      //     this.el.setAttribute("rotation", carRotation);
      //   }
      //   if (carPosition.y < 2) {
      //     carPosition.y += 0.01;
      //     this.el.setAttribute("position", carPosition);
      //   }
      // }
      // if (e.key === "ArrowDown") {
      //   if (carRotation.z > -10) {
      //     carRotation.z -= 0.5;
      //     this.el.setAttribute("rotation", carRotation);
      //   }
      //   if (carPosition.y > -2) {
      //     carPosition.y -= 0.01;
      //     this.el.setAttribute("position", carPosition);
      //   }
      // }
    });
  },
});
