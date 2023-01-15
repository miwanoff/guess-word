let words = ["apple", "pear", "peach"];
// document.write('<img id="'+words[0]+'" src="images/'+words[0]+'.png">');
// document.write('<img id="'+words[1]+'" src="images/'+words[1]+'.png"> class="words"');

window.onload = function () {
  gen(words);

  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.height = "120px";
    images[i].onclick = check;
  }
};

function random(arr) {
  let randomWords = [];
  let n;
  for (let i = 0; i < 2; i++) {
    n = Math.floor(Math.random() * arr.length);
    randomWords.push(arr[n]);
  }
  return randomWords;
}

//let rw = random(words);

console.log(random(words));

function check(event) {
  let image = event.target;
  let name = image.id;
  alert(name);
}

function gen(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write(
      '<img id="' + arr[i] + '" src="images/' + arr[i] + '.png" class="words">'
    );
  }
}
