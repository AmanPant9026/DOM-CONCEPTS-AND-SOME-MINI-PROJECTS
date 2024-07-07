// //select using tag
// var a=document.getElementsByTagName('li');
// console.log(a)

//select using class
// var a=document.getElementById('hero');
// console.log(a);

//select using queryselector(id)
// var a=document.querySelector("#hero");
// console.log(a);

//select using queryselector(class)
// var a=document.querySelector(".zero");
// console.log(a);

//select using queryselector(tag)
// var a=document.querySelector("ul");
// console.log(a);

//replace child
const list=document.querySelector('ul');
const childToChange=list.children[1];
const newChild=document.createElement('li');
newChild.textContent='GigaChad';
list.replaceChild(newChild,childToChange);