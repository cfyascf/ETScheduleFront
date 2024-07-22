const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('@AUTH')}`
    }

    return headers;
}

export { getHeaders };