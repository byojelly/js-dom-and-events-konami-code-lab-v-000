const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
//debugger
    if (code[index] === key) {
      if (index === (code.length - 1)) {
              alert("Hurray!");
//      debugger
              index = 0;
      }

      index++;

      //should code be placed here?
    } else {
      index = 0;
    }
  });
}

//function test() {
//  document.body.addEventListener('keydown', function(e) {
//    console.log(e.which)
//    console.log(e.location)
//    console.log(e.detail)
//  })
//}
