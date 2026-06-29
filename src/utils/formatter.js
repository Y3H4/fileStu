export function formatdate (){
    const data = new Date(timestamp * 1000);
    return date.toLocalstring('th-TH' , {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    })
}

export function formaTime(timestamp){
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('th-TH' , {
        hour : '2-digit',
        minute : '2-digit'
    })
}