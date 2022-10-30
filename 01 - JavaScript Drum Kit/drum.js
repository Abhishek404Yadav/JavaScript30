 //This function is for Adding playing class and playing sound
 function playSound(e){
    //i have used code instead of keyCode in audio selection
    const aud =document.querySelector(`[data-code=${e.code}]`);//`[data-code="KeyD"]`
    const key=document.querySelector(`[data-key="${e.keyCode}"]`);
    if(!aud) return;//in this case query selector does't select anything so function returns undefined
    key.classList.add("playing");// we put if condition first because we don't wannna catch a error of undfined for any key
    aud.currentTime=0;// this reset the time to 0
    aud.play();
  }
  //This function is for removing playing class(Transition remover) 
    function removeTransition(e){
  // Many transition are running in the function in which playing has not any single role so it triggers whenever any desired key is pressed and then function run properly and remove the playing class
      if( e.propertyName !=="transform" ) return ;
    e.target.classList.remove("playing");
  }
  //This is converting the nodelist into array and accessing them with for each to call the removeTransition
  const key=Array.from( document.querySelectorAll('.key'));
  key.forEach((element)=>
  element.addEventListener('transitionend',removeTransition)
  );
  //This will call when we press any key
  window.addEventListener('keydown', playSound );