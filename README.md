[![](https://img.shields.io/npm/v/@whi/bytes-class/latest?style=flat-square)](http://npmjs.com/package/@whi/bytes-class)

# `new Bytes( ... )`
An extension of `Uint8Array`

[![](https://img.shields.io/github/issues-raw/mjbrisebois/js-bytes-class?style=flat-square)](https://github.com/mjbrisebois/js-bytes-class/issues)
[![](https://img.shields.io/github/issues-closed-raw/mjbrisebois/js-bytes-class?style=flat-square)](https://github.com/mjbrisebois/js-bytes-class/issues?q=is%3Aissue+is%3Aclosed)
[![](https://img.shields.io/github/issues-pr-raw/mjbrisebois/js-bytes-class?style=flat-square)](https://github.com/mjbrisebois/js-bytes-class/pulls)


## Overview


## Install

```bash
npm i @whi/bytes-class
```

## Usage

```javascript
import crypto from 'crypto';
import { Bytes } from '@whi/bytes-class';

const bytes = new Bytes( crypto.randomBytes( 32 ) );

bytes.toString()
// "5ec58f8e29ad1349898828eb4ad6ad5e012e0b046ae6a4c6052ad0fd781fa4da"
```


### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)
