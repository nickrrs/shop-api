export function onError(response, error){
    console.error(`${error.message}`);
    return response.status(error.status || 500).json({
        success: false,
        message: error.message
    })
}

export function onSuccess(response, status, data){
    return response.status(status).json({
        success: true,
        data
    });
}