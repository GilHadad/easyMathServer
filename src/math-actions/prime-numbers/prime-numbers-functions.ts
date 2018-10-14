
export function getPrimeNumberList (num: number, primeNumbersList: number[], primeNumbers?: number[]): number[] {
    let primeNumbersRes = (primeNumbers? primeNumbers: [])
    
    if (primeNumbersList.includes(num)) { 
        primeNumbersRes.push(num)
        return primeNumbersRes 
    }
    for (let i of primeNumbersList) {
        if (num%i===0) {
            primeNumbersRes.push(i)
            num = num%i
            return primeNumbersRes = getPrimeNumberList(num, primeNumbersList, primeNumbersRes)
        }
    }
}