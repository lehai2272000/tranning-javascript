var button1 = document.getElementById("btn1");
var div = document.getElementById('content');
button1.onclick = function () {
    div.innerHTML = 'Thằng ngu Hải loll';
};

// const btnChange = document.getElementsByName('.btn-change');
// const titleChange = document.getElementsByName('.title-change');
// btnChange.onclick = function(){
//     console.log(titleChange)
//     titleChange.innerHTML = "Title image 3";
// }


var btnChange = document.getElementById('btn-change');
var titleChange = document.getElementById('title-change');
btnChange.onclick = function(){
    console.log(titleChange)
    titleChange.innerHTML = "Title image 3";
}
/////////////////////////////////////////////
var setColor = document.querySelector(".btn-set-color");
setColor.addEventListener("click", function(){
    document.querySelector('.color').style.color = "red";
})