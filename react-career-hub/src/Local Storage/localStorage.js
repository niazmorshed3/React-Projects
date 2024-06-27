const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem("job-application");
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return [];
}


const saveJobApplication = (i)=> {
    const storedJobApplication = getStoredJobApplication();
    const exist = storedJobApplication.find(id => id===i);
    if(!exist){
        storedJobApplication.push(i)
        localStorage.setItem("job-application",JSON.stringify(storedJobApplication))
    }
}

export {saveJobApplication, getStoredJobApplication}














// const getStoredCart = ()=> {
//     const storedCardString = localStorage.getItem("cart")
//     if (storedCardString){
//         return JSON.parse(storedCardString)
//     }
//     return [];
// }

// const addToLocalStorage = (i)=> {
//     const cart = getStoredCart();
//     cart.push(i)
//     // Save to Local Storage
//     saveToLocalStorage(i)
// }

// const saveToLocalStorage = (j) => {
//     const cartStringFied = JSON.stringify(j);
//     localStorage.setItem("Cart",cartStringFied)
// }