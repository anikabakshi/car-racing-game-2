class Form {

constructor(){

//makes the player1,2,3,4.......'s name loged in.
this.input=createInput("Name");
this.input.position(130,160);

//makes the play button appear.
this.button=createButton("play");
this.button.position(250,200);

this.Greeting=createElement("h3");
this.Greeting.position(130,160);


}

display(){

    //makes the title i.e game's name.
var title=createElement("h2");
title.html("Car Racing Game");
title.position(130,10);



this.button.mousePressed(()=>{

    this.input.hide();
   this.button.hide();

    // plases the name i.e the player1,2,3,4...'s name in the input box.
    player.Name=this.input.value();

//makes the n
    playerCount=playerCount+1;

    player.index=playerCount;

    player.update();

    player.updateCount(playerCount);
 
    this.Greeting.html("Hello "+player.Name+" ! ");

})
}

HIDE(){

    this.input.hide();
    this.button.hide();
    this.Greeting.hide();

}

}