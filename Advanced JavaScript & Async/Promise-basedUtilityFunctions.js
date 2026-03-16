function even(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number % 2 == 0) {
                resolve("Number is even")
            }
            else {
                reject("Number is odd");
            }
        },2000);
    })
}

even(2).then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

even(3).then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})