
var timeOfMimic="";
var mass_M;
var displasment;
var springConstant_K;
var freq;
var clculatedFrequency, convertFq, acceleration;
var ArrayJson=[];
var TimeMasterJson={};
var clculatedFrequency1;
var convertFq1s;
var acceleration1;
var Type1star_Flag=0;
var	start,stop;
function mimic(massSelect,massDSelect,sconstSelect){
	startTimer();
//	$("#main-div-conf").html('');	
    $("#canvas-div").html('');	
    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =900;
	var h = 900;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

//paper=new Raphael(document.getElementById('canvas'),1000,900);
var x = 565;
var y = 451;
var x1=220;
var y1=220;
var time=1000;
var application=1;
var middleRod;
 mass_M=parseFloat(massSelect);  //kg 
				//console.log("mass_M = "+mass_M);
//mass displacement (acceleration)
 displasment=parseFloat(massDSelect);;
				//console.log("displasment = "+displasment);
// unit is N/m
 springConstant_K=parseFloat(sconstSelect);
				//console.log("springConstant_K = "+springConstant_K);
//natural frequency formula
 freq=springConstant_K/mass_M;
 			//	console.log("freq = "+freq);
 clculatedFrequency1 = Math.sqrt(freq);
 clculatedFrequency = clculatedFrequency1.toFixed(2);
 				//console.log("clculatedFrequency = "+clculatedFrequency);
 //var pi2=2*3.14;
 
 convertFq1=clculatedFrequency/6.28;
  convertFq= convertFq1.toFixed(2);
 			//	console.log("convertFq = "+convertFq);
  //maximum acceleration (Unit is m/s^a)
 acceleration1=(clculatedFrequency^2)*displasment;
 acceleration=acceleration1.toFixed(2);
			//	console.log("acceleration = "+acceleration);

	start=paper.image("images/STARTpreview.png",(x1-180),(y1-180), 120,120);
	stop=paper.image("images/STOPpreview.png",(x1-60),(y1-180),120,120);

var frame,shaker,spring,dashpot;

design();
function design(){
frame=paper.path("M"+(x1+388)+" "+(y1+50)+" "+"l 200 0 l 0 343 l -200 0 z").attr({'stroke-width':15,'stroke':'#595959'});
//shaker=paper.path("M"+(x1+338)+" "+(y1+401)+" "+"l 300 0 l l 0 60 l -300 0 l 0 -60").attr({'fill':'180-#393b3c-#999-#fff-#393b3c'});
shaker=paper.image("images/shakerImg.png",(x1+338),(y1+398),300,55);
var Name1 =paper.text((x1+478),(y1+480),"Shaker").attr({'font-size':25});
var Name2= paper.text((x1+65),(y1+540),"Representation of Capacitance").attr({'font-size':25});
dashpot=paper.path("M "+(x1+447)+" "+(y1+386)+" "+"l 0 -60 l 75.5 0  l 0 60  z").attr({'fill':'#DBCF5C'});

spring=paper.path("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l 20 12  l -40  12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -20 12  l 0 20   "
					+"l 35 0  l 0 60  l -30 0 l 0 55 l 20 0 l 0 10 l -50 0 l 0 -10 l 20 0  l0 -55  l -30 0   l 0 -30"
					+"l -100 0  l 0 -300 l -200 0 l 0 50 l 0 -50 l 200 0 l 0 300 l  100  0 l 0 -30  l 35 0"
					+"l 0 -20  l 20 -12  l -40  -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -20 -12  l 0 -20 ").attr({'fill':'270-#fff-#999','stroke-width':2});

}
function expandSpring(){
	
	spring.attr({'stroke':'red'});
	var transform_spring = Raphael.transformPath("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l20 16.4  l-40  16.4  l40 16.4  l-40 16.4  l40 16.4  l-40 16.4  l40 16.4  l-40 16.4  l40 16.4  l-20 15  l 0 20   "
					+"l 35 0  l 0 60  l -30 0 l 0 55 l 20 0 l 0 10 l -50 0 l 0 -10 l 20 0  l0 -55  l -30 0    l 0 -30 "
					+"l -100 0  l 0 -330 l -200 0 l 0 55 l 0 -55 l 200 0 l 0 330 l  100  0  l 0 -30  l 35 0"
					+"l 0 -20  l 20 -16.4  l -40  -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -20 -16.4  l 0 -20" );

	spring.animate({path:transform_spring }, 500);

}

function compresSpring(){
spring.attr({'stroke':'green'});
		var transform_spring1 = Raphael.transformPath("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l 20 12  l -40  12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -20 12  l 0 20   "
					+ "l 35 0  l 0 60  l -30 0 l 0 55 l 20 0 l 0 10 l -50 0 l 0 -10 l 20 0  l0 -55  l -30 0   l 0 -30 "
					+"l -100 0  l 0 -330 l -200 0 l 0 65 l 0 -65 l 200 0 l 0 330 l  100  0   l 0 -30  l 35 0"
					+"l 0 -20  l 20 -12  l -40  -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -20 -12  l 0 -20");

	spring.animate({path:transform_spring1}, 500);

}


var line11,line22;
var p1=paper.rect((x1-202),(y1-11),35,30).attr({'fill':'0-#888-#fff-#888'});
var p2=paper.rect((x1-202),(y1+486),35,30).attr({'fill':'0-#888-#fff-#888'});

var p3=paper.rect((x1+303),(y1-11),35,30).attr({'fill':'0-#888-#fff-#888'});
var p4=paper.rect((x1+303),(y1+486),35,30).attr({'fill':'0-#888-#fff-#888'});
	capasitiveAccelerometer();

function capasitiveAccelerometer(){
//var Anode=paper.image("images/VerticalCathodPreview.png",(x1-178.5),(y1+144),495,230);

var rightE=paper.path("M "+(x1-120)+" "+(y1+50)+" "+"l 0 410 0 l 130 0 l 0 -20 l -55 0"
+"l 0 -60 l 55 0 l 0 -20 l -55 0"
+"l 0 -60 l 55 0 l 0 -17 l -55 0"
+"l 0 -60 l 55 0 l 0 -17 l -55 0"
+"l 0 -60 l 55 0 l 0 -22 l -55 0"
+"l 0 -60 l 55 0 l 0 -22 l -130 0 l 0 7").attr({'fill':'#5579C6'});
		
var leftE=paper.path("M "+(x1+260)+" "+(y1+50)+" "+"l 0 410 0 l -130 0 l 0 -20 l 55 0"
+"l 0 -60 l -55 0 l 0 -20 l 55 0"
+"l 0 -60 l -55 0 l 0 -17 l 55 0"
+"l 0 -60 l -55 0 l 0 -17 l 55 0"
+"l 0 -60 l -55 0 l 0 -22 l 55 0"
+"l 0 -60 l -55 0 l 0 -22 l 130 0 l 0 7").attr({'fill':'#5579C6'});

middleRod=paper.image("images/cathodVPreview.png",(x1-40),(y1+5),230,495);

line11=paper.path("M "+(x1-185)+" "+(y1-1)+" "+" l 0 0  A 0 0 0 0 1 "+(x1+320)+" "+(y1-1)+"l 0 0 M").attr({'stroke-width':15,'stroke':'#888'});
line22=paper.path("M "+(x1-185)+" "+(y1+505)+" "+" l 0 0  A 0 0 0 0 1 "+(x1+320)+" "+(y1+505)+"l 0 0 M").attr({'stroke-width':15,'stroke':'#888'});


//line11=paper.path("M "+(x1-185)+" "+(y1-1)+" "+" l 0 0  A 1.5 -0.1 0 0 1 "+(x1+320)+" "+(y1-1)+"l 0 0 M").attr({'stroke-width':15,'stroke':'#888'});
//line22=paper.path("M "+(x1-185)+" "+(y1+505)+" "+" l 0 0  A 1.5 -0.1 0 0 1 "+(x1+320)+" "+(y1+505)+"l 0 0 M").attr({'stroke-width':15,'stroke':'#888'});


p1.toFront();
p2.toFront();
p3.toFront();
p4.toFront();
}	

function springAnimation2(){
	var arr2=[];	
	arr2[0]=paper.path("M "+(x1-100)+" "+(y1+91)+" "+" l 0 0 ");
	arr2[0].animate({path :"M "+(x1-100)+" "+(y1+91)+" "+" l 0 0 "},1000, function(){
		
		line11.animate({path :"M "+(x1-185)+" "+(y1-1)+" "+"  l 0 0  A 1.5 0.1 0 1 0 "+(x1+320)+" "+(y1-1)+"l 0 0 M"},500 );
		line22.animate({path :"M "+(x1-185)+" "+(y1+505)+" "+" l 0 0  A 1.5 0.1 0 1 0 "+(x1+320)+" "+(y1+505)+"l 0 0 M"},500 );
		middleRod.animate({transform: ['t',0, 15]}, 500);
		
		expandSpring();
		frame.toFront();
		
//	arr2[1]=paper.path('M'+(x1+-100)+ ' ' +(y1+91)+ 'l 0 0');
//	arr2[1].animate({path :"M"+(x1-100)+" "+(y1+91)+ "l 0 0"},1000, function(){
//		middleRod.animate({transform: ['t',0, -14.4]}, 1000);
//		line11.animate({path :"M "+(x1-185)+" "+(y1-1)+" "+" l 0 0  A 1.5 -0.1 0 1 0 "+(x1+320)+" "+(y1-1)+"l 0 0 M"},1000 );
//		line22.animate({path :"M "+(x1-185)+" "+(y1+505)+" "+" l 0 0  A 1.5 -0.1 0 1 0 "+(x1+320)+" "+(y1+505)+"l 0 0 M"},1000 );
//		
//		compresSpring();	
//		frame.toFront();
//			});
			
			arr2[1]=paper.path('M'+(x1+-100)+ ' ' +(y1+91)+ 'l 0 0');
				arr2[1].animate({path :"M"+(x1-100)+" "+(y1+91)+ "l 0 0"},1000, function(){
					
					line11.animate({path :"M "+(x1-185)+" "+(y1-1)+" "+" l 0 0  A 1.5 0.1 0 0 1 "+(x1+320)+" "+(y1-1)+"l 0 0 M"},500 );
					line22.animate({path :"M "+(x1-185)+" "+(y1+505)+" "+" l 0 0  A 1.5 0.1 0 0 1 "+(x1+320)+" "+(y1+505)+"l 0 0 M"},500 );
					middleRod.animate({transform: ['t',0, -16]}, 500);
					compresSpring();	
					frame.toFront();
						});
		});
		
}

//function springAnimation(){
//	
//	var arr=[];	
//	
//		arr[0]=paper.path("M "+(x1-100)+" "+(y1+91)+" "+" l 0 0 ");
//		arr[0].animate({path :"M "+(x1-100)+" "+(y1+91)+" "+" l 0 0 "},1000, function(){
//			
//			middleRod.animate({transform: ['t',0, 14.4]}, 1000);
//			line11.animate({path :"M "+(x1-185)+" "+(y1+10)+" "+"  l 0 0  A 1.5 s0.1 0 1 0 "+(x1+320)+" "+(y1+10)+"l 0 0 M"},1000 );
//			line22.animate({path :"M "+(x1-185)+" "+(y1+500)+" "+" l 0 0  A 1.5 0.1 0 1 0 "+(x1+320)+" "+(y1+500)+"l 0 0 M"},1000 );
//		
//			expandSpring();
//			frame.toFront();
//		
//		arr[1]=paper.path('M'+(x1+-100)+ ' ' +(y1+91)+ 'l 0 0');
//		arr[1].animate({path :"M"+(x1-100)+" "+(y1+91)+ "l 0 0"},1000, function(){
//			middleRod.animate({transform: ['t',0, -14.4]}, 1000);
//			line11.animate({path :"M "+(x1-185)+" "+(y1+10)+" "+"  l 0 0  A 1.5 -0.1 0 1 0 "+(x1+320)+" "+(y1+10)+"l 0 0 M"},1000 );
//			line22.animate({path :"M "+(x1-185)+" "+(y1+500)+" "+" l 0 0  A 1.5 -0.1 0 1 0 "+(x1+320)+" "+(y1+500)+"l 0 0 M"},1000 );
//	
//			compresSpring();	
//			frame.toFront();
//	
//	 		});
//		});
//
//}

	function animImg(){
	var arr=[];
	arr[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
	arr[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 0"},100, function(){
		var transform_rImg3=Raphael.animation({ 'width': 300, 'height':55, 'x': (x1+348), 'y': (y1+392) },300);
		shaker.animate( transform_rImg3 );
		
	arr[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
	arr[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 0"},100, function(){
		var transform_rImg3=Raphael.animation({ 'width': 300, 'height':55, 'x': (x1+323), 'y': (y1+398) },300);
		shaker.animate( transform_rImg3 );
	arr[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
	arr[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 0"},100, function(){
		var transform_rImg3=Raphael.animation({ 'width': 300, 'height':55, 'x': (x1+348), 'y': (y1+392) },300);
		shaker.animate( transform_rImg3 );
	arr[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
	arr[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 0"},100, function(){
		var transform_rImg3=Raphael.animation({ 'width': 300, 'height':55, 'x': (x1+323), 'y': (y1+398) },300);
		shaker.animate( transform_rImg3 );
	arr[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
	arr[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 0"},100, function(){
		var transform_rImg3=Raphael.animation({ 'width': 300, 'height':55, 'x': (x1+338), 'y': (y1+392) },300);
		shaker.animate( transform_rImg3 );
	arr[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
	arr[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 0"},100, function(){
		var transform_rImg3=Raphael.animation({ 'width': 300, 'height':55, 'x': (x1+338), 'y': (y1+398) },300);
		shaker.animate( transform_rImg3 );

		});
		});
		});
		});
		});
		});
}
    
var flag=0;
var vibrate;
var vibrate2;
var counter=0;

stop.node.style.pointerEvents = 'none';

start.click(function(){
	start.node.style.pointerEvents = 'none';
	$("#mass").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
		$("#massDisplacement").children(":selected").css("background-color","#f7dddd").prop("disabled", true);	
		$("#sconst").children(":selected").css("background-color","#f7dddd").prop("disabled", true);
	$("#submitconfig").prop('disabled',true);
	Type1star_Flag=1;
	$("#freqAnswer").prop('hidden',false);
	event.preventDefault();
	counter=counter+1;
//	console.log("counter = "+counter);
	vibrate2= setInterval(animImg,500);
	vibrate= setInterval(springAnimation2,2000);
//	console.log("Start");
	FrequencyGraph();
	
	
	stop.node.style.pointerEvents = 'auto';
})

stop.click(function(){
	$("#checkAnsAcceleration").prop('disabled',true);
	clearInterval(vibrate2);
	clearInterval(vibrate);
	$('#graph-div').html('');
	$("#modelMsg").html("<b class='boldTextRed'>Select Another Configrations</b>");
	 var mimic_T1=document.getElementById('hour').innerText = returnData(hour);
  	 var mimic_T2=document.getElementById('minute').innerText = returnData(minute);
  	 var mimic_T3=document.getElementById('second').innerText = returnData(second);
  	 timeOfMimic= mimic_T1+":"+mimic_T2+":"+mimic_T3;
//  	 addToTimerMasterJson();
  //	 console.log("Mimic Type1 : "+mimic_T1+":"+mimic_T2+":"+mimic_T3);
	 reset();
//	 mainPage();
		$("#freqAnswer").prop('hidden',true);
		$("#convertFreq").prop('hidden',true);
		$("#AccelerationAnswer").prop('hidden',true);
		$("#mass").prop("selectedIndex", 0);
		$("#massDisplacement").prop("selectedIndex", 0);
		$("#sconst").prop("selectedIndex", 0);
		$("#mass").prop('disabled',false);
		$("#massDisplacement").prop('disabled',false);
		$("#sconst").prop('disabled',false);
		$("#submitconfig").prop('disabled',false);
		
		document.getElementById('calFreqInput').value = '';
		document.getElementById('ConvrtFreqInput').value = '';
		document.getElementById('acelerateInput').value = '';
		$("#checkAsnFrequency").prop('disabled',false);
		$("#checkConvertFreq").prop('disabled',false);
		$("#checkAnsAcceleration").prop('disabled',false);
		startTimer();

stop.node.style.pointerEvents = 'none';
})

}


function addToMasterJSON(){
 tempJson={};
						tempJson.mass_M = mass_M;
						tempJson.displasment = displasment;
						tempJson.springConstant_K = springConstant_K;
						tempJson.clculatedFrequency=clculatedFrequency;
						tempJson.convertFq = convertFq;
						tempJson.acceleration = acceleration;
						
						
						ArrayJson.push(tempJson);
						TimeMasterJson.demo = ArrayJson;
//						console.log(TimeMasterJson);
						tableCreate(TimeMasterJson);

}
  