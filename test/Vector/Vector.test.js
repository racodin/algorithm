import Vector from '../../src/Vector/Vector'

describe('# Vector test', () => {

    describe('# new and create', () => {
        it('벡터는 {x: 1, y: 2, z: 3}을 가지는 인스턴스를 생성한다.', () => {
            // given
            // when
            let v1 = Vector.create(1, 2, 3);
            let v2 = new Vector(1, 2, 3);

            // then
            v1.should.be.eql( { x: 1, y: 2, z: 3 } );
            v2.should.be.eql( { x: 1, y: 2, z: 3 } );
        });
    });

    describe('# addition', () => {
        it('두 벡터의 뎃셈은 {x: 2, y: 4, z: 6} 이여야 한다.', () => {
            // given
            // when
            let v1 = Vector.create(1, 2, 3);
            let v2 = new Vector(1, 2, 3);

            // then
            Vector.add( v1, v2 ).should.be.eql( {x: 2, y: 4, z: 6} );
            v1.add( v2 ).should.be.eql( {x: 2, y: 4, z: 6} );
            v2.add( 1, 2, 3 ).should.be.eql( {x: 2, y: 4, z: 6} );
        });
    });

    describe('# subtraction', () => {
        it('두 벡터의 뺄셈은 {x: 0, y: 0, z: 0} 이여야 한다.', () => {
            // given
            // when
            let v1 = Vector.create(1, 2, 3);
            let v2 = new Vector(1, 2, 3);

            // then
            Vector.sub( v1, v2 ).should.be.eql( {x: 0, y: 0, z: 0} );
            v1.sub( v2 ).should.be.eql( {x: 0, y: 0, z: 0} );
            v2.sub( 1, 2, 3 ).should.be.eql( {x: 0, y: 0, z: 0} );
        });
    });

    describe('# multiplication', () => {
        it('두 벡터의 곱셈은 {x: 1, y: 4, z: 9} 이여야 한다.', () => {
            // given
            // when
            let v1 = Vector.create(1, 2, 3);
            let v2 = new Vector(1, 2, 3);

            // then
            Vector.mul( v1, v2 ).should.be.eql( {x: 1, y: 4, z: 9} );
            v1.mul( v2 ).should.be.eql( {x: 1, y: 4, z: 9} );
            v2.mul( 1, 2, 3 ).should.be.eql( {x: 1, y: 4, z: 9} );
        });

    });

    describe('# method chaining', () => {
        it('벡터의 뎃셈후 뺄셈후 곱셈은 {x: 1, y: 4, z: 9} 이여야 한다.', () => {
            // given
            // when
            let v1 = new Vector(1, 2, 3);

            // then
            v1.add( 1, 2, 3 ).sub( 1, 2, 3 ).mul( 1, 2, 3 ).should.be.eql( {x: 1, y: 4, z: 9} );
        });
    });

});