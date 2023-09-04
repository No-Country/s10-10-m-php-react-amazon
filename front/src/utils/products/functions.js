

export const orderByPrice = (items) => {
    return items.sort((a,b) => a.price - b.price)

}

export const orderByDate = (items) => {
    return items.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
}