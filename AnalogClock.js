let hour1=document.querySelector('.hours');
let min1=document.querySelector('.min');
let sec1=document.querySelector('.sec');


setInterval(()=>{
    d=new Date();
    hr_rotation=d.getHours()/12*360-90;
    min_rotation=d.getMinutes()/60*360-90;
    sec_rotation=d.getSeconds()/60*360-90;
     
    hour1.style.transform=`rotate(${hr_rotation}deg)`;
    min1.style.transform=`rotate(${min_rotation}deg)`;
    sec1.style.transform=`rotate(${sec_rotation}deg)`;
},1000);