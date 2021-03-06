<!-- Goes between <head> & </head> tags 
     ================================== -->
<script language="javascript"> 

/* external file "myvsparmsg.txt" begins */
// begin: Vertical Scroller's Parameters 

//PATTERN: How many messages may RESIDE within scrolling area while PAUSING: 
//0 for SINGLE, only one RESIDES within area while PAUSING;
//1 for MORE, as many as they fit RESIDE in the area while PAUSING; 
//Should one choose  below to set msgnr=1 (MORE), a blank space
//will automatically be inserted after each and every message;
//"stileret" would set the vertical size for this blank space, see STEP I above;
var msgnr=0;
if(msgnr==1){
var retclass='class="stileret"';
}

//If msgnr=0 for PATTERN SINGLE was chosen above and you want that any
//mesage smaller than area NOT to be CELL-CENTERED, set below value 0:
var celcen=1;

//1: FIRST message shows up right at top edge (or cell-centered) and pauses;
//If First message is to show up at bottom edge and starts scrolling, set below value 0:
var udopt=1;

//WIDTH of the Scroller in pixels: set to your own;
//"px" unit will automatically be set in the process, so do not write "px";
var mwidth=200; 

//HEIGHT of the Scroller in pixels: set to your own; 
//"px" unit will automatically be set in the process, so do not write "px";
//larger Messages (exceeding height) will slide OK anyway, but
//the exceeding height won't show up on option Instant Recall if chosen!
var mheight=100; 

//BACKGROUND: either color(1) or image(2, see below) ;
//1.Background color: could be like: "#ffff00" or "yellow";
//set it "" for no background color;
var mcolor="aqua";

//or 2.Background image: "imagename.ext";
//leave it "" for no image background;
var mbground="";

//BORDER for scrolling area: 1, ... ;
//set it 0(zero) for no border;
var mborder=1;

//SPEED in pixels: the higher the faster - set your own!
var mspeed=1; 

//PAUSE between messages in milliseconds: 1000=1s; set to your own; 
var mpause = 2000; 

//Live speed-change option: 0 (not desired) or 1 (desired);
//"stileupdn" would be the STYLE (CSS), see STEP I above;
//celcolor would set background color
var lsopt = 0;
if(lsopt==1){
var vesclass='class="stileupdn"';
var celcolor='#ccffcc';
}

//Recall Option: 
//Let it be 0 if not desired and the scroll will go on;
//set it 1 if desired: after a complete cycle the scroll stops
//and you may recall randomly any Message/Image;  
var rcopt=0;
if(rcopt==1){
var cbtxt = new Array();
//MUST BE as many TEXTs as the number of Messages/Images;
//Set your own TEXTs, like Messages Title or what you have in there: 
//cbtxt = ["1-TITLE", "2-Features", "3-Recall Option", "4-Other Possibilities", "5-Check"];
cbtxt=[];
}
//end Parameters 
//===

// begin: Vertical Scroller's Messages/Images - 

//Messages: as many as you'd like: set to your own; 
//Every message MUST be set as a continuous string within '...';
//you may split it by using '+ at ends and then ' at continuations;
//Inside any message you MUST use \' in lieu of ' if need be!
//Use of "<br />" or "<br>" for row control inside any message is recommended;
//Images stand alone or used within a message - preload is recommended:
//preloadname = new Image();
//preloadname.src = "imagename.ext";
//slmg[..]='< ... ><img ... src='+preloadname.src+' /><...>';

var slmg=new Array();
slmg[0]='<font color="red"><b>I. Vertical Scroller with Recall.</b></font>'+
'<br />Pauses every message & with mouse over.'+
' Use any basic <em>HTML.</em>';
slmg[1]='<font color="red"><b>II. Scroller\'s Features.</b></font>'+
'<br />Speed, Size, Pause, Background'+
'<br />- color or image -<em> are adjustable</em>.';
slmg[2]='<font color="red"><b>III.</b>Instant Recall.</font>'+
'<br />One may recall <b>any message</b> instantaneously'+
' if Description Texts have been <b>filled in</b>,'+
' else the scroll will <b>go on</b> cycling.';
slmg[3]='<font color="red"><b>IV. Other Possibilities.</b></font>'+
'<br /><b>If option msgnr=1 (more-up-to-area-size)</b>, a blank space size'+
' at your choice is inserted after each and every message.'+
'<br />Recommended for large scrollers.'+
'<br /><b>If msgnr=0 (single)</b> blank space is inserted'+
' only if text exceeded scrolling area.';
slmg[4]='<font color="red">V. HyperLink</font>'+
'<br /><a class="tabmsg" target="a_new" href="http://vbarsan.com/"><b>Scrollers Site Map</b></a>';
// ...
//slmg[...]='...';
//end Messages 
/* end of external_remote file "myvsparmsg.txt" */

</script> 
<!-- end Script between <head> and </head> Tags -->