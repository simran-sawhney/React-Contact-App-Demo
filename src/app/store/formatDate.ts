// Converts DateISO string to DD-MM-YYYY
export default (dateISOString: string) => {
    const date = new Date(dateISOString);
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    const year = date.getFullYear();
    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;
    return [day, month, year].join("-");
};
