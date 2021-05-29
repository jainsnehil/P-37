class Quiz {
  constructor(){
    //this.result
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
     // background("pink");
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
      if(gameState===1){
        question.hide();
      }
    }
  }

  play(){
   
     background("yellow")

     textSize(30)
     fill ("black")
     text("result of the quiz",400,50)

     Contestant.getPlayerInfo()

    
     if(allContestants!==undefined ){
      var display_answer=230
       fill("blue")
       textSize(20)
       text("Note: Contestants who have answered correct are highlighted in green color",130,230) 
       var correctAns="2"

       for(var plr in allContestants){
           if(correctAns===allContestants[plr].answer){

               fill("green")
               display_answer+=50 
               textSize(20)
               text(allContestants[plr].name +":"+ allContestants[plr].answer,200,display_answer)
             }else{
               fill ("red")

               display_answer+=50 
               textSize(20)
               text(allContestants[plr].name +":"+ allContestants[plr].answer,200,display_answer)
            
             }
       }
    }

  
    
  }

}
