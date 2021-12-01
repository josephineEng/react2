const myHeading = document.querySelector('h1');
myHeading.textContent = 'JAVASCRIPT';
document.getElementById("yes").style.color = "red";
let myButton = document.getElementById('on');
let myPicture =document.getElementById('first');




function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'JAVASCRIPT BY, ' + myName;
    }
  }


  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'JAVASCRIPT BY, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }

  myPicture.onclick=function(){
    let mySrc = myPicture.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myPicture.setAttribute('src','images/flower.jpg'); 
    }else{
        myPicture.setAttribute('src,images/firefox-icon.png')
    }
  }


  function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}