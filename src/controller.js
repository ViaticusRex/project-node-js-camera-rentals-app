//File that houses all the functions that will make the program run

const { nanoid } = require("nanoid");

//addNewCamera - function that creates new element using keys from original data => add a new index to the array, the index is an object

const addNewCamera = (data, camInfo) => { // data - input is camera JSON data
    //camInfo - an array with 4 elements that will be values of the camera object [name, sensorSize, price, experienceLevel]
    
    if(camInfo.length !== 5){
        console.log( "Invalid Value")
        return null

    } else {

        const newData = [...data]
        
        const cameraObj = {
            "id":camInfo[0].toUpperCase().slice(0, 4) + "-" + nanoid(3), //add first 4 characters from name key capitalzed
            "name": camInfo[0],
            "sensorSize":camInfo[1],
            "price": Number(camInfo[2]),
            "experienceLevel": camInfo[3],
            "inStock": Number(camInfo[4])
        };
    
        newData.push(cameraObj);
        
        return newData;// returns updated data
    }

}


const showOneCamera = (data, id) => { 
    for(const camera of data){
        if(camera.id === id){
            return camera
        } 
    }

    console.log('Camera id not found.')
}



const deleteCamera = (data, id) => { //data - camera JSON file, id - camera id
    
    const updatedCamList = data.filter(camera => camera.id !== id)
    
    //if the length of the data is the same then the function wouldn't delete anything and return null
    if(data.length === updatedCamList.length){
        console.log('Camera id not found.')
        return null
        }
        
        return updatedCamList //returns filtered data 
}

       
const updateCameraInfo = (data,updatedValues) => {

    const arrIndex = data.findIndex(camera => camera.id === updatedValues[0])//find the index of the specific id

    // console.log(data[arrIndex])


    if(arrIndex === -1){//if the id is not found camera doesn't exist
        console.log('Camera id not found.')
        return null
    } else {
        data[arrIndex].name = updatedValues[1]
        data[arrIndex].sensorSize = updatedValues[2]
        data[arrIndex].price = updatedValues[3]
        data[arrIndex].experienceLevel = updatedValues[4]
    }
    
    return data
        
}
 
// function that will use 'id' and whether or not the item is in stock to populate user cart


 // This will hold the items in the cart

const addCameraToUserCart = (data, userCart, id) => {
    const newUserCart = [...userCart]
    const cameraInStock = data.find(camera => camera.id === id[0] && camera.inStock > 0);
    if (!cameraInStock) {
        console.log('Camera not found or out of stock.')
    } else {
        newUserCart.push(cameraInStock)
        cameraInStock.inStock -= 1
        console.log(`${cameraInStock.name} added to cart`)
    }
        return newUserCart
}

const showUserCart = (userCart) => {
    if(userCart.length === 0){
        console.log('The cart is empty!')
    } else {
        let total = 0
        userCart.forEach(camera => {
            total += camera.price
            console.log(camera.name, camera.price)
        })
        console.log('total',total)
    }
}


module.exports ={
    addNewCamera,
    showOneCamera,
    deleteCamera,
    updateCameraInfo,
    addCameraToUserCart,
    showUserCart
}