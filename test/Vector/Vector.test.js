import Vector from '../../src/Vector/Vector'

describe('# Vector test', () => {

    describe('# new and create', () => {
        it('벡터를 가지는 인스턴스를 생성한다.', () => {

            let v1 = new Vector(1, 2, 3);
            v1.should.be.eql( { x: 1, y: 2, z: 3 } );

            let v2 = Vector.create(1, 2, 3);
            v2.should.be.eql( { x: 1, y: 2, z: 3 } );

        });
    });

    describe('# addition', () => {
        it('벡터의 지정된 값을 더한다.', () => {
            
            let v1 = new Vector(1, 2, 3);
            v1.add( 1, 2, 3 ).should.be.eql( {x: 2, y: 4, z: 6} );

            let v2 = new Vector(1, 2, 3);
            v2.add( v1 ).should.be.eql( {x: 3, y: 6, z: 9} );

            let v3 = Vector.add( v1, v2 );
            v3.should.be.eql( {x: 5, y: 10, z: 15} );

            let target = new Vector();
            Vector.add( v1, v2, target )
            target.should.be.eql( {x: 5, y: 10, z: 15} );

        });
    });

    describe('# subtraction', () => {
        it('벡터의 지정된 값을 뺀다.', () => {

            let v1 = new Vector(1, 2, 3);
            v1.sub( 1, 2, 3 ).should.be.eql( {x: 0, y: 0, z: 0} );

            let v2 = new Vector(1, 2, 3);
            v2.sub( v1 ).should.be.eql( {x: 1, y: 2, z: 3} );

            let v3 = Vector.sub( v1, v2 );
            v3.should.be.eql( {x: -1, y: -2, z: -3} );

            let target = new Vector();
            Vector.sub( v1, v2, target );
            target.should.be.eql( {x: -1, y: -2, z: -3} );

        });
    });

    describe('# multiplication', () => {
        it('벡터의 지정된 값을 곱한다.', () => {

            let v1 = new Vector(1, 2, 3);
            v1.mult( 2 ).should.be.eql( {x: 2, y: 4, z: 6} );

            let v2 = new Vector(1, 2, 3);
            v2.mult( v1 ).should.be.eql( {x: 2, y: 8, z: 18} );

            let v3 = Vector.mult( v1, 2 );
            v3.should.be.eql( {x: 4, y: 8, z: 12} );

            let v4 = Vector.mult( v1, v2 );
            v4.should.be.eql( {x: 4, y: 32, z: 108} );

        });
    });

    describe('# division', () => {
        it('벡터의 지정된 값을 나눈다.', () => {
            let v1 = new Vector(2, 4, 6);
            v1.div( 2 ).should.be.eql( {x: 1, y: 2, z: 3} );

            let v2 = new Vector(1, 2, 3);
            v2.div( v1 ).should.be.eql( {x: 1, y: 1, z: 1} );

            let v3 = Vector.div( v1, 2 );
            v3.should.be.eql( {x: 0.5, y: 1, z: 1.5} );

            let v4 = Vector.div( v1, v2 );
            v4.should.be.eql( {x: 1, y: 2, z: 3} );
        });
    });

    describe('# magnitude', () => {
        it('벡터의 크기를 계산 한다.', () => {
            let v1 = new Vector(3, 4);
            v1.mag().should.be.eql( 5 );

            let v2 = Vector.mag( v1 );
            v2.should.be.eql( 5 );
        });
    });

    describe('# normalize', () => {
        it('벡터를 정규화하여 단위 길이를 1로 만들어 준다.', () => {

            let v1 = new Vector(100, 200);
            v1.normalize().should.be.eql( {x: 0.447213595499958, y: 0.894427190999916, z: 0} );

            let v2 = Vector.normalize( v1 );
            v2.should.be.eql( {x: 0.447213595499958, y: 0.894427190999916, z: 0} );

        });
    });
    
    describe('# limit', () => {
        it('벡터의 크기를 제한한다.', () => {

            let v1 = new Vector(150, 200);
            v1.limit(50).should.be.eql( {x: 30, y: 40, z: 0} );

            let v2 = Vector.limit( v1 );
            v2.should.be.eql( {x: 30, y: 40, z: 0} );

        });
    });
    
    describe('# distance', () => {
        it('두 벡터간의 거리를 계산한다.', () => {

            let v1 = new Vector(10, 20);
            let v2 = new Vector(30, 40);
            let v3 = v1.dist( v2 );
            v3.should.be.eql( 28.284271247461902 );

            let v4 = Vector.dist( v1, v2 );
            v4.should.be.eql( 28.284271247461902 );

        });
    });
    
    describe('# heading', () => {
        it('벡터의 방향을 각도로 반환한다.', () => {

            let v1 = new Vector(10, 20);
            v1.heading().should.be.eql( 1.1071487177940904 );

            Vector.angleMode = "degrees";
            v1.heading().should.be.eql( 63.43494882292201 );

        });
    });
    
    describe('# dot', () => {
        it('두 벡터의 내적을 계산한다.', () => {

            let v1 = new Vector(10, 20);
            let v2 = new Vector(30, 40);
            v1.dot(v2).should.be.eql( 1100 );

            let v3 = Vector.dot( v1, v2 );
            v3.should.be.eql( 1100 );
            
        });
    });
    
    describe('# cross', () => {
        it('두 벡터의 외적을 계산한다.', () => {

            let v1 = new Vector(10, 20, 2);
            let v2 = new Vector(60, 80, 6);
            v1.cross(v2).should.be.eql( {x: -40, y: 60, z: -400} );

            let v3 = Vector.cross( v1, v2 );
            v3.should.be.eql( {x: -40, y: 60, z: -400} );
            
        });
    });

    describe('# angle between', () => {
        it('두 벡터간의 각도를 계산한다.', () => {

            let v1 = new Vector(0, 80);
            let v2 = new Vector(80, 0); 
            v1.angleBetween(v2).should.be.eql( 90 );

            let v3 = Vector.angleBetween( v1, v2 );
            v3.should.be.eql( 90 );

            Vector.angleMode = "radians";
            v1.angleBetween(v2).should.be.eql( 1.5707963267948966 );

            let v4 = Vector.angleBetween( v1, v2 );
            v4.should.be.eql( 1.5707963267948966 );

        });
    });

    describe('# method chaining', () => {
        it('메소드 체이닝을 할 수 있다.', () => {
            let v1 = new Vector(1, 2, 3);
            v1.add( 1, 2, 3 ).sub( 1, 2, 3 ).mult( 2 ).should.be.eql( {x: 2, y: 4, z: 6} );
        });
    });

});