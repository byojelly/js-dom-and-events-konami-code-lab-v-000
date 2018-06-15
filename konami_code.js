const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  //set a counter equal to 0
  let index = 0;
  // start a listener that is specifically looking for keydown (keyboard pushdown events)
  //with the keydownEvent, declare a variable key which will be the actual value of the key down,
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    //use the key variable to check if the 1st element in the konami array is equal to the users input at variable key
    if (code[index] === key) {
        //if yes increase the index by 1
        index++;
        //now check to see if the index equals the lenth of the array
        if (index === (code.length)) {
          //if yes alert and reset index
                alert("Hurray!");
                index = 0;
        }
    } else {
      //if the user does not put in the right input at the right time set index to 0
      index = 0;
    }
  });
}
