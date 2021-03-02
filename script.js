function ageCalculator() {
  let userdate = document.getElementById("DOB").value.toString().split("-");
  if (userdate == "") {
    document.getElementById("error").innerHTML = "Please Specify Date";
  } else {
    let userMonth = userdate[1];
    let userDate = userdate[2];
    let userYear = userdate[0];
    let defhr = 00;
    let defmin = 00;
    let defsec = 00;
    let defmsec = 0000;

    // console.log(userMonth,userDate,userYear)
    var d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let millisec = d.getMilliseconds();

    document.getElementById("result").innerHTML =
      "Your age is : " +
      (year - userYear) +
      " Years " +
      (month - userMonth) +
      " Months " +
      (date - userDate) +
      " days " +
      (hr - defhr) +
      " hours " +
      (min - defmin) +
      " mins " +
      (sec - defsec) +
      " seconds " +
      (millisec - defmsec) +
      " millieseconds.";
  }
}

function generateNum(min, max) {
  var randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randNumber == max) {
    randNumber += generateNum(min, max);
  } else {
    let col = document.getElementById("rand");
    let div = document.createElement("div");
    div.setAttribute("id", "num");
    div.setAttribute("class", "h5");
    div.style.color="green"
    let head = document.createElement("h3");
    head.setAttribute("class", "h3");
    head.setAttribute("id", "h3");
    head.style.color="red"
    head.innerHTML = "Random Number Generator";
    col.append(head);
    col.append(div);

  

    document.getElementById("num").innerHTML = randNumber;
  }
}
generateNum(10000000, 100000000);
