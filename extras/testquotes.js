function get_random()
{
        var ranNum= Math.floor(Math.random()*8);
            return ranNum;
}

function getaQuote()
{
       var whichQuote=get_random();
       var quote=new Array(8)
           quote[0]="I &hearts; JavaScript..sometimes.";
           quote[1]="Why are you pushing my button?";
           quote[2]="The button you pushed can\'t push you back!";   
           quote[3]="This alert is here to inform you that alerts are annoying.";
           quote[4]="&hearts; ~~ Nami Chwan ~~ &hearts; ~~ Robin Chwan ~~ &hearts;"
           /*quote[4]="Which came first, the button or the alert?"; */
           quote[5]="Monkey D. Luffy: \"This time I\'m not going to give up!! Gear 2!!\"";
           quote[6]="We are nakama!";
           quote[7]="Strawhat Pirates!";

           return quote[whichQuote];
}
document.writeln(
        getaQuote() );