
 //document.querySelectorAll(div).style.color="Red";
// document.createElement("div");
//  document.createTextNode("Mo sala");
//  document.getElementById("demo").innerHTML = "Hello JavaScript";
//  let user=new Object();
//  user.ob1="mohamed";
//  user["Ahmed"]="Mody";
//  console.log(user);
//  let Elemnt = document.createElement("div");
//  let elm = document.querySelector("div")
// elm.innerHTML()="First";
// console.log(Elemnt); 
// let cons= "log";
// console.log(cons);

let obj = {};
obj.first="Planet";
obj["second"]="planet2";
obj.Therd=function(){
    return `planet3`;
};
console.log(obj.Therd());
console.log(obj);

document.getElementById("c1").onclick = function(){
    console.log(this);
};

let ol = document.getElementById("c1");
ol.setAttribute("id","C2");
console.log(ol.getAttribute("id"));
console.log(ol.hasAttribute("id"));

let myElement=document.createElement("div");
let myElement2=document.createElement("h3");
for(let i = 0;i<0;i++)
{
    
myElement.className="product";
myElement.appendChild(document.createTextNode("Hello Mohamed"));
//document.setAttributeNode("className","product");
console.log(myElement);
myElement.appendChild(myElement2);
myElement2.appendChild(document.createTextNode("H3lk"));
    document.body.appendChild(myElement);
}

let hj=document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment")

hj.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        hj.forEach((li)=>{
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        exp.style.backgroundColor=window.localStorage.getItem("color");
    });
    
});

if(window.localStorage.getItem("color"))
{
    exp.style.backgroundColor=window.localStorage.getItem("color");
    hj.forEach((li)=>{
        li.classList.remove("active");

        //console.log(window.localStorage.getItem("color"))
        //console.log(li.currentTarget.dataset.color)
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

let arr=["1","2"];

console.log(arr.map((n) => +n*2));
console.log(arr[0]*2);

let num = 'ramkhj hjjk';
let reg = /[^b-d]/ig;
let reg1 =/^[ram]/ig;
let reg2 =/[^ram]/ig;

console.log(/[^b-d]/ig.test(num));
console.log(/^[ram]/ig.test(num))
console.log(/[^ram]/ig.test(num))
console.log(num.match(reg1));
console.log(num.match(reg2));
console.log("------------------------");

class user {
    
    constructor(id,salary,name){
        this.i = id;
        this.s = salary;
        this.n = name;
        this.fun = function () {
             console.log("yes");
            //return `Hello ${this.s} !`;
        };
    }
    meth(){
        return `Hello ${this.s} !`;
    }
}
let oboj = new user(1,500,"Mohamed");
console.log(`Id = ${oboj.i},Name = ${oboj.n}`);
console.log(`Function ${oboj.meth()}`);
oboj.fun();


/*
class User {
    constructor(id, username, salary) {
      // Properties
      this.i = id;
      this.u = username ;
      this.s = salary ;
      this.msg = function () {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
      };
    }
    // Methods
    writeMsg() {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  
  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "", 6000);
  
  console.log(userOne.u);
  console.log(userOne.s);
  console.log(userOne.msg());
  console.log(userOne.writeMsg());
  
  console.log(userTwo.u);
  console.log(userTwo.s);
  console.log(userTwo.msg); // Native Code
  console.log(userTwo.writeMsg); // Native Code*/

  let dateNow1 =new Date();
  let date =Date.now();
  //let date2 =dateNow();
  console.log(dateNow1);
  console.log(date);
  //console.log(date1);
  console.log("#".repeat(10));
  dateNow1.setTime(10000);
  console.log(dateNow1);