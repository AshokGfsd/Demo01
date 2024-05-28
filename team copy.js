let team100 = [
  "A SHARMA",
  "H KLAASEN",
  "Y JAISWAL",
  "T HEAD",
  "P CUMMINIS",
  "S SAMASAN",
  "R PARAG",
];
let team75 = ["T BOULT", "T NATARAJAN", "Y CHAHAL", "R ASHWIN", "K N REDDY"];
let team50 = ["A KHAN", " R TRIPATHI", "A MARKRAM", "B KUMAR", "T CADMORE"];
let team25 = ["S SHARMA", "R POWELL", "D JUREL", "J UNADKAT"];

var total = [];
var duplicate = [];
function shuffle(arr, arr1, arr2, arr3) {
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
  total.push(temp1);
}
for (i = 0; i < 16; i++) {
  shuffle(team100, team75, team50, team25);
}

const check_duplicate_in_array = (input_array) => {
  const duplicates = input_array.filter(
    (item, index) => input_array.indexOf(item) !== index
  );
  return Array.from(new Set(duplicates));
};

console.log(check_duplicate_in_array(duplicate));
console.log(total);


var table=document.createElement("table")
for(i=0;i<total.length;i++){
  var tr=document.createElement("tr")
  td=document.createElement("td")
  td.innerText=i+1
  tr.append(td)
  temp=total[i]
  for(j=0;j<temp.length;j++){
    td=document.createElement("td")
    td.innerText=temp[j]
    tr.append(td)
  }
  table.append(tr)
}
cont=document.getElementById("container")
cont.append(table)





// let team100 = [
//   "A SHARMA",95,
//   "H KLAASEN",80,
//   "Y JAISWAL",66,
//   "T HEAD",47,
//   "P CUMMINIS",35,
//   "S SAMASAN",21,
//   "R PARAG",8
// ];
// let team75 = ["T BOULT",79, "T NATARAJAN",35, "Y CHAHAL",32, "R ASHWIN",8, "K N REDDY",5];
// let team50 = ["A KHAN",99, " R TRIPATHI",68, "A MARKRAM",13, "B KUMAR",2, "T CADMORE",21];
// let team25 = ["S SHARMA",64, "R POWELL",6, "D JUREL",91, "J UNADKAT",10];
