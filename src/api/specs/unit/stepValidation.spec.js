'use strict';

const expect = require('expect.js');
const stepValidation = require('../../game/stepValidation.js');

const data = {
  player1: {
    id: 1
  },
  player2: {
    id: 2
  },
  gameSteps:[{
    current:{
      i: 2,
      j: 0
    },
    old:{
      i: 1,
      j: 0
    },
    userId: 2
  }],
  Map: {
    MapData: [{
      i: 4,
      j: 0,
      cellstate: 'empty'
    }, {
      i: 5,
      j: 0,
      cellstate: 'player2'
    }, {
      i: 10,
      j: 6,
      cellstate: 'empty'
    }]
  }
};

const step = {
  old: {
   i: 1,
   j: 0
  },
  current: {
   i: 5,
   j: 0
  },
  userId: 3
};

// inline all data
// currect code
//

describe('stepValidation', () => {
  it('check wrong user', () => {
    stepValidation(data, step, (error, code) => {
      expect(code).to.be(1);
    });
  });

  it('step order', () => {
    stepValidation(data, {
      userId: 1
    }, (error, code) => {
      expect(code).to.be(2);
    });
  });

  it('check owner', () => {
    stepValidation(data, step, (error, code) => {
      expect(code).to.be(3);
    });
  });

  it('check for collisions', () => {
    stepValidation(data, step, (error, code) => {
      expect(code).to.be(4);
    });
  });

  it('check for distance', () => {
    stepValidation(data, {
      old: {
        i: 4,
        j: 0
      },
      current: {
        i: 10,
        j: 6
      },
      userId: 3
    }, (error, code) => {
      expect(code).to.be(5);
    });
  });
});