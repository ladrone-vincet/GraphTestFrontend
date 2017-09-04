export default class NetworkProvider {
  URL = 'http://localhost:8000/graphql';

  responseValidation (response) {
      if(response.ok) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
  }

  //provide only query content as string
  fetchData(query, isMutation = false) {
    console.log("Fetching Data");
    const body = JSON.stringify({query: isMutation ? `mutation{${query}{id title completed}}` : `{${query}}`})
    const header = {
      method: "post",
      headers: {
        'Content-Type': "application/json",
        'Accept': 'application/json'
      },
      body: body
    }

    return fetch(this.URL, header)
      .then(this.responseValidation)
      .then((validResponse) => {return validResponse.json()})
      .catch(e => console.log(e))

  }
}
