		$("#selectMethod").prop('hidden',false);
		var counterArrayJson=[];
		var counterMasterJson ={};
		var totalQues=5;
		var correctAnswer=0;			
			var bKnowledgeTime="";
			var answerTotCount;
			var flag = false;
			var myRadio = null;
			data = {};
			dataQues = {};

			var questions = '';
			questions += ''
				+ '<div id = "questionDiv">'

			for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {
		
				for (var j = 0; j < QuestionsJSON.data["SEC"][0].QUES.length; j++) {

					questions += '<div class="col-md-12">'
						+ '<br><span class="queno">Question No : ' + (i + 1) + '</span>'
						+ '<br><div class="queTitle">'

						+ QuestionsJSON.data["SEC"][i].QUES[j].QC
						+ '</div>'

					for (var k = 0; k < QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++) {

						questions += '<div>'
							+ '<div class="ansTitle col-md-6">'

							+ "<input class='radioType'  name='radio-" + i + "' id='" + i + "' ANSID='" + QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID + "' type='radio'"
							+ "' value='"
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ "' >"
							+ '<p style="margin: -20px 0 8px 29px;font-size: 18px;">'
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ '</p>'

							+ '</div>'
							+ '</div>'
					}
					questions += '</div>'
				}
			}

			questions += '<div class="buttonDiv">'
				+ '<button  class="btn btn-danger" data-toggle="modal" data-target="#myModal" id="testSubmit">Submit Test</button>'
		+ '<button  class="btn btn-danger" id="nextLevelConfig" hidden>Next Level</button>'
				
				

				+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="myModal" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg"></p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+'</style>'
				+ '     </div>'
				
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+ '</div>'

				+ ' </div>'	
		

			$("#main-div-conf").html(questions);
		
			$('#testSubmit').on('click', function() {
						
				$("body").css("padding","0px 0px 0px 0px");

					var arr = [];
					
					for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

						var qid = $('input[name=radio-' + i + ']').attr(
							'id');

						var ansId = $('input[name=radio-' + i + ']:checked').attr(
							'ANSID');

						myRadio = $(
							'input[name=radio-' + i + ']:checked')
							.val();

						if (myRadio == null) {
							flag = flag && false;
//							alert('Please attempt all the questions');
							$("body").css("padding","0px");
							$("#modelMsg").html("<b class='boldTextRed'>Please attempt all the questions.</b>");
							break;
						}
						arr.push({
							"QID": qid,
							"ANS": myRadio,
							"ANSId": ansId
						});
					}

					var ansCount = 0;

					if (myRadio != null) {
						for (var i = 0; i < arr.length; i++) {
							if (arr[i].ANSId == "true") {
								ansCount++;
							}
						}
						dataQues.corrAns = ansCount;
						 data.corrAns = dataQues;
					//	 console.log(data);
						 
//						 console.log(`${corrAns}: ${dataQues[ansCount]}`);

						 answerTotCount=ansCount;
						 correctAnswer=ansCount;
			//			 console.log(correctAnswer+", correctAnsQues= "+answerTotCount); 
						 $("#modelMsg").html("<b class='boldTextGreen'>Test Submitted Successfully .<br> Number of Correct Answers  : " + ansCount+"</b>");
                         $('#nextLevelConfig').prop('hidden',false);
						 
						    $('#testSubmit').prop('hidden',true); 

		   			
					}
					
			$('#nextLevelConfig').on('click', function() {	
				var Bk_T1=document.getElementById('hour').innerText = returnData(hour);
				var Bk_T2=document.getElementById('minute').innerText = returnData(minute);
				var Bk_T3=document.getElementById('second').innerText = returnData(second);
				bKnowledgeTime= Bk_T1+":"+Bk_T2+":"+Bk_T3;
//				addToTimerMasterJson();
//				console.log("Basic Knowledge Time : "+bKnowledgeTime);
				var tempCountJson ={};
				tempCountJson.correctAnswer = correctAnswer; 
				tempCountJson.totalQues = totalQues; 
				counterMasterJson.questionary = tempCountJson;
				reset();
				if(ansCount != 0){
				$("#main-div-conf").html("");
	            $("#canvas-div").html("");
	            $("#methodType").prop('disabled',false);
				$("#centerText1").html('DIAGRAM ');
	      		$("#centerText2").html('CONFIGURATION');
	     		var htm = '<img src="images/aTypes.png" class="img-fluid" >'
	     		$("#canvas-div").html(htm);
				
	     		$("#methodType").change(function() {
					
				var typeSelect =parseFloat($("#methodType").val());
	//			console.log("typeSelect = "+typeSelect);
						if(typeSelect==1){
							$("#methodType").prop('disabled',true);
							mainPage();
//							mimic();
						}else{
							$("#methodType").prop('disabled',true);
							mainPage2();
							
						}
						$("#methodType").children(":selected").css("background-color","#f7dddd").prop("disabled", true);					

		});	
	} 
	
	});	
	
				
});
$('#graph').on('click', function() {	
	//	console.log("hi");
		FrequencyGraph();
		});	

	
	