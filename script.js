// This function listens for when Shake Hands is clicked and calls HandShake() to compute the sequence
const start= ()=>{
    document.querySelector('button').addEventListener('click', HandShake);
  }
  
  //Main function computing
  const HandShake= ()=>{
    var number= Number.parseInt(document.myForm.number.value);
    let shake= document.querySelector('.result');
    
    //The Handshake can only be found for numbers between 0 and 32 except 16
    if (number>0 && number<32 && number!=16){
      var options= new Array("wink","double blink","close your eyes","jump");
      var result= [];
      var rem;
      let a=0;
      
      //Loop to get the remainders and matching them to events
      while(number>0){
        rem = number%2;
        if (rem === 1) {
          if (a === 4) { 
            var reverse= true; // If more than 4 loops occur, the array is to be reversed
          } else {
            result.push(options[a]);  // Making the sequence array
          }
        }
        a++;
        number = Math.floor(number/2); // Computing number for the next loop
      }
      
      
      if(reverse === true){
        result.reverse();
      }
      
      shake.textContent = "Handshake: " + result.join(" + "); //The HANDSHAKE
    }
    else{
      shake.textContent = "Please enter a  number between 0 and 32 but different from 16";
    }
  }
  //Start the script
  start();