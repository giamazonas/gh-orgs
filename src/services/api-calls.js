const baseUrl = 'https://api.github.com/search/users?q=type:org'

function getOrgs() {
  return fetch(`${baseUrl}/`)
  .then(res => res.json())
}

export {
  getOrgs,
}