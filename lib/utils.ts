export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false
    }

    return true;
}

 // Here Error message returns always message to user which is string
 export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if(error instanceof Error) {
        message = error.message // Here error is Instance of error Object just like new Error('Some text goes here')
    } else if(error && typeof error === 'object' && "message" in error) {
        message = String(error.message) // Here there could be Error object {123: "Error Message"} that's why we are converting string
    } else if(typeof error === 'string') {
        message = error
    } else {
        message = 'Something went wrong'
    }   
    return message
    
}