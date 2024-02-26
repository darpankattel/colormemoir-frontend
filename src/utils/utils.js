const getFormattedDateTime = (date) => {
    if (!date) return "-- -- --";
    const dateObj = new Date(date);
    return `${dateObj.getDate()}th ${dateObj.toLocaleString('default', { month: 'long' })}, ${dateObj.getFullYear()}`;
}
export {
    getFormattedDateTime
}