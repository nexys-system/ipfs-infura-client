import { create, CID, IPFSHTTPClient } from 'ipfs-http-client';

const getHeaders = (username: string, password: string) => {
  const authorization =
    'basic ' + Buffer.from([username, password].join(':')).toString('base64');

  return { authorization };
};

class SimplifiedInfuraIPFSClient {
  client: IPFSHTTPClient;

  constructor({
    username,
    password,
    url
  }: {
    url: string;
    username: string;
    password: string;
  }) {
    const headers = getHeaders(username, password);
    this.client = create({ url, headers });
  }

  set = async (s: string) => this.client.add(s);

  get = async (cid: CID): Promise<string> =>
    new Promise(async resolve => {
      for await (const variable of this.client.cat(cid)) {
        const b = Buffer.from(variable).toString('utf-8');
        resolve(b);
      }
    });
}

export default SimplifiedInfuraIPFSClient;
