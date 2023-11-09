
tableReading=0;
function mainPage(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText1").html('DIAGRAM ');
      $("#centerText2").html('CONFIGURATION');
      var htm = '<img src="images/aTypes.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
      
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
	   +'<option value="0">--- Select mass --- </option>'
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
	   +'<option value="0">--- Select Mass Displacement --- </option>'
	   +'<option value="0.5">0.5</option>'
	   +'<option value="1">1</option>'
	   +'<option value="1.5">1.5</option>'
	   +'<option value="2">2</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'  
	   +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Spring Constant(N/m): </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="sconst" " style="height:auto;margin-bottom: 5px;">'
	   +'<option value="0">--- Select Mass Displacement --- </option>'
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
	+'<input type="text" id="calFreqInput" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAsnFrequency" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    //  +'<br>'
	           
//Convert frequency	
+'<div class="row" id="convertFreq" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Convert Frequency (Hz): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="ConvrtFreqInput" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkConvertFreq" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    // +'<br>'	          
	          
	          
//acceleration calculation	  
 
+'<div class="row" id="AccelerationAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Maximum Accelaration (m/s<sup>2</sup>): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="acelerateInput" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAnsAcceleration" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
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
     
     $("#submitconfig").click(function() {
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
		$("#errorPanel").prop("hidden",true);

		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#checkConfg").prop('hidden',true);
		$("#mass").prop('disabled',true);
		$("#massDisplacement").prop('disabled',true);
		$("#sconst").prop('disabled',true);
		$("#submitconfig").prop('disabled',true);
		$("#freqAnswer").prop('hidden',false);
       mimic(massSelect,massDSelect,sconstSelect);
	
	}	

	});
	
	


//cal Frequency

 fqFormula= '<img src="images/naturalFq.png" alt=" " width="80%" height="80%">'

    var id1=1;
     $("#checkAsnFrequency").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var fq = $("#calFreqInput").val();
			   	
			   if (id1 <= 3) {
				
				if (fq == clculatedFrequency) {
					checkAns = 0;
					$("#convertFreq").prop('hidden',false);
					$("#checkAsnFrequency").prop('disabled',true);
					//addToMasterJSON();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
				} else if (fq != clculatedFrequency) {
					
			
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");

				}
	
	
			} else if (id1 == 4) {
				
				$("#modelMsg").html("<b class='boldTextBlue'>Formula :  f = &Sqrt;(k/m) </b> ");

				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (fq == clculatedFrequency) {
					checkAns = 0;
				$("#convertFreq").prop('hidden',false);
				$("#checkAsnFrequency").prop('disabled',true);

				//addToMasterJSON();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
					
				} else {
					checkAns = 0;
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +clculatedFrequency+'</b>');
					
                     
	
				}
			}
			id1++;
	});	

//conver Frequency in Hz
 fqConvrtFormula= '<img src="images/convertFreq.png" alt=" " width="80%" height="80%">'
	id2=0;
     $("#checkConvertFreq").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var freqConversion = $("#ConvrtFreqInput").val();
	
		   if (id2 <= 3) {
				
				if (freqConversion == convertFq) {
					checkAns = 0;
					$("#AccelerationAnswer").prop('hidden',false);
					$("#checkConvertFreq").prop('disabled',true);

					//addToMasterJSON();
				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				
				} else if (freqConversion != convertFq) {
					
			
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");

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
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +convertFq+'</b>');
					
                     
	
				}
			}
			id2++;
});	


//Calculate Acceleration
var Aformula='<img src="images/AccelarationFormula.png" alt=" " width="80%" height="80%">'
       
	id3=0;
     $("#checkAnsAcceleration").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var AccelerateVal = $("#acelerateInput").val();
	
		 if (id3 <= 3) {
				
				if (AccelerateVal == acceleration) {
					checkAns = 0;
					
				$("#checkAnsAcceleration").prop('disabled',true);
//				$("#submitconfig").prop('disabled',false);
//				$("#mass").prop('disabled',false);
//				$("#massDisplacement").prop('disabled',false);
//				$("#sconst").prop('disabled',false);

				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				addToMasterJSON();
				} else if (AccelerateVal != acceleration) {
					
			
				$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");

				}
	
	
			} else if (id3 == 4) {
				
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : "+Aformula+"</b> ");

				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (AccelerateVal == acceleration) {
					checkAns = 0;
					
				$("#checkAnsAcceleration").prop('disabled',true);
			
//				$("#submitconfig").prop('disabled',false);
//				$("#mass").prop('disabled',false);
//				$("#massDisplacement").prop('disabled',false);
//				$("#sconst").prop('disabled',false);

				$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
				addToMasterJSON();
					
				} else {
					checkAns = 0;
					 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +acceleration+'</b>');
					
				}
			}
			id3++;
			
	});

	             
}



