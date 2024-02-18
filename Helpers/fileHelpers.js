"use strict"
import multer from 'multer'

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads");
    },
    filename:(req,file,cb)=>{
        // if(file.mimtype === "video/mp4")
        cb(
            null,
            new Date().toISOString().replace(/:/g,"-")+"-"+file.originalname
        );
    },
});

const fileFilter=(req,file,cb)=>{
    if(file.mimetype === "video/mp4"){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

const upload = multer({storage:storage,fileFilter:fileFilter});

export default upload;