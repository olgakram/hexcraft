'use strict';

export default class Hex {
  static indexToCoordinates(i, j) {
    return {
      x: (j % 2 === 0) ? i*40 : i*40 + 20,
      y: j*40 + 80
    };
  }

  static coordinatesToIndex(x, y) {
    let i = Math.round(x / 40);
    let j = Math.round((y - 80) / 40);

    if (j % 2 !== 0){
      i = Math.round((x - 20) / 40);
    }

    return {
      i: i,
      j: j
    };
  }

  static findByIndex(array, i, j) {
    let element;
    array.forEach(hex => {
      if(hex.i === i && hex.j === j) {
        element = hex;
      }
    });
    return element;
  }

  static findByCoords(array, x, y) {
    let coordinates = Hex.coordinatesToIndex(x, y);
    return Hex.findByIndex(array, coordinates.i, coordinates.j);
  }

  static findNeighbors(array, x, y) {
    let index = Hex.coordinatesToIndex(x, y);

    const directions = [[
      [+1,  0], [ 0, -1], [-1, -1],
      [-1,  0], [-1, +1], [ 0, +1]
    ], [
      [+1,  0], [+1, -1], [ 0, -1],
      [-1,  0], [ 0, +1], [+1, +1]
    ]];

    let parity = index.j & 1; // jshint ignore:line

    let neighbors = [];
    directions[parity].forEach(coordinates => {
      let field = Hex.findByIndex(array, index.i+coordinates[0], index.j+coordinates[1]);

      if(field) {
        neighbors.push(field);
      }
    });

    return neighbors;
  }

  static findNeighborsNeighbors(array, x, y) {
    let neighborsNeighbors = [];
    Hex.findNeighbors(array, x, y).forEach(neighbor => {
      let neighbors = Hex.findNeighbors(array, neighbor.x, neighbor.y);
      neighborsNeighbors = neighborsNeighbors.concat(neighbors);
    });

    return neighborsNeighbors;
  }
}