"use strict";
var one='13213';
var two='223131';
console.log(one);
console.log(two);
 function toFync(h, b) {
  return h * b /2;
 }

console.log(toFync(1, 4));
  var ar=[1,2,3,4];
function revers(ar) {
    var length = ar.length - 1;
    var i = 0;var temp;
    while (i < length - i) {
        temp = ar[i];
        ar[i] = ar[length - i];
        ar[length - i] = temp;
        i++;
    }
    return ar;
}
console.log(revers(ar));

  var arr=[1,2,3,4];
function revers_2(arr) {
    var length = arr.length - 1;
    var temp;
    for (var i = 0, iter = Math.floor(length / 2); i < iter; i++) {
        temp = arr[i];
        arr[i] = arr[length - i];
        arr[length - i] = temp;
    }
    return arr;
}

console.log(revers(arr));

//
 var arr=[1,2,3,4];
function revers(arr) {
    var length = arr.length - 1;
    var i = 0, temp;
    do {
        temp = arr[i];
        arr[i] = arr[length - i];
        arr[length - i] = temp;
        i++;
    }
  while (i < length - i);
    return arr;
}
console.log(revers(arr));

// �������� i++ ���������� �������� ���������� i �� ����������. �������� ++i ���������� �������� ��� ���������� ����������
var q=1; 
console.log(q++);//������� � ������� ����� ��������� ,� ���������� ��������� ����������� �������� 'q' - 1 ,�� ��� ����������� �������� ��� ����� ��������� �� +1, �.�. ++
var g=1;
console.log(++g);//������� � ������� ����� ��������� ,� ���������� ��������� �������� 'q' ,����������� �� +1
//var a = prompt("Number?");
//var n=0;
//if (a<0) alert('��� ����� �������������');
//if (a==n) alert('��� ����� ����� ����');
//if (a>0) alert('��� ����� �������������');
