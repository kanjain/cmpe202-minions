var game = new Phaser.Game(854, 480, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

var player;
var cursors;

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
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
  players = game.add.group();
  players.enableBody = true;
  createPlayer(10,20);
  createPlayer(200,10);
  cursors = game.input.keyboard.createCursorKeys();
}

function createPlayer(x,y) {
    var player = players.create(x,y,'minion');
    player.body.bounce.y = .2;
    player.body.gravity.y=300;
    player.body.collideWorldBounds = true;
}


function update() {
    playerUpdate();

}

function playerUpdate(){
    game.physics.arcade.collide(players,players);
    players.forEach(function (p) {
        p.body.velocity.x = 0;
        if(cursors.left.isDown){
            p.body.velocity.x= -150;
        }else if(cursors.right.isDown)
        {
            p.body.velocity.x = 150;
        }
    });

}