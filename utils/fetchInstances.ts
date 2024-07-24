import Constants from "expo-constants";

const API_URL = Constants.expoConfig?.extra?.apiUrl

export async function fetchInstance(
    route: string,
    params: globalThis.RequestInit
  ) {
    try {
        console.log(`Fetch to: ${API_URL}${route}`)
        const response = await fetch(`${API_URL}${route}`, {
            ...params,
            headers: {
            "Content-Type": 'application/json',
            ...params.headers
            },
        })
    
        if (!response.ok){
            return {
                error: 'remote not ok'
            }
        }
        
  
        const responseJson = await response.json()
  
        return responseJson
    } catch(error) {
        throw new Error(JSON.stringify(error), {});
    }
}

export async function fetchInstanceWithToken(
    route: string,
    token: string | undefined,
    params: globalThis.RequestInit
  ) {
    try {
        console.log(`Fetch to: ${API_URL}${route}`)
        const response = await fetch(`${API_URL}${route}`, {
            ...params,
            headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`,
            ...params.headers
            },
        })
    
        if (!response.ok){
            return {
                error: 'remote not ok'
            }
        }
        
  
        const responseJson = await response.json()
  
        return responseJson
    } catch(error) {
        throw new Error(JSON.stringify(error), {});
    }
}