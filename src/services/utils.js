export const mapQueryString = (queryObj) => {
    let queryString = "";
    for(let queryParam in queryObj){
        queryString += `${queryParam}=${encodeURIComponent(queryObj[queryParam])}&`;
    }
    if(queryString.length === 0)
        return queryString;
    else
        return `?${queryString.substring(0, queryString.length-1)}`;
}