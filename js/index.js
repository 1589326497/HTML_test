//在控制台输出hello world
console.log('hello world');

//变量 var let const 
let age = 30;
age = 31;
const ain = 20;   //const不能被修改 ,const必须在声明时赋值
console.log(age);

//原生数据类型 String ,Number,Boolean,null,undefined
const username = 'john';
const inn = 30;
const isCool = true;
const rate = 4.5;
const x = null;   //定义为空
const y = undefined;  //不存在定义
let z;  //不存在定义

console.log(typeof undefined);

//字符串连接连接
console.log("我的名字是" + username + "我的年龄是" + inn);
console.log(`我的名字是${username}我的年龄是${inn}`);//模板字符串
const hello = `我的名字是${username}我的年龄是${inn}`;
console.log(hello);

//字符串的内置方法
const s = "hello world";
console.log(s.length);//获取长度方法

//数组 
const numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers);
const first = ['apple', 'orange', 10, true];
console.log(first);
first.push("mangos");
console.log(first[0]);
console.log(first);
first.unshift('name');
console.log(first);
first.pop();
console.log(first);
console.log(Array.isArray(first));
console.log(numbers.indexOf(1));

//对象
const person = {
    firstName: "john",
    lastName: "Doe",
    age: 30,
    hobbies: ['music', 'movies'],
    address: {
        state: "MA",
    }
};

console.log(person.firstName, person.hobbies[1], person.address.state);
const { firstNamem, lastName, address: { state } } = person;//同名的变量将值从person中抽取出来
console.log(lastName);
console.log(state);

person.email = '1589326497@qq.com';

console.log(person);

// 对象数组
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false,
    },
];
console.log(todos[1].text);


// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// if条件句
//=== 会考虑数据类型 ==不会考虑数据的类型
const h = 11;
const n = 10;
if (h === 10 || n > 1) {
    console.log('x is 10');
}
else if (h > 10 || n < 12) {
    console.log('x is greater than 10');
}
else {
    console.log('x is not 10');
}

//三目运算符
const k = 11;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

//条件语句switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}

//for循环
for (let i=0; i<=10;i++){
    console.log(`For Loop Number:${i}`);
}
//在c++中用':'而javaScript用of 在python中用 in
for (let todo of todos){
    console.log(todo);
}

//while
let i=0;
while(i<10){
    console.log(`For Loop Number:${i}`);
    i++;
}