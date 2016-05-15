var one = {
position: 'absolute',
background: '#ffc300',
height:'33px',
width:'298px',
};
var one_two_str = {
zIndex: '100',
position: 'absolute',
marginTop: '33px',
marginLeft: '10px',
width: '0',
height: '0',
border: '10px solid transparent' ,
borderTopColor: '#ffc300',
};
var one_two = {
position: 'absolute',
marginTop: '-20px',
marginLeft: '10px',
width: '0',
height: '0',
border: '10px solid transparent' ,
borderTopColor: '#ffc300',
};
var text = {
marginTop: '7px',
position: 'absolute',
marginLeft: '10px',
fontSize: '15px',
color: 'black',
};
var two = {
position: 'absolute',
marginRight: '1px',
color: '#63968a',
height: '123px',
width: '298px',
background: 'white',
fontSize: '10px',
border: '1px solid #61a393',
marginLeft: '5px',
marginTop: '5px',
};
var tree= {
background: '#a0dfd1',
height: '135px',
width: '310px',
borderRadius: '4px',
border: '2px solid #3d9983',
};
var pt = {
paddingTop: '39px',
paddingLeft: '5px',
};
var one_two_str1 = document.getElementById('one_two_str');
for(var key in one_two_str){
  one_two_str1.style[key] = one_two_str[key];
}
var one1 = document.getElementById('one');
for(var key in one){
  one1.style[key] = one[key];
}
var text1 = document.getElementById('text');
text1.innerHTML = 'Header';
for(var key in text){
  text1.style[key] = text[key];
}
var two1 = document.getElementById('two');
for(var key in two){
  two1.style[key] = two[key];
}
var tree1 = document.getElementById('tree');
for(var key in tree){
  tree1.style[key] = tree[key];
}
var one_two1 = document.getElementById('one_two');
for(var key in one_two){
  one_two1.style[key] = one_two[key];
}
var pt1 = document.getElementById("pt");
pt1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi libero eos dolore recusandae. Doloribus porro consequatur minima illum quos molestiae, non ullam odit quas, ex placeat voluptates cum architecto natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>';
for(var key in pt){
  pt1.style[key] = pt[key];
}