//strict mode
'use strict';

/*TAMAGOTCHI BIG PICTURE: Everything I do should make you think its healthy but (1) it should have hard tradeoffs, (2) it should have small, random entropy (3) it should develop problems after the user has invested X much attention in it. (4) after the user grows attached to its cuteness, it should age, have problems and diseases, grow to hate the user and die. The user will be offered the choice to pickle it, stuff it or bronze it.   My Tamagotchi should make little children cry :=( */
function makeTamagotchi(name){
/*
Measure effects on a 1-100 scale...report outcomes as quintiles.
If its vital stats fall out of the good range, there will be problems... up to and including GAME OVER.
Different combinations of stats will produce different problems.
Different care will fix some of the problems, but indirectly create others.
*/
	this.name = name;
	this.hunger = 60;
/*Variables xyzLevel map the numeric variable value to a relevant string for the user*/

    var fatigueRounded = 20 * Math.ceil(this.fatigue/20);
	this.fatigue = 50;             // DEPENDENT exhausted, drowsy, content, alert, hyperactive
    this.fatiueLevel = {
    0: "your tamagotchi is so bored he plays with matches and burns himself alive inside your car while you run into CrapMart.  GAME OVER",
    20: "your over rested tamagotchi is drowsy ",
    40: "your idle tamagotchi gains weight ", //increase  weight, which drives BMI and diseases
    60: "your tamagotchi is well rested ",
    80: "your sleepy tamagotchi nods off ",
    100: ("your tamagotchi begs you 'no more late nights'", this.torment = this.torment + 10),
    120: "your exhausted tamagotchi collapses and begs you 'no more slave labor... set me free,' before dying.  GAME OVER "
    }
	this.torment = 0;              // DEPENDENT: increases with the other problems; other problems increase with i too.t
    this.tormentLevel = {
    0: "Your tamagotchi attains nirvana (absence of suffering).  GAME OVER you cheater.",
    20: "Your tamagotchi loves you like a happy kitten", 
    40: "your tamagotchi follows you everywhere like a puppy ",
    60: "your tamagotchi misses you when you're gone  ",
    80: "your tamagotchi hides from you",
    100: "your tamagotchi cries itself to sleep each night",
    120: "your tamagotchi plots your murder. GAME OVER "
    }//@todo more levels... a finer progression into torment.

    this.HUNGERLEVEL = {
        0: "you regret your overindulgence as you scrape exploded tamagotchi from every surface.  GAME OVER",
        20: "your engorged tamagotchi passes out after repeating 'no more'.",
        40: "your full tamagotchi burps",
        60: "your properly fed tamagotchi is content",
        80: "your hungry tamagotchi rubs its head against you, and stares at the fridge",
        100: "your ravenous tamagotchi growls and drools",
        120: "you feel crushed as your tamagotchi stuffs you into its mouth.  GAME OVER"
    }
    var weightRounded = 20 * Math.ceil(this.hunger/20);
    this.weight = 4;               // DEPENDENT on hunger, DOB, height:
    this.WEIGHTLEVEL = {
        0:  "your severely malnourished tamagotchi is taken away by you county's Tamagotchi Protective Services and placed in a better home. GAME OVER.",
        20: "your emaciated tamagotchi is mistaken for a heroin addict",
        40: "your petite tamgotchi is offered a modelling job ",
        60: "your fit tamagotchi is content",
        80: "your heavy tamagotchi begs you to take it to the playground",
        100: "your obese tamagotchi develops diabetes", //@to do: require insulin shots etc for the sever conditions
        120: "your Tamagotchi is now round enough to roll in any direction and dies of sleep apnea.  GAME OVER "
    }
    var happinessRounded = 20 * Math.ceil(this.happiness/20);
	this.happiness = 50;           // DEPENDENT depressed, bothered, content, happy, pollyana= obnoxious
    this.happiness = {
    0: "your despondent tamagotchi shoots you and then itself. GAME OVER",
    20: "your depressed tamagotchi refuses to get out of bed.",
    40: "your dejected tamagotchi experiments with drugs and prostitutes",
    60: "your tamagotchi is OK.",
    80: "your tamagotchi whistles happily while he works",
    100: "your tamagotchi smiles and purrs ",
    120: "your tamagotchi is high on life.  GAME OVER you cheater"
    }
	this.secretNeed = ["attention", "cheese"]// select random item from array; user must figure out before there is troubl
	this.secretProblem = ["psychopath", "kleptomaniac", "it inputs and outputs STDs from other Tamagotchis with poorly secured interfaces" ]// select random item from array; user must figure out before there is trouble
    var weightRounded = 20 * Math.ceil(this.weight/20);
   /* */
	var lastInteractionDate = null;      // date of users last interaction
	this.countOfInteractions;
	//both extremes are bad for all variables.  if the user exceeds 100, the Tamagotchi will kill him
        //console.log("my name is: " + this.name + " and I am an evil pet");
        console.log("Congratulations.  You are the proud new owner of a newly hatched Tamagotchi named " + this.name);

	function entropy(){
		Tamagotchi.hunger = Tamagotchi.hunger - Math.floor(1 + Math.random()*3);  //Units: none
		Tamagotchi.happiness = Tamagotchi.happiness - Math.floor(1 + Math.random()*3); //Units: none
		if (Tamagotchi.happiness <21){
		    Tamagotchi.torment++;
		}
	}//closes function entropy

	function grow(){
		Tamagotchi.age++;  //Units: days since birth
		Tamagotchi.height = Tamagotchi.height + Math.floor(1 + Math.random()*2); //Units: M
		Tamagotchi.weight = Tamagotchi.weight - Math.floor(1 + Math.random()*2); //Units: KG
		Tamagotchi.obesity = Tamagotchi.weight / Tamagotchi.height;  //BMI: Units KG/M
	}//closes function grow

	this.cheat = function(){
		Tamagotchi.happiness = Tamagotchi.happiness + Math.floor(10 + Math.random()*5); //Units: none
		Tamagotchi.torment = Tamagotchi.torment - Math.floor(5 - Math.random()*5); //Units: none
		Tamagotchi.countOfInteractions++;
	}

	function mainApp(){
	   // if (Tamagotchi.countOfInteractions > 10){
	}

	this.feed = function(){
	var messageFeed = "Im Hungry. I like steak, beer, pizza and cake.  Whats for dinner?";
	var methodFeed = "slop";
	methodFeed = prompt(messageFeed, methodFeed );
	console.log(methodFeed);
	var resultMessage = "";
		switch (methodFeed.toLowerCase()){
		    case (methodFeed = "steak"):
		        Tamagotchi.hunger = Tamagotchi.hunger - (3 + 3*Math.random());
		        Tamagotchi.weight = Tamagotchi.weight + (3 + 3*Math.random());
		        resultMessage=("burp! thanks. I love " + methodFeed + ".");
		        break;
		    case (methodFeed = "beer"):
		        Tamagotchi.hunger = Tamagotchi.hunger - (1 + Math.random());
		        Tamagotchi.weight = Tamagotchi.weight + 2 + 2*Math.random();
		        resultMessage=("burp! thanks. I love " + methodFeed + ".");
		        break;
		    case (methodFeed = "pizza"):
		        Tamagotchi.hunger = Tamagotchi.hunger - (2 + Math.random());
		        Tamagotchi.weight = Tamagotchi.weight + 2 + 2*Math.random();
		        resultMessage=("burp! thanks. I love " + methodFeed + ".");
		        break;
		    case (methodFeed = "cake"):
		        Tamagotchi.hunger = Tamagotchi.hunger - (1 + Math.random());
		        Tamagotchi.weight = Tamagotchi.weight + 2 + 2*Math.random();
		        resultMessage=("burp! thanks. I love " + methodFeed + ".");
		        break;
		    default:
		        Tamagotchi.hunger = Tamagotchi.hunger + Math.random();
		        Tamagotchi.fatigue = Tamagotchi.fatigue + Math.random();
		        Tamagotchi.happiness = Tamagotchi.happiness - Math.random();
		        resultMessage=("NOOOO!! Not pig feet and brussel sprouts!" + "RE-E-ETTT-TCHHHHHH!  BARRFF! Splat! (etc)");
		        break;
		  }
		document.getElementById("showResults").innerHTML=resultMessage;
		document.getElementById("hungerDisplay").innerHTML=Tamagotchi.hunger;
		document.getElementById("weightDisplay").innerHTML=Tamagotchi.weight;
		//this works			
		//document.getElementById("showResults").innerHTML = "Paragraph changed!"
		Tamagotchi.countOfInteractions++;
	}//closes function feed

	function die(){
		switch (methodPreserve.toLowerCase()){
		    case (methodPreserve = "pickle"):
		        resultMessage=("You display your deceased Tamagotchi in a jar next to the pickled remains of all the other Tamgotchis you had before him.  Your house smells like a tannery, but you don't care because you're leaving now to buy another Tamagotchi egg.");
		        break;
		    case (methodPreserve = "bronze"):
		        resultMessage=("You display your deceased Tamagotchi next to all your others.  Visitors compliment on your menagerie, then find any excuse to flee your house. ");
		        break;
		    case (methodPreserve = "stuff"):
		        resultMessage=("You want to display your deceased Tamagotchi in your den alongside the other Tamgotchis you had before him but there is no more space on the shelves and hearth, so you mount his head on the wall");
		        break;
		    case (methodPreserve = "impale"):
		        resultMessage=("You mount the severed head of your tamagotchi on a stake in your front yard as a warning to all your other tamagotchi to work harder.  The city inspector mails you a citation for zoning infraction regarding permissible height of impaled heads in the front yard per city code 123.456-a.78... cue to spooky vaudeville music here...");
		        break;
		    default:
		        resultMessage=("You use your advanced skills in necromancy to raise your tamagotchi's corpse.  Your undead Tamagotchi lurches about the neighborhood and eventually inspires a Japanese horror movie series"); 
		        break;
		}
	}//closes function

	this.playWith = function(){
		var messagePlay = ("Please play with me.  I like basketball, swimming, skating, chess and ancient heavily pixelated videogames");
		var methodPlay = "Tickle"; //@user input
		methodPlay = prompt(messagePlay, methodPlay );
		console.log(messagePlay);
		console.log(Tamagotchi.happiness);
		var resultMessage = "";
		switch (methodPlay.toLowerCase()){
		    case (methodPlay = "basketball"):
		        Tamagotchi.fatigue = Tamagotchi.fatigue + 1 + 4*Math.random();
		        Tamagotchi.happiness = Tamagotchi.happiness + 2 + 3*Math.random();
		        resultMessage=("Yay! I love " + methodPlay); console.log(resultMessage);
		        break;
		    case (methodPlay = "swimming"):
		        Tamagotchi.fatigue = Tamagotchi.fatigue + 1 + 3*Math.random();
		        Tamagotchi.happiness = Tamagotchi.happiness + 1 + 3*Math.random();
		        resultMessage=("Yay! I love " + methodPlay); console.log(resultMessage);
		        break;
		    case (methodPlay = "skating"):
		        Tamagotchi.fatigue = Tamagotchi.fatigue + 1 + 3*Math.random();
		        Tamagotchi.happiness = Tamagotchi.happiness + 1 + 3*Math.random();
		        resultMessage=("Yay! I love " + methodPlay); console.log(resultMessage);
		        break;
		    case (methodPlay = "chess"):
		        Tamagotchi.fatigue = Tamagotchi.fatigue + 2;
		        Tamagotchi.happiness = Tamagotchi.happiness + 2;
		        resultMessage=("Yay! I love " + methodPlay); console.log(resultMessage);
		        break;
		    case (methodPlay = "ancient heavily pixelated abandonware games"):
		        Tamagotchi.fatigue = Tamagotchi.fatigue + 2;
		        Tamagotchi.happiness = Tamagotchi.happiness + 2;
		        resultMessage=("Yay! I love " + methodPlay); console.log(resultMessage);
		        break;
		    default:
		        Tamagotchi.fatigue = Tamagotchi.fatigue + Math.random();
		        Tamagotchi.happiness = Tamagotchi.happiness - Math.random();
		        resultMessage=("NOOOO!! Dont tickle me! mmph giggle hoo hoo!"); console.log(resultMessage);
		        break;
		}
		document.getElementById("showResults").innerHTML=resultMessage;
		document.getElementById("fatigueDisplay").innerHTML=Tamagotchi.fatigue;
		document.getElementById("happinessDisplay").innerHTML=Tamagotchi.happiness;
		Tamagotchi.countOfInteractions++;
	}//closes function playWith

	function passageOfTime(){
		Tamagotchi.age++;  //Units: days since birth
		Tamagotchi.hunger = Tamagotchi.hunger + Math.floor(1 + Math.random()*2); //Units: M
		Tamagotchi.happiness = Tamagotchi.happiness - Math.floor(1 + Math.random()*2); //Units: KG
		//Tamagotchi.neglect = Tamagotchi.neglect + Math.random()*2;  //BMI: Units KG/M
	}//closes function passageOfTime


	/* @figure out what to do here:
	//Tamagotchi.lastInteractionDate = new Date()-1.5*86400000  //@
	  function daysPassed(Tamagotchi.lastInteractionDate){
		return (new Date() - Tamagotchi.lastInteractionDate)/86400000;
	}//closes function daysPassed()
	*/

	/*
	function assignMoreWork(task){
	//do stuff
	}
	*/
	function purr(){
		    console.log("I love you... purr ... purr...purr...purr...");
		    console.log("and i will make this function actually do stuff too...some day");
		}

	/*
	function rubTummy(){
		console.log("rub my damn tummy");

		var readline = require('readline');
		var readLineInterface = readline.createInterface({
		    input: process.stdin,
		    output: process.stdout
		    });
	   var count = 0;
	   var callback = function(ans) {
		count++;
		console.log('How dare you tell me that!?:');
		if (count == 1){ 
		    readLineInterface.close();
		    } 
		else { 
		    readLineInterface.question('Give me a random number: ', callback);  
		    }
		}
		readLineInterface.question('Would you like to rub my furry tummy?', callback);
		    Tamagotchi.countOfInteractions++;
	//    var a = AskTheUser(answer);
	//    var a = readLineInterface.question('Tell me your secret:');  
	}
	*/

	function displayNewStats(){
		console.log(this.happinessLevel);
		console.log(this.hungerLevel);
		console.log(this.fatigueLevel);
		console.log(this.weightLevel);
		console.log(this.tormentLevel);
	}
}//closes constructor makeTamagotchi

var Tamagotchi = new makeTamagotchi(prompt("Please enter your name", "Gizmo the Mogwai"));
//resultMessage=("my name is: " + Tamagotchi.name + " and I am an evil pet"); 
//resultMessage=("my name is: " + this.name + " and I am an evil pet"); 
//resultMessage=("my name is: " + name + " and I am an evil pet"); 
console.log("this: " + this);


//entropy();
//grow();
//playWith();
//feed();
//Tamagotchi.fatgiue = 90;
//console.log("Tamagotchis torment " + Tamagotchi.torment);
//Tamagotchi.torment = 10;
//Tamagotchi.tormentLevel;
//cheat;
//rubTummy();



//console.log("lastInteractionDate" + Tamagotchi.lastInteractionDate);

/*
for( var loopCounter = 0; loopCounter = daysPassed(); loopCounter++ ){
    passageOfTime(); console.log("loopCounter" + loopCounter);
}
lastInteractionDate = new Date();
console.log("lastInteractionDate" + lastInteractionDate)
*/



/* make the tamagotchi loveable first... then ramp up its torment.
    make events that drive off this.torment:
    - yourr dewy eyed tamagotchi clings to you
    - its first words are I love you
    - etc
all tamagotchi problems must plausibly be blamed on the user.  goad the user into mistreating the tamagotchi if he isnt already, then blame the user for the tamagotchis problems
*/

