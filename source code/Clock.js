window.onload= function (){

var paper = new Raphael( 0, 0, 1000, 800);

var backGround = paper.rect(0, 0, 1000, 800);

var tick = 0;



backGround.attr({ fill: "#21405f"});

/* Comment - Add your code here*/

//Watch out look
var strap = paper.rect(320,0,170,800);
strap.attr({fill: "#a1bfde", 'stroke-width': 0});

var strap2 = paper.rect(805,0,10,800);
strap2.attr({fill: "#a1bfde", 'stroke-width': 0});

var side_view1 = paper.rect(780,230,25,360,5);
side_view1.attr({fill:"#3c72aa", 'stroke-width': 0});

var side_view_button = paper.circle(800,400,25);
side_view_button.attr({fill: "#a1bfde", 'stroke-width': 0.5});
side_view_button.node.onclick = function(){
		LoadMenu();

}

var text_side_view = paper.text(800,400,"M");
text_side_view.attr({fill:"#3c72aa","font-size":"20","font-weight":"bold"});


var menu_button = paper.rect(560,380,50,50,5);
menu_button.attr({fill: "#a1bfde", 'stroke-width': 0});
menu_button.node.onclick = function(){
	
	LoadMenu();
	//timer_menu_pause = true ;

}


//Anagloye Clock Variables
var face2 = paper.circle(400,400,200);
face2.attr({ fill:"#3c72aa", 'stroke-width': 0});

var face = paper.circle(400,400,180);
face.attr({ fill:"#21405f", 'stroke-width': 0});

//digital clock value
var display = paper.text(400, 550, "Digital Clock Display");
display.attr({"font-size": 30, "fill":"#c6d9eb", "font-weight": "bold"});


var seconds = paper.rect(397,250,5,150,5);
seconds.attr({ fill: "#a1bfde", 'stroke-width': 0});

var minutes = paper.rect(395,280,10,120,5);
minutes.attr({fill:"#a1bfde", 'stroke-width': 0});
//minutes.attr({fill:"black"});

var hours = paper.rect(395,320,10,80,5);
hours.attr({fill:"#a1bfde", 'stroke-width': 0});



// var clock_display = paper.text(400, 200, "12");
// clock_display.attr({"font-size": 20});

// var clock_display2 = paper.text(400, 550, "6");
// clock_display2.attr({"font-size": 15});

// var clock_display3 = paper.text(200, 400, "9");
// clock_display3.attr({"font-size": 15});

// var clock_display4 = paper.text(600, 400, "3");
// clock_display4.attr({"font-size": 15});

var middle_circle = paper.circle(400,400,7);
middle_circle.attr({fill:"#a1bfde", 'stroke-width': 0});




//Digital Clock Variables
// var d_clock_back1 = paper.rect(380,150,350,140).attr({fill:"white", 'stroke-width': 0});

// var d_clock_back2 = paper.rect(410,170,290,100).attr({fill:"grey", 'stroke-width': 0});

// var d_clock_date0 = paper.text(430, 185, "SUN").attr({fill:"#bfbfbf"});
// var d_clock_date1 = paper.text(470, 185, "MON").attr({fill:"#bfbfbf"});
// var d_clock_date2 = paper.text(510, 185, "TSU").attr({fill:"#bfbfbf"});
// var d_clock_date3 = paper.text(550, 185, "WED").attr({fill:"#bfbfbf"});
// var d_clock_date4 = paper.text(590, 185, "THU").attr({fill:"#bfbfbf"});
// var d_clock_date5 = paper.text(630, 185, "FRI").attr({fill:"#bfbfbf"});
// var d_clock_date6 = paper.text(670, 185, "SAT").attr({fill:"#bfbfbf"});



//buttons Variables
// var button1 = paper.circle(400,100,30).attr({fill:"white", 'stroke-width': 0});
// var button1_text = paper.text(400,100,"Minutes");


//image Variables
var img_day = paper.image("image/sun.png",20,20, 64, 64);
var img_night = paper.image("image/night.png",20,20, 64, 64);

//setting time var
    var today;
    var h;
    var m ;
    var s;
	
	var total_seconds;
	var isDayTime ;

function startTime(){

	
	// today = new Date();
    // h = today.getHours();
    // m = today.getMinutes();
    // s = today.getSeconds();
	
	
	
//Digital time

	total_seconds = total_seconds+1;
	s++;
	
	//h/24 = tick/360
	//analogue Time
	seconds.animate({transform: [ 'r',s*360/60,400,400]});
	minutes.animate({transform:[ 'r',m*360/60,400,400]});
	hours.animate({transform:[ 'r',h*360/12,400,400]});
	//tick = total_seconds*6 ;

   // document.getElementById("time").innerHTML =
   // h + ":" + m + ":" + s;

	display.attr({text:    checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s)  });
	setTimeout(function(){startTime()},1000);


	//Check if day or night theme should be applied
	if(h<=18){
		changeDayTheme();
		isDayTime = true;
	}else{
		changeNightTheme();
		isDayTime = false;
	}
	
	//changeDayTheme();

}




function startTime2(){
	
	
	if(s==59){
		s=-1;
		m++; 
	}
	
	if(m==60){
		m=0;
		h++;
	}
	
	if(h==24){
		h=0;
		s=0;
		m=0;
	}
	
	setTimeout(function(){startTime2()},500);

	
	
}

function LoadClock(){
	
	LoadBackground();
	
	seconds.toFront();
	minutes.toFront();
	hours.toFront();
	middle_circle.toFront();
	display.toFront();



}


function changeDayTheme(){
	backGround.attr({ fill: "#e0edf1", 'stroke-width': 0});
	// d_clock_back1.attr({fill:"white"});
	// d_clock_back2.attr({fill:"#f2f2f2", 'stroke-width': 0});
	
	face2.attr({fill:"white"});
	face.attr({fill:"#f2f2f2"});
	
	side_view1.attr({fill:"white"});
	img_day.show();
	img_night.hide();
	


}

function changeNightTheme(){
	backGround.attr({ fill: "#21405f", 'stroke-width': 0});
	face2.attr({ fill:"#3c72aa", 'stroke-width': 0});
	face.attr({ fill:"#21405f", 'stroke-width': 0});

	
	side_view1.attr({ fill:"#3c72aa", 'stroke-width': 0});
	
	// d_clock_back1.attr({fill:"#3c72aa", 'stroke-width': 0});
	// d_clock_back2.attr({fill:"white", 'stroke-width': 0});
	
	img_day.hide();
	img_night.show();
	

}

function LoadMenu(){
	
		LoadBackground();
	//Clock
	var m_button_clock = paper.circle(320,320,30);
	m_button_clock.attr({fill:"#a1bfde", 'stroke-width': 0});
	m_button_clock.node.onclick = function(){
		LoadClock();
		
		//m_button_clock.hide();
		//m_back.hide();
	}
	
	var m_text_clock = paper.text(320,360,"Clock");
	m_text_clock.attr({fill:"#a1bfde"});
	
	var img_clock = paper.image("image/clock.png",300,300, 40, 40);
	img_clock.node.onclick = function(){
				LoadClock();

	}
	
	//chang_time
	var m_button_change_time = paper.circle(400,320,30);
	m_button_change_time.attr({fill:"#a1bfde", 'stroke-width': 0});
	m_button_change_time.node.onclick = function(){
		
		LoadChangeTime();
		
	}
	
	var m_changTime_clock = paper.text(400,360,"Change Time");
	m_changTime_clock.attr({fill:"#a1bfde"});

	var img_change = paper.image("image/change_time.png",383,300, 40, 40);
	img_change.node.onclick = function(){
				LoadChangeTime();

	}

	//Date
	var m_button_date = paper.circle(480,320,30);
	m_button_date.attr({fill:"#a1bfde", 'stroke-width': 0});
	m_button_date.node.onclick = function(){
		
		LoadDate();		
	}
	
	var m_text_Date = paper.text(480,360,"Date");
	m_text_Date.attr({fill:"#a1bfde"});
	
	
	var img_date = paper.image("image/date.png",463,300, 35, 35);
	img_date.node.onclick = function(){

		LoadDate();
	}


	//world clock
	var m_button_world = paper.circle(320,440,30);
	m_button_world.attr({fill:"#a1bfde", 'stroke-width': 0});
	m_button_world.node.onclick = function(){
		
		LoadWorld();		
	}
	
	var m_text_World = paper.text(320,480,"World Time");
	m_text_World.attr({fill:"#a1bfde"});

	
	var img_world = paper.image("image/world.png",300,420, 40, 40);
	img_world.node.onclick = function(){

		LoadWorld();
	}

	
	//timer
	var m_button_timer = paper.circle(400,440,30);
	m_button_timer.attr({fill:"#a1bfde", 'stroke-width': 0});
	m_button_timer.node.onclick = function(){
		
		LoadTimer();
	}
	
	var m_text_timer = paper.text(400,480,"Timer");
	m_text_timer.attr({fill:"#a1bfde"});
	
	var img_timer = paper.image("image/timer.png",380,420, 40, 40);
	img_timer.node.onclick = function(){

		LoadTimer();
	}

	//alarm
	var m_button_alarm = paper.circle(480,440,30);
	m_button_alarm.attr({fill:"#a1bfde", 'stroke-width': 0});
	m_button_alarm.node.onclick = function(){
		
		LoadAlarm();
	}
	
	var m_text_alarm = paper.text(480,480,"Alarm");
	m_text_alarm.attr({fill:"#a1bfde"});
	
	var img_alarm = paper.image("image/alarm.png",460,420, 40, 40);
	img_alarm.node.onclick = function(){

		LoadAlarm();
	}


}

var alarm_h =0;
var alarm_m=0;
var alarm_s=0;
var hasAlarm  = false;

function LoadAlarm(){
	LoadBackground();
	
	var display = paper.text(400, 400, checkTime(alarm_h) + ":" + checkTime(alarm_m) + ":" + checkTime(alarm_s));
	display.attr({"font-size": 40, "fill":"#c6d9eb", "font-weight": "bold"});
	
	
	//seonds
	var img_s_up = paper.image("image/up.png",440,330,40,40);
	img_s_up.node.onclick = function(){
				alarm_s++;
		display.attr({"text":checkTime(alarm_h) + ":" + checkTime(alarm_m) + ":" + checkTime(alarm_s)});

	}
	
	var img_m_up = paper.image("image/up.png",380,330,40,40);
	img_m_up.node.onclick = function(){
		alarm_m++;
		display.attr({"text":checkTime(alarm_h) + ":" + checkTime(alarm_m) + ":" + checkTime(alarm_s)});

	}
	
	
	var img_h_up = paper.image("image/up.png",320,330,40,40);
	img_h_up.node.onclick = function(){
		alarm_h++;
		display.attr({"text":checkTime(alarm_h) + ":" + checkTime(alarm_m) + ":" + checkTime(alarm_s)});

	}

	
	
	
	//alarm button
	var alarm_start = paper.circle(400,480,30);
	
	alarm_start.attr({fill:"#a1bfde"});
	alarm_start.node.onclick = function(){

		hasAlarm = true;
	}
	var alarm_start_text = paper.text(400,480,"Set");

	
	//clear alarm button
	var alarm_clear = paper.circle(470,480,30);
	alarm_clear.attr({fill:"#a1bfde"});
	alarm_clear.node.onclick = function(){

		hasAlarm = false;
		//sound_alarm.stop();
		alarm_h = 0;
		alarm_m=0;
		alarm_s=0;
		display.attr({"text":checkTime(alarm_h) + ":" + checkTime(alarm_m) + ":" + checkTime(alarm_s)});

	}
	
	var alarm_clear_text = paper.text(470,480,"Clear");

}

function checkAlarm(){

	if (hasAlarm){
		if((alarm_h == h)&&(alarm_m==m)&&(alarm_s==s)){
			//play alarm sound
			var sound_alarm = new Audio("audio/alarm.wav");
			sound_alarm.play();

			hasAlarm = false;
			LoadAlarm();
		}
	}else{
		//sound_alarm.stop();
		
	}

	setTimeout(function(){checkAlarm()},500);

}

	var timer_s=0;
	var timer_m=0;
	var timer_isPaused = false;
	var timer_menu_pause = false;
	

function LoadTimer(){
	
	LoadBackground();
	
		timer = setTimeout(function(){LoadTimer()},1000);

	timer_s++;	


	var timer_text = paper.text(400,400,"00:00");
	timer_text.attr({fill:"#a1bfde","font-size":"50"});
	
	
	
	//pause button
	var timer_pause = paper.circle(330,480,30);
	timer_pause.attr({fill:"#a1bfde"});
	timer_pause.node.onclick = function(){
				clearTimeout(timer);
				timer_isPaused = true;

	}
	var timer_pause_text = paper.text(330,480,"Pause");
	//m_text_World.attr({fill:"white"});

	// if (timer_menu_pause){
		// clearTimeout(timer);
	// }
		//timer_menu_pause = false;

	
	//timer resume button
	var timer_start = paper.circle(400,480,30);
	
	timer_start.attr({fill:"#a1bfde"});
	timer_start.node.onclick = function(){

		if(timer_isPaused){
					LoadTimer();
					timer_isPaused = false;

		}
	}
	var timer_start_text = paper.text(400,480,"Resume");

	
	//clear timer button
	var timer_clear = paper.circle(470,480,30);
	timer_clear.attr({fill:"#a1bfde"});
	timer_clear.node.onclick = function(){


		clearTimeout(timer);
		timer_s = 0;
		timer_m = 0;
		timer_text.attr({"text":   checkTime(timer_m) + " : " + checkTime(timer_s)   });

	}
	
	var timer_clear_text = paper.text(470,480,"Clear");

	
	//calculate timer 
	if(timer_s == 59){
		timer_s = 0;
		timer_m ++ ;
	}


		timer_text.attr({"text":   checkTime(timer_m) + " : " + checkTime(timer_s)   });

	
	//setTimeout(function(){LoadWorld()},1000);
	

}

function LoadWorld(){
	LoadBackground();
	var time_zone = today.getTimezoneOffset()/60;
	
	//berline
	var berlin_text1 = paper.text(400,300,"Berlin (GTM+1)");
	berlin_text1.attr({fill:"#a1bfde","font-size":"15"});
	
	var berlin_text = paper.text(400,330,"Berline time");
		berlin_text.attr({fill:"#a1bfde","font-size":"30"});

	berlin_text.attr({text:    checkHour(h+time_zone+1) + ":" + checkTime(m) + ":" + checkTime(s)  });

	
	//NY
	var nyc_text1 = paper.text(400,390,"NYC (GTM-5)");
	nyc_text1.attr({fill:"#a1bfde","font-size":"15"});
	
	var nyc_text = paper.text(400,420,"NYC time");
		nyc_text.attr({fill:"#a1bfde","font-size":"30"});

	nyc_text.attr({text:    checkHour(h+time_zone-5) + ":" + checkTime(m) + ":" + checkTime(s)  });

	
	//BJ
	var bj_text1 = paper.text(400,470,"Beijing (GTM+8)");
	bj_text1.attr({fill:"#a1bfde","font-size":"15"});
	
	var bj_text = paper.text(400,500,"BJ time");
		bj_text.attr({fill:"#a1bfde","font-size":"30"});

	bj_text.attr({text:    checkHour(h+time_zone+8) + ":" + checkTime(m) + ":" + checkTime(s)  });
	
		//setTimeout(function(){LoadWorld()},1000);

}

function checkHour(i) {
	
	if (i>24){
		i = i-24;
	}
	
	if (i<0){
		i = 24+i;
	}
	
	    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10

	
    return i;
	
	
	
	
}


function LoadBackground(){
	
	var m_back = paper.circle(400,400,180);
	
	if(isDayTime){
			m_back.attr({ fill:"#f2f2f2", 'stroke-width': 0});

	}else{
			m_back.attr({ fill:"#21405f", 'stroke-width': 0});

	}
	
	if(hasAlarm){
		var img_alarm = paper.image("image/alarm.png",385,240, 30, 30);

	}

}

function LoadDate(){

		LoadBackground();
	
	
	var text_date = paper.text(400,400,today.getDate()+"."+text_month+"."+today.getFullYear());
	text_date.attr({fill:"#a1bfde","font-size":"45"});

	
	var text_week = paper.text(400,350,"weekday");
	text_week.attr({fill:"#a1bfde","font-size":"20"});
	
	var week = today.getDay();
	var month = today.getMonth();
	var text_month ;

	switch(month){
	case 0:
		text_date.attr({"text":today.getDate()+"."+"JAN"+"."+today.getFullYear()});
		break;
	case 1:
		text_date.attr({"text":today.getDate()+"."+"FEB"+"."+today.getFullYear()});
		break;
	case 2:
		text_date.attr({"text":today.getDate()+"."+"MAR"+"."+today.getFullYear()});
		break;
	case 3:
		text_date.attr({"text":today.getDate()+"."+"APR"+today.getFullYear()});
		break;
	case 4: 
		text_date.attr({"text":today.getDate()+"."+"MAY"+today.getFullYear()});
		break;
	case 5:
		text_date.attr({"text":today.getDate()+"."+"JUN"+today.getFullYear()});
		break;
	case 6:
		text_date.attr({"text":today.getDate()+"."+"JUL"+today.getFullYear()});
		break;
	case 7:
		text_date.attr({"text":today.getDate()+"."+"AUG"+today.getFullYear()});
		break;
	case 8:
		text_date.attr({"text":today.getDate()+"."+"SEP"+today.getFullYear()});
		break;
	case 9:
		text_date.attr({"text":today.getDate()+"."+"OCT"+today.getFullYear()});
		break;
	case 10:
		text_date.attr({"text":today.getDate()+"."+"NOV"+today.getFullYear()});
		break;
	case 11:
		text_date.attr({"text":today.getDate()+"."+"DEC"});
		break;

	}

	
	switch(week){
		case 0:
			text_week.attr({"text":"SUN"});
			break;
		case 1:
			text_week.attr({"text":"MON"});
			break;
		case 2:
			text_week.attr({"text":"TUE"});
			break;
		case 3:
			text_week.attr({"text":"WED"});
			break;
		case 4: 
			text_week.attr({"text":"THU"});
			break;
		case 5:
			text_week.attr({"text":"FRI"});
			break;
		case 6:
			text_week.attr({"text":"SAT"});
			break;

	}


}
function LoadChangeTime(){

	LoadBackground();
	
	var display = paper.text(400, 400, checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s));
	display.attr({"font-size": 40, "fill":"#c6d9eb", "font-weight": "bold"});
	
	
	//seonds
	var img_s_up = paper.image("image/up.png",440,330,40,40);
	img_s_up.node.onclick = function(){
				s++;
		display.attr({"text":checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s)});

	}
		
		//var s_up = paper.circle(460,350,20);
		//s_up.attr({fill:"white"});
		// s_up.node.onclick = function(){
			// s++;
			// display.attr({"text":checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s)});
		// }
	
	//minutes

		// var m_up = paper.circle(400,350,20);
		// m_up.attr({fill:"white"});
		// m_up.node.onclick = function(){
			// m++;
			// display.attr({"text":checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s)});
		// }
	
	var img_m_up = paper.image("image/up.png",380,330,40,40);
	img_m_up.node.onclick = function(){
		m++;
		display.attr({"text":checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s)});

	}
	
	
	var img_h_up = paper.image("image/up.png",320,330,40,40);
	img_h_up.node.onclick = function(){
		h++;
		display.attr({"text":checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s)});

	}


	// var h_up = paper.circle(340,350,20);
	// h_up.attr({fill:"white"});
	// h_up.node.onclick = function(){
		// h++;
		// display.attr({"text":checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s)});
	// }
	
	
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
	
	
	
	
}

	today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
		total_seconds =( h*3600 +m*60 +s) ;
		
    // m = checkTime(m);
    // s = checkTime(s);


startTime(); //Function call that starts the startTime function.
startTime2(); //update every 100ms to check value of time
checkAlarm();
//calculate the week day
var today = new Date();




};