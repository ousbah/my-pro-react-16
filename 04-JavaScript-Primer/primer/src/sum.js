// This export default is commented otherwise the dev tools raise
// an error indicating only 1 default export is allowed per module 
// export default function(values) {
//     return values.reduce((total, val) => total + val, 0)
// }

// Exporting a named feature
export function sumValues(values) {
    return values.reduce((total, val) => total + val, 0)
}

// Exporting a default feature
export default function sumOdd(values) {
    return sumValues(values.filter((item, index) => index % 2 === 0))
}

