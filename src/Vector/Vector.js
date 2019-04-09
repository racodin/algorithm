'use strict';
/**
 * @module Vector
 */
class Vector {
    /**
     * @class Vector
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     */
    constructor( x = 0, y = 0, z = 0 ){
        if( typeof x !== "number"){
            throw Error("the param is not number");
        }
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static create( x = 0, y = 0, z = 0 ){
        return new Vector( x, y, z );
    }

    /**
     * @method set
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @chainable
     */
    set( x = 0, y = 0, z = 0 ){
        if( x instanceof Vector ){
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        } else if(x instanceof Array){
            this.x = x[0];
            this.y = x[1];
            this.z = x[2];
        } else {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        return this;
    }

    /**
     * @method clone
     * @return {Vector}
     */
    clone(){
        return new Vector(this.x, this.y, this.z);
    }


    /**
     * @method add
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @chainable
     */
    add( x = 0, y = 0, z = 0 ){
        if( x instanceof Vector ){
            this.x += x.x;
            this.y += x.y;
            this.z += x.z;
        } else if(x instanceof Array){
            this.x += x[0];
            this.y += x[1];
            this.z += x[2];
        } else {
            this.x += x;
            this.y += y;
            this.z += z;
        }

        return this;
    }

    /**
     * @static
     * @method add
     * @param  {Vector} v1 
     * @param  {Vector} v2 
     * @param  {Vector} target
     */
    static add( v1 = undefined, v2 = undefined, target = undefined ) {
        if( !target ){
            target = v1.clone();
        } else {
            target.set( v1 );
        }
        target.add( v2 );

        return target;
    }

    /**
     * @method sub
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @chainable
     */
    sub( x = 0, y = 0, z = 0 ){
        if( x instanceof Vector ){
            this.x -= x.x;
            this.y -= x.y;
            this.z -= x.z;
        } else if(x instanceof Array){
            this.x -= x[0];
            this.y -= x[1];
            this.z -= x[2];
        } else {
            this.x -= x;
            this.y -= y;
            this.z -= z;
        }

        return this;
    }

    /**
     * @static
     * @method sub
     * @param  {Vector} v1 
     * @param  {Vector} v2 
     * @param  {Vector} target
     */
    static sub( v1 = undefined, v2 = undefined, target = undefined ) {
        if( !target ){
            target = v1.clone();
        } else {
            target.set( v1 );
        }
        target.sub( v2 );

        return target;
    }

    /**
     * @method mul
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @chainable
     */
    mul( x = 0, y = 0, z = 0 ){
        if( x instanceof Vector ){
            this.x *= x.x;
            this.y *= x.y;
            this.z *= x.z;
        } else if(x instanceof Array){
            this.x *= x[0];
            this.y *= x[1];
            this.z *= x[2];
        } else {
            this.x *= x;
            this.y *= y;
            this.z *= z;
        }

        return this;
    }

    /**
     * @static
     * @method mul
     * @param  {Vector} v1 
     * @param  {Vector} v2 
     * @param  {Vector} target
     */
    static mul( v1 = undefined, v2 = undefined, target = undefined ) {
        if( !target ){
            target = v1.clone();
        } else {
            target.set( v1 );
        }
        target.mul( v2 );

        return target;
    }
}

export default Vector;