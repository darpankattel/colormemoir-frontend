const getFormattedDateTime = (date) => {
    if (!date) return "-- -- --";
    const dateObj = new Date(date);
    return `${dateObj.getDate()}th ${dateObj.toLocaleString('default', { month: 'long' })}, ${dateObj.getFullYear()}`;
}


const getError = (error) => {
    if (error?.response) {
        let msg = error?.response?.data?.message;
        if (error?.response?.data?.errors) {
            for (const key in error?.response?.data?.errors){
                console.log(key)
                error?.response?.data?.errors[key]?.map((err) => {
                    msg = msg + " " + err;
                })
            }
        }
        return msg;
    } else {
        return error?.message ? error?.message : "Something went wrong"
    }
}

export {
    getFormattedDateTime,
    getError
}
