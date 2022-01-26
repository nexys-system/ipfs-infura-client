# client ipfs-infura
[![npm version](https://img.shields.io/npm/v/@nexys/ipfs-infura-client.svg)](https://www.npmjs.com/package/@nexys/ipfs-infura-client)
[![Build and Test Package](https://github.com/nexys-system/ipfs-infura-client/actions/workflows/test.yml/badge.svg)](https://github.com/nexys-system/ipfs-infura-client/actions/workflows/test.yml)
[![Publish](https://github.com/nexys-system/ipfs-infura-client/actions/workflows/publish.yml/badge.svg)](https://github.com/nexys-system/ipfs-infura-client/actions/workflows/publish.yml)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Bundlephobia](https://badgen.net/bundlephobia/min/@nexys/ipfs-infura-client)](https://bundlephobia.com/result?p=@nexys/ipfs-infura-client)

## Get started

```
import Client from '@nexys/ipfs-infura-client';

const url = process.env.IPFS_URL || '';
const username = process.env.IPFS_CLIENT || '';
const password = process.env.IPFS_SECRET || '';

const client = new Client({ username, password, url });

export const main = async () => {
  const { cid } = await client.set('hello world');

  const r = await client.get(cid);

  return { cid, r };
};
```
