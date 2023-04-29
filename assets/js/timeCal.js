const oneDay=86400000 ;
//const OneHour=86400000/24 ;


function MainMange() {
    $('#dayst').fadeIn(1000);
    $('#hourst').fadeIn(2000);
    $('#mint').fadeIn(3000);
    $('#sect').fadeIn(4000);
    $('#WrapTime h1').fadeIn(4500);


    interval=setInterval(Theinterval,1000);
}
let dots='...';

function Theinterval() {
    let d = new Date();
    let t = new Date('07-01-2023');
    //Days
    let DAYSDiff=(t-d)/oneDay;
    let leftDays=DAYSDiff%1;
    DAYSDiff=Math.floor(DAYSDiff);

    //hours
    let HoursDiff=leftDays*24;
    let leftHours=HoursDiff%1;
    HoursDiff=Math.floor(HoursDiff);

    //min
    let minDiff=leftHours*60;
    leftMin=minDiff%1;
    minDiff=Math.floor(minDiff);

    //sec
    let SecDiff=leftMin*60;
    SecDiff=Math.floor(SecDiff);

   

    if (DAYSDiff<10) {
        DAYSDiff='0'+DAYSDiff;
    }
    if (HoursDiff<10) {
        HoursDiff='0'+HoursDiff;
    }
    if (minDiff<10) {
        minDiff='0'+minDiff;
    }
    if (SecDiff<10) {
        SecDiff='0'+SecDiff;
    }

    if (DAYSDiff<1) {
        DAYSDiff='00';
        
    }

    if (HoursDiff<1) {
        
        HoursDiff='00';

    }
    if (minDiff<1) {
        minDiff='00';
    }
    if (dots.length>3) {
        dots='';
    }



    //console.log(DAYSDiff,HoursDiff,minDiff,SecDiff)
    //const arrayRes=[DAYSDiff,HoursDiff,minDiff,SecDiff]
    
    document.getElementById('dayst').innerHTML=DAYSDiff
    document.getElementById('hourst').innerHTML=HoursDiff
    document.getElementById('mint').innerHTML=minDiff
    document.getElementById('sect').innerHTML=SecDiff
    document.getElementById('titleMain').innerHTML='Coming Soon'+dots;
    dots+='.';



}