const {readJSONFile,writeJSONFile} = require('./src/helpers') //import the file path

const camData = readJSONFile("./data", "data.JSON")

const {addNewCamera, showOneCamera, deleteCamera, updateCameraInfo} = require('./src/controller')



const run = () => {
    const option = process.argv[2] //3rd word of your terminal input (script)
    
    const values = process.argv.slice(3)//creates an array from index 3 - end will populate indices according to spaces in the string written in the terminal

    switch (option){
        case 'createCamera':// C in CRUD - creates and writes new camera to JSON file
            
            const updatedData = addNewCamera(camData,values)
            
            if(updatedData != null){ 
                writeJSONFile("./data", "data.JSON", updatedData)

            }

            break
        case 'showAllCameras': //prints all of the camera data in JSON file
            
            console.log(camData)

            break
        case 'isolateCamera': //search by id
            
            
            const singleCamera = showOneCamera(camData,values[0])//values[0] is first index

            if(singleCamera !== undefined){
                console.log(singleCamera)
            }

            break
            
        case 'updateCamera':

            const updatedCamInfo = updateCameraInfo(camData,values)
            
            if(updatedCamInfo !== null){
                writeJSONFile("./data", "data.JSON", updatedCamInfo);
            }
              
            break
        
        case 'deleteCamera':// D in CRUD - deletes a camera from JSON file
            
            const dataAfterDeletion = deleteCamera(camData, values[0]); //values[0] id of the camera to delete in terminal
            
            if(dataAfterDeletion !== null){
                writeJSONFile("./data", "data.JSON", dataAfterDeletion);
            }

            break

        
        
    }
}



run()







