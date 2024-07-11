
var m;
var displasment2;
var springConstant_K2;
var springConstant_Val;
var f;
var clculatedFrequency2, convertFq2, a;
var ArrayJson2=[];
var MasterJson2={};

function mimic2(massSelect,massDSelect,sconstSelect,forceSelect){
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
var x = 565;
var y = 451;
var x1=20;
var y1=100;
var start=paper.image("images/startBtn.png",(x1),(y1-90), 118,120);
var stop=paper.image("images/stopBtn.png",(x1+130),(y1-90), 120,120);


m=parseFloat(massSelect);
displasment2=parseFloat(massDSelect);
springConstant_K2=parseFloat(sconstSelect);
f=parseFloat(forceSelect);
a=f/m;
acceleration2=a.toFixed(2);
console.log("f= "+f+", m= "+m+"  : calculated value of A= "+acceleration2);


springConstant_Val=springConstant_K2*1000;
console.log("springConstant = "+springConstant_K);
//natural frequency formula
 freq=springConstant_Val/m;
 	console.log("freq = "+freq);
 clculatedFrequency1 = Math.sqrt(freq);
 clculatedFrequency = clculatedFrequency1.toFixed(2);
 	console.log("clculatedFrequency = "+clculatedFrequency);
 //var pi2=2*3.14;
 
 convertFq1=clculatedFrequency/6.28;
  convertFq= convertFq1.toFixed(2);
 				console.log("convertFq = "+convertFq);
  //maximum acceleration (Unit is m/s^a)
 var acceleration=(clculatedFrequency^2)*displasment;
 var acceleration3=acceleration.toFixed(2);
				console.log("acceleration = "+acceleration3);


//meterguage3();

//	Meter_weight=20;
//	console.log("Weight With Error = "+Meter_weight);			
//	unit1=270/100;
//	console.log("unit1 = "+unit1);
//	angle= unit1*Meter_weight;  	
//	console.log("angle = "+angle);	

//meter 100   
   function meterguage3(){
	var x1 = x-528 ;
	var  y1 = y-307;
//Border circle
	var circleB1 = paper.circle(x1+200, y1+98, 99).attr({'stroke':'#7a7979','stroke-width': 1});
	var circleB2 = paper.circle(x1+200, y1+98, 94).attr({'stroke':'#ededed','stroke-width': 5});	
	var circleB3 = paper.circle(x1+200, y1+98, 92).attr({'stroke':'#c7c5c5'}); 
    var circle1 = paper.circle(x1+200, y1+98, 58).attr({'stroke':'black','stroke-width': 2}); 
    var circle1 = paper.circle(x1+200, y1+98, 55).attr({'stroke':'#0293e0','stroke-width': 2});
 	
 //center point
 	var circle2 = paper.circle(x1+200, y1+98, 6).attr({'fill' :'black','stroke-width': 2});
 	var circle2_small = paper.circle(x1+200, y1+98, 5).attr({'fill' :'red'}); 	
 	triangle=paper.path('M' + (x1+200) + ' ' + (y1+121) + 'l -47 30 l 94 0 z  ').attr({'stroke' :'white','fill':'white','stroke-width':13});
 	var range1= paper.path('  '
		//1to 5
			  +'M'+(x1+157)+' '+(y1+136) + 'l -7 5.5     M'+(x1+155)+' '+(y1+134) + 'l -7 5         M'+(x1+153.5)+' '+(y1+132) + 'l -7 4.5      M'+(x1+152)+' '+(y1+129.5)+ 'l -7 4.5    M'+(x1+150)+' '+(y1+127)+ 'l -10 6'     
		//6 to 10	  
			  +'M'+(x1+149)+' '+(y1+124.9)+ 'l -7 4      M'+(x1+147.5)+' '+(y1+122.5)+ 'l -7 3.4    M'+(x1+146)+' '+(y1+120)+ 'l -7 3           M'+(x1+145)+' '+(y1+117.5)+ 'l -7 2.5    M' + (x1+144) + ' ' + (y1+115) + 'l -10 3'
		//11 to 15 
			  +'M'+(x1+143.5)+' '+(y1+112.5)+'l -7 1.5   M'+(x1+143)+' '+(y1+110)+'l -7 1           M'+(x1+142.5)+' '+(y1+107)+'l -7 1          M'+(x1+142)+' '+(y1+104)+'l -7 1         M' + (x1+141) + ' ' + (y1+101.5) + 'l -10 0.7'   
		//16 to 20	  
			  +'M'+(x1+141.5)+' '+(y1+99)+ 'l -7 0       M'+(x1+142)+' '+(y1+96)+ 'l -7 -0.5        M'+(x1+142)+' '+(y1+93)+ 'l -7 -0.5         M'+(x1+142)+' '+(y1+90.8)+ 'l -7 -1       ' 
		//21 to 25	  
			  +'M'+(x1+143)+' '+(y1+85)+'l -7 -2         M'+(x1+144)+' '+(y1+82)+'l -7 -2           M'+(x1+145)+' '+(y1+79.3)+'l -7 -2          M'+(x1+146)+' '+(y1+77)+'l -7 -2.8       M'+(x1+147)+' '+(y1+74.3)+'l l -10 -4.5'
		//26 to 30	 	 
			  +'M'+(x1+148)+' '+(y1+71.5)+'l -7 -3       M'+(x1+149)+' '+(y1+69)+'l -7 -3.5         M'+(x1+151)+' '+(y1+67)+'l -7 -4            M'+(x1+152.2)+' '+(y1+64.5)+'l -7 -4     M'+(x1+154)+' '+(y1+62.4)+'l -10  -6.6 '		 
		//31 to 35	  
			  +'M'+(x1+156)+' '+(y1+60.5)+'l -7 -5       M'+(x1+158)+' '+(y1+59)+'l -7 -5.5         M'+(x1+160)+' '+(y1+57)+'l -7 -6            M'+(x1+162)+' '+(y1+55)+'l -7 -6.5       M'+(x1+164)+' '+(y1+53.5)+'l -9  -10.5 '     
		//36 to 40	 
			  +'M'+(x1+166)+' '+(y1+52)+'l -6 -7         M'+(x1+167)+' '+(y1+49)+'l -5 -6.5         M'+(x1+170)+' '+(y1+48)+'l -5 -7            M'+(x1+173)+' '+(y1+47.7)+'l -5.4  -9.5  M' + (x1+200) + ' ' + (y1+39.2) + 'l 0 -10.2'			  			  
		//41 to 45	  
			  +'M'+(x1+177.5)+' '+(y1+44)+'l -3 -7       M'+(x1+180)+' '+(y1+43)+'l -3 -7           M'+(x1+182.2)+' '+(y1+42)+'l -2.6 -7        M'+(x1+185)+' '+(y1+41)+'l -2 -7         M'+(x1+187)+' '+(y1+41)+'l -2 -10.5  '     
	    //46 to 50
			  +'M'+(x1+190)+' '+(y1+40)+'l -1 -7         M'+(x1+193)+' '+(y1+39.5)+'l -1 -7         M'+(x1+195.2)+' '+(y1+39)+'l -0.5 -6.5      M'+(x1+197.6)+' '+(y1+39)+'l -0.1 -7     '
		//51 to 55	  
			  +'M'+(x1+203)+' '+(y1+39.5)+'l 0.5 -7      M'+(x1+206)+' '+(y1+39.5)+'l 1 -7          M'+(x1+209)+' '+(y1+39.5)+'l 1.1 -7         M'+(x1+211.8)+' '+(y1+40.5)+'l 1.5 -7    M'+(x1+214)+' '+(y1+41)+'l 3.3 -10.5'       
		//56 to 60	  
			  +'M'+(x1+216.3)+' '+(y1+41.6)+'l 3 -7      M'+(x1+219.2)+' '+(y1+42.2)+'l 3 -7        M'+(x1+222)+' '+(y1+43.7)+'l 3 -7           M'+(x1+224.7)+' '+(y1+44.7)+'l 3.7 -7'    		  
		//61 to 65	  
			  +'M'+(x1+230)+' '+(y1+48)+'l 4.9 -7        M'+(x1+232)+' '+(y1+50)+'l 5 -7            M'+(x1+234)+' '+(y1+51.7)+'l 5.7 -7         M'+(x1+236)+' '+(y1+53.5)+'l 6 -7        M'+(x1+239)+' '+(y1+54.2)+'l 8.5 -8.7    '     
		//66 to 70	  
			  +'M'+(x1+239.7)+' '+(y1+57)+'l 6.8 -6      M'+(x1+241.5)+' '+(y1+59)+'l 6.8 -6        M'+(x1+243.5)+' '+(y1+61)+'l 7 -6           M'+(x1+246)+' '+(y1+62.5)+'l 7 -5.8      M' + (x1+248) + ' ' + (y1+64) + 'l 10 -6      '
		//71 to 75	  
			  +'M'+(x1+249)+' '+(y1+66.4)+'l 7 -4        M'+(x1+251)+' '+(y1+69)+'l 7 -4            M'+(x1+252)+' '+(y1+71.8)+'l 7 -3.5         M'+(x1+254)+' '+(y1+74)+'l 7 -3          M'+(x1+254)+' '+(y1+76.5)+'l 10  -3.5'	  
	    //76 to 80
			  +'M'+(x1+256)+' '+(y1+79)+'l 7 -2          M'+(x1+256.5)+' '+(y1+82)+'l 7 -2          M'+(x1+257.5)+' '+(y1+85)+'l 7 -1.7         M'+(x1+258)+' '+(y1+87.1)+'l 7 -1.5'   
		//81 to 85
			  +'M'+(x1+258.9)+' '+(y1+92.5)+'l 7 -0.5    M'+(x1+259)+' '+(y1+95)+'l 7 0             M'+(x1+259)+' '+(y1+98)+'l 7 0              M'+(x1+259)+' '+(y1+101)+'l 7 0          M'+(x1+258.8)+' '+(y1+104)+'l 10 0.4'
		//86 to 90
			  +'M'+(x1+258)+' '+(y1+106.5)+'l 7 1        M'+(x1+257.7)+' '+(y1+109.5)+'l 7 1.5      M'+(x1+257)+' '+(y1+112)+'l 7 2             M'+(x1+256)+' '+(y1+114.5)+'l 7 2        M' + (x1+255.5) + ' ' + (y1+117) + 'l 10 4'
		//91 to 95	  
			  +'M'+(x1+254.6)+' '+(y1+119.5)+'l 7 3      M'+(x1+253)+' '+(y1+122.5)+'l 7 3          M'+(x1+252)+' '+(y1+125)+'l 7 3             M'+(x1+250)+' '+(y1+127)+'l 7 4          M'+(x1+249)+' '+(y1+129)+'l 10 7 '
		//96 to 100	  
			  +' M'+(x1+247)+' '+(y1+131)+'l 7 5         M'+(x1+245.5)+' '+(y1+133.7)+'l 7 5        M'+(x1+243.4)+' '+(y1+135)+'l 7 6           M'+(x1+242.5)+' '+(y1+138)+'l 6 6');

 	 mline= paper.path('M' + (x1+195) + ' ' + (y1+100) + 'l -45 46   l 48 -42    M' + (x1+200) + ' ' + (y1+91) + ' l 7 -15  A 15 15 0 0 1 '+ (x1+222) + ' ' + (y1+91) +'l -15 7  z M' ).attr({'stroke-width':1, 'fill':'black'});
	
 	var meter_range1= paper.path('M' + (x1+159) + ' ' + (y1+138) + 'l -10 9     M' + (x1+142) + ' ' + (y1+88)+'l -10 -2    M'+ (x1+175)+ ' ' +(y1+45)+ 'l -5 -10.5        M' + (x1+227) + ' ' + (y1+47) + 'l 6 -10       M' + (x1+257) + ' ' + (y1+90) + 'l 12 -1.5       M' + (x1+239.5) + ' ' + (y1+139) + 'l 8.5 10').attr({'fill' :'black','stroke-width':2}); 	
 	             paper.text((x1+143),(y1+152),'0').attr({'stroke-width':5,'font-size':15}).transform( 'r50');    
 	             paper.text((x1+123),(y1+85),'20').attr({'stroke-width':5,'font-size':15}).transform( 'r-80');  
 	             paper.text((x1+166),(y1+27),'40').attr({'stroke-width':5,'font-size':15}).transform( 'r-25');  
 	             paper.text((x1+237),(y1+30),'60').attr({'stroke-width':5,'font-size':15}).transform( 'r30');  
 	             paper.text((x1+278),(y1+87),'80').attr({'stroke-width':5,'font-size':15}).transform( 'r80');  
 	             paper.text((x1+253),(y1+155),'100').attr({'stroke-width':5,'font-size':15}).transform( 'r-41');  
 	 // paper.text((x1+198),(y1+150),'kg/cm').attr({'stroke-width':4,'font-size':13}); 
 	//var square=	paper.text((x1+218),(y1+145),'2').attr({'stroke-width':4,'font-size':8});
 	// s=paper.text((x1+200),(y1+165),'psi').attr({'font-size':12,'fill':'#0293e0' });
 	s1=  paper.text((x1+198),(y1+150),'V').attr({'stroke-width':4,'font-size':13}); 
	mline.toFront();

}



var rmin = -2.3 ;
var rmax = 2.5;
var Meter_weight,Error_val,Total_weight;
var frame;
var shaker;
var Name1;
var dashpot;
var PiezoCrystal
var c11,c12,c13,c14;
var c21,c22,c23,c24;
var d11,d12,d13;
var d21,d22,d23;
var spring;
var mName;
design();
	function design(){
	   //dashpot=paper.path("M "+(x1+408)+" "+(y1+384)+" "+"l 0 -104 l 159 0  l 0 104  z").attr({'stroke-width':7,'stroke':'#c8a6de','fill':'90-#c8a6de-#ddf-#fdd-#dfe-#ffd-#fde-#edf-#c8a6de'});
//	   	   dashpot=paper.path("M "+(x1+409)+" "+(y1+384)+" "+"l 0 -104 l 159 0  l 0 104  z").attr({'stroke-width':7,'stroke':'#A3653B','fill':'90-#c25a16-#DBCF5C-#dacbab-#DBCF5C-#c25a16'});
//	dashpot=paper.image("images/c3.png",(x1+405),(y1+278), 165,110);
	    PiezoCrystal=paper.image("images/c9.png",(x1+407),(y1+278), 160,56);
	    dashpot=paper.path("M "+(x1+408)+" "+(y1+385)+" "+"l 0 -50 l 159 0  l 0 50  z").attr({'stroke-width':2,'fill':'00-#464647-#999-#fff-#999-#464647'});

	    frame=paper.path("M"+(x1+388)+" "+(y1+50)+" "+"l 200 0 l 0 343 l -200 0 z").attr({'stroke-width':15,'stroke':'#595959'});
//	    shaker=paper.path("M"+(x1+338)+" "+(y1+401)+" "+"l 300 0 l l 0 60 l -300 0 l 0 -60").attr({'fill':'180-#393b3c-#999-#fff-#393b3c'});
	    shaker=paper.image("images/shakerImg.png",(x1+338),(y1+398),300,55);
	    Name1 =paper.text((x1+488),(y1+467),"Shaker").attr({'font-size':25});
	 	
	 	name1=paper.text((x1+487),(y1+305),"Piezoelectric Material").attr({'font-size':15});
		//name2=paper.text((x1+487),(y1+310),"Material ").attr({'font-size':15});

		spring=paper.path("M "+(x1+487)+" "+(y1+56)+" "+"l 0 20  l 20 12  l -40  12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -20 12  l 0 20   "
					+'l 80 0  l 0 60  l -160 0  l 0 -60 l 80 0'
					+'l 0 -20  l 20 -12  l -40  -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -20 -12  l 0 -20 '
					).attr({'fill':'00-#464647-#999-#fff-#999-#464647','stroke-width':2});
		mName=paper.text((x1+487),(y1+245),"Mass = "+m).attr({'font-size':20});
	
	}
	
//	function shakerAnimDown(){
//		transform_shaker1=paper.path("M"+(x1+338)+" "+(y1+401)+" "+"l 300 0 l 0 60 l -300 0 l 0 -60").attr({'fill':'180-#393b3c-#999-#fff-#393b3c'})	  
//		shaker.animate({path:transform_shaker1}, 500);
//	}
//	
//	
//	function shakerAnimUp(){
//		transform_shaker2=paper.path("M"+(x1+338)+" "+(y1+401)+" "+"l 300 0 l 0 70 l -300 0 l 0 -70").attr({'fill':'180-#393b3c-#999-#fff-#393b3c'})	  
//		shaker.animate({path:transform_shaker2}, 500);
//	}
	

	function expandSpring(){	
		//spring.attr({'stroke':'red'});
		
		var transform_shaker = Raphael.transformPath("M"+(x1+338)+" "+(y1+401)+" "+"l 300 0 l l 0 80 l -300 0 l 0 -80");
//		shaker.animate({path:transform_shaker}, 100);
		
		var transform_spring = Raphael.transformPath("M "+(x1+487)+" "+(y1+56)+" "+"l 0 20  l 20 15  l-40  15  l40 15  l-40 15  l40 15  l-40 15  l40 15  l-40 15  l40 15  l-20 15  l 0 20   "
								+'l 80 0  l 0 60  l -160 0  l 0 -60 l 80 0'
								+"l 0 -19  l 20 -15  l -40  -15  l 40 -15  l -40 -15  l 40 -15  l -40 -15  l 40 -15  l -40 -15  l 40 -15  l -20 -15  l 0 -20" );
		
		spring.animate({path:transform_spring }, 100);
		mName.animate({y: y1+275}, 100);
		var transform_dashpot=Raphael.transformPath("M "+(x1+405)+" "+(y1+278)+" "+"l 0 -60 l 157 0  l 0 60  z");
		//dashpot=paper.path("M "+(x1+427)+" "+(y1+386)+" "+"l 0 -60 l 120 0  l 0 60  z").attr({'stroke-width':2,'stroke':'#595959','fill':'#DBCF5C'});
		//dashpot.animate({path:transform_dashpot }, 500);
		var dAnimation = Raphael.animation({ 'width': 160, 'height':40, 'x': (x1+407), 'y': (y1+300) }, 100);
	    PiezoCrystal.animate( dAnimation );
		name1.animate({y:y1+320}, 100).toFront();
	
	}
	
	function compresSpring(){
		//spring.attr({'stroke':'green'});
		var transform_shaker = Raphael.transformPath("M"+(x1+338)+" "+(y1+401)+" "+"l 300 0 l l 0 60 l -300 0 l 0 -60");
//		shaker.animate({path:transform_shaker}, 100);
		
		var transform_spring1 = Raphael.transformPath("M "+(x1+487)+" "+(y1+56)+" "+"l 0 20  l 20 12  l -40  12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -40 12  l 40 12  l -20 12  l 0 20   "
						//+ "l 35 0  l 0 60  l -30 0 l 0 55 l 30 0 l 0 10 l -70 0 l0 -10 l 30 0  l0 -55  l -30 0   l 0 -30   l 0 -30  l 35 0"
						+'l 80 0  l 0 60  l -160 0  l 0 -60 l 80 0'
						+'l 0 -20  l 20 -12  l -40  -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -40 -12  l 40 -12  l -20 -12  l 0 -20 ');
		spring.animate({path:transform_spring1}, 100);
		mName.animate({y: y1+245}, 100);
		//dashpot=paper.path("M "+(x1+427)+" "+(y1+386)+" "+"l 0 -160 l 120 0  l 0 160  z").attr({'stroke-width':2,'stroke':'#595959','fill':'#DBCF5C'});
		var transform_dashpot1= Raphael.transformPath("M "+(x1+405)+" "+(y1+278)+" "+"l 0 -108 l 157 0  l 0 108 z"); 
		//dashpot.animate({path:transform_dashpot1}, 500);
		var dAnimation = Raphael.animation({ 'width': 160, 'height': 56, 'x': (x1+407), 'y': (y1+278) }, 100);
		PiezoCrystal.animate( dAnimation );
		
		name1.animate({y:y1+305}, 100).toFront();
	
	}


	function springAnimation(){
//		vibrateShaker= setInterval(shakerAnimUp(),shakerAnimDown(),100);
	
		
		var arr=[];	
		
			arr[0]=paper.path("M "+(x1-100)+" "+(y1+91)+" "+" l 0 0 ");
			arr[0].animate({path :"M "+(x1-100)+" "+(y1+91)+" "+" l 0 0 "},300, function(){
				
				expandSpring();
				frame.toFront();
			
			arr[1]=paper.path('M'+(x1+-100)+ ' ' +(y1+91)+ 'l 0 0');
			arr[1].animate({path :"M"+(x1-100)+" "+(y1+91)+ "l 0 0"},300, function(){
				
				compresSpring();	
				frame.toFront();
	
		 		})
			})
	
	}
	
//	x1+338),(y1+400),300,50
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


var vibrate1;
var flag=0;
var vibrate;
//var counter=0;
start.click(function(){
		$("#freqAnswer").prop('hidden',false);
		event.preventDefault();
		vibrate1= setInterval(animImg,200);
		vibrate= setInterval(springAnimation,200);
		
	
});

stop.click(function(){
		clearInterval(vibrate1);
		clearInterval(vibrate);
		 mainPage2();

	});
}


function addToMasterJSON2(){
 tempJson2={};
						tempJson2.m = m;
						tempJson2.displasment2 = displasment2;
						tempJson2.springConstant_K2 = springConstant_K2;
						tempJson2.f = f;
						tempJson2.acceleration2 = acceleration2;
						
						
						ArrayJson2.push(tempJson2);
						MasterJson2.demo = ArrayJson2;
						console.log(MasterJson2);
						tableCreate2(MasterJson2);

}
  