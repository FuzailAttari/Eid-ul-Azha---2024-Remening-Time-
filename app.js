document.write(`<center> <h1> Eid ul Azha Remaining Time </h1>`)
var firsteidulazha = new Date("17 June, 2024");
var today= new Date();
var diff = firsteidulazha.getTime()- today.getTime();
var Day= diff /(1000*60*60*24);
var Month= diff /(1000*60*60*24*30);
var mint= diff /(1000*60*60);
var Secound = diff /(1000*60);
var Milliseconds= diff /(1000);
document.write(` <font color=white> <table border=3px bordercolor=red  cellpadding=20px cellspacing=10px bgcolor=black>
<tr>
<th> Days </th> 
<th> Month </th> 
<th> Mint </th> 
<th> Secound </th> 
<th> Milliseconds </th> 
</tr>
<tr>
<th> ${Math.floor (Day)} </th> 
<th> ${(Month.toFixed(2))} </th> 
<th> ${Math.floor (mint)} </th> 
<th> ${Math.floor (Secound)} </th> 
<th> ${Math.floor (Milliseconds)} </th> 
</tr>
</table> `)



