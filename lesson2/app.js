function getVals(){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve(9);
       }, 2000)
    });
}

async function getName(){
    let x = await getVals();
    return x + 11;
}


getName().then((res) => {
    console.log(res);
})



function demo(){
    setTimeout(() => {
        console.log(this)
    })
}

demo();