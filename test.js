function func_1(arr) {
    // just check if given element is number
    return arr.filter(elem => Number.isInteger(elem))
}

// console.log(func_1([1,'1','536', 123, 'ds']))

function func_2(string) {
    for(let i = 0; i < string.length;  i++){
        //if we find letter that doesn't appear in the remaining string return this letter and finish 
        if(!string.toLocaleLowerCase().includes(string[i].toLocaleLowerCase(), i + 1)){
            return string[i]
        }
    }
    return ''
}

// console.log(func_2('ssTrstsa'))


function func_3(number){
    // convert given number to string
    number = number.toString()
    // if we get number with length 1 - finish recursion and return the result
    if(number.length === 1){
        return number
    } else {
        // continue same algorithm, but with number that are sum of digits from current number
        return func_3(number.split('').reduce((a,b) => (+a) + (+b)))
    }
}
// console.log(func_3(4564897))


function func_4(arr, target) {
    // create variable which will contain amount of pairs 
    let amountOfPairs = 0

    arr.forEach((element, ind) => {
        // if the array of numbers, that are placed right to the current number,
        // contain elements that add up to target number - increase amountOfPairs by 1
        // Collect all correct numbers to array and then calc its length. It will be amount of pairs.
        amountOfPairs += arr.slice(ind + 1).filter(item => item === (target - element)).length
    })
    // return amount of pairs
    return amountOfPairs
}

// console.log(func_4([1, 3, 6, 2, 2, 0, 4, 5], 5))


function func_5(string) {
    // split string to object
    return string.split(';').map(human => ({
        // each human will contain firstName and secondName fields
        firstName: human.split(':')[0],
        secondName: human.split(':')[1],
    }))
        .sort((hum1, hum2) => {
            // if we can sort object by secondName just do it
            if(hum1.secondName === hum2.secondName) 
                return hum1.firstName.localeCompare(hum2.firstName)
            else 
            // if we can not, sort by firstName
                return hum1.secondName.localeCompare(hum2.secondName)
        })
        // final arr that will contain sorted guests list
        .map(human => `(${human.secondName.toUpperCase()}, ${human.firstName.toUpperCase()})`)
        // join human to final string
        .join('')
}

// console.log(func_5('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Turnbull;Raphael:Corwill;Alfred:Corwill'))


function func_6(number) {
    // split number to array
    let num = number.toString().split('')

    for(let i = num.length - 1; i > 0; i--){
        // compare digit to previous digit
        if(num[i] > num[i - 1]){
            // if its bigger replace them
            [num[i], num[i - 1]] = [num[i-1], num[i]]
            // then sort digits that are placed right to digit whice we move on
            num = [...num.slice(0, i), ...num.slice(i, num.length).sort((a,b) => a - b)]
            // join digits and convert it to the number
            return +num.join('')
        }
    }

    // if we cant move any digit return '-1', that's mean that 
    // we can not create bigger number with same digits
    return '-1'
}


// console.log(func_6(2017))


function func_7(numberToIp){
    // convert given number to binary code
    let binaryCode = numberToIp.toString(2)
    // add zeroes to complete 32 bits 
    let residueTo32Bits = Array(32 - binaryCode.length).fill(0)
    // create completed 32 bits binary code
    binaryCode = [...residueTo32Bits, ...binaryCode]

    // create array where we'll fill final ip
    let IP = []

    for(let i  = 8; i <= 32; i += 8){
        // take each 8-bits binary code and convert it to decimal number 
        IP.push(parseInt(binaryCode.slice(i - 8, i).join(''), 2))
    }


    // join array to result IP
    return IP.join('.')
}

// console.log(func_7(591))