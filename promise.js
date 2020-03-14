let aPromise = new Promise((resolve, reject) => {
    //resolve();
    //reject();
    //resolve("Thanh cong") ;
    setTimeout(() => {
        // reject({
        //     ms1: new Error("That bai deo ha guc dc tao dau"), 
        //     ms2: "hihi"
        // });
        resolve("Thanh cong");
    }, 2000);
});

aPromise.then((msg) =>
    console.log(`Da thuc thi ${msg}`), (errMSG) => console.log(`Neu that bai: ${errMSG.ms1}`));

