var loader=document.querySelector(".loader")
const check_duplicate_in_array = (input_array) => {
  const duplicates = input_array.filter(
    (item, index) => input_array.indexOf(item) !== index
  );
  return Array.from(new Set(duplicates));
};
let team100 = [95, 80, 66, 47, 35, 21, 8];
let team75 = [79, 35, 32, 8, 5];
let team50 = [99, 68, 13, 2, 21];
let team25 = [64, 6, 91, 10];

var total = [[1,2,3,4,5,6,7,8,9,10,11]];
var duplicate = [];

function shuffle(arr, arr1, arr2, arr3) {
  loader.style.display="block"
  arrTemp100 = [...arr];
  arrTemp75 = [...arr1];
  arrTemp50 = [...arr2];
  arrTemp25 = [...arr3];
  currentIndex = arrTemp100.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arrTemp100[currentIndex], arrTemp100[randomIndex]] = [
      arrTemp100[randomIndex],
      arrTemp100[currentIndex],
    ];
  }
  currentIndex = arrTemp75.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arrTemp75[currentIndex], arrTemp75[randomIndex]] = [
      arrTemp75[randomIndex],
      arrTemp75[currentIndex],
    ];
  }
  currentIndex = arrTemp50.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arrTemp50[currentIndex], arrTemp50[randomIndex]] = [
      arrTemp50[randomIndex],
      arrTemp50[currentIndex],
    ];
  }
  currentIndex = arrTemp25.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arrTemp25[currentIndex], arrTemp25[randomIndex]] = [
      arrTemp25[randomIndex],
      arrTemp25[currentIndex],
    ];
  }
  temp1 = [
    ...arrTemp100.slice(0, 4),
    ...arrTemp75.slice(0, 3),
    ...arrTemp50.slice(0, 2),
    ...arrTemp25.slice(0, 2),
  ];
  temp1.sort((a, b) => a - b);
  total.push([
    ...arrTemp100.slice(0, 4),
    ...arrTemp75.slice(0, 3),
    ...arrTemp50.slice(0, 2),
    ...arrTemp25.slice(0, 2),
  ]);
  duplicate.push(temp1)
  
}
function gen() {
  var num = document.getElementById("count").value;
  loader.style.display="block"
  for (i = 0; i < num; i++) {
    shuffle(team100, team75, team50, team25);
  }
  setTimeout(()=>{
    
    console.log(check_duplicate_in_array(duplicate));
    // console.log(total);
    // console.log(duplicate);
    var list = document.getElementById("id01");
    var table = document.createElement("table");
    for (i = 0; i < total.length; i++) {
    var tr = document.createElement("tr");
    td = document.createElement("td");
    td.innerText = i;
    if(i==0){td.innerText = "No";}
    tr.append(td);
    temp = total[i];
    store = 0;
    for (j = 0; j < temp.length; j++) {
      td = document.createElement("td");
      var store = store + temp[j];
      td.innerText = temp[j];
      tr.append(td);
      if (j == 10) {
        td = document.createElement("td");
        td1 = document.createElement("li");
        td.innerText = store;
        td1.innerText = store;
        tr.append(td);
        list.append(td1);
      }
      table.append(tr);
    }
  }
  cont = document.getElementById("container");
  cont.append(table);
  loader.style.display="none"
},100)
}


function sortList() {
  loader.style.display="block"
  setTimeout(()=>{
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("id01");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;

      if (Number(b[i].innerHTML) < Number(b[i + 1].innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
    loader.style.display="none"},100)
}
