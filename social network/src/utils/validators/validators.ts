export const required = (value: Array<string>) => {
    if (value) return undefined
    return 'Field is required'
}
export const maxLengthCreator = (maxLendth: number) => (value: Array<string>) => {
    if (value.length > maxLendth) return `Max length is ${maxLendth} symbols`
    return undefined
}