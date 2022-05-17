const baseUrl = 'https://api.github.com/search/users?q=type:org'

function getOrgs() {
  return fetch(`${baseUrl}/`)
  .then(res => res.json())
}

// fetch("https://api.github.com/search/users?q=type:org", {
//   body: "{ }",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Token: "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"
//   },
//   method: "GET"
// })


export {
  getOrgs,
}