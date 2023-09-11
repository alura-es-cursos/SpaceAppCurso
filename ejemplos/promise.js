
//Reject

const solicitud = new Promise((resolve, reject) => {
	const response = "resolvsse"

    if(response == "resolve" ){
        resolve("La promesa se cumplió")
    }
    else {
        reject("La promesa no se cumplio")
    }

})

console.log(solicitud)


//Fullfilled 

const solicitudFull = new Promise((resolve, reject) => {
	const response = "resolve"

    if(response == "resolve" ){
        resolve("La promesa se cumplió")
    }
    else {
        reject("La promesa no se cumplio")
    }

})

console.log(solicitudFull)

//Pending

const solicitudPending = new Promise((resolve, reject) => {
	const response = "resolve"

    if(response == "resolve" ){
      
    }
    else {
        reject("La promesa no se cumplio")
    }

})

console.log(solicitudPending)