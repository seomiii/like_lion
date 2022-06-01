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

//----------------------------------------------eventhandler-----------------------------------------------------
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


//-------------------------------tab 만들기------------------------------------------------
// document.querySelectorAll('.tab-button')[0].addEventListener("click", function(){
//     // 초기화
//     // document.querySelectorAll('.tab-button')[0].classList.remove("here");
//     // document.querySelectorAll('.tab-button')[1].classList.remove("here");
//     // document.querySelectorAll('.tab-button')[2].classList.remove("here");

//     // document.querySelectorAll('.tab-content')[0].classList.remove("show");
//     // document.querySelectorAll('.tab-content')[1].classList.remove("show");
//     // document.querySelectorAll('.tab-content')[2].classList.remove("show");
//     // ---------->대신 for문 사용하기

//     for (let i=0; i<document.querySelectorAll('.tab-button').length; i++){
//         document.querySelectorAll('.tab-button')[i].classList.remove("here");
//         document.querySelectorAll('.tab-content')[i].classList.remove("show");
//     }    

//     //추가
//     document.querySelectorAll('.tab-button')[0].classList.add("here");
//     document.querySelectorAll('.tab-content')[0].classList.add("show");
// });

//이벤트 객체 만들기
document.querySelectorAll('.list')[0].addEventListener("click",function(e){
    tabBtn(e.target.dataset.id);
});

function tabBtn(a){
    document.querySelectorAll('.tab-button')[a].addEventListener("click", function(){
        // 초기화    
        for (let i=0; i<document.querySelectorAll('.tab-button').length; i++){
            document.querySelectorAll('.tab-button')[i].classList.remove("here");
            document.querySelectorAll('.tab-content')[i].classList.remove("show");
        }    
    
        //추가
        document.querySelectorAll('.tab-button')[a].classList.add("here");
        document.querySelectorAll('.tab-content')[a].classList.add("show");
    });

}

//-------------------------------------------------------좌표---------------------------------------------------
const msg=document.querySelector('.msg');
function showWhere(e){
    msg.innerHTML=`my location is ${e.clientX},${e.clientY}`;
}
document.onclick=showWhere;

//---------------------------------------------------- scroll -------------------------------
let bar=document.querySelector('.blue');
let lyric=document.querySelector('.lyrics');

lyric.addEventListener("scroll",function(){
    let scrollTop=lyric.scrollTop;
    let scrollHeight=lyric.scrollHeight-lyric.clientHeight;
    let per=scrollTop/scrollHeight;
    bar.style.width=`${per*250}px`;
})

//-------------------------------------------------타이머 함수 --------------------------------------
var timeCount=7;
// 1초마다 반복되는 함수
setInterval(function(){
    timeCount--;
    document.querySelector('.timeout').innerHTML=`${timeCount}초 후에 사라져볼게 얍`;
},1000);

//7초가 지나면 실행되는 함수
setTimeout(function(){
    document.querySelector('.timeout').style.display='none';
},7000);