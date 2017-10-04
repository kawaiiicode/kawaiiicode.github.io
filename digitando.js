//Created by Title bar Maker (http://www.bosiljak.hr/titlemaker)
function tb10_makeArray(n){
 this.length = n;
 return this.length;
}

tb10_messages = new tb10_makeArray(2);
tb10_messages[0] = "Texto 1";
tb10_messages[1] = " Texto 2";
tb10_rptType = 'infinite';
tb10_rptNbr = 5;
tb10_speed = 100;
tb10_delay = 2000;
var tb10_wiper
var tb10_space=" "
var tb10_currMsg=0;
var tb10_counter=1;
var tb10_index=0
tb10_main()
function tb10_main()
{
 document.title=tb10_messages[tb10_currMsg].substring(0,tb10_index)
 tb10_index++
 if(tb10_index==(tb10_messages[tb10_currMsg].length+4)){setTimeout('tb10_reset_clear()',tb10_delay);}
 else{setTimeout('tb10_main()',tb10_speed)}

}
function tb10_reset_clear()
{
 tb10_index=0
 tb10_wiper=""
 for(var a=0;a<tb10_messages[tb10_currMsg].length;a++){tb10_wiper+=tb10_space}
 tb10_clearem()
}
function tb10_clearem()
{
 document.title=tb10_wiper.substring(0,tb10_index) + "..." + tb10_messages[tb10_currMsg].substring(tb10_index+2,tb10_messages[tb10_currMsg].length)
 tb10_index++
 if(tb10_index==(tb10_messages[tb10_currMsg].length+4)){
  if (tb10_currMsg == tb10_messages.length-1){
   if ((tb10_rptType == 'finite') && (tb10_counter==tb10_rptNbr)){
    document.title="";
    return; 
   } 
   tb10_counter++;
   tb10_currMsg = 0;
  }
  else tb10_currMsg++;
  tb10_index=0
  tb10_main()
 }
 else{setTimeout('tb10_clearem()',250)}
}