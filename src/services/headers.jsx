const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('@AUTH')}`
    }

    console.log(headers);

    return headers;
}

export { getHeaders };