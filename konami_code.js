const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;
  let indexArray=[]
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
debugger
    if (code[index] === key) {
      indexArray.push(key)
      index++;

      if (index === (code.length - 1)) {
        return alert("Hurray!");
debugger
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
