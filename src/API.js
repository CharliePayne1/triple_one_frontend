const baseURL = "http://localhost:3000"
const logInUrl = `${baseURL}/login`
const validateURL = `${baseURL}/validate`
const newCase = `${baseURL}/cases`

const get = (url) => {
    const configurationObject = {
        headers: {
            "Authorization": localStorage.token
        }
    }
    return fetch(url, configurationObject)
}

const post = (url, body) => {
    const configObject = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        },
        body: JSON.stringify(
          (body)
        )
        };
    return fetch(url, configObject)
}

const logIn = (body) => post(logInUrl, body)
.then(res => res.json())

const validate = () => get(validateURL).then(res => res.json())

const submitNewCase = (e, body, submitForm) => 
{e.preventDefault()
post(newCase, body)
submitForm()}

const getCases = () => get(newCase).then(res => res.json())

export default { logIn, validate, submitNewCase, getCases }