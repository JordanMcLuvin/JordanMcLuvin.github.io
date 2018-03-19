if(jQuery){
	var checkanswers=function(){
		var answerstring="";
		var answers=$(":checked");
		answers.each(function(i){
			answerstring=answerstring+answers[i].value;
		});
		$(":checked").each(function(i){
			var answerstring=answerstring+answers[i].value;
		});
		checkifcorrect(answerstring);
	};
	var checkifcorrect=function(thestring){
		if(parseInt(thestring,16)===811124566973){
			$("body").addClass("correct");
			$("h1").text("you win!");
			$("canvas").show();
		}
	};
	
	$("#question1").show();
};
if(impress){
	$("#question2").show();
};
if(atom){
	$("#question3").show();
};
if(createjs){
	$("#question4").show();
};
if(me){
	$("#question5").show();
};
if(require){
	$("#question6").show();
};
if($().playground){
	$("#question7").show();
};
if(jaws){
	$("#question8").show();
};
if(enchant){
	$("#question9").show();
};
if(Crafty){
	$("#question10").show();
};