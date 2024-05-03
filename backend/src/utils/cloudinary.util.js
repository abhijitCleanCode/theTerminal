import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

cloudinary.config({ 
  cloud_name: "dlopsry9b", 
  api_key: "787782679152492", 
  api_secret: "Unc30Ur4AbApJNziyvxxrLsp9PI", 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        console.log("localFilePath :: ", localFilePath);

        if (!localFilePath) return null

        // upload the file on cloudinary
        const response =  await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // file has been uploaded successfull
        console.log("backend :: src :: utils :: cloudinary :: uploadOnCloudinary: file is uploaded on cloudinary ", response);

        fs.unlinkSync(localFilePath);

        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as upload operation got failed
        return null;
    }
}

export { uploadOnCloudinary }