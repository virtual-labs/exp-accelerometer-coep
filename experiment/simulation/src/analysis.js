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
//console.log(quesPercent);

//configuration
var correctValConfigType11 = (((counterMasterJson.cntCalMain1MasterJson.cntSubmitConfig)+(counterMasterJson.cntCalMain2MasterJson.cntSubmitConfigPg2))/10).toFixed(2);
var configPercent1 = (correctValConfigType11*100).toFixed(1);
var configPercent = parseFloat(configPercent1);
//console.log(configPercent);

//mimic
var correctValMimic = (5/5).toFixed(2);
var mimicPercent1 = (correctValMimic*100).toFixed(1);
var mimicPercent = parseFloat(mimicPercent1);
//console.log(mimicPercent);

//Calculation
var correctValCalculation = (((counterMasterJson.cntCalMain1MasterJson.cntCalculateMainPage)+(counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2))/30).toFixed(2);
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
		+' <div class="panel-body remark" ><center>Experiment completed successfully!!</center></div>'
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
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		 //  +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		   +'  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		//   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1Config+'</center></td>'
		   +' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Mimic</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		//   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'		  
		   +'  </tr>'
		   +'  <tr>'
	       +'     <td class=""><center>Calculation</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		//   +'	<td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'
		   +' </tr>'
		   +'   <tr>'
		   +'      <td class=""><center>Observation</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		//  +'	 <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1tableAndGraph+'</center></td>'		  
		   +'  </tr>'
		   //	
		   //	setTimerMasterJson.bKnowledgeTime = bKnowledgeTime;
		   //		tempJsonTimer.type1Config = type1Config;
		   //		tempJsonTimer.timeOfMimic = timeOfMimic;
		   //		tempJsonTimer.type1tableAndGraph= type1tableAndGraph;
		   //		tempJsonTimer.type2Config = type2Config;
		   //		tempJsonTimer.timeOfMimic2 = timeOfMimic2;
		   //		tempJsonTimer.type2tableAndGraph= type2tableAndGraph;
		   //	
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
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		//   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		//   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Config+'</center></td>'
		   +' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Mimic</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		//   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Mimic+'</center></td>'		  
		   +'  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Calculation</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		//   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Mimic+'</center></td>'
		   +' </tr>'
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
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
//
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger"  style="margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
//
//		+'</div>'
//		+' </div>'
//
//
//		+' </div>'
//		
//		+' </div>'
//		//Close 3 Row
//		+' <div class="row">'
//		+'<div class="col-sm-12">'
//
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Span error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
//
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
//		+' </div>'
//
//		+' </div>'
		
		
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
				
//		console.log(quesPercent);
//		console.log(configPercent);
//		console.log(mimicPercent);
//		console.log(CalculationPercent);
//		console.log(observationPercent);

//			Highcharts.chart('graph-div', {
//			    chart: {
//			        type: 'pie'
//			    },
//			    title: {
//			        text: 'Student Experiment Performance',
//			        align: 'left'
//			    },
//			    subtitle: {
//			        text: ' ',
//			        align: 'left'
//			    },
//
//			    accessibility: {
//			        announceNewData: {
//			            enabled: true
//			        },
//			        point: {
//			            valueSuffix: '%'
//			        }
//			    },
//
//			    plotOptions: {
//			        series: {
//			            borderRadius: 5,
//			            dataLabels: [{
//			                enabled: true,
//			                distance: 15,
//			                format: '{point.name}'
//			            }, {
//			                enabled: true,
//			                distance: '-30%',
//			                filter: {
//			                    property: 'percentage',
//			                    operator: '>',
//			                    value: 5
//			                },
//			                format: '{point.y:.1f}%',
//			                style: {
//			                    fontSize: '0.9em',
//			                    textOutline: 'none'
//			                }
//			            }]
//			        }
//			    },
//
//			    tooltip: {
//			        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//			        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
//			    },
//
//			    series: [
//			        {
//			            name: 'Browsers',
//			            colorByPoint: true,
//			            data: [
//			                {
//			                    name: 'Basic knowledge',
//			                    y: 20,
//			                    drilldown: 'Chrome'
//			                },
//			                {
//			                    name: 'Configuration',
//			                    y: 20,
//			                    drilldown: 'Safari'
//			                },
//			                {
//			                    name: 'Mimic',
//			                    y: 20,
//			                    drilldown: 'Edge'
//			                },
//			                {
//			                    name: 'Calculation',
//			                    y: 20,
//			                    drilldown: 'Firefox'
//			                },
//			                {
//			                    name: 'Observation',
//			                    y: 20,
//			                    drilldown: null
//			                }
//			            ]
//			        }
//			    ],
//				
//				drilldown: {
//			        series: [
//			            {
//			                name: 'Chrome',
//			                id: 'Chrome',
//			                data: [
//			                    [
//			                        'v97.0',
//			                        36.89
//			                    ],
//			                    [
//			                        'v96.0',
//			                        18.16
//			                    ],
//			                    [
//			                        'v95.0',
//			                        0.54
//			                    ],
//			                    [
//			                        'v94.0',
//			                        0.7
//			                    ],
//			                    [
//			                        'v93.0',
//			                        0.8
//			                    ],
//			                    [
//			                        'v92.0',
//			                        0.41
//			                    ],
//			                    [
//			                        'v91.0',
//			                        0.31
//			                    ],
//			                    [
//			                        'v90.0',
//			                        0.13
//			                    ],
//			                    [
//			                        'v89.0',
//			                        0.14
//			                    ],
//			                    [
//			                        'v88.0',
//			                        0.1
//			                    ],
//			                    [
//			                        'v87.0',
//			                        0.35
//			                    ],
//			                    [
//			                        'v86.0',
//			                        0.17
//			                    ],
//			                    [
//			                        'v85.0',
//			                        0.18
//			                    ],
//			                    [
//			                        'v84.0',
//			                        0.17
//			                    ],
//			                    [
//			                        'v83.0',
//			                        0.21
//			                    ],
//			                    [
//			                        'v81.0',
//			                        0.1
//			                    ],
//			                    [
//			                        'v80.0',
//			                        0.16
//			                    ],
//			                    [
//			                        'v79.0',
//			                        0.43
//			                    ],
//			                    [
//			                        'v78.0',
//			                        0.11
//			                    ],
//			                    [
//			                        'v76.0',
//			                        0.16
//			                    ],
//			                    [
//			                        'v75.0',
//			                        0.15
//			                    ],
//			                    [
//			                        'v72.0',
//			                        0.14
//			                    ],
//			                    [
//			                        'v70.0',
//			                        0.11
//			                    ],
//			                    [
//			                        'v69.0',
//			                        0.13
//			                    ],
//			                    [
//			                        'v56.0',
//			                        0.12
//			                    ],
//			                    [
//			                        'v49.0',
//			                        0.17
//			                    ]
//			                ]
//			            },
//			            {
//			                name: 'Safari',
//			                id: 'Safari',
//			                data: [
//			                    [
//			                        'v15.3',
//			                        0.1
//			                    ],
//			                    [
//			                        'v15.2',
//			                        2.01
//			                    ],
//			                    [
//			                        'v15.1',
//			                        2.29
//			                    ],
//			                    [
//			                        'v15.0',
//			                        0.49
//			                    ],
//			                    [
//			                        'v14.1',
//			                        2.48
//			                    ],
//			                    [
//			                        'v14.0',
//			                        0.64
//			                    ],
//			                    [
//			                        'v13.1',
//			                        1.17
//			                    ],
//			                    [
//			                        'v13.0',
//			                        0.13
//			                    ],
//			                    [
//			                        'v12.1',
//			                        0.16
//			                    ]
//			                ]
//			            },
//			            {
//			                name: 'Edge',
//			                id: 'Edge',
//			                data: [
//			                    [
//			                        'v97',
//			                        6.62
//			                    ],
//			                    [
//			                        'v96',
//			                        2.55
//			                    ],
//			                    [
//			                        'v95',
//			                        0.15
//			                    ]
//			                ]
//			            },
//			            {
//			                name: 'Firefox',
//			                id: 'Firefox',
//			                data: [
//			                    [
//			                        'v96.0',
//			                        4.17
//			                    ],
//			                    [
//			                        'v95.0',
//			                        3.33
//			                    ],
//			                    [
//			                        'v94.0',
//			                        0.11
//			                    ],
//			                    [
//			                        'v91.0',
//			                        0.23
//			                    ],
//			                    [
//			                        'v78.0',
//			                        0.16
//			                    ],
//			                    [
//			                        'v52.0',
//			                        0.15
//			                    ]
//			                ]
//			            }
//			        ]
//			    }
//			});

// });//Result button

  }
