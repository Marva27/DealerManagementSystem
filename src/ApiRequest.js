const apiRequest = async (apiUrl='',apiRequestOptions='',apiErrorMsg='') => {
    try {
        const response = await fetch(apiUrl, apiRequestOptions);
        if(!response.ok)
            throw Error("error in api");
    } catch(err) {
        return err.message;
    } finally {
        
    }
}

export default apiRequest;