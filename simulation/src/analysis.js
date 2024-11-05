function resultAnalysis(counterMasterJson){
	    
//		addToTimerMasterJson();
	//	console.log("ResultPage Analysis.......");
				
$("#selectMethod").prop('hidden',true);

counterMasterJson = {
    "questionary": {
        "totalQues": 5,
       
    },
    "cntCalMain1MasterJson": {
        "cntSubmitConfig": cntSubmitConfig,
        "cntCalculateMainPage": cntCalculateMainPage
        
    },
    "cntCalMain2MasterJson": {
        "cntSubmitConfigPg2": cntSubmitConfigPg2,
        "cntCalculateMainPage2": cntCalculateMainPage2
    },
    "setTimerMasterJson": {
        "bKnowledgeTime": bKnowledgeTime,
        "type1Config": type1Config,
        "timeOfMimic": timeOfMimic,
		"type1tableAndGraph": type1tableAndGraph,
		"type2Config": type2Config,
		"type2Mimic": type2Mimic,
		"type2tableAndGraph": type2tableAndGraph
    }
}	
	
//basic knowledge	
var correctVal = (answerTotCount/5).toFixed(2);
var quesPercent1 = (correctVal*100).toFixed(1);
var quesPercent = parseFloat(quesPercent1);
console.log(quesPercent);

//configuration
var correctValConfigType11 = (10/((counterMasterJson.cntCalMain1MasterJson.cntSubmitConfig)+(counterMasterJson.cntCalMain2MasterJson.cntSubmitConfigPg2))).toFixed(2);
var configPercent1 = (correctValConfigType11*100).toFixed(1);
var configPercent = parseFloat(configPercent1);
//console.log(configPercent);

//mimic
var correctValMimic = (5/5).toFixed(2);
var mimicPercent1 = (correctValMimic*100).toFixed(1);
var mimicPercent = parseFloat(mimicPercent1);
//console.log(mimicPercent);

//Calculation
var correctValCalculation = (30/((counterMasterJson.cntCalMain1MasterJson.cntCalculateMainPage)+(counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2))).toFixed(2);
var CalculationPercent1 = (correctValCalculation*100).toFixed(1);
var CalculationPercent = parseFloat(CalculationPercent1);
//console.log(CalculationPercent);

//Observation
var correctValObsevation = (5/5).toFixed(2);
var observationPercent1 = (correctValObsevation*100).toFixed(1);
var observationPercent = parseFloat(observationPercent1);
//console.log(observationPercent);

var htm=''
		
		+'<div class="container-fluid">'
		+'  <div class="row">'


		+'<div class="col-md-12">'
		+' <div class="panel remarkBground" >'
		+' <div class="panel-body remark" ><center><h3>Identify suitable accelerometer for an application</h3><br>Experiment completed successfully!!</center></div>'
		+'</div>'
		+'</div>'

		+' </div>'
		
		//Close 1 Row
		+'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'     <th><center class="">PHASES OF CAPACITIVE MEMS ACCELEROMETER</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//+'	  <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   if(quesPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
		 //  +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		   htm +='  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   if(configPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
		  // +'     <td class=""><center class="attained">Attained</center></td>'
		//   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1Config+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Mimic</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		//   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'		  
		   +'  </tr>'
		   +'  <tr>'
	       +'     <td class=""><center>Calculation</center></td>'
		   
		   if(CalculationPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
		   //+'     <td class=""><center class="attained">Attained</center></td>'
		//   +'	<td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'      <td class=""><center>Observation</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		//  +'	 <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1tableAndGraph+'</center></td>'		  
		   +'  </tr>'
		  
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		+'<div class="col-md-4">'
		+'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'     <th><center class="">PHASES OF PIEZOELECTRIC ACCELEROMETER</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//+'     <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   if(quesPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
		//   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		  
		   htm +='  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   
		   if(configPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
		   //+'     <td class=""><center class="attained"> Attained</center></td>'
		//   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Config+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Mimic</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		//   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Mimic+'</center></td>'		  
		   +'  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Calculation</center></td>'
		   if(CalculationPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
		  // +'     <td class=""><center class="attained"> Attained</center></td>'
		//   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Mimic+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Observation</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
	//	   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2tableAndGraph+'</center></td>'	  
		   +'  </tr>'
//			+'   <tr>'
//		  +'     <td class="info"><center>Fault detection</center></td>'
//		   +'     <td class="success"><center> Attained</center></td>'
//		  
//		   +'  </tr>'
		   +' </tbody>'
		  +' </table>'
		+' </div>'
		
		+' </div>'
		+' </div>'
		//Close 2 Row
		+' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Basic knowledge</b></span></center>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox"><b>Total Questions</b></span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox"><b>Right Answer</b></span></center>'
		+'<div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+answerTotCount+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		+'</div>'

		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Configuration of Capacitive MEMS Accelerometer</></span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style=" margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain1MasterJson.cntSubmitConfig+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Calculation of Capacitive MEMS Accelerometer</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>15</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain1MasterJson.cntCalculateMainPage+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+' </div>'
		+' </div>'
		//Close 2 Row
		+' <div class="row">'
		+'<div class="col-sm-12">'

		
	
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Configuration of Piezoelectric Accelerometer</></span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain2MasterJson.cntSubmitConfigPg2+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Calculation of Piezoelectric Accelerometer</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>15</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+' </div>'

		
		
		$("#mainDiv").html(htm);
		



		let initialData = [
		    { name: 'Questionaries', y: quesPercent },
		    { name: 'Configuration', y: configPercent },
		    { name: 'Mimic', y: mimicPercent },
		    { name: 'Calculation', y: CalculationPercent },
			{ name: 'Observation', y: observationPercent },
		];

		// Create the pie chart
		let chart = Highcharts.chart('graph-div', {
		    chart: {
		        type: 'pie'
		    },
		    title: {
		        text: 'Student Performance'
		    },
		    series: [{
		        name: 'Observed',
		        colorByPoint: true,
		        data: initialData
		    }],
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                format: '{point.name}: {point.percentage:.1f} %'
		            }
		        }
		    }
		});
				


  }
