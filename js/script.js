let successful = []

let unsuccessful = []

let taxes = 0

let taxesMax = {}

let taxesMin = {}

let allTaxes = []





let bank = [
{

name: 'Apple',

budget: 1000000,

tax: 28,

expensesPerYear: [

{ title: 'Salaries', total: 125000 },

{ title: 'Utilites', total: 18000, },

{ title: 'Rent', total: 258000 }

]

},

{

name: 'Microsoft',

budget: 988000,

tax: 21,

expensesPerYear: [

{

title: 'Salaries',

total: 148000

},

{

title: 'Utilites',

total: 124000,

},

{

title: 'Rent',

total: 314000,

}

]

},

{

name: 'HP',

budget: 609000,

tax: 14,

expensesPerYear: [

{

title: 'Salaries',

total: 414000

},

{

title: 'Utilites',

total: 19000,

},

{

title: 'Rent',

total: 114400

}

]

},

{

name: 'Xiaomi',

budget: 889500,

tax: 17,

expensesPerYear: [

{

title: 'Salaries',

total: 318000

},

{

title: 'Utilites',

total: 14000,

},

{

title: 'Rent',

total: 169000

}

]

},

{

name: 'Samsung',

budget: 889500,

tax: 12,

expensesPerYear: [

{

title: 'Salaries',

total: 650400

},

{

title: 'Utilites',

total: 29000,

},

{

title: 'Rent',

total: 212000

}

]

},

]
let bankClone = JSON.parse(JSON.stringify(bank)) //cloning array 

const setup = (array) => {
    array.forEach(element => {
        //task1
        let total = 0
        element.expensesPerYear.forEach(elem => {
            total = total + elem.total
            element.expensesPerMonth = total/12

        })

        //task2
        element.percent = ( element.expensesPerMonth / element.budget ) *100
        element.percent = element.percent + "%"

        //task4-5-6
        element.totalTaxes = element.budget - ((element.budget /100)*element.tax)
        taxes += +element.totalTaxes
        allTaxes.push(element.totalTaxes)
        allTaxes.sort((a, b) => a - b)
        taxesMax = allTaxes[allTaxes.length - 1]
        taxesMin = allTaxes[0]
        element.totalMoney = element.budget - element.expensesPerMonth - element.totalTaxes

    })
    
    //task3
    successful = array.filter(elem => elem.budget - (elem.budget /100 * elem.tax )>= 100000)
    unsuccessful = array.filter(elem => elem.budget - (elem.budget /100 * elem.tax ) < 100000)

    //task 5
    taxesMax = array.filter(element => element.totalTaxes === taxesMax)
    taxesMin = array.filter(element => element.totalTaxes === taxesMin)

    console.log(array);
    console.log("<====================================>");
    console.log("<TaxesMax>");
    console.log(taxesMax);
    console.log("<TaxesMin>");
    console.log(taxesMin);
    console.log("<Successful>");
    console.log(successful);
    console.log("<Unsuccessful>");
    console.log(unsuccessful);

}

setup(bankClone)