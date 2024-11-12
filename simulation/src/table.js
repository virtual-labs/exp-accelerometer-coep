var tableReading2=0;
var tableReading=0;
function tableCreate(masterJson) {
//	console.log(masterJson);
//tableReading=0;
	var tableMainDiv = '<div class="row"><div class="col-sm-12">'
		+ '<table class=" table table-responsive table-bordered " >'
		+ ' <thead>'
		+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
		//+ '  <tr>'
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Seismic Mass(kg)</center></th>'
		+ '  <th scope="col"><center>Mass Displacement(cm)</center></th>'
		+ '  <th scope="col"><center>Spring Constant(N/m)</center></th>'
		+ '   <th scope="col"><center>Calculated Frequency(rad/s)</center></th>'
		+ '  <th scope="col"><center>Frequency(Hz)</center></th>'
		+ '  <th scope="col"><center>Acceleration(m/s<sup>2</sup>)</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < masterJson.demo.length; i++, p++) {
		tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center>' + masterJson.demo[i].mass_M + '</center></td>'
			+ ' <td><center>' + masterJson.demo[i].displasment + '</center></td>'
			+ '   <td><center>' + masterJson.demo[i].springConstant_K + '</center></td>'
			+ ' <td style = "color:#d9534f;"><center>' + masterJson.demo[i].clculatedFrequency + '</center></td>'
			+ ' <td style = "color:#d9534f;"><center>' + masterJson.demo[i].convertFq + '</center></td>'
			+ '<td style = "color:#d9534f;"><center>' + masterJson.demo[i].acceleration + '</center></td>'
			+ ' </tr>'
	}
	tableMainDiv += ' </tbody>'
		+ '  </table>'
		+ ' </div>'
+'</div>'

+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelMsg">'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'



	if (tableReading ==4) {
		startTimer();
//		$("#selectCheck").fadeOut();
		$("#main-div-conf").html('');	
     	$("#canvas-div").html('');	
		$("#centerText1").html('MIMIC');
     	$("#centerText2").html('TABLE AND GRAPH');
     	$("#graph-div").html('');
     	var htm = '<img src="images/A_Type1.png" class="img-fluid" >'
      	$("#canvas-div").html(htm);
      	graphCreate2(masterJson);
//		tableMainDiv += '<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="finish"  data-toggle="modal" data-target="#selectCheck" ><b>FINISH </b></button></div>'
		$("#methodType").prop('disabled',false);
		methodeflag=1;
		tableReading=0;
		ArrayJson=[];
		TimeMasterJson={};
	}

	$("#tableDesign").html(tableMainDiv);
	tableReading++;
//	console.log(tableReading);
//	$("#finish").click(function() {
//		$("#modelMsg").html('<img src="images/cong.gif" class="img-fluid" >');
//		$("#methodType").prop('disabled',false);
//	});
}


//for Piezoelectric Accelerometer
function tableCreate2(MasterJson2){
//	console.log(MasterJson2);
	
	var tableMainDiv = '<div class="row"><div class="col-sm-12">'
		+ '<table class=" table table-responsive table-bordered " >'
		+ ' <thead>'
		+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
		//+ '  <tr>'
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Seismic Mass (kg)</center></th>'
		+ '  <th scope="col"><center>Mass Displacement (cm)</center></th>'
		+ '  <th scope="col"><center>Spring Constant (N/m)</center></th>'
//		+ '   <th scope="col"><center>Force (N)</center></th>'
		+ '   <th scope="col"><center>Calculated Frequency(rad/s)</center></th>'
		+ '   <th scope="col"><center>Frequency (Hz)</center></th>'
		+ '  <th scope="col"><center>Acceleration (m/s<sup>2</sup>)</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < MasterJson2.demo.length; i++, p++) {
		tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center>' + MasterJson2.demo[i].m + '</center></td>'
			+ ' <td><center>' + MasterJson2.demo[i].displasment2 + '</center></td>'
			+ '   <td><center>' + MasterJson2.demo[i].springConstant_K2 + '</center></td>'
//			+ ' <td><center>' + MasterJson2.demo[i].f + '</center></td>'
			+ ' <td style = "color:#d9534f;"><center>' + MasterJson2.demo[i].clculatedFrequency + '</center></td>'
			+ ' <td style = "color:#d9534f;"><center>' + MasterJson2.demo[i].convertFq + '</center></td>'
			+ '<td style = "color:#d9534f;"><center>' + MasterJson2.demo[i].acceleration2 + '</center></td>'
			+ ' </tr>'
			
			
	}

	tableMainDiv += ' </tbody>'
		+ '  </table>'
		+ ' </div>'
+ ' </div>'

+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelMsg">'
				
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'



	if (tableReading2 == 4) {
		$("#selectCheck").fadeOut();
		startTimer();
		 $("#main-div-conf").html('');	
     	 $("#canvas-div").html('');	
		 $("#centerText1").html('MIMIC');
     	 $("#centerText2").html('TABLE AND GRAPH');
		 $("#graph-div").html('');
		 var htm = '<img src="images/type2Mimic.png" class="img-fluid" >'
      	 $("#canvas-div").html(htm);
		 
		 graphCreate(MasterJson2);
//		 var endbutton = '<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="finish"  data-toggle="modal" data-target="#selectCheck" ><b>FINISH </b></button></div>'
//		 	$("#sub-main-div1").html(endbutton);
//		 $("#modelMsg").html('<img src="images/cong.gif" class="img-fluid" >');
		 $("#methodType").prop('disabled',false);
		 methodeflag=1;
		 tableReading2=0;
		 ArrayJson2=[];
		 MasterJson2={};
	}

	$("#tableDesign").html(tableMainDiv);
	tableReading2++;
//	console.log(tableReading2);
//	$("#finish").click(function(){
//		$("#modelMsg").html('<img src="images/cong.gif" class="img-fluid" >');
//		$("#methodType").prop('disabled',false);
//	});
}





	