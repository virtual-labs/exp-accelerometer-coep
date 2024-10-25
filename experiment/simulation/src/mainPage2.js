methodeflag=0;
var cntSubmitConfigPg2=0;
tableReading=0;
var cntCalculateMainPage2=0;
var cntCalMain2ArrayJson=[];
var cntCalMain2MasterJson={};

function mainPage2(){
	
	startTimer();
	if(methodeflag==1){
		$("#tableDesign").html('');
    	$("#sub-main-div1").html('');
    	methodeflag=0;
	}   
    $("#main-div-conf").html('');	
    $("#canvas-div").html('');    
    $("#centerText1").html('DIAGRAM ');
    $("#centerText2").html('CONFIGURATION');
      if(Type2star_Flag==0){
			 var htm = '<img src="images/piezoelectricA.png" class="img-fluid" >'
      		 $("#canvas-div").html(htm);
		}else{
			var htm = '<img src="images/type2Mimic.png" class="img-fluid" >'
      		$("#canvas-div").html(htm);
		}
     
      
      var modelHtm =  ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
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
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ '</div>';
      
      
      var selection  ='<div class="row"><div class="col-sm-6" id="materialType">'
                  +'<label class="labelstyle">Select Mass (kg): </label>'   
                  +'</div>'
                  +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="mass1"  style="height:auto;margin-bottom: 5px;">'
	   +'<option value="0" id="selectTitle1">--- Select mass --- </option>'
	   +'<option value="0.04">0.04</option>'
	   +'<option value="0.05">0.05</option>'
	   +'<option value="0.06">0.06</option>'
	   +'<option value="0.07">0.07</option>'
	   +'<option value="0.08">0.08</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>' 
       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Mass Displacement (cm): </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="massDisplacement1" " style="height:auto;margin-bottom: 5px;">'
	   +'<option value="0" id="selectTitle2 ">--- Select Mass Displacement --- </option>'
	   +'<option value="0.5">0.5</option>'
	   +'<option value="1">1</option>'
	   +'<option value="1.5">1.5</option>'
	   +'<option value="2">2</option>'
	   +'<option value="2.5">2.5</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'  
	   
	   +'<div class="row">' 
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Spring Constant (N/m): </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="sconst1" style="height:auto;margin-bottom: 5px;">'
	   +'<option value="0" id="selectTitle3">--- Select Spring Constant --- </option>'
	   +'<option value="1000">1 &times; 10&sup3;</option>'
	   +'<option value="1500">1.5 &times; 10&sup3;</option>'   
	   +'<option value="2000">2 &times; 10&sup3;</option>'
	   +'<option value="2500">2.5 &times; 10&sup3;</option>'
	   +'<option value="3000">3 &times; 10&sup3;</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>' 
       
       +'<div class="row">'	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Force (N): </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="forceVal1"  style="height:auto;margin-bottom: 5px;">'
	   +'<option value="0" id="selectTitle4">--- Select Force --- </option>'
	   +'<option value="1">1</option>'
	   +'<option value="1.5">1.5</option>'   
	   +'<option value="2">2</option>'
	   +'<option value="2.5">2.5</option>'
	   +'<option value="3">3</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>' 
	   // +'<br>'

	  +'<div class="row" id="selectConf" >'
	  +'<div class="col-sm-12">'
	  +'<button type="button" class="btn btn-danger btnStyle" id="submitconfigPg2" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	  +'</div>'
	  +'</div>'
	    
	//Frequency    
	  +'<div class="row" id="freqAnswer"  hidden>'
	  +'<div class="col-sm-6">'
	  +'<label class="labelstyle">Calculate Natural Frequency (rad/s): </label>'
	  +'</div>'
      +'<div class="col-sm-3">'
	  +'<input type="number" id="calFreqInput" style= 10px;width:100%;"  class=" form-control" />'
	  +'</div>'
	  +'<div class="col-sm-3">'
	  +'<button type="button" class="btn btn-danger btnStyle" id="checkAsnFrequency" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	  +'</div>'
	  +'</div>'
	    //  +'<br>'
	           
//Convert frequency	
	  +'<div class="row" id="convertFreq" hidden>'
	  +'<div class="col-sm-6">'
	  +'<label class="labelstyle">Convert Frequency (Hz): </label>'
	  +'</div>'
      +'<div class="col-sm-3">'
	  +'<input type="number" id="ConvrtFreqInput" style= 10px;width:100%;"  class=" form-control" />'
	  +'</div>'
	  +'<div class="col-sm-3">'
	  +'<button type="button"  class="btn btn-danger btnStyle" id="checkConvertFreq" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	  +'</div>'
	  +'</div>'
	    // +'<br>'	          
	          
	          
//acceleration calculation	  
 
+'<div class="row" id="AccelerationAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Accelaration (m/s<sup>2</sup>): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="number" id="acelerateInput" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  class="btn btn-danger btnStyle" id="checkAnsAcceleration" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    
      + modelHtm
	          
//	     + ' <!-- Modal -->'
//				+ '<div class="modal fade" id="selectCheck" role="dialog">'
//				+ ' <div class="modal-dialog modal-md">'
//				+ '    <div class="modal-content">'
//				+ '     <div class="modal-header">'
//				
//				+ '       <h4 class="modal-title">Message box</h4>'
//				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
//				+ '     </div>'
//				+ '     <div class="modal-body">'
//				+ '       <p id="modelMsg"></p>'
//				+ '     </div>'
//				+ '     <div class="modal-footer">'
//				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
//				+ '     </div>'
//				+ '   </div>'
//				+ ' </div>'
//				+ '</div>'
//				+'</div>'
//				+ '</div>'
//				+ ' </div>'  
		$("#main-div-conf").html(selection);	

 startImg123='<img src="images/startBtn.png" alt=" " width="25" height="25">';
     
     $("#submitconfigPg2").click(function() {
	massSelect = $("#mass1").val();
	massDSelect = $("#massDisplacement1").val();
	sconstSelect2 = $("#sconst1").val();
	forceSelect=$('#forceVal1').val();
	cntSubmitConfigPg2++;	
	   if(massSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Mass </b>");

	}else if(massDSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Mass Displacement </b>");

	}else if(sconstSelect2==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Spring Constant </b>");

	}else if(forceSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Force </b>");
	}else{	 

		$("#mass1").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
		$("#massDisplacement1").children(":selected").css("background-color","#f7dddd").prop("disabled", true);	
		$("#sconst1").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
		$("#forceVal1").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
		$("#selectTitle1").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
		$("#selectTitle2").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
		$("#selectTitle3").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
		$("#selectTitle4").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
						
		
		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully. <br> Now Click On Start "+startImg123+"</b>");
		$("#mass1").prop('disabled',true);
		$("#massDisplacement1").prop('disabled',true);
		$("#sconst1").prop('disabled',true);
		$("#forceVal1").prop('disabled',true);
//		$("#submitconfigPg2").prop('disabled',true);
		var mainPg2_T1=document.getElementById('hour').innerText = returnData(hour);
		var mainPg2_T2=document.getElementById('minute').innerText = returnData(minute);
		var mainPg2_T3=document.getElementById('second').innerText = returnData(second);
//		console.log("MainPage Type2 : "+mainPg2_T1+":"+mainPg2_T2+":"+mainPg2_T3);
		type2Config= mainPg2_T1+":"+mainPg2_T2+":"+mainPg2_T3;
//		addToTimerMasterJson();
		id1=0;id2=0;id3=0;

		reset();
		mimic2(massSelect,massDSelect,sconstSelect2,forceSelect);
	
	}	

	});
	
	


//cal Frequency

 fqFormula= '<img src="images/naturalFq.png" alt=" " width="150" height="50">'

    var id1=0;
     $("#checkAsnFrequency").click(function() {
		
				$("body").css("padding","0px 0px 0px 0px");
			   var fq = parseFloat($("#calFreqInput").val());
			   	
			   if (id1 <= 2) {
				
				if (fq == clculatedFrequency) {
					checkAns = 0;
					$("#convertFreq").prop('hidden',false);
					$("#checkAsnFrequency").prop('disabled',true);
//					addToMasterJSON2();
					
//					console.log("id1="+id1);
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
				} else if (fq != clculatedFrequency) {
					
			
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");

				}
	
	
			} else if (id1 == 3) {
				
				$("#modelMsg").html("<b class='boldTextBlue'>Formula :  f = &Sqrt;(k/m) </b> ");

				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (fq == clculatedFrequency) {
					checkAns = 0;
					
				$("#convertFreq").prop('hidden',false);
				$("#checkAsnFrequency").prop('disabled',true);
//				addToMasterJSON2();
//console.log("id1="+id1);
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
					
				} else {
					checkAns = 0;
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is " +clculatedFrequency+'</b>');
					
                     
	
				}
			}
			id1++;
			cntCalculateMainPage2++;
	});	

//conver Frequency in Hz
 fqConvrtFormula= '<img src="images/convertFreq.png" alt=" " width="170" height="60">'
	id2=0;
     $("#checkConvertFreq").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var freqConversion = parseFloat($("#ConvrtFreqInput").val());
	
		   if (id2 <= 2) {
				
				if (freqConversion == convertFq) {
					checkAns = 0;
					
					$("#AccelerationAnswer").prop('hidden',false);
					$("#checkConvertFreq").prop('disabled',true);
//					addToMasterJSON2();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
				} else if (freqConversion != convertFq) {
					
			
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");

				}
	
	
			} else if (id2 == 3) {
				
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : "+fqConvrtFormula+" </b> ");

				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (freqConversion == convertFq) {
					checkAns = 0;
				$("#AccelerationAnswer").prop('hidden',false);
				$("#checkConvertFreq").prop('disabled',true);

//				addToMasterJSON2();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
					
				} else {
					checkAns = 0;
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is " +convertFq+'</b>');
					
                     
	
				}
			}
			id2++;
			cntCalculateMainPage2++;
});	


//Calculate Acceleration
//var Aformula='<img src="images/AccelarationFormula.png" alt=" " width="150" height="75">'
       
	id3=0;
     $("#checkAnsAcceleration").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var AccelerateVal = parseFloat($("#acelerateInput").val());
	
		 if (id3 <= 2) {
				
				if (AccelerateVal == acceleration2) {
					checkAns = 0;
					if (tableReading2 ==4) {
						$("#checkAnsAcceleration").prop('disabled',true);
					}
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer. Click on stop button.</b>");
				addToMasterJSON2();
				} else if (AccelerateVal != acceleration2) {
					
			
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");

				}
	
	
			} else if (id3 == 3) {
				
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : F = m &times; a </b> ");

				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (AccelerateVal == acceleration2) {
					checkAns = 0;
					if (tableReading2 ==4) {
					$("#checkAnsAcceleration").prop('disabled',true);
					}
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer. Click on stop button.</b>");
				addToMasterJSON2();
					
				} else {
					checkAns = 0;
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is " +acceleration2+'</b>');
					 
				}
			}
			id3++;
			cntCalculateMainPage2++;
	});

	             
}

function addToCntCalMain22MasterJson(){
 			var cntCalMain22tempJson={};
				cntCalMain22tempJson.cntSubmitConfigPg2= cntSubmitConfigPg2;

			let lastEntry2 = cntCalMain1ArrayJson[cntCalMain1ArrayJson.length - 1] || {cntCalculateMainPage2: 0 };
			cntCalMain22tempJson.cntCalculateMainPage2 = lastEntry2.cntCalculateMainPage2 + cntCalculateMainPage2; // Add the new count			  
//            cntCalMain22tempJson.cntSubmitConfigPg2 = lastEntry2.cntSubmitConfigPg2 + cntSubmitConfigPg2; // Add the new count
   			cntCalMain2ArrayJson.push(cntCalMain22tempJson);
			counterMasterJson.cntCalMain2MasterJson = cntCalMain2ArrayJson;
		
						

}
				
//				function addtocountermasterjson(){
//				 tempjson1={};
//										tempjson1.cntcalculatemainpage = cntcalculatemainpage;
//										tempjson1.cntcalculatemainpage2 = cntcalculatemainpage2;
//										counterarrayjson.push(tempjson1);
//										countermasterjson.demo = counterarrayjson;
//										console.log(countermasterjson);
//
//				}
				
//function addToCounterMasterJson() {
//    // Create a new object for the current counts
//    let tempJson22 = {};
//
//    // Initialize the counters with existing values or 0 if there are no previous entries
//    let lastEntry = counterArrayJson[counterArrayJson.length - 1] || { cntSubmitConfigPg2: 0, cntCalculateMainPage2: 0 };
//
//    // Accumulate the counters
//    tempJson22.cntCalculateMainPage = lastEntry.cntSubmitConfigPg2 + cntSubmitConfigPg2; // Add the new count
//    tempJson22.cntCalculateMainPage2 = lastEntry.cntCalculateMainPage2 + cntCalculateMainPage2; // Add the new count
//
//    // Push the accumulated values into the counter array
//    counterArrayJson.push(tempJson22);
//
//    // Update the counter master JSON
//    counterMasterJson.counterMasterJson= counterArrayJson;
//
//    // Log the updated master JSON
//    console.log(counterMasterJson);
//}

				
				