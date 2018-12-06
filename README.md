# BcoinSV

[![CircleCi Status][circleci-status-img]][circleci-status-url]
[![Coverage Status][coverage-status-img]][coverage-status-url]

**BcoinSV** is an alternative implementation of the bitcoin SV protocol,
written in node.js.

BcoinSV is undergoing development and testing and is in alpha stage. BcoinSV
is a fork of [bcash][bcash] and has the same RPC API.

## Uses

- Full Node
- SPV Node
- Wallet Backend (bip44 derivation)
- Mining Backend (getblocktemplate support)
- General Purpose Bitcoin Library

Try it in the browser: https://bcoin.io/browser/

## Install

```
$ git clone git://github.com/brentongunning/bcoinsv.git
$ cd bcoinsv
$ npm install
$ ./bin/bcoinsv
```

See the [Beginner's Guide][guide] for more in-depth installation instructions.

## Documentation

- API Docs: https://bcoin.io/docs/
- REST Docs: https://bcoin.io/api-docs/index.html
- Docs: [docs/](docs/README.md)

## Support

Join us on [freenode][freenode] in the [#bcoin][irc] channel.

## Disclaimer

BcoinSV does not guarantee you against theft or lost funds due to bugs, mishaps,
or your own incompetence. You and you alone are responsible for securing your
money.

## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your code
to be distributed under the MIT license. You are also implicitly verifying that
all code is your original work. `</legalese>`

## License

- Copyright (c) 2014-2015, Fedor Indutny (MIT License).
- Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
- Copyright (c) 2018, bcash developers.

See LICENSE for more info.

[bcoin]: https://bcoin.io
[purse]: https://purse.io
[freenode]: https://freenode.net/
[irc]: irc://irc.freenode.net/bcoin
[guide]: ./docs/Beginner's-Guide.md
[changelog]: ./CHANGELOG.md


[coverage-status-img]: https://codecov.io/gh/bcoin-org/bcash/badge.svg?branch=master
[coverage-status-url]: https://codecov.io/gh/bcoin-org/bcash?branch=master
[circleci-status-img]: https://circleci.com/gh/bcoin-org/bcash/tree/master.svg?style=shield
[circleci-status-url]: https://circleci.com/gh/bcoin-org/bcash/tree/master
