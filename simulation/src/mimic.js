

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
function mimic(massSelect,massDSelect,sconstSelect){
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
var x1=220;
var y1=100;
var time=1000;
var application=1;
var middleRod;
 mass_M=parseFloat(massSelect);  //kg 
				console.log("mass_M = "+mass_M);
//mass displacement (acceleration)
 displasment=parseFloat(massDSelect);;
				console.log("displasment = "+displasment);
// unit is N/m
 springConstant_K=parseFloat(sconstSelect);
				console.log("springConstant_K = "+springConstant_K);
//natural frequency formula
 freq=springConstant_K/mass_M;
 				console.log("freq = "+freq);
 clculatedFrequency1 = Math.sqrt(freq);
 clculatedFrequency = clculatedFrequency1.toFixed(2);
 				console.log("clculatedFrequency = "+clculatedFrequency);
 //var pi2=2*3.14;
 
 convertFq1=clculatedFrequency/6.28;
  convertFq= convertFq1.toFixed(2);
 				console.log("convertFq = "+convertFq);
  //maximum acceleration (Unit is m/s^a)
 acceleration1=(clculatedFrequency^2)*displasment;
 acceleration=acceleration1.toFixed(2);
				console.log("acceleration = "+acceleration);

var start=paper.rect((x1+50),(y1-80),100,30).attr({'fill':'pink'});
paper.text((x1+100),(y1-65),"START").attr({'font-size':14});

var stop=paper.rect((x1+175),(y1-80),100,30).attr({'fill':'pink'});
paper.text((x1+225),(y1-65),"STOP").attr({'font-size':14});

var reset=paper.rect((x1+300),(y1-80),100,30).attr({'fill':'pink'});
paper.text((x1+350),(y1-65),"RESET").attr({'font-size':14});


var frame,shaker,spring,dashpot;

design();
function design(){
 frame=paper.path("M"+(x1+388)+" "+(y1+50)+" "+"l 200 0 l 0 343 l -200 0 z").attr({'stroke-width':15,'stroke':'#595959'});
 shaker=paper.path("M"+(x1+338)+" "+(y1+401)+" "+"l 300 0 l l 0 60 l -300 0 l 0 -60").attr({'fill':'180-#393b3c-#999-#fff-#393b3c'});
var Name1 =paper.text((x1+478),(y1+480),"Shaker").attr({'font-size':25});
var Name2= paper.text((x1+65),(y1+480),"Representation of Capacitance").attr({'font-size':25});
 dashpot=paper.path("M "+(x1+447)+" "+(y1+386)+" "+"l 0 -60 l 75.5 0  l 0 60  z").attr({'fill':'#DBCF5C'});

spring=paper.path("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l 20 12  l -40  12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -20 12  l 0 20   "
					+ "l 35 0  l 0 60  l -30 0 l 0 55 l 30 0 l 0 10 l -70 0 l0 -10 l 30 0  l0 -55  l -30 0   l 0 -30 l -146 0    l 146 0  l 0 -30  l 35 0"
					+'l 0 -20  l 20 -12  l -40  -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -20 -12  l 0 -20 ').attr({'fill':'270-#fff-#999','stroke-width':2});


// spring=paper.path("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l 20 12  l -40  12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -20 12  l 0 20   "
//					+ "l 35 0  l 0 60  l -30 0 l 0 55 l 30 0 l 0 10 l -70 0 l0 -10 l 30 0  l0 -55  l -30 0   l 0 -30 l -95 0  l 0 15 l -25 -15 l 25 -15 l 0 15  l 95 0  l 0 -30  l 35 0"
//					+'l 0 -20  l 20 -12  l -40  -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -20 -12  l 0 -20 ').attr({'fill':'270-#fff-#999'});
//
// dashpot=paper.path("M "+(x1+445)+" "+(y1+386)+" "+"l 0 -60 l 35 0 M "+(x1+490)+" "+(y1+326)+"l 35 0  l 0 60  ").attr({'fill':'red'});
//
voltage= paper.path("M"+(x1+102)+" "+(y1+120)+"l 0 -150 l 220 0 l 0 50 l 0 -50 l 300 0 l 0 -30 l 100 0 l 0 60 l -100 0 l 0 -30 ");
 

//var spring2=paper.path("M "+(x1+450)+" "+(y1+56)+" "+"l 0 20  l 20 10  l -40  10  l 40 10  l -40 10  l 40 10  l -40 10  l 40 10  l -40 10  l 40 10  l -20 10  l 0 20   "
//					+ "l 35 0  l 0 60  l -30 0 l 0 55 l 20 0 l 0 10 l -50 0 l0 -10 l 20 0  l0 -55  l -30 0    l 0 -60  l 35 0");
}
//function expandSpring(){
//	spring.attr({'stroke':'red'});
//	var transform_spring = Raphael.transformPath("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l20 16.4  l-40  16.4  l40 16.4  l-40 16.4  l40 16.4  l-40 16.4  l40 16.4  l-40 16.4  l40 16.4  l-20 15  l 0 20   "
//					+ "l 35 0  l 0 60  l -30 0 l 0 55 l 20 0 l 0 10 l -50 0 l0 -10 l 20 0  l0 -55  l -30 0    l 0 -30 l -95 0  l 0 15 l -25 -15 l 25 -15 l 0 15  l 95 0  l 0 -30  l 35 0"
//					+"l 0 -20  l 20 -16.4  l -40  -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -20 -16.4  l 0 -20" );
//
//	spring.animate({path:transform_spring }, 500);
//	console.log("Expand Spring");
//}
//
//function compresSpring(){
//	spring.attr({'stroke':'green'});
//		var transform_spring1 = Raphael.transformPath("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l 20 12  l -40  12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -20 12  l 0 20   "
//					+ "l 35 0  l 0 60  l -30 0 l 0 55 l 20 0 l 0 10 l -50 0 l0 -10 l 20 0  l0 -55  l -30 0   l 0 -30 l -95 0  l 0 15 l -25 -15 l 25 -15 l 0 15  l 95 0  l 0 -30  l 35 0"
//					+"l 0 -20  l 20 -12  l -40  -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -20 -12  l 0 -20");
//
//	spring.animate({path:transform_spring1}, 500);
//	console.log("Compres Spring");
//}
//
function expandSpring(){
	
	spring.attr({'stroke':'red'});
	var transform_spring = Raphael.transformPath("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l20 16.4  l-40  16.4  l40 16.4  l-40 16.4  l40 16.4  l-40 16.4  l40 16.4  l-40 16.4  l40 16.4  l-20 15  l 0 20   "
					+ "l 35 0  l 0 60  l -30 0 l 0 55 l 20 0 l 0 10 l -50 0 l0 -10 l 20 0  l0 -55  l -30 0    l 0 -30 l -146 0  l 146 0  l 0 -30  l 35 0"
					+"l 0 -20  l 20 -16.4  l -40  -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -40 -16.4  l 40 -16.4  l -20 -16.4  l 0 -20" );

	spring.animate({path:transform_spring }, 500);
//	shaker.animate({path:"M"+(x1+338)+" "+(y1+386)+" "+"l 300 0 l l 0 60 l -300 0 l 0 -60"},1000).attr({'fill':'180-#393b3c-#999-#fff-#393b3c'});
//			frame.animate({path:"M"+(x1+388)+" "+(y1+35)+" "+"l 200 0 l 0 343 l -200 0 l 0 -344"},1000).attr({'stroke-width':15,'stroke':'#595959'});
//dashpot.animate({path:"M "+(x1+447)+" "+(y1+371)+" "+"l 0 -60 l 75.5 0  l 0 60  z"},1000).attr({'fill':'#DBCF5C'});

//	middleRod.animate({transform: ['t',13.4, 0]}, 1000);
	console.log("Expand Spring");
}

function compresSpring(){
//		shaker.animate({path:"M"+(x1+338)+" "+(y1+401)+" "+"l 300 0 l l 0 60 l -300 0 l 0 -60"},1000).attr({'fill':'180-#393b3c-#999-#fff-#393b3c'});
//			frame.animate({path:"M"+(x1+388)+" "+(y1+50)+" "+"l 200 0 l 0 343 l -200 0 z"},1000).attr({'stroke-width':15,'stroke':'#595959'});
//
//	dashpot.animate({path:"M "+(x1+447)+" "+(y1+386)+" "+"l 0 -60 l 75.5 0  l 0 60  z"},1000).attr({'fill':'#DBCF5C'});
//
	spring.attr({'stroke':'green'});
		var transform_spring1 = Raphael.transformPath("M "+(x1+485)+" "+(y1+56)+" "+"l 0 20  l 20 12  l -40  12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -20 12  l 0 20   "
					+ "l 35 0  l 0 60  l -30 0 l 0 55 l 20 0 l 0 10 l -50 0 l0 -10 l 20 0  l0 -55  l -30 0   l 0 -30 l -146 0   l 146 0  l 0 -30  l 35 0"
					+"l 0 -20  l 20 -12  l -40  -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -20 -12  l 0 -20");

	spring.animate({path:transform_spring1}, 500);
	console.log("Compres Spring");
}


var line1,line2,middleRod;
var p1=paper.rect((x1-202),(y1-10),35,30).attr({'fill':'0-#888-#fff-#888'});
var p2=paper.rect((x1-202),(y1+493),35,30).attr({'fill':'0-#888-#fff-#888'});

var p3=paper.rect((x1+303),(y1-10),35,30).attr({'fill':'0-#888-#fff-#888'});
var p4=paper.rect((x1+303),(y1+493),35,30).attr({'fill':'0-#888-#fff-#888'});
capasitiveAccelerometer();
function capasitiveAccelerometer(){
var rightE=paper.path("M "+(x1+265)+" "+(y1+110)+" "+"l -400 0 l 0 100 l 25 0 l 0 -60 l 50 0 l 0 60 l 25 0 l 0 -60  "
			+"l 50 0 l 0 60 l 25 0 l 0 -60 l 50 0 l 0 60 l 25 0 l 0 -60 l 50 0 l 0 60 l 25 0 l 0 -60 l 50 0 l 0 60 l 25 0 l 0 -100").attr({'fill':'#5579C6'});		
var leftE=paper.path("M "+(x1+265)+" "+(y1+410)+" "+"l -400 0 l 0 -100 l 25 0 l 0 60 l 50 0 l 0 -60 l 25 0 l 0 60  "
			+"l 50 0 l 0 -60 l 25 0 l 0 60 l 50 0 l 0 -60 l 25 0 l 0 60 l 50 0 l 0 -60 l 25 0 l 0 60 l 50 0 l 0 -60 l 25 0 l 0 100").attr({'fill':'#5579C6'});
middleRod=paper.image("images/Cathod.png",(x1-178.5),(y1+144),495,230);


// middleRod=paper.path("M "+(x1+30)+" "+(y1+10)+"l 70 0  l 0 90  l 60 0 l 0 20 l-60 0  l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 90"
//						+"M "+(x1+100)+" "+(y1+510)+"l -70 0 l 0 -90 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -90 ");
//middleRod.attr({'stroke':'#F7AD19','fill':'#F7AD19','stroke-width':1}).rotate(90);		
line1=paper.path("M "+(x1-185)+" "+(y1+10)+" "+" l 0 0  A 0 0 0 0 1 "+(x1-185)+" "+(y1+500)+"l 0 0 M").attr({'stroke-width':16,'stroke':'#888'});
line2=paper.path("M "+(x1+320)+" "+(y1+10)+" "+" l 0 0  A 0 0 0 0 1 "+(x1+320)+" "+(y1+500)+"l 0 0 M").attr({'stroke-width':15,'stroke':'#888'});



p1.toFront();
p2.toFront();
p3.toFront();
p4.toFront();
}	


//			line1.animate({path :"M "+(x1-185)+" "+(y1+10)+" "+" l 0 0  A 0.2 4 0 1 1 "+(x1-185)+" "+(y1+500)+"l 0 0 M"},1000 );
//
	


function springAnimation(){
	
	var arr=[];	
	
		arr[0]=paper.path("M "+(x1-100)+" "+(y1+91)+" "+" l 0 0 ");
		arr[0].animate({path :"M "+(x1-100)+" "+(y1+91)+" "+" l 0 0 "},0, function(){
			
//				middleRod=paper.path("M "+(x1+17)+" "+(y1+10)+"l 70 0  l 0 90  l 60 0 l 0 20 l-60 0  l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 90"
//						+"M "+(x1+87)+" "+(y1+510)+"l -70 0 l 0 -90 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -90 ").attr({'stroke':'#F7AD19','fill':'#F7AD19','stroke-width':1}).rotate(90);	
			middleRod.animate({transform: ['t',-13.4, 0]}, 1000);
			line1.animate({path :"M "+(x1-185)+" "+(y1+10)+" "+" l 0 0  A 0.2 4 0 1 0 "+(x1-185)+" "+(y1+500)+"l 0 0 M"},1000 );
			line2.animate({path :"M "+(x1+320)+" "+(y1+10)+" "+" l 0 0  A 0.2 4 0 1 0 "+(x1+320)+" "+(y1+500)+"l 0 0 M"},1000 );


		
//			line1.animate({path :"M "+(x1-70)+" "+(y1+10)+" "+" l 0 0  A -5 0.3  0 1 0 "+(x1+350)+" "+(y1+10)+"l 0 0 M"},100 );
//			line2.animate({path :"M "+(x1-70)+" "+(y1+513)+" "+" l 0 0  A -5 0.3  0 1 0 "+(x1+350)+" "+(y1+513)+"l 0 0 M"},100 );
//			middleRod.animate({path:"M "+(x1+107)+" "+(y1+23)+"l 70 0  l 0 90  l 60 0 l 0 20 l-60 0  l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 90"
//									+"M "+(x1+177)+" "+(y1+523)+"l -70 0 l 0 -90 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -90 "},100);
////			middleRod.attr({'stroke':'#F7AD19','fill':'#F7AD19','stroke-width':1});
		expandSpring();
	frame.toFront();
		
		arr[1]=paper.path('M'+(x1+-100)+ ' ' +(y1+91)+ 'l 0 0');
		arr[1].animate({path :"M"+(x1-100)+" "+(y1+91)+ "l 0 0"},1000, function(){
//			middleRod=paper.path("M "+(x1+44.5)+" "+(y1+10)+"l 70 0  l 0 90  l 60 0 l 0 20 l-60 0  l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 90"
//						+"M "+(x1+114.5)+" "+(y1+510)+"l -70 0 l 0 -90 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -90 ").attr({'stroke':'#F7AD19','fill':'#F7AD19','stroke-width':1}).rotate(90);	
			middleRod.animate({transform: ['t',13.4, 0]}, 1000);
			line1.animate({path :"M "+(x1-185)+" "+(y1+10)+" "+" l 0 0  A 0.2 4 0 1 1 "+(x1-185)+" "+(y1+500)+"l 0 0 M"},1000 );
			line2.animate({path :"M "+(x1+320)+" "+(y1+10)+" "+" l 0 0  A 0.2 4 0 1 1 "+(x1+320)+" "+(y1+500)+"l 0 0 M"},1000 );
	


			
			
//			line1.animate({path :"M "+(x1-70)+" "+(y1+10)+" "+" l 0 0  A -5 0.3  0 0 1 "+(x1+350)+" "+(y1+10)+"l 0 0 M"},100 );
//			line2.animate({path :"M "+(x1-70)+" "+(y1+513)+" "+" l 0 0  A -5 0.3  0 0 1 "+(x1+350)+" "+(y1+513)+"l 0 0 M"},100 );
//			middleRod.animate({path :"M "+(x1+107)+" "+(y1-2)+"l 70 0  l 0 90  l 60 0 l 0 20 l-60 0  l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 55 l 60 0 l 0 20 l-60 0 l 0 90"
//				+"M "+(x1+177)+" "+(y1+498)+"l -70 0 l 0 -90 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -55 l -60 0 l 0 -20 l 60 0 l 0 -90 "},100);
//			middleRod.attr({'stroke':'#F7AD19','fill':'#F7AD19','stroke-width':1});
		compresSpring();	
			frame.toFront();

	 		})
		})

}

    
var flag=0;
var vibrate;
var counter=0;
start.click(function(){
	event.preventDefault();
	counter=counter+1;
	console.log("counter = "+counter);
	vibrate= setInterval(springAnimation,2500);
	console.log("Start");
FrequencyGraph();
})
stop.click(function(){
	clearInterval(vibrate);
		console.log("Stop");
//$("#main-div-conf").html('');
 mainPage();
$("#finish").prop('hidden',false);
 $("#finish").click(function() {
		$("#modelMsg").html('<img src="images/cong.gif" class="img-fluid" >');
		$("#finish").prop('hidden',true);

	});
})

reset.click(function(){
	console.log("reset page");
	paper.clear();
 start=paper.rect((x1+50),(y1-80),100,30).attr({'fill':'pink'});
paper.text((x1+100),(y1-65),"START").attr({'font-size':14});

 stop=paper.rect((x1+175),(y1-80),100,30).attr({'fill':'pink'});
paper.text((x1+225),(y1-65),"STOP").attr({'font-size':14});

 reset=paper.rect((x1+300),(y1-80),100,30).attr({'fill':'pink'});
paper.text((x1+350),(y1-65),"RESET").attr({'font-size':14});
	design();
	capasitiveAccelerometer();	
var p1=paper.rect((x1-202),(y1-10),35,30).attr({'fill':'0-#888-#fff-#888'});
var p2=paper.rect((x1-202),(y1+493),35,30).attr({'fill':'0-#888-#fff-#888'});

var p3=paper.rect((x1+303),(y1-10),35,30).attr({'fill':'0-#888-#fff-#888'});
var p4=paper.rect((x1+303),(y1+493),35,30).attr({'fill':'0-#888-#fff-#888'});

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
						console.log(TimeMasterJson);
						tableCreate(TimeMasterJson);

}
  