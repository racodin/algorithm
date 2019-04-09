'use strict';
/**
 * @module Vector
 */
class Vector {
    /**
     * @class Vector
     * @param {Number} [x] x component of the vector
     * @param {Number} [y] y component of the vector
     * @param {Number} [z] z component of the vector
     */
    constructor( x = 0, y = 0, z = 0 ){
        if(x instanceof Array){
            this.x = x[0];
            this.y = x[1];
            this.z = x[2];
        } else {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }

    static create( x = 0, y = 0, z = 0 ){
        return new Vector( x, y, z );
    }

    /**
     * @method add
     * @param  {Vector|Number[]} value the vector to addition
     * @chainable
     */
    add( v = undefined ){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;
    }

    static add( v1 = undefined, v2 = undefined ) {
        return new Vector( v1.x + v2.x, v1.y + v2.y, v1.z + v2.z );
    }

    /**
     * @method sub
     * @param  {Vector|Number[]} value the vector to subtract
     * @chainable
     */
    sub( v = undefined ){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;
    }

    // subtraction: 벡터의 뺄셈 v1 - v2 = v3;
    static sub( v1 = undefined, v2 = undefined ) {
        return new Vector( v1.x - v2.x, v1.y - v2.y, v1.z - v2.z );
    }

    /**
     * @method mul
     * @param  {Vector|Number[]} value the vector to multiplication
     * @chainable
     */
    mul( v = undefined ){
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;

        return this;
    }

    static mul( v1 = undefined, v2 = undefined ) {
        return new Vector( v1.x * v2.x, v1.y * v2.y, v1.z * v2.z );
    }
}

export default Vector;