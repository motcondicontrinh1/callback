// let square = (a, b, h) => (a+b) * h / 2;
// console.log(`Dien tich hinh thang ${square(4,5,6)}`);

// let add = (a, b, cb) => {
//     setTimeout(() => {
//         let err, result;
//         if (typeof a != 'number' || typeof b != 'number') {
//             return cb(new Error('Tham so phai co kieu number'));
//         }
//         result = a + b;
//         cb(undefined, result);
//     }, 1000);
// }

// add('h',5, (e, res) => {
//     if (e) {
//         console.log(`Loi: ${e}`);
//     } else {
//         console.log(`Ket qua ${res}`);
//     }
// });
// tinh dien tich hinh thang bang callback hell

//add
let add = (a, b, cb) => {
    setTimeout(() => {
        let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);
    }, 1000);
};

let multiply = (a, b, cb) => {
    setTimeout(() => {
        let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a * b);
    }, 1000);
};

let divide = (a, b, cb) => {
    setTimeout(() => {
        let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        if (b === 0) {
            return cb(new Error('So bi chia phai khac 0'));
        }
        cb(undefined, a / b);
    }, 1000);
}

// divide(3,4, (e,res) => {
//     if (e) {
//         console.log(`${e}`);
//     } else {
//         console.log(res);
//     }
// })

// const tinhHinhThang = (a, b, h, cb) => {
//     add(a, b, (error, result) => {
//         if (error) return cb(error);
//         multiply(result, h, (error, result) => {
//             if (error) return cb(error);
//             divide(result, 2, (error, result) => {
//                 if (error) return cb(error);
//                 cb(undefined, result);
//             });
//         });
//     });
// };

// tinhHinhThang(2, 3, 2, (err, result) => {
//     if (err) return console.log(`${err}`)
//     console.log(result);
// });

 const calcSquare = (a, b, h, cb) => {
    add(a, b, (error, result) => {
        if (error) return cb(error);
        multiply(result, h, (error, result) => {
            if (error) return cb(err);
            divide(result, 2, (error, square) => {
                if (error) return cb(error);
                cb(undefined, square);
            });
        });
    })
};

calcSquare(2, 3, 2, (err, result) => {
    if (err) return console.log(`Loi: ${err}`);
    console.log(`Ket qua: ${result}`);
});

