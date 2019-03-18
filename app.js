const btn = document.querySelector("#submit");

eventListeners();

function eventListeners() {
  btn.addEventListener("click", addValue);
  document.querySelector("#output").addEventListener("click", remove);
  document.addEventListener("DOMContentLoaded", addfromLS);
}

//Add fn
function addValue(e) {
  let input = document.querySelector("#msg").value;
  const output = document.querySelector("#output");
  let li = document.createElement("li");
  li.textContent = input;
  let link = document.createElement("a");
  link.className = "rmv";
  link.textContent = "X";
  li.appendChild(link);
  output.appendChild(li);
  e.preventDefault();

  addLocalStorage(input);

  alert("Tweet Added!");

  document.querySelector("#msg").value = "";
}

//remove fn
function remove(e) {
  if (e.target.classList.contains("rmv")) {
    e.target.parentElement.remove();
  }

  removetweet(e.target.parentElement.textContent);

  e.preventDefault();
}

//getlocal Storage

function addLocalStorage(input) {
  let tweets = getlocalStorage();
  tweets.push(input);

  localStorage.setItem("tweet", JSON.stringify(tweets));
}

function getlocalStorage() {
  let tweets;

  if (localStorage.getItem("tweet") === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweet"));
  }

  return tweets;
}

function addfromLS() {
  let tweets = getlocalStorage();
  tweets.forEach(function(elem) {
    let li = document.createElement("li");
    li.textContent = elem;
    let link = document.createElement("a");
    link.className = "rmv";
    link.textContent = "X";
    li.appendChild(link);
    output.appendChild(li);
  });
}

//remoce from ls

function removetweet(a) {
  let tweets = getlocalStorage();
  console.log(tweets);
  let tweet = a.substring(0, a.length - 1);

  tweets.forEach(function(tweetls, index) {
    if (tweet === tweetls) {
      tweets.splice(index, 1);
    }
  });

  console.log(tweets);
  localStorage.setItem("tweet", JSON.stringify(tweets));
}
