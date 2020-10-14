import { sumValues } from './sum'

export function asyncAdd(values) {
    setTimeout(() => {
        let total = sumValues(values)
        console.log(`Async Total: ${total}`)
        return total
    }, 500)
}

// Using a Promise
export function asyncAdd_1(values) {
    return new Promise(callback => 
        setTimeout(() => {
            let total = sumValues(values)
            console.log(`Async Total_1: ${total}`)
            // Resolving the Promise
            callback(total)
        }, 500))
}

