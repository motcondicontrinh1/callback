let add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error ('Tham so phai la kieu number'));
            }
            resolve(a + b);
        }, 2000);
    });
};

let multiply = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error ('Tham so phai la kieu number'));
            }
            resolve(a * b);
        }, 2000);
    });
};


let divide = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error ('Tham so phai la kieu number'));
            }
            if (b === 0) {
                return reject(new Error ('Chia cho 0'));
            }
            resolve(a / b);
        }, 2000);
    });
};

let tinhDienTich = (a, b, h) => {
    return add(a,b)// tra ve cai Promis
    .then(res => multiply(res, h))
    .then(result => divide(result, 2));// Co ket qua rui 
}
tinhDienTich(6, 4, '5')
.then(square => console.log(`${square}`))// ra day xai tiep cung dc
.catch(err => console.log(`${err}`))


// add('10',5)
// .then(res => add(res, 11))
// .then(result => console.log(`${result}`))
// .catch(err => console.log(`${err}`));

