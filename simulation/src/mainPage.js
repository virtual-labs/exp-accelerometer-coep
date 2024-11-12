methodeflag=0;
tableReading=0;
var type1Config="";
var clicksCount=0;
var cntSubmitConfig=0;
var cntCalMain1ArrayJson=[];
var cntCalMain1MasterJson={};

 var cntCalculateMainPage=0;
    var startcheck_Flag=0;
	
	var startEnableFlag=0;
function mainPage(){
startTimer();
	if(methodeflag==1){
		$("#graph-div").html('');
		$("#tableDesign").html('');
    	$("#sub-main-div1").html('');
    	methodeflag=0;
	}  
	$('#graph-div').html('');
	$("#main-div-conf").html('');	
    $("#canvas-div").html('');
    $("#centerText1").html('DIAGRAM ');
    $("#centerText2").html('CONFIGURATION');
    
    if(Type1star_Flag==0){
			 var htm = '<img src="images/aTypes.png" class="img-fluid" >'
     		 $("#canvas-div").html(htm);
		}else{
			var htm = '<img src="images/A_Type1.png" class="img-fluid" >'
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
				+'</div>'
				+ '</div>'
				+ ' </div>';
      
      
      var selection  ='<div class="row"><div class="col-sm-6" id="materialType">'
                  +'<label class="labelstyle">Select Mass(kg): </label>'   
                  +'</div>'
                  +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="mass"  style="height:auto;margin-bottom: 5px;">'
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
	   +'<label class="labelstyle"> Select Mass Displacement(cm): </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="massDisplacement" " style="height:auto;margin-bottom: 5px;">'
	   +'<option value="0" id="selectTitle2">--- Select Mass Displacement --- </option>'
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
	   +'<label class="labelstyle"> Spring Constant(N/m): </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="sconst"  style="height:auto;margin-bottom: 5px;">'
	   +'<option value="0" id="selectTitle3">--- Select Spring Constant --- </option>'
	   +'<option value="1000">1 &times; 10&sup3;</option>'
	   +'<option value="1500">1.5 &times; 10&sup3;</option>'   
	   +'<option value="2000">2 &times; 10&sup3;</option>'
	   +'<option value="2500">2.5 &times; 10&sup3;</option>'
	   +'<option value="3000">3 &times; 10&sup3;</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>' 
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px;margin-bottom: 5px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck"  ><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'
	   // +'<br>'
	    
	//Frequency    
+'<div class="row" id="freqAnswer"  hidden  >'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Natural Frequency (rad/s): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="number" id="calFreqInput" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"    class="btn btn-danger btnStyle" id="checkAsnFrequency" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
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
	+'<button type="button"    class="btn btn-danger btnStyle" id="checkConvertFreq" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
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
	+'<button type="button"    class="btn btn-danger btnStyle" id="checkAnsAcceleration" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
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

	$("#submitconfig").click(function() {
		cntSubmitConfig++;
	massSelect = $("#mass").val();
	massDSelect = $("#massDisplacement").val();
	sconstSelect = $("#sconst").val();

	   if(massSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Mass </b>");

	}else if(massDSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Mass Displacement </b>");

	}else if(sconstSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Spring Constant </b>");

	}else{
			startcheck_Flag=1;
		//$("#mass").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
		//$("#massDisplacement").children(":selected").css("background-color","#f7dddd").prop("disabled", true);	
		//$("#sconst").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
//		$("#selectTitle1").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
//		$("#selectTitle2").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
//		$("#selectTitle3").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
				
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully. <br> Now Click On Start "+startImg123+"</b>");	
		$("#checkConfg").prop('hidden',true);
		$("#mass").prop('disabled',true);
		$("#massDisplacement").prop('disabled',true);
		$("#sconst").prop('disabled',true);
		
//		$("#submitconfig").prop('disabled',true);
//		$("#freqAnswer").prop('hidden',false);
		var mainPg_T1=document.getElementById('hour').innerText = returnData(hour);
  		var mainPg_T2=document.getElementById('minute').innerText = returnData(minute);
  		var mainPg_T3=document.getElementById('second').innerText = returnData(second);
 // 		console.log("MainPage Type1 : "+mainPg_T1+":"+mainPg_T2+":"+mainPg_T3);
  		
  		type1Config= mainPg_T1+":"+mainPg_T2+":"+mainPg_T3;
//  	 	addToTimerMasterJson();
				id1=0;id2=0;id3=0;
		reset();
       	mimic(massSelect,massDSelect,sconstSelect);
		
	}	

	});
	
	


//cal Frequency

 fqFormula= '<img src="images/naturalFq.png" alt=" " width="170" height="60">'

    var id1=0;
     $("#checkAsnFrequency").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var fq = parseFloat($("#calFreqInput").val());
			   	
			   if (id1 <= 3) {
				
				if (fq == clculatedFrequency) {
					
//					console.log("id1 ="+id1);
					checkAns = 0;
					$("#convertFreq").prop('hidden',false);
					$("#checkAsnFrequency").prop('disabled',true);
					//addToMasterJSON();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
				} else if (fq != clculatedFrequency) {
					
					
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");

				}
	
	
			} else if (id1 == 4) {
				
				$("#modelMsg").html("<b class='boldTextBlue'>Formula :  f = &Sqrt;(k/m) </b> ");

				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (fq == clculatedFrequency) {
					
					checkAns = 0;
				$("#convertFreq").prop('hidden',false);
				$("#checkAsnFrequency").prop('disabled',true);
//				console.log(" id1="+id1);
				//addToMasterJSON();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
					
				} else {
					
					checkAns = 0;
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is " +clculatedFrequency+'</b>');
					
                     
	
				}
			}
			id1++;
			cntCalculateMainPage++;
			
	});	
	

//conver Frequency in Hz
 fqConvrtFormula= '<img src="images/convertFreq.png" alt=" " width="170" height="55">'
	id2=1;
     $("#checkConvertFreq").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var freqConversion = parseFloat($("#ConvrtFreqInput").val());
	
		   if (id2 <= 3) {
				
				if (freqConversion == convertFq) {
					checkAns = 0;
					$("#AccelerationAnswer").prop('hidden',false);
					$("#checkConvertFreq").prop('disabled',true);

					//addToMasterJSON();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
				} else if (freqConversion != convertFq) {
					
			
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");

				}
	
	
			} else if (id2 == 4) {
				
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : "+fqConvrtFormula+" </b> ");

				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (freqConversion == convertFq) {
					checkAns = 0;
				$("#AccelerationAnswer").prop('hidden',false);
				$("#checkConvertFreq").prop('disabled',true);

				//addToMasterJSON();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
					
				} else {
					checkAns = 0;
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is " +convertFq+'</b>');
					
                     
	
				}
			}
			id2++;
			cntCalculateMainPage++;
});	


//Calculate Acceleration
var Aformula='<img src="images/AccelarationFormula.png" alt=" " width="180" height="55">'
       
	id3=1;
     $("#checkAnsAcceleration").click(function() {
		
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var AccelerateVal = parseFloat($("#acelerateInput").val());
	
		 if (id3 <= 3) {
				
				if (AccelerateVal == acceleration) {
					startEnableFlag=1;
					checkAns = 0;
					
					if (tableReading ==4) {
						$("#checkAnsAcceleration").prop('disabled',true);
					}
		
					$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer. Click on stop button.</b>");
				addToMasterJSON();
				} else if (AccelerateVal != acceleration) {
					
			
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");

				}
	
	
			} else if (id3 == 4) {
				
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : "+Aformula+"</b> ");

				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (AccelerateVal == acceleration) {
					startEnableFlag=1;
					checkAns = 0;
					
					if (tableReading ==4) {
						$("#checkAnsAcceleration").prop('disabled',true);
					}
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer. Click on stop button.</b>");
				addToMasterJSON();
					
				} else {
					checkAns = 0;
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is " +acceleration+'</b>');
					
				}
			}
			id3++;
			cntCalculateMainPage++;
	});
	addToCntCalMain1MasterJson();            
}

//var cntCalMain1ArrayJson=[];
//var cntCalMain1MasterJson={};
function addToCntCalMain1MasterJson(){
 			var cntCalMain1tempJson={};
				cntCalMain1tempJson.cntSubmitConfig= cntSubmitConfig;

			let lastEntry1 = cntCalMain1ArrayJson[cntCalMain1ArrayJson.length - 1] || {cntCalculateMainPage: 0 };
			cntCalMain1tempJson.cntCalculateMainPage = lastEntry1.cntCalculateMainPage + cntCalculateMainPage; // Add the new count			  
//            cntCalMain1tempJson.cntSubmitConfig = lastEntry1.cntSubmitConfig + cntSubmitConfig; // Add the new count
   			cntCalMain1ArrayJson.push(cntCalMain1tempJson);
			counterMasterJson.cntCalMain1MasterJson = cntCalMain1ArrayJson;
		
						

}
