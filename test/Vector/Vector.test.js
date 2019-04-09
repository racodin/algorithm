import Vector from '../../src/Vector/Vector'

describe('# Vector test', () => {
    let xyz1 = [1, 2, 3];
    let xyz2 = [4, 5, 6];

    describe('# new and create', () => {
        it('벡터는 {x: 1, y: 2, z: 3}을 가지는 인스턴스를 생성한다.', () => {
            // given
            // when
            let v1 = Vector.create(xyz1);
            let v2 = new Vector(xyz1);
            
            // then
            v1.should.be.eql( { x: 1, y: 2, z: 3 } );
            v2.should.be.eql( { x: 1, y: 2, z: 3 } );
        });
    });

    describe('# addition', () => {
        it('두 벡터의 뎃셈은 {x: 5, y: 7, z: 9} 이여야 한다.', () => {
            // given
            // when
            let v1 = new Vector(xyz1);
            let v2 = new Vector(xyz2);

            // then
            Vector.add( v1, v2 ).should.be.eql( {x: 5, y: 7, z: 9} );
            v1.add( v2 );
            v1.should.be.eql( {x: 5, y: 7, z: 9} );
        });
    });

    describe('# subtraction', () => {
        it('두 벡터의 뺄셈은 {x: -3, y: -3, z: -3} 이여야 한다.', () => {
            // given
            // when
            let v1 = new Vector(xyz1);
            let v2 = new Vector(xyz2);

            // then
            Vector.sub( v1, v2 ).should.be.eql( {x: -3, y: -3, z: -3} );
            v1.sub( v2 );
            v1.should.be.eql( {x: -3, y: -3, z: -3} );
        });
    });

    describe('# multiplication', () => {
        it('두 벡터의 곱셈은 {x: 4, y: 10, z: 18} 이여야 한다.', () => {
            // given
            // when
            let v1 = new Vector(xyz1);
            let v2 = new Vector(xyz2);

            // then
            Vector.mul( v1, v2 ).should.be.eql( {x: 4, y: 10, z: 18} );
            v1.mul( v2 );
            v1.should.be.eql( {x: 4, y: 10, z: 18} );
        });

    });

    describe('# method chaining', () => {
        it('벡터1에 벡터2의 뎃셈후 뺄셈후 곱셈은 {x: 4, y: 10, z: 18} 이여야 한다.', () => {
            // given
            // when
            let v1 = new Vector(xyz1);
            let v2 = new Vector(xyz2);

            // then
            v1.add( v2 ).sub( v2 ).mul( v2 );
            v1.should.be.eql( {x: 4, y: 10, z: 18} );
        });
    });

});