
export async function fetchReviews(appId, sinceHours = null) {
    let url = `${baseUrl}/${appId}/reviews`

    if (sinceHours) {
        url += `?sinceHours=${sinceHours}`
    }

    return fetch(
        url,
    {
            method: 'GET',
            headers: headers
        }
    );
}

const baseUrl = 'http://127.0.0.1:3000/app'
const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'MZZFTLKNPA',
}