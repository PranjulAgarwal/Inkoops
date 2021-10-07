var jet = document.getElementById("jet");
var jet2 = document.getElementById("jet2");
var board = document.getElementById("board");
if(localStorage.getItem("w1")!=null){
  if(localStorage.getItem("w1")<3&&localStorage.getItem("w2")<3){
    document.getElementById("won2").innerHTML = localStorage.getItem("w2");
    document.getElementById("won1").innerHTML = localStorage.getItem("w1");
  }
}else{
  localStorage.setItem("w1", 0);
  localStorage.setItem("w2", 0); 
}

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  var jetbound = jet.getBoundingClientRect();
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
  }
  //460  =>  board width - jet width
  else if (e.key == "ArrowRight" && left <= 460) {
    jet.style.left = left + 10 + "px";
  }

  if (e.key == "ArrowUp" || e.keyCode == 32) {
    //32 is for space key
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var bulletbound = bullet.getBoundingClientRect();

      if (bullet != undefined){
        if (
          bulletbound.left >= jetbound2.left &&
          bulletbound.right <= jetbound2.right &&
          bulletbound.top <= jetbound2.top &&
          bulletbound.bottom <= jetbound2.bottom
        ) {
          // jet.parentElement.removeChild(jet);
          //Scoreboard
          jet.parentElement.removeChild(bullet);
          document.getElementById("health2").innerHTML =
            parseInt(document.getElementById("health2").innerHTML) - Math.floor(Math.random() * 5);
            
        }

      }

      if(parseInt(document.getElementById("health2").innerHTML)<=0){
        document.getElementById("won1").innerHTML =
        parseInt(document.getElementById("won1").innerHTML) +1;
        localStorage.setItem("w1",parseInt(localStorage.getItem("w1"))+1);
        if(parseInt(document.getElementById("won1").innerHTML)>=3){
          alert("This Game is Won by : Player 1");
          clearInterval(movebullet);
          localStorage.setItem("w1",0);
          window.location.reload();
        }else{
          alert("Player 1 won this round");
          clearInterval(movebullet);
          window.location.reload();
        }
        document.getElementById("health2").innerHTML = 100;
        document.getElementById("health1").innerHTML = 100;
        clearInterval(movebullet1);
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      

      //Stops the bullet from moving outside the gamebox
      if (bulletbottom >= 500) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //bullet should always be placed at the top of the jet..!
      bullet.style.bottom = bulletbottom + 3 + "px";
    });
  }

  // Jet 2

  var left2 = parseInt(window.getComputedStyle(jet2).getPropertyValue("left"));
  var jetbound2 = jet2.getBoundingClientRect();
  if ((e.key == "A" || e.key == "a") && left2 > 0) {
    jet2.style.left = left2 - 10 + "px";
  }
  //460  =>  board width - jet width
  else if ((e.key == "D" || e.key == "d") && left2 <= 460) {
    jet2.style.left = left2 + 10 + "px";
  }

  if ((e.key == "W" || e.key == "w") || e.keyCode == 32) {
    //32 is for space key
    var bullet2 = document.createElement("div");
    bullet2.classList.add("bullets2");
    board.appendChild(bullet2);

    var movebullet2 = setInterval(() => {
      var bulletbound2 = bullet2.getBoundingClientRect();

      if (bullet2 != undefined){
          if (
            bulletbound2.left >= jetbound.left &&
            bulletbound2.right <= jetbound.right &&
            bulletbound2.top >= jetbound.top &&
            bulletbound2.bottom >= jetbound.bottom
          ) {
            // jet.parentElement.removeChild(jet); 
            //Scoreboard
            jet2.parentElement.removeChild(bullet2);
            document.getElementById("health1").innerHTML =
              parseInt(document.getElementById("health1").innerHTML) - Math.floor(Math.random() * 5);
              
          }
        }
        if(parseInt(document.getElementById("health1").innerHTML)<=0){
          document.getElementById("won2").innerHTML =
          parseInt(document.getElementById("won2").innerHTML) +1;
          localStorage.setItem("w2",parseInt(localStorage.getItem("w2"))+1);
          if(parseInt(document.getElementById("won2").innerHTML)>=3){
            alert("This Game is Won by : Player 2");
            clearInterval(movebullet2);
            localStorage.setItem("w2",0);
            window.location.reload();
          }else{
            alert("Player 2 won this round");
            clearInterval(movebullet2);
            window.location.reload();
          }
          document.getElementById("health2").innerHTML = 100;
          document.getElementById("health1").innerHTML = 100;
          clearInterval(movebullet2);
        }

      var bullettop = parseInt(
        window.getComputedStyle(bullet2).getPropertyValue("top")
      );

      //Stops the bullet from moving outside the gamebox
      if (bullettop >= 500) {
        clearInterval(movebullet2);
      }

      bullet2.style.left = left2 + "px"; //bullet should always be placed at the top of the jet..!
      bullet2.style.top = bullettop + 3 + "px";
    });
  }
});
