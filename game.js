class Game{

    constructor(){
    }

    getState(){
        var  stateref=database.ref("gameState");
        stateref.on("value",function(data){
            gameState=data.val()
        })
        
    }

    update(state){

        database.ref("/").update({
        
            gameState:state

        })

            }
        
    start(){
        if (gameState==0){
            player=new Player()

            player.getCount()

            form=new Form()

            form.display()
        }


}

play(){

form.HIDE();

textSize(30);
text("on your marks............get set............GO!!",20,50);

Player.getPlayerInfo();

if(allPlayers!=undefined){

var displayposition=130;

for(var plr in allPlayers){

if(plr=="player"+player.index){

   fill ("#76D900");

}else{

fill("#F72801");

}

displayposition=displayposition+20

textSize(15);
text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayposition)

}

if(keyDown("up")&&player.index!=null){

player.distance=player.distance+20;

player.update();

}



}

}

}