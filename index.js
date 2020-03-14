// let mang = [5,2,6,2,7];

// const nhan2 = e => e*2;

// var mang2 = mang.map(nhan2);

//console.log(mang2);

let getFunction = num => {
  if (num > 5) {
    return () => console.log("Lon hon 5");
  }
  return () => console.log("Nguoc lai");
};

getFunction(-8)();
