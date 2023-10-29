
export function toHex ( bytes ) {
    return Array.from(
	bytes, byte => byte.toString(16).padStart(2, '0')
    ).join('');
}

export function fromHex ( hex ) {
    const bytes				= new Uint8Array( hex.length / 2 );

    for ( let i = 0; i < hex.length; i += 2 ) {
	bytes[ i/2 ] = parseInt( hex.substr(i, 2), 16 );
    }

    return bytes;
}

export class Bytes extends Uint8Array {
    constructor ( input ) {
	if ( typeof input === "string" )
	    super( fromHex( input ) );
	else
	    super( ...arguments );
    }

    toString () {
	return toHex( this );
    }

    toJSON () {
	return this.toString();
    }
}


export default {
    Bytes,

    toHex,
    fromHex,
};
