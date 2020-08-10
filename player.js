class Player{
    constructor(){

this.Name=null;
this.distance=0;
this.index=null;

    }
    getCount(){
        var countref=database.ref("playerCount");
        countref.on("value",function(data){
            playerCount=data.val()
        })
        
    }
    
    updateCount(count){
database.ref("/").update({

    playerCount:count
})
    }

update(){
    var playerindex="players/player"+this.index;
    database.ref(playerindex).set({

        name:this.Name,
        distance:this.distance,

    })
}

static getPlayerInfo(){

var infoRef=database.ref("players");
infoRef.on("value",(data)=>{

    allPlayers=data.val();

})

}

}