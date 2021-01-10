let board, counter,
game = new Chess();
const pValue = {
	p : 100,
	n : 230,
	b : 330,
	r : 500,
	q : 900,
	k : 20000
}
, sTables ={ pw: [
[0, 0, 0, 0, 0, 0, 0, 0],
[50,50,50,50,50,50,50,50],
[10,10,20,30,30,20,10,10],
[5, 5,10,25,25,10,5 ,5],
[0, 0, 0, 20,20,0 ,0, 0],
[5,-5, -10, 0, 0,-10,-5,5],
[ 5,10,10,-20,-20,10,10,5],
[0, 0, 0, 0, 0, 0, 0, 0]],
pb : [
[0, 0, 0, 0, 0, 0, 0, 0],
[50,50,50,50,50,50,50,50],
[10,10,20,30,30,20,10,10],
[5, 5,10,25,25,10,5 ,5],
[0, 0, 0, 20,20,0 ,0, 0],
[5,-5, -10, 0, 0,-10,-5,5],
[ 5,10,10,-20,-20,10,10,5],
[0, 0, 0, 0, 0, 0, 0, 0]].slice().reverse(),
nw : [
[-50,-40,-30,-30,-30,-30,-40,-50],
[-40,-20,  0,  0,  0,  0,-20,-40],
[-30,  0, 10, 15, 15, 10,  0,-30],
[-30,  5, 10, 15, 15, 10,  5,-30],
[-30,  0, 10, 15, 15, 10,  0,-30],
[-30,  5, 10, 15, 15, 10,  5,-30],
[-40,-20,  0,  5,  5,  0,-20,-40],
[-50,-40,-30,-30,-30,-30,-40,-50]],
nb : [
[-50,-40,-30,-30,-30,-30,-40,-50],
[-40,-20,  0,  0,  0,  0,-20,-40],
[-30,  0, 10, 15, 15, 10,  0,-30],
[-30,  5, 10, 15, 15, 10,  5,-30],
[-30,  0, 10, 15, 15, 10,  0,-30],
[-30,  5, 10, 15, 15, 10,  5,-30],
[-40,-20,  0,  5,  5,  0,-20,-40],
[-50,-40,-30,-30,-30,-30,-40,-50]].slice().reverse(),
bw : [
[-20,-10,-10,-10,-10,-10,-10,-20],
[-10,  0,  0,  0,  0,  0,  0,-10],
[-10,  0,  5, 10, 10,  5,  0,-10],
[-10,  5,  5, 10, 10,  5,  5,-10],
[-10,  0, 10, 10, 10, 10,  0,-10],
[-10, 10, 10, 10, 10, 10, 10,-10],
[-10,  5,  0,  0,  0,  0,  5,-10],
[-20,-10,-10,-10,-10,-10,-10,-20]],
bb : [
[-20,-10,-10,-10,-10,-10,-10,-20],
[-10,  0,  0,  0,  0,  0,  0,-10],
[-10,  0,  5, 10, 10,  5,  0,-10],
[-10,  5,  5, 10, 10,  5,  5,-10],
[-10,  0, 10, 10, 10, 10,  0,-10],
[-10, 10, 10, 10, 10, 10, 10,-10],
[-10,  5,  0,  0,  0,  0,  5,-10],
[-20,-10,-10,-10,-10,-10,-10,-20]].slice().reverse(),
rw : [
[0, 0, 0, 0, 0, 0, 0, 0],
[5,10,10,10,10,10,10, 5],
[-5,0, 0, 0, 0, 0, 0,-5],
[-5,0, 0, 0, 0, 0, 0,-5],
[-5,0, 0, 0, 0, 0, 0,-5],
[-5,0, 0, 0, 0, 0, 0,-5],
[-5,0, 0, 0, 0, 0, 0,-5],
[0, 0, 0, 5, 5, 0, 0, 0]],
rb : [
[0, 0, 0, 0, 0, 0, 0, 0],
[5,10,10,10,10,10,10, 5],
[-5,0, 0, 0, 0, 0, 0,-5],
[-5,0, 0, 0, 0, 0, 0,-5],
[-5,0, 0, 0, 0, 0, 0,-5],
[-5,0, 0, 0, 0, 0, 0,-5],
[-5,0, 0, 0, 0, 0, 0,-5],
[0, 0, 0, 5, 5, 0, 0, 0]].slice().reverse(),
qw : [
[-20,-10,-10, -5, -5,-10,-10,-20],
[-10,  0,  0,  0,  0,  0,  0,-10],
[-10,  0,  5,  5,  5,  5,  0,-10],
[ -5,  0,  5,  5,  5,  5,  0, -5],
[  0,  0,  5,  5,  5,  5,  0, -5],
[-10,  5,  5,  5,  5,  5,  0,-10],
[-10,  0,  5,  0,  0,  0,  0,-10],
[-20,-10,-10, -5, -5,-10,-10,-20]],
qb : [
[-20,-10,-10, -5, -5,-10,-10,-20],
[-10,  0,  0,  0,  0,  0,  0,-10],
[-10,  0,  5,  5,  5,  5,  0,-10],
[ -5,  0,  5,  5,  5,  5,  0, -5],
[  0,  0,  5,  5,  5,  5,  0, -5],
[-10,  5,  5,  5,  5,  5,  0,-10],
[-10,  0,  5,  0,  0,  0,  0,-10],
[-20,-10,-10, -5, -5,-10,-10,-20]].slice().reverse(),
kw : [
[-30,-40,-40,-50,-50,-40,-40,-30],
[-30,-40,-40,-50,-50,-40,-40,-30],
[-30,-40,-40,-50,-50,-40,-40,-30],
[-30,-40,-40,-50,-50,-40,-40,-30],
[-20,-30,-30,-40,-40,-30,-30,-20],
[-10,-20,-20,-20,-20,-20,-20,-10],
[ 20, 20,  0,  0,  0,  0, 20, 20],
[ 20, 30, 10,  0,  0, 10, 30, 20]],
kb : [
[-30,-40,-40,-50,-50,-40,-40,-30],
[-30,-40,-40,-50,-50,-40,-40,-30],
[-30,-40,-40,-50,-50,-40,-40,-30],
[-30,-40,-40,-50,-50,-40,-40,-30],
[-20,-30,-30,-40,-40,-30,-30,-20],
[-10,-20,-20,-20,-20,-20,-20,-10],
[ 20, 20,  0,  0,  0,  0, 20, 20],
[ 20, 30, 10,  0,  0, 10, 30, 20]].slice().reverse()};
function makeTurn(game,depth) {
  let best = -Infinity;
  let score;
  let bestFound;
  let moves = game.ugly_moves();
  counter =0;
  for (let i = 0; i < moves.length; i++) {
	  game.ugly_move(moves[i]);
	score = makeMove(game,depth-1, -Infinity, Infinity,false);
			//score = nogaMax(game,depth-1,-1);
	   game.undo();
        if (score >= best) {
          best = score;
          bestFound = moves[i];
      }
    }
	console.log(counter);
	console.log(best);
  return bestFound;
}
function makeMove(game, depth, alpha, beta,isMax){
	counter++;
  if(depth == 0){
    return boardValue(game.board());
  }

  if(isMax){
  let best = -Infinity;
  let moves = game.ugly_moves();
    for (let i = 0; i < moves.length; i++) {
		game.ugly_move(moves[i]);
          best = Math.max(makeMove(game,depth-1,alpha,beta,false),best);
         game.undo();
		  alpha = Math.max(best,alpha);
		  if(alpha>=beta)
			  break;
		}
      
    
    return best;
  }
  else {
	let best = Infinity;
	let moves = game.ugly_moves();
	for (let i = 0; i < moves.length; i++) {
		game.ugly_move(moves[i]);
          best = Math.min(makeMove(game,depth-1,alpha,beta,true),best);
         game.undo();
         beta = Math.min(best,beta);
		 if (alpha>=beta)
			 break;
		}
  return best;
  }
}
function nogaMax(game, depth, color){
	counter++;
	if(depth==0){
return (boardValue(game.board())*color);
}
		let moves = game.ugly_moves();
let best = -Infinity;
for (let i = 0; i < moves.length; i++){
	game.ugly_move(moves[i]);
	let score = nogaMax(game, depth-1,(-1)*color);
	game.undo();
	best=Math.max((-1)*score,best);
	}
	return best;
}


var onDragStart = function (source, piece, position, orientation) {
  if (game.in_checkmate() === true || game.in_draw() === true ||
  piece.search(/^b/) !== -1) {
    return false;
  }
};

var makeBestMove = function () {
  game.ugly_move(getBestMove(game));
  board.position(game.fen());
  renderMoveHistory(game.history());
  if (game.game_over()) {
    alert('Game over');
  }
};
var getBestMove = function (game) {
  if (game.game_over()) {
    alert('Game over');
  }
  var depth = parseInt($('#search-depth').find(':selected').text());
  
    var d = new Date().getTime();
  var bestMove = makeTurn(game,depth);
    var d2 = new Date().getTime();
    var moveTime = (d2 - d);
    var positionsPerS = ( counter * 1000 / moveTime);

    $('#position-count').text(counter);
    $('#time').text(moveTime/1000 + 's');
    $('#positions-per-s').text(positionsPerS);
  return bestMove;
};

var renderMoveHistory = function (moves) {
  var historyElement = $('#move-history').empty();
  historyElement.empty();
  for (var i = 0; i < moves.length; i = i + 2) {
    historyElement.append('<span>' + moves[i] + ' ' + ( moves[i + 1] ? moves[i + 1] : ' ') + '</span><br>')
  }
  historyElement.scrollTop(historyElement[0].scrollHeight);

};
function boardValue(board){
	value = 0;
  for (let i=0; i < board.length; i++){
    for (let j = 0; j<board.length; j++){
		value += pieceValue(board[i][j],i,j);
    }
  }
  
  return value;
}
let pieceValue = function(piece,i,j) {
	let ret;
	if(piece!=null){
	ret = pValue[piece.type] + sTables[piece.type.toString() + piece.color.toString()][i][j];
	return piece.color == "w" ? -ret: ret;}
return 0;
}
var onDrop = function (source, target) {

  var move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  });

  removeGreySquares();
  if (move === null) {
    return 'snapback';
  }

  renderMoveHistory(game.history());
window.setTimeout(makeBestMove, 250);
  
};
var onSnapEnd = function () {
  board.position(game.fen());
};

var onMouseoverSquare = function(square, piece) {
  var moves = game.moves({
    square: square,
    verbose: true
  });

  if (moves.length === 0) return;

  greySquare(square);

  for (var i = 0; i < moves.length; i++) {
    greySquare(moves[i].to);
  }
};

var onMouseoutSquare = function(square, piece) {
  removeGreySquares();
};

var removeGreySquares = function() {
  $('#board .square-55d63').css('background', '');
};

var greySquare = function(square) {
  var squareEl = $('#board .square-' + square);

  var background = '#a9a9a9';
  if (squareEl.hasClass('black-3c85d') === true) {
    background = '#696969';
  }

  squareEl.css('background', background);
};

var cfg = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onMouseoutSquare: onMouseoutSquare,
  onMouseoverSquare: onMouseoverSquare,
  onSnapEnd: onSnapEnd
};
board = ChessBoard('board', cfg);
