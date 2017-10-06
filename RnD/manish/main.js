var game = new Phaser.Game(1080, 720, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

var player;

function preload() {
  //load imgs
  preload_imgs.forEach(function(i){
    var b = baseName(i);
    game.load.image(b,i);
  });

  //load sounds
  preload_snds.forEach(function(i){
    var b = baseName(i);
    var ogg = "res/snds/"+b+".ogg";
    game.load.audio(b,[i,ogg]);
  });

  //load tile maps
  game.load.tilemap('map', 'res/maps/map0.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles', 'res/tiles/tiles.png');

}

function create() {
  //start physics system
  //game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);

players = game.add.group();
createPlayer(10,10);

}


function update() {

}
