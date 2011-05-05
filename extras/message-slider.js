function AraVob() {
}
var ScreenLine = new AraVob();
ScreenLine[1]  = "Once upon a time";
ScreenLine[2]  = "A really bored guy called George";
ScreenLine[3]  = "Decided to create a web site called JavaScript Kit";
ScreenLine[4] = "Since he had no life";
ScreenLine[5] = "He put in many hard hours of work";
ScreenLine[6] = "Hoping that it will help webmasters just a bit in creating web pages";
ScreenLine[7] = "Whether or not it has really helped";
ScreenLine[8] = "Is anyone's guess";
ScreenLine[9]  = "But since George has no life";
ScreenLine[10]  = "He may very well continue to work on JavaScript Kit";
ScreenLine[11]  = "For as long as he is physically able";
ScreenLine[12] = "And mentally stable";
ScreenLine[13] = "The end";
/*
To change or add lines, just replace values of or add to ScreenLine[n]
above.   Use \" in the message text for quotes and \t for tabs.
*/
var msgNum = 1;          // set to first message to display
var msgCnt = 13;         // set to number of last ScreenLine to display.
var typeSpeed = 50;      // the rate in milliseconds to scroll to top (higher number is slower)
var lineDelay = 2000     // the delay time at end of line. (unless the line is a single space)
var pagLen = 7;          // number of lines per page (usually the number of rows in the TEXTAREA)   
var delay = typeSpeed;     
var timerPS = null;
var linPntr = 0;
var tally = 1;
var msg = " ";
var outMsg = "";
var i = 0;
var cr="\r\n"
if (window.document) {
 var cr="\n"
}
else {
  ScreenLine[11]="    You will need to upgrade your browser."
}
if (window.document) {
  ScreenLine[10]="Your version of Opera show's a moving scroll bar button when you"
  ScreenLine[12]="  but the frame may not appear to be scrolling."+cr
}
// set up ScreenLines for display
for (x = msgCnt; 1 <= x; x--) {
  ScreenLine[x+pagLen] = ScreenLine[x] + cr;
}
for (x = 1; x <= (pagLen); x++) {
  ScreenLine[x] =  " " +cr;
}
 msgCnt +=  pagLen;
 msg = ScreenLine[1];
// end setup

function DisplayScroll() {
 if (msgNum < pagLen) {
  delay = typeSpeed;
 }
 else {
  delay = lineDelay;
 }
 ChangeMsg();
 outMsg += msg;
 self.document.forms[0].elements[0].value = outMsg;
  timerPS = setTimeout("DisplayScroll()",delay);
}

function ChangeMsg() {
 msgNum++;
 if (msgCnt < msgNum) {
   msgNum = 1;
 }
 if (pagLen <= tally) {
   chgPage();
 }
 tally++;
 msg = ScreenLine[msgNum];
}

function chgPage() {
 if (msgNum < pagLen) {
   linPntr = msgCnt - pagLen + msgNum + 1;
 }
 else {
   linPntr = msgNum - (pagLen - 1);
 }

 outMsg =   ScreenLine[linPntr];
 for (p = 1; p < (pagLen - 1); p++) {
   linPntr++;
   if (msgCnt < linPntr) {
     linPntr = 1;
   }
   outMsg += ScreenLine[linPntr];
 }
  
}

function quitDisplay() {
  self.document.forms[0].elements[0].value = "Scroll a Page for yourself today!";
}
// -->
</SCRIPT>