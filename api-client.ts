const BASE_URL = 'https://d4crsehc65.execute-api.eu-central-1.amazonaws.com/prod'
const TOKEN = 'e34vAOxj2C9fo2NVp9kT89QBOA4P1qvl459VtZak'

export const apiClient = {
  get: (resource: string) => {
    return fetch(`${BASE_URL}/${resource}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then((res) => res.json())
      .then((json) => json)
  },

  post: (resource: string, data: any) => {
    return fetch(`${BASE_URL}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => json)
  },

  put: (resource: string, data: any) => {
    return fetch(`${BASE_URL}/${resource}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => json)
  },

  delete: (resource: string, data: any) => {
    return fetch(`${BASE_URL}/${resource}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => json)
  },

  patch: (resource: string, data: any) => {
    return fetch(`${BASE_URL}/${resource}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => json)
  }
}
