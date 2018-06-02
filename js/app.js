
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
console.log(document.getElementsByClassName('class1'));
}

function byTag() {
console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
    
    document.getElementById("block1").style.backgroundColor = "blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize= "100px";
    
}

function changeFontColor() {
    document.getElementById("block3").style.color = "green";
    

}

function revertColor() {
    document.getElementById("block3").style.color = "black";
}

function hide() {
     document.getElementById("block4").style.display="none";
}

function changeBackColor() {
    console.log(document.getElementsByClassName("box1")[0].style.backgroundColor="green");
    console.log(document.getElementsByClassName("box1")[1].style.backgroundColor="green");
    console.log(document.getElementsByClassName("box1")[2].style.backgroundColor="green");
}
function changeColor(){
    
    console.log(document.getElementsByClassName("box2")[0].style.backgroundColor="blue");
    console.log(document.getElementsByClassName("box2")[1].style.backgroundColor="blue");
    console.log(document.getElementsByClassName("box2")[2].style.backgroundColor="blue");

}
function numbersOnly(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}

function addAdjacent() {
    var ele=document.getElementById("para2");
    ele.insertAdjacentHTML('afterend', '<div id="para2">I got generated in the fly...</div>');
    }


function removePara() {
    var para = document.getElementById("para4");
    para.parentNode.removeChild(para);
}

function animatePara() {
   
    var elem = document.getElementById("box5"); 
    elem.style.position="relative";
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame(){
        if (pos == 350) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.left = pos + 'px'; 
        }
}}
function upperCase(){
    var x=document.getElementById("inputBox1");
    var x1=document.getElementById("inputBox2");
    x1.value=x.value.toUpperCase();
}
function toCamelCase(){
    var str=document.getElementById("inputBox3");
    str.value=str.value.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function (match) {
        return match.charAt(match.length-1).toUpperCase();
    });

}
function option(){
    console.log(document.getElementById("browsers").value);
}
function bgcolor(){
    console.log(document.getElementById('input').style.backgroundColor="green");
}