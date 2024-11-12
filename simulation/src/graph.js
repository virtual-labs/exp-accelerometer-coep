	var type1tableAndGraph="";	
	var type2tableAndGraph="";		
	var msg= '<div class="modal fade" id="selectCheck" role="dialog">'
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
				+ ' </div>'  
	$("#sub-main-div1").html(msg);	





// Create the chart
function FrequencyGraph(){// Create the chart
Highcharts.stockChart('graph-div', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                    const x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Frequency Graph'
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Frequency Graph data',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();

            for (let i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 100)
                ]);
            }
            return data;
        }())
    }]
});

}		

var checkFlag=0;
//Capacitive MEMS accelerometer Graph
	function graphCreate2(masterJson)
	{
		var type1TandG_T1=document.getElementById('hour').innerText = returnData(hour);
		var type1TandG_T2=document.getElementById('minute').innerText = returnData(minute);
		var type1TandG_T3=document.getElementById('second').innerText = returnData(second);
//		console.log("graph CapasitiveA : "+type1TandG_T1+":"+type1TandG_T2+":"+type1TandG_T3);
		type1tableAndGraph=type1TandG_T1+":"+type1TandG_T2+":"+type1TandG_T3;
//		addToTimerMasterJson();
		reset();
		checkFlag++;
	var xdata=[];
	var ydata=[];
	
	var graphData1=[];
	for (var i = 0; i < masterJson.demo.length; i++)
	 {
		xdata[i] = parseFloat(masterJson.demo[i].convertFq);
//		console.log("x - "+xdata[i]);
		ydata[i] = parseFloat(masterJson.demo[i].acceleration );
//		console.log("y - "+ydata[i]);
	}
	for (var j = 0; j < masterJson.demo.length; j++) {
			tempArr = [];
			tempArr[0] = xdata[j];
			tempArr[1] = ydata[j];
			graphData1.push(tempArr);

	}
//		console.log("graphData1 "+graphData1);
		ydata.sort(function(a, b) { return a - b });
		xdata.sort(function(a, b) { return a - b });
//		console.log("After xdata "+xdata);
//		console.log("After ydata "+ydata);
		Xmax = parseFloat(xdata[xdata.length - 1]);
		Ymax = parseFloat(ydata[ydata.length - 1]);
		Xmin = parseFloat(xdata[0]);
		Ymin = parseFloat(ydata[0]);
		
//		console.log("Xmax "+Xmax);
//		console.log("Ymax "+Ymax);
		var maxPoint=0;
		if(Xmax<Ymax)
		{
			maxPoint=Ymax;
		}
		else
		{
			maxPoint=Xmax;
		}
	//	console.log(" Frequency V/S Acceleration  " + graphData1);
		Highcharts.chart('sub-main-div1', {
			title: {
				text: ' Frequency V/S Acceleration  '
			},
//			subtitle: {
//				text: 'Meter Constant is  pulses (per/ltr)'
//			},
			xAxis: {
				min: Xmin,
				max: Xmax,
				title: {
					text: 'Frequency Hz'
				}
			},
			yAxis: {
				min: Ymin,
				max: Ymax,
				title: {
					text: 'Acceleration m/s<sup>2</sup>'
				}
			},
			series: [
				{
					type: 'line',
					name: 'Standard value',
					data: [[Xmin,Ymin], [Xmax, Ymax]],
					marker: {
						enabled: false
					},
					states: {
						hover: {
							lineWidth: 0
						}
					},
					enableMouseTracking: false
				},

				{
					type: 'scatter',
					name: 'Observation value',

					data: graphData1,
					marker: {
						radius: 4
					}
				}]
				
				

		});
		
		finishExpBtn = '<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="expResult" data-toggle="modal" data-target="#selectCheck"  ><b>RESULT</b></button></div>'
		+'<br><br><br><br>'
		$("#sub-main-div1").append(finishExpBtn);
			$("#expResult").click(function() {
				var a1=1;
		//		console.log("Resultpage...."+a1++);
					if(checkFlag>=2){
						
						resultAnalysis(counterMasterJson);
					}else{
						reset();
						$("#modelMsg").html("<b class='boldTextRed'>Please Select Another Type of Accelerometer</b>");
					}
				})


		}


//Pizoelectric accelero meter graph
	function graphCreate(masterJson)
	{
		var type2TandG_T1=document.getElementById('hour').innerText = returnData(hour);
		var type2TandG_T2=document.getElementById('minute').innerText = returnData(minute);
		var type2TandG_T3=document.getElementById('second').innerText = returnData(second);
//		console.log("graph pizoA : "+type2TandG_T1+":"+type2TandG_T2+":"+type2TandG_T3);
		type2tableAndGraph=type2TandG_T1+":"+type2TandG_T2+":"+type2TandG_T3;
//		addToTimerMasterJson();
		reset();
		checkFlag++;	
		var xdata=[];
		var ydata=[];
		
		var graphData1=[];
		for (var i = 0; i < masterJson.demo.length; i++)
		 {
			xdata[i] = parseFloat(masterJson.demo[i].clculatedFrequency);
	//		console.log("x - "+xdata[i]);
			ydata[i] = parseFloat(masterJson.demo[i].acceleration2 );
//       console.log("y - "+ydata[i]);
		}
		for (var j = 0; j < masterJson.demo.length; j++) {
				tempArr = [];
				tempArr[0] = xdata[j];
				tempArr[1] = ydata[j];
				graphData1.push(tempArr);
	
		}
		//	console.log("graphData1 "+graphData1);
			ydata.sort(function(a, b) { return a - b });
			xdata.sort(function(a, b) { return a - b });
		//	console.log("After xdata "+xdata);
		//	console.log("After ydata "+ydata);
			Xmax = parseFloat(xdata[xdata.length - 1]);
			Ymax = parseFloat(ydata[ydata.length - 1]);
			Xmin = parseFloat(xdata[0]);
			Ymin = parseFloat(ydata[0]);
			
		//	console.log("Xmax "+Xmax);
		//	console.log("Ymax "+Ymax);
			var maxPoint=0;
			if(Xmax<Ymax)
			{
				maxPoint=Ymax;
			}
			else
			{
				maxPoint=Xmax;
			}
	//		console.log(" Frequency V/S Acceleration  " + graphData1);
			Highcharts.chart('sub-main-div1', {
				title: {
					text: ' Frequency V/S Acceleration  '
				},
	//			subtitle: {
	//				text: 'Meter Constant is  pulses (per/ltr)'
	//			},
				xAxis: {
					min: Xmin,
					max: Xmax,
					title: {
						text: 'Frequency Hz'
					}
				},
				yAxis: {
					min: Ymin,
					max: Ymax,
					title: {
						text: 'Acceleration m/s<sup>2<\sup>'
					}
				},
				series: [
					{
						type: 'line',
						name: 'Standard value',
						data: [[Xmin, Ymin], [Xmax, Ymax]],
						marker: {
							enabled: false
						},
						states: {
							hover: {
								lineWidth: 0
							}
						},
						enableMouseTracking: false
					},
	
					{
						type: 'scatter',
						name: 'Observation value',
	
						data: graphData1,
						marker: {
							radius: 4
						}
					}]
					
				

		});
		
		finishExpBtn = '<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="expResult2"  data-toggle="modal" data-target="#selectCheck"   ><b>RESULT</b></button></div>'
				+'<br><br><br><br>'
				$("#sub-main-div1").append(finishExpBtn);
//				resultAnalysis(counterMasterJson);
			$("#expResult2").click(function() {				
					if(checkFlag>=2){
//						resultAnalysis();
						resultAnalysis(counterMasterJson);
					}else{
						reset();
						$("#modelMsg").html("<b class='boldTextRed'>Please Select Another Type of Accelerometer</b>");
					}
				})
		
		}
		
		  
		
		

