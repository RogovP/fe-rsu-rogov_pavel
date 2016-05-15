
var item_list = document.getElementById('item');
function myFunction() {
  var br = document.createElement("br");
  var list = document.getElementById('to_do');
var x = document.createElement("input");
x.setAttribute("type", "checkbox");
var label = document.createElement('label');
label.htmlFor = "id";
label.appendChild(document.createTextNode(item_list.value));
list.appendChild(x);
list.appendChild(label);
list.appendChild(br);
item_list.value = ' ';
}
var body_center = {
background: 'white',
height:'400px',
width:'360px',
};
var doing = {
  type: 'checkbox',
};
var to_do = {
width:'220px',
height:'200px',
  overflowY: 'scroll',
marginLeft: '30px',
paddingTop: '25px',
};
var down = {
paddingTop: '10px',
};
var g = '¬ы действительно хотите добавить новую задачу?';
var body_c = document.getElementById('body_center');
var down1 = document.getElementById('down');
var to_do1 = document.getElementById('to_do');
var del = document.getElementById('but_1');
var button = document.getElementById('but');
for(var key in body_center){
  body_c.style[key] = body_center[key];
}
for(var key in to_do){
  to_do1.style[key] = to_do[key];
}
for(var key in down){
  down1.style[key] = down[key];
}
function cli() {
 if (confirm(g)) {myFunction();
 }
  else {
  }
}
button.addEventListener('click', cli);