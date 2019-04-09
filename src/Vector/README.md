# Vector
Vector는 크기와 방향을 모두 가지는 어떤 양으로 정의되는 유클리디안 벡터(Euclidean vector)입니다.
Vector는 사물의 움직임을 프로그래밍하기 위한 가장 기본적인 구성요소이며 코드를 조금 더 단순화하고 적은 변수의 사용으로 반복적인 수학 연산을 할 때 편리한 함수의 집합 역할을 합니다.

```
[before]
var x = 50;
var y = 100;
var z = 150;
var xspeed = 1.5;
var yspeed = 2.2;
var zspeed = 3.8;
x = x + xspeed;
y = y + yspeed;
z = z + zspeed;

[after]
var location = new Vector(50, 100, 150);
var velocity = new Vector(1.5, 2.2, 3.8);
location.add( velocity );
```


---
### 📚 Instance methods
---

### set( value )
> ##### @param value { Vector | Number[] } 
###### 벡터 설정
```
var v1 = new Vector(1, 2, 3);
v1.set( 4, 5, 6 );

console.log( v1 );      // {x: 4, y: 5, z: 6}
```
---
### clone()
> ##### @return { Vector } 
###### 벡터 복사
```
var v1 = new Vector(1, 2, 3);
var v2 = v1.copy();

console.log( v2 )       // {x: 1, y: 2, z: 3}
```
---
### add( value )
> ##### @param value { Vector | Number[] } 
###### 벡터 덧셈
```
var v1 = new Vector(1, 2, 3);
var v2 = new Vector(1, 2, 3);

v1.add( v2 );           
console.log( v1 );      // {x: 2, y: 4, z: 6}

v1.add( 1, 2, 3 );
console.log( v1 );      // {x: 3, y: 6, z: 9}
```
---
### sub( value )
> ##### @param value { Vector | Number[] } 
###### 벡터 뺄셈
```
var v1 = new Vector(1, 2, 3);
var v2 = new Vector(1, 2, 3);

v1.sub( v2 );
console.log( v1 );      // {x: 0, y: 0, z: 0}

v1.sub( 1, 2, 3 );
console.log( v1 );      // {x: -1, y: -2, z: -3}
```
---
### mul( value )
> ##### @param value { Vector | Number[] } 
###### 벡터의 실수곱셈
```
var v1 = new Vector(1, 2, 3);
var v2 = new Vector(1, 2, 3);

v1.mul( v2 );
console.log( v1 );      // {x: 1, y: 4, z: 6}

v1.mul( 1, 2, 3 );
console.log( v1 );      // {x: 1, y: 8, z: 18}
```
---
### div( value )
> ##### @param value { Vector | Number[] } 
###### 벡터의 실수나눗셈
```
var v1 = new Vector(1, 2, 3);
var v2 = new Vector(1, 2, 3);

v1.div( v2 );
console.log( v1 );      // {x: 1, y: 1, z: 1}

v1.div( 1, 2, 3 );
console.log( v1 );      // {x: 1, y: 0.5, z: 0.33}
```


---
### 📚 Stactic methods
---

### add( v1, v2, target )
> ##### @param v1 { Vector } 
> ##### @param v2 { Vector } 
> ##### @param target { Vector } 
###### 벡터 덧셈
```
var v1 = new Vector(1, 2, 3);
var v2 = new Vector(1, 2, 3);

var v3 = Vector.add( v1, v2 );
console.log( v3 );      // {x: 2, y: 4, z: 6}

var v4 = new Vector();
Vector.add( v1, v2, v4 );   
console.log( v4 );      // {x: 2, y: 4, z: 6}
```
---
### sub( v1, v2, target )
> ##### @param v1 { Vector } 
> ##### @param v2 { Vector } 
> ##### @param target { Vector } 
###### 벡터 뺄셈
```
var v1 = new Vector(1, 2, 3);
var v2 = new Vector(1, 2, 3);

var v3 = Vector.sub( v1, v2 );
console.log( v3 );      // {x: 0, y: 0, z: 0}

var v4 = new Vector();
Vector.sub( v1, v2, v4 );   
console.log( v4 );      // {x: 0, y: 0, z: 0}
```
---