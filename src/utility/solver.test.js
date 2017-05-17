import Solver from './Solver'
var PieceTypes = require('../modules/pieces');

var testBoard = [[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[1,0,1,0,0,0,0,0,1,0],
[1,0,0,0,0,1,0,1,1,0],
[1,1,1,0,0,1,1,1,1,0],
[0,1,0,0,1,1,1,1,1,1]
]

var testBoard2 = [[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,1,0,0,0,0,1,0,0,0],
[1,1,0,0,1,1,1,1,1,1]
]

var testBoard3 = [[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,1,1,1,1],
[0,1,0,0,0,0,1,0,0,0],
[1,1,1,1,1,1,1,1,1,1]
]

var testBoard4 = [[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1]
];

var testBoardInsertZ = [[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[1,1,0,0,0,0,1,1,1,1],
[1,1,0,0,1,1,1,1,1,1],
[1,1,0,0,1,1,1,1,1,1],
[1,1,0,1,1,1,1,1,1,1]
];

var testBoardInsertJ = [[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,0,1,1,0,1,1],
[1,1,0,1,1,1,1,1,1,1]
];

var testBSBoard = [[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,0,0,0,0,0],
[1,1,1,1,1,1,0,0,0,0]
];
/*

it('getInfo - 1', () => {
  var solver = new Solver();
  var info = solver.getInfo(testBoard);
  const solution = {
    aggregateHeight: 24,
    holes: 3,
    bumpiness: 17,
    linesCleared: 0
  };
  expect(info).toEqual(solution);
});

it('getInfo - 2', () => {
  var solver = new Solver();
  var info = solver.getInfo(testBoard2);
  const solution = {
    aggregateHeight: 10,
    holes: 0,
    bumpiness: 6,
    linesCleared: 0
  };
  expect(info).toEqual(solution);
});

it('getAggregateHeight - 1', () => {
  var solver = new Solver();
  var height = solver.getAggregateHeight(testBoard);
  const solution = 24;
  expect(height).toEqual(solution);
});

it('getAggregateHeight - 2', () => {
  var solver = new Solver();
  var height = solver.getAggregateHeight(testBoard2);
  const solution = 10;
  expect(height).toEqual(solution);
});

it('getHoles - 1', () => {
  var solver = new Solver();
  var height = solver.getHoles(testBoard);
  const solution = 3;
  expect(height).toEqual(solution);
})

it('getHoles - 2', () => {
  var solver = new Solver();
  var height = solver.getHoles(testBoard2);
  const solution = 0;
  expect(height).toEqual(solution);
})

it('getBumpiness - 1', () => {
  var solver = new Solver();
  var height = solver.getBumpiness(testBoard);
  const solution = 17;
  expect(height).toEqual(solution);
})

it('getBumpiness - 2', () => {
  var solver = new Solver();
  var height = solver.getBumpiness(testBoard2);
  const solution = 6;
  expect(height).toEqual(solution);
})

it('linesCleared - 1', () => {
  var solver = new Solver();
  var height = solver.getLinesCleared(testBoard);
  const solution = 0;
  expect(height).toEqual(solution);
})

it('linesCleared - 3', () => {
  var solver = new Solver();
  var height = solver.getLinesCleared(testBoard3);
  const solution = 2;
  expect(height).toEqual(solution);
})

it('Heuristics no rotate - 1', () => {
  var solver = new Solver();
  const currentPiece = {
    _piece: PieceTypes.I,
    _rotation: 0,
    _position: {
      x: 2,
      y: 2
    }
  }
  var solved = solver.getMoveList(testBoard4, currentPiece);
  const solution = ['MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_RIGHT'];
  expect(solved.moveList).toEqual(solution);
})

it('Heuristics no rotate - 2', () => {
  var solver = new Solver();
  const currentPiece = {
    _piece: PieceTypes.Z,
    _rotation: 0,
    _position: {
      x: 2,
      y: 2
    }
  }
  var solved = solver.getMoveList(testBoard4, currentPiece);
  const solution = ['ROTATE_CLOCKWISE', 'MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_RIGHT'];
  expect(solved.moveList).toEqual(solution);
})

it('Heuristics Clear Lines - 1', () => {
  var solver = new Solver();
  const currentPiece = {
    _piece: PieceTypes.J,
    _rotation: 0,
    _position: {
      x: 5,
      y: 2
    }
  }
  var solved = solver.getMoveList(testBoardInsertJ, currentPiece);
  const solution = ['ROTATE_CLOCKWISE', 'ROTATE_CLOCKWISE', 'ROTATE_CLOCKWISE', 'MOVE_LEFT', 'MOVE_LEFT', 'MOVE_LEFT', 'MOVE_LEFT'];
  expect(solved.moveList).toEqual(solution);
})*/

it('Heuristics Clear Lines - 2', () => {
  var solver = new Solver();
  const currentPiece = {
    _piece: PieceTypes.I,
    _rotation: 0,
    _position: {
      x: 5,
      y: 2
    }
  }
  var solved = solver.getMoveList(testBSBoard, currentPiece);
  const solution = ['MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_RIGHT'];
  expect(solved.moveList).toEqual(solution);
})
