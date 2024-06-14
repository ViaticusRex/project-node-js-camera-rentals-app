//File that houses all the functions that will make the program run

const { nanoid } = require("nanoid");

//addNewCamera - function that creates new element using keys from original data => add a new index to the array, the index is an object

const addNewCamera = (data, camInfo) => { // data - input is camera JSON data
    //camInfo - an array with 4 elements that will be values of the camera object [name, sensorSize, price, experienceLevel]
    
    if(camInfo.length !== 4){
        console.log( "Invalid Value")
        return null

    } else {

        const newData = [...data]
        
        const cameraObj = {
            "id":nanoid(6),
            "name": camInfo[0],
            "sensorSize":camInfo[1],
            "price":camInfo[2],
            "experienceLevel": camInfo[3],
            "inStock": true
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


// const updateCameraInfo = () => {

// }


const deleteCamera = (data, id) => { //data - camera JSON file, id - camera id
    
    const updatedCamList = data.filter(camera => camera.id !== id)

   //if the length of the data is the same then the function wouldn't delete anything and return null
    if(data.length === updatedCamList.length){
        console.log('Camera id not found.')
        return null
    }

    return updatedCamList //returns filtered data 
}



module.exports ={
    addNewCamera,
    showOneCamera,
    deleteCamera
}