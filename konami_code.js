const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

//this.addEventListener('keydown', function(e){console.log(e.which)})


// up arrow = 38
// down arrow = 40
// l arrow = 37
// r arrow = 39
// a = 65
// b = 66
