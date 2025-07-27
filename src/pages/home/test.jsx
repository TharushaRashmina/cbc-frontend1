
import {useState} from 'react';
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function FileUploadTest(){

    const [file,setFile] = useState(null)//to store uploaded image

    async function handleUpload(){

        uploadMediaToSupabase(file).then((url)=>{
            console.log(url)
        }).catch((err)=>{
            reject(err);
        })
    }

    return(

        <div>
            <h1>File Upload Test</h1>
            <input type="file" onChange={(e)=>{
                setFile(e.target.files[0])//we get files array here
            }}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )

}