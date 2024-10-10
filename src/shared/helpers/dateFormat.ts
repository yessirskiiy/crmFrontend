export const formattedDate = (date: any) => {
    return new Date(date).toLocaleDateString("en-EN", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}