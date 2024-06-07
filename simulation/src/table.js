
function tableCreate(masterJson) {
	console.log(masterJson);
	var tableMainDiv = '<div class="col-sm-12">'
		+ '<table class=" table table-bordered " style="margin:10px; text-align: center">'
		+ ' <thead>'
		+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
		+ '  <tr>'
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Seismic Mass (kg)</center></th>'
		+ '  <th scope="col"><center>Mass Displacement (cm)</center></th>'
		+ '  <th scope="col"><center>Spring Constant (N/m)</center></th>'
		+ '   <th scope="col"><center >clculated Frequency (rad/s)</center></th>'
		+ '  <th scope="col"><center>Converted Frequency (Hz)</center></th>'
		+ '  <th scope="col"><center>Max Acceleration (m/s<sup>2</sup>)</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < masterJson.demo.length; i++, p++) {
		tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center">' + masterJson.demo[i].mass_M + '</center></td>'
			+ ' <td><center">' + masterJson.demo[i].displasment + '</center></td>'
			+ '   <td><center">' + masterJson.demo[i].springConstant_K + '</center></td>'
			+ ' <td><center">' + masterJson.demo[i].clculatedFrequency + '</center></td>'
			+ ' <td><center>' + masterJson.demo[i].convertFq + '</center></td>'
			+ '<td><center>' + masterJson.demo[i].acceleration + '</center></td>'
			+ ' </tr>'
	}
	tableMainDiv += ' </tbody>'
		+ '  </table>'
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



	if (tableReading == 4) {
		tableMainDiv += '<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="nextLevel"  data-toggle="modal" data-target="#selectCheck" ><b>FINISH </b></button></div>'
	}

	$("#tableDesign").html(tableMainDiv);
	tableReading++;
	
	$("#nextLevel").click(function() {
		$("#modelMsg").html('<img src="images/cong.gif" class="img-fluid" >');
	});
}
	