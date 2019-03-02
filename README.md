# @jedmao/get

[![NPM version](http://img.shields.io/npm/v/@jedmao/get.svg?style=flat)](https://www.npmjs.org/package/@jedmao/get)
[![npm license](http://img.shields.io/npm/l/@jedmao/get.svg?style=flat-square)](https://www.npmjs.org/package/@jedmao/get)
[![Travis Build Status](https://img.shields.io/travis/jedmao/get.svg)](https://travis-ci.org/jedmao/get)
[![codecov](https://codecov.io/gh/jedmao/get/branch/master/graph/badge.svg)](https://codecov.io/gh/jedmao/get)
[![BundlePhobia Minified](https://badgen.net/bundlephobia/min/@jedmao/get?label=min)](https://bundlephobia.com/result?p=@jedmao/get)
[![BundlePhobia Minified + gzip](https://badgen.net/bundlephobia/minzip/@jedmao/get?label=min%2Bgzip)](https://bundlephobia.com/result?p=@jedmao/get)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Unicorn Approved](https://img.shields.io/badge/unicorn-approved-ff69b4.svg)](https://twitter.com/sindresorhus/status/457989012528316416?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fwww.quora.com%2FWhat-does-the-unicorn-approved-shield-mean-in-GitHub)

[![npm](https://nodei.co/npm/@jedmao/get.svg?downloads=true)](https://nodei.co/npm/@jedmao/get/)

Type-safe get function returns a nested value from an object.

Types will be preserved up to 10 levels deep. After that, things start coming back as `any`. This is due to a depth limitation of TypeScript.

This library is tiny [![BundlePhobia Minified + gzip](https://badgen.net/bundlephobia/minzip/@jedmao/get?label=min%2Bgzip)](https://bundlephobia.com/result?p=@jedmao/get), despite how big it might look if you see the TypeScript source code. Most of what you see is type information, which disappears when compiled into JavaScript, but provides rich in-editor support (see below).

![screenshot](./screenshot.png)

## Installation

```bash
npm i @jedmao/get
```

## Usage

```ts
import get from '@jedmao/get'

const data = {
  a: {
    b: [{ c: 'd' }],
    e: undefined,
  },
}

get(data, ['a', 'b', 0, 'c']) // "d"
get(data, ['not-found' as any], 'defaultValue') // "defaultValue"
get(data, ['a', 'e'], 'defaultValue') // undefined
get(data, ['a', 'e']) || 'fallback' // "fallback"
```

Also works on functions. If you need to override the input type, you can use `get<T>` in TypeScript.
