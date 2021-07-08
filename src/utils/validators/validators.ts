export const required = (value: string) => {
    if (value) {
        return undefined
    }
    return 'Field is required'

}
export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length> maxLength) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined
}

export const maxLength30 = (value: string) => {
    if (value && value.length > 30) {

    }
    return undefined

}