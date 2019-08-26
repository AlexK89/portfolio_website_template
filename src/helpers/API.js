const URL = 'http://localhost:3000'

export const fetchData = async (endPoint) => {
    console.log('CIH: fetchData. Endpoint: ', endPoint)
    try {
        let data = await fetch(`${URL}/${endPoint}`)
        return data.json()
    } catch (error) {
        throw console.error('CIH: fetchData: ', error)
    }
}