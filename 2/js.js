var one = {
position: 'absolute',
background: '#35baf6',
height:'30px',
borderRadius: '0 0 15px 15px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var one_hover = {
position: 'absolute',
background: '#35baf6',
height:'30px',
borderRadius: '0 0 15px 15px',
borderStyle: 'solid',
borderColor: 'white #c1eafd #c1eafd #c1eafd',
textAlign: 'center',
color: 'white',
width:'100px',
};
var two = {
position: 'absolute',
background: '#35baf6',
height:'30px',
marginTop: '120px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var two_hover = {
position: 'absolute',
background: '#03a9f4',
height:'30px',
marginTop: '120px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var tree = {
position: 'absolute',
background: '#35baf6',
height:'30px',
marginTop: '90px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var tree_hover = {
position: 'absolute',
background: '#03a9f4',
height:'30px',
marginTop: '90px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var four = {
position: 'absolute',
background: '#35baf6',
height:'30px',
marginTop: '60px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var four_hover = {
position: 'absolute',
background: '#03a9f4',
height:'30px',
marginTop: '60px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var five = {
position: 'absolute',
background: '#35baf6',
height:'30px',
marginTop: '30px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var five_hover = {
position: 'absolute',
background: '#03a9f4',
height:'30px',
marginTop: '30px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var six = {
position: 'absolute',
background: '#35baf6',
height:'30px',
marginTop: '0px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var six_hover = {
position: 'absolute',
background: '#03a9f4',
height:'30px',
marginTop: '0px',
textAlign: 'center',
color: 'white',
width:'100px',
};
var last = {
position: 'absolute',
background: '#35baf6',
height:'30px',
marginTop: '150px',
textAlign: 'center',
borderRadius: '0 0 15px 15px',
borderTop: '1px #7bb9f9 solid',
color: 'white',
width:'100px',
};
var one_cli = {
position: 'absolute',
background: '#35baf6',
height:'30px',
borderRadius: '0 0 15px 15px',
marginTop: '158px',
paddingTop: '5px',
textAlign: 'center',
borderStyle: 'solid',
borderColor: 'white white white',
color: 'white',
width:'100px',
};
var one1 = document.getElementById('one');
var in_one1 = document.getElementById('in_one');
var two1 = document.getElementById('two');
var tree1 = document.getElementById('tree');
var four1 = document.getElementById('four');
var five1 = document.getElementById('five');
var six1 = document.getElementById('six');
var last1 = document.getElementById('last');
one1.innerHTML = "Top menu";
last1.innerHTML = "Top menu";
for(var key in one){
  one1.style[key] = one[key];
}
function hover(){
  for(var key in one_hover){
  one1.style[key] = one_hover[key];
}
}
function hover_none() {
one1.setAttribute("style", "position: absolute; background: #35baf6; height: 30px; border-radius: 0 0 15px 15px; text-align: center; color: white; width:100px;");
}
function hover_menu_none() {
for(var key in two){
  two1.style[key] = two[key];
}
  for(key in tree){
  tree1.style[key] = tree[key];
}
  for(key in four){
  four1.style[key] = four[key];
}
  for(key in five){
  five1.style[key] = five[key];
}
  for(key in six){
  six1.style[key] = six[key];
}
}
function cli() {
tree1.innerHTML = "Menu 2";
  for(var key in one_cli){
  one1.style[key] = one_cli[key];
}
two1.innerHTML = "Menu 1";
  for(key in two){
  two1.style[key] = two[key];
}
four1.innerHTML = "Menu 3";
  for(key in tree){
  tree1.style[key] = tree[key];
}
five1.innerHTML = "Menu 4";
  for(key in four){
  four1.style[key] = four[key];
}
six1.innerHTML = "Menu 5";
  for(key in five){
  five1.style[key] = five[key];
}
  for(key in six){
  six1.style[key] = six[key];
}
  for(key in last){
  last1.style[key] = last[key];
}
}
one1.addEventListener('mouseover', hover);
one1.addEventListener('mouseout', hover_none);
one1.addEventListener('click', cli);
two1.addEventListener('mouseover', hover_menu_1);
two1.addEventListener('mouseout', hover_menu_none);
tree1.addEventListener('mouseover', hover_menu_2);
tree1.addEventListener('mouseout', hover_menu_none);
four1.addEventListener('mouseover', hover_menu_3);
four1.addEventListener('mouseout', hover_menu_none);
five1.addEventListener('mouseover', hover_menu_4);
five1.addEventListener('mouseout', hover_menu_none);
six1.addEventListener('mouseover', hover_menu_5);
six1.addEventListener('mouseout', hover_menu_none);
function hover_menu_1 () {
 for(var key in two_hover){
  two1.style[key] = two_hover[key];
}
}
function hover_menu_2 () {
 for(var key in tree_hover){
  tree1.style[key] = tree_hover[key];
}
}
function hover_menu_3 () {
 for(var key in four_hover){
  four1.style[key] = four_hover[key];
}
}
function hover_menu_4 () {
 for(var key in five_hover){
  five1.style[key] = five_hover[key];
}
}
function hover_menu_5 () {
 for(var key in six_hover){
  six1.style[key] = six_hover[key];
}
}