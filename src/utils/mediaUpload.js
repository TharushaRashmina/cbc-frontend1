import { createClient } from '@supabase/supabase-js';

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdlem9ndm5vY3F0Y2djdnBzbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTM5MjYsImV4cCI6MjA2OTE4OTkyNn0.Om7f--OvUXE33EMzuBBeoghIpoUfFGsGtpFepaW96dI`

const url = `https://gezogvnocqtcgcvpsnhm.supabase.co`

export default function uploadMediaToSupabase(file){

    return new Promise((resolve,reject)=>{

        if(file==null){

            reject("File not added");
        }

        let fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length-1]

        /*if(extension != "jpg" && extension != "png"){
            alert("Please select a jpg or png file")
            return
        }*/
        const supabase = createClient(url,key)//create connection with supabase and our frontend

        const timestamp = new Date().getTime()

        fileName = timestamp+file.name+"."+extension//get unique name for our image file

        supabase.storage.from("images").upload(fileName,//upload our image to images bucket in supabase
            file,{
                cacheControl : "3600",
                upsert : false
            }
        ).then(()=>{

            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl//get url for our supabse image
            resolve(publicUrl);
        }).catch((err)=>{
            reject(err);
        })
    })




}