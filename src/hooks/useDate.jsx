const month_arr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
const day_arr =["SUN","MON","TUES","WED","THUR","FRI","SAT"]

export default function useDate() {
    const date = new Date();
    const day = day_arr[date.getDay()]
    const month = month_arr[date.getMonth()];
    const date_ = date.getDate();
    date.setDate(date.getDate() + 1);
    const tom_day=day_arr[date.getDay()]
    const tom_month=month_arr[date.getMonth()];
    const tom_date_=date.getDate();
    return `${day}, ${date_} ${month} - ${tom_day}, ${tom_date_} ${tom_month} `
}