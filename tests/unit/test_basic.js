import { Logger }			from '@whi/weblogger';
const log				= new Logger("unit-test", process.env.LOG_LEVEL );

import crypto				from 'crypto';
import { expect }			from 'chai';
import {
    Bytes
}					from '../../src/index.js';


const BYTES_32				= new Uint8Array([
     94, 197, 143, 142,  41, 173,  19,  73,
    137, 136,  40, 235,  74, 214, 173,  94,
      1,  46,  11,   4, 106, 230, 164, 198,
      5,  42, 208, 253, 120,  31, 164, 218
]);
const HEX_32				= "5ec58f8e29ad1349898828eb4ad6ad5e012e0b046ae6a4c6052ad0fd781fa4da";


describe("Bytes", () => {
    describe("Basic", basic_tests );
});


function basic_tests () {
    it("should create a Bytes instance", async () => {
	const bytes			= new Bytes( crypto.randomBytes( 32 ) );

	expect( bytes			).to.have.length( 32 );
	expect( bytes.toString()	).to.be.a("string");
    });

    it("should create Bytes from hex string", async () => {
	const bytes			= new Bytes( HEX_32 );

	expect( bytes			).to.deep.equal( BYTES_32 );
	expect( bytes.toString()	).to.equal( HEX_32 );
    });
}
