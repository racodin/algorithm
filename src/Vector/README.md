# Vector
Vector는 크기와 방향을 모두 가지는 어떤 양으로 정의되는 유클리디안 벡터(Euclidean vector)입니다.
Vector는 사물의 움직임을 프로그래밍하기 위한 가장 기본적인 구성요소이며 코드를 조금 더 단순화하고 적은 변수의 사용으로 반복적인 수학 연산을 할 때 편리한 함수의 집합 역할을 합니다.

```
// [before]
var x = 50;
var y = 100;
var z = 150;
var xspeed = 1.5;
var yspeed = 2.2;
var zspeed = 3.8;
x = x + xspeed;
y = y + yspeed;
z = z + zspeed;

// [after]
var location = new Vector(50, 100, 150);
var velocity = new Vector(1.5, 2.2, 3.8);
location.add( velocity );
```


---
### 📚 Instance and Stactic Methods
Link: [Google](https://google.com, "google link")

* [Vector()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#vector-x-y-z-, "벡터 생성") - 벡터 생성
* [set()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#set-x-y-z-, "벡터 설정") - 벡터 설정
* [clone()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#clone, "벡터 복사") - 벡터 복사
* [add()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#add-x-y-z-, "벡터 덧셈") - 벡터 덧셈
* [sub()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#sub-x-y-z-, "벡터 뺄셈") - 벡터 뺄셈
* [mult()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#mult-value-, "벡터 곱셈") - 벡터 곱셈
* [div()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#div-value-, "벡터 나눗셈") - 벡터 나눗셈
* [mag()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#mag, "벡터 크기 계산") - 벡터 크기 계산
* [normalize()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#normalize, "벡터를 정규화하여 단위 길이를 1로 변환") - 벡터를 정규화하여 단위 길이를 1로 변환
* [limit()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#limit-max-, "벡터의 크기를 제한") - 벡터의 크기를 제한
* [dist()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#dist-value-, "두 벡터간의 거리를 계산") - 두 벡터간의 거리를 계산
* [heading()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#heading-type-, "벡터의 방향을 각도로 표시 (2d만 가능)") - 벡터의 방향을 각도로 표시 (2d만 가능)
* [dot()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#dot-value-, "두 벡터의 내적을 계산") - 두 벡터의 내적을 계산
* [cross()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#cross-value-, "두 벡터의 외적을 계산 (3d만 가능)") - 두 벡터의 외적을 계산 (3d만 가능)
* [angleBetween()](https://github.com/racodin/algorithm-analysis/tree/master/src/Vector#anglebetween-value-, "두 벡터간의 각도를 계산") - 두 벡터간의 각도를 계산
---

### Vector( x, y, z )
* param {Number} x
* param {Number} y
* param {Number} z
```
var v1 = new Vector(1, 2, 3);
var v2 = Vector.create(1, 2, 3);
console.log( v1 );      // {x: 1, y: 2, z: 3}
console.log( v2 );      // {x: 1, y: 2, z: 3}
```
---

### set( x, y, z )
* param {Number} x
* param {Number} y
* param {Number} z
```
var v1 = new Vector(1, 2, 3);
v1.set( 4, 5, 6 );
console.log( v1 );      // {x: 4, y: 5, z: 6}
```
---

### clone()
* return {Vector}
```
var v1 = new Vector(1, 2, 3);
var v2 = v1.copy();
console.log( v2 )       // {x: 1, y: 2, z: 3}
```
---

### add( x, y, z )
* param {Vector|Number} x
* param {Number} y
* param {Number} z
### add( v1, v2, target )
* param {Vector} v1
* param {Vector} v2
* param {Vector} target
```
var v1 = new Vector(1, 2, 3);
v1.add( 1, 2, 3 );
console.log( v1 );      // {x: 2, y: 4, z: 6}

var v2 = new Vector(1, 2, 3);
v2.add( v1 );
console.log( v2 );      // {x: 3, y: 6, z: 9}

var v3 = Vector.add( v1, v2 );
console.log( v3 );      // {x: 5, y: 10, z: 15}

var target = new Vector();
Vector.add( v1, v2, target )
console.log( target );      // {x: 5, y: 10, z: 15}
```
---

### sub( x, y, z )
* param {Vector|Number} x
* param {Number} y
* param {Number} z
### sub( v1, v2, target )
* param {Vector} v1
* param {Vector} v2
* param {Vector} target
```
var v1 = new Vector(1, 2, 3);
v1.sub( 1, 2, 3 );
console.log( v1 );      // {x: 0, y: 0, z: 0}

var v2 = new Vector(1, 2, 3);
v2.sub( v1 );
console.log( v2 );      // {x: 1, y: 2, z: 3}

var v3 = Vector.sub( v1, v2 );
console.log( v3 );      // {x: -1, y: -2, z: -3}

var target = new Vector();
Vector.sub( v1, v2, target )
console.log( target );      // {x: -1, y: -2, z: -3}
```
---

### mult( value )
* param {Vector|Number} value
### mult( v1, v2 )
* param {Vector} v1
* param {Vector|Number} v2
```
var v1 = new Vector(1, 2, 3);
v1.mult( 1, 2, 3 );
console.log( v1 );      // {x: 2, y: 4, z: 6}

var v2 = new Vector(1, 2, 3);
v2.mult( v1 );
console.log( v2 );      // {x: 2, y: 8, z: 18}

var v3 = Vector.mult( v1, 2 );
console.log( v3 );      // {x: 4, y: 8, z: 12}

var v4 = Vector.mult( v1, v2 );
console.log( v4 );      // {x: 4, y: 32, z: 108}
```
---

### div( value )
* param {Vector|Number} value
### div( v1, v2 )
* param {Vector} v1
* param {Vector|Number} v2
```
var v1 = new Vector(1, 2, 3);
v1.div( 1, 2, 3 );
console.log( v1 );      // {x: 1, y: 2, z: 3}

var v2 = new Vector(1, 2, 3);
v2.div( v1 );
console.log( v2 );      // {x: 1, y: 1, z: 1}

var v3 = Vector.div( v1, 2 );
console.log( v3 );      // {x: 0.5, y: 1, z: 1.5}

var v4 = Vector.div( v1, v2 );
console.log( v4 );      // {x: 1, y: 2, z: 3}
```
---

### mag()
* return {Number}
### mag( v )
* param {Vector} v
* return {Number}
```
var v1 = new Vector(3, 4);
v1.mag();
console.log( v1 );      // 5

var v2 = Vector.mag( v1 );
console.log( v2 );      // 5
```
---

### normalize()
* return {Vector}
### normalize( v )
* param {Vector} v
* return {Vector}
```
var v1 = new Vector(100, 200);
v1.normalize();
console.log( v1 );      // {x: 0.447213595499958, y: 0.894427190999916, z: 0}

var v2 = Vector.normalize( v1 );
console.log( v2 );      // {x: 0.447213595499958, y: 0.894427190999916, z: 0}
```
---

### limit( max )
* parame {Number} max
* return {Vector}
### limit( v )
* param {Vector} v
* return {Vector}
```
var v1 = new Vector(150, 200);
v1.limit( 50 );
console.log( v1 );      // {x: 30, y: 40, z: 0}

var v2 = Vector.limit( v1 );
console.log( v2 );      // {x: 30, y: 40, z: 0}
```
---

### dist( value )
* parame {Vector} value
### dist( v1, v2 )
* param {Vector} v1
* param {Vector} v2
```
var v1 = new Vector(10, 20);
var v2 = new Vector(30, 40);
var v3 = v1.dist( v2 );
console.log( v3 );      // 28.284271247461902

var v4 = Vector.dist( v1, v2 );
console.log( v4 );      // 28.284271247461902
```
---

### heading( type )
* parame {String} type
```
var v1 = new Vector(10, 20);
console.log( v1.heading() );                // 1.1071487177940904
console.log( v1.heading( "degrees" ) );     // 63.43494882292201
```
---

### dot( value )
* parame {Vector} value
* return {Number}
### dot( v1, v2 )
* param {Vector} v1
* param {Vector} v2
* return {Number}
```
var v1 = new Vector(10, 20);
var v2 = new Vector(30, 40);
v1.dot( v2 );
console.log( v1 );      // 1100

var v3 = Vector.dot( v1, v2 );
console.log( v1 );      // 1100
```
---

### cross( value )
* parame {Vector} value
* return {Number}
### cross( v1, v2 )
* param {Vector} v1
* param {Vector} v2
* return {Number}
```
var v1 = new Vector(10, 20);
var v2 = new Vector(30, 40);
v1.cross( v2 );
console.log( v1 );      // 1100

var v3 = Vector.cross( v1, v2 );
console.log( v1 );      // 1100
```
---

### angleBetween( value )
* parame {Vector} value
* return {Number}
### angleBetween( v1, v2 )
* param {Vector} v1
* param {Vector} v2
* return {Number}
```
// default angleMode: "radians"
// Vector.angleMode = "degrees";
// Vector.angleMode = "radians";

var v1 = new Vector(0, 80);
var v2 = new Vector(80, 0); 
console.log( v1.angleBetween( v2 ) );   // 90 or 1.5707963267948966

var v3 = Vector.angleBetween( v1, v2 );
console.log( v3 );                      // 90 or 1.5707963267948966
```
---