const name = 'API Fetch Error';

const respError = resp => ({
  name,
  message: `${resp.status} - ${resp.statusText}`
});

export async function get(path) {
  const host = this.host || '';
  const resp = await fetch(`${host}${path}`);
  // console.info(resp);
  if (resp.ok) {
    return resp.json();
  } else {
    throw respError(resp);
  }
}

export async function post(path, data) {
  const postOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  };
  const host = this.host || '';
  const resp = await fetch(`${host}${path}`, postOptions);
  if (resp.ok) {
    return resp.json();
  } else {
    throw respError(resp);
  }
}

class Api {
  constructor(host) {
    this.host = host || '';
    this.get = get;
    this.post = post;
  }
}

export default Api;
