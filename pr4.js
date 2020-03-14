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