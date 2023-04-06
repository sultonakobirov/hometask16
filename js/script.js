let successful = []
let unsuccessful = []
let taxes = 0
let taxesMax = {}
let taxesMin = {}

let bank = [
    {
    name: 'Apple',
    budget: 1000000,
    tax: 28,
    expensesPerYear: [
        { 
            title: 'Salaries', 
            total: 125000 
        },
        { 
            title: 'Utilites',
            total: 18000, 
        },
        {  
            title: 'Rent', 
            total: 258000 
        }
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
        element.expensesPerMonth = Math.round(element.expensesPerYear.reduce((a,b)=>b.total + a, 0) / 12)
        //Укоротил код добавив все элементы все элементы expensesPerYear и разделил ее на 12 одновременно округляя ее значение 

        //task2
        element.percent = element.expensesPerMonth / (element.budget/12) * 100
        // Чтобы найти отношение одного числа к другому нужно делить одно число на другое и умножить их на 100

        //task5
        element.totalMoney = element.budget - (element.expensesPerMonth * 12 + (element.tax * element.budget / 100))
        //Создал ключ тоталМани от element.budget отнял все расходы и налоги

        //task3 
        if (element.totalMoney >= 0) {
            successful.push(element)
        }else{
            unsuccessful.push(element)
        } // сортируем на successful и unsuccessful

        //task4
        taxes += element.tax * element.budget / 100
        //Слагаем все налоги элементов и записываем их в одну переменную

        //task6
        element.taxMoney = (element.tax * element.budget / 100)
        taxesMax = array.reduce((prev, current) => prev.taxMoney > current.taxMoney ? prev : current, {});  
        taxesMin = array.reduce((prev, current) => prev.taxMoney < current.taxMoney ? prev : current, {});
        //Находим максимальный и минимальный налог, оплачиваемый компаниями используя reduce() ссылка на решение этой задачи:https://qna.habr.com/q/609651

    })
    //outputs
    console.log(array);
    console.log("<Successful>");
    console.log(successful);
    console.log("<Unsuccessful>");
    console.log(unsuccessful);
    console.log("<Taxes>");
    console.log(`Total Taxes: ${taxes}`);
    console.log("<TaxesMax>");
    console.log(taxesMax);
    console.log("<TaxesMin>");
    console.log(taxesMin);
}

setup(bankClone)
