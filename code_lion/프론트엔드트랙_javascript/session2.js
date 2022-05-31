// document.getElementById('lion').style.color='red';
// document.getElementById('tiger').style.color='green';
// document.getElementById('bear').style.color='yellow';

document.getElementsByTagName('li')[0].style.color='red';
document.getElementsByClassName('animal')[1].style.color='green';

document.querySelectorAll('.animal')[2].style.color='blue';

document.querySelectorAll('.animal')[2].innerHTML='dog';

const animals=document.getElementById('animals');
animals.innerHTML+="<li class='animal'>cat</li>";

//class 추가 및 삭제
document.querySelectorAll('.box')[0].classList.add('purple');
document.querySelectorAll('.box')[0].classList.remove('purple');

//class toggle
document.querySelectorAll('.box')[0].classList.toggle('yellow');
document.querySelectorAll('.box')[0].classList.toggle('yellow');

//eventhandler-----------------------------------------------------
document.getElementById('btn').addEventListener("click",function(){
    console.log("click");
});

var num=0;
document.getElementById('plus').addEventListener("click",function(){
    num++;
    document.getElementById('num').innerHTML=num;
});
document.getElementById('minus').addEventListener("click",function(){
    num--;
    document.getElementById('num').innerHTML=num;
});



// document.querySelector('.bar').addEventListener("click",function(){
//     document.querySelector('.newBar').style.display="block";
// });
document.querySelector('.bar').addEventListener("click",function(){
    document.querySelector('.bar').innerHTML="눌렀어!";
    document.querySelector('.newBar').classList.toggle("show");
});