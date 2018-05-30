1. 直接執行 
console.log(this) -> global=window

2. 作為物件的成員函式執行 -> 該物件

function a(){
	console.log(this);
}

a(); -> global=window

-----

const obj={
	name:"object",
	a(){
		console.log(this);
	}
}

obj.a(); -> obj物件;因為是由obj呼叫的

const b = obj.a;
b(); -> window;因為是直接呼叫所以是window

3. DOM偵聽函式 -> 該DOM

function a(){
	console.log(this);
}

<button id="btn">btn</button>

btn.addEventListener('click',a); -> 呼叫的DOM本身，這個例子就是<button id="btn">btn</button>

4. 建構函式 -> 建構出來的實例

function a(){
	console.log(this);
}

const x = new a(); -> new出來的x


=======================================

function a(){
	console.log(this);
}
const obj = {};
obj.a = a;
obj.a() -> obj

=======================================

const obj = {
	a(){
		console.log(this);
		function b(){
			console.log(this);
		}
		b();
	}
}
obj.a(); 
-> 1. obj
-> 2. window;因為是直接執行

=======================================

function a(){
	console.log(this)
}
const obj = {a};

btn.addEventListener('click',obj.a); -> btn的DOM

=======================================

function a(){
	console.log(this)
}
const obj = {
	b(){
		return function(){
			a();
		}
	}
};

btn.addEventListener('click',obj.b); -> window;因為a函式是直接執行的

=======================================

const obj = {
	b(){
		return function(){
			console.log(this)
		}
	}
};

btn.addEventListener('click',obj.b); -> btn的DOM

=======================================

function a(){
	console.log(this);
}

const obj = {
	a(){
		return a;
	}
}

btn.addEventListener('click',obj.a()); -> btn的DOM