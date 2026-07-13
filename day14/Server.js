// import { error } from 'console';
// import {appendFile, appendFileSync, unlink, unlinkSync, mkdir, rmdir, rm, rename, existsSync} from 'fs';
// import os from 'os';
// import { createServer } from 'http';
// add content to the files at the end
// appendFile('logs.txt', "This is a new Text 2\n", (error)=>{
//     if (error) {
//         console.log("Error:", error);
//     }
// })
// delete the files
// unlink("logs.txt", (error)=>{
//     console.log("Error:", error);
// })
//  Create folder
// mkdir("videos", (error)=>{
//     console.log("error:",error);
// })
// remove folder
// rmdir("videos", (error)=>{
//     console.log("error:",error);
// })
// remove files and folders using a new method
// rm("public", {recursive: true, force:true})
// recursive: true --> removes folder contents too
// force: true -->avoids errors if the path does not exist
//rename a folder
// rename('log.txt', "password.txt", (error)=>{
//     console.log("Error:", error);
// })
// checking if a file exists
// if(existsSync('Server.js')){
//     console.log("File exists");
// }
// else{
//     console.log("File does not exist");
// }


// OS Module
// console.log("Platform:",os.platform()); // os type
// console.log("CPU Architecture:",os.arch()); // cpu artitecture
// console.log("Hostname:",os.hostname()); // device name
// console.log("OS Name:",os.type()); // OS Name
// console.log("OS release:",os.release()); // OS version
// console.log("OS version:",os.version()); // description about OS
// console.log("Device Uptime:",os.uptime()); // how long the OS was running
// console.log("Total Ram:",os.totalmem() / 1024 / 1024  / 1024); // total ram in bytes
// console.log("Free Memory:",os.freemem() / 1024 / 1024  / 1024); // memory currently free
// console.log("CPU Cores:", os.cpus().length); // information about CPU core
// console.log("User Info:", os.userInfo()); // information about the user
// console.log("Network Interface:", os.networkInterfaces());// display network interfaces

// https module

// const server = createServer((req, res)=>{
//     if (req.url === '/') {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html")
//         res.end("<h1>This is Home Page</h1>");
//     }
//     else if(req.url === '/about'){
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html")
//         res.end("<h1>This is about Page</h1>");
//     }
//     else if(req.url === '/contact'){
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html")
//         res.end("<h1>This is contact Page</h1>");
//     }
//     else if(req.url === '/data'){
//         const data = {
//             name: "Rimuru Tempest",
//             race: "Demon slime",
//             Designation: "Demon Lord",
//             age: 24
//         }
//         res.setHeader("Content-Type", "application/json");
//         res.write("Data:");
//         // res.write(data);
//         res.end(JSON.stringify(data));
//         // res.end(data); // this will not work
//     }
//     else{
//         res.statusCode =404;
//         res.setHeader("Content-Type", "text/html")
//         res.end("<h1>404 Not found</h1>");
//     }
// })
// server.listen(3000, '127.0.0.1', ()=>{
//     console.log(`Server is listening on 127.0.0.1:3000`);
// })


//* Without Stream
//? 1. Uses a lot of RAM
//? 2. Slow for large videos
//? 3. It doesn't support seeking efficiently
// seeking is the process of jumping or skipping to a specific point of recording
//* With Stream
//? 1. Very little memory usage
//? 2. Faster
//? 3. It supports buffering and seeking
// buffering is the temporary storage of data in a device's memory before it is processed or played.

//* Types of Streams
//? 1. Writable Stream
//? 2. Duplex Stream
//? 3. Transform Stream

//? Each Chunk is typically a Buffer Object

// Load video using stream module
import {createServer} from 'http';
import {createReadStream, statSync} from 'fs';  //? statSync = status of file
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

//? fetch file name and dirname
// import.meta stores about the current module  
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer(((req, res) => {
    //serve the html page
    if (req.url === '/') {
        const htmlPath = join(__dirname, 'public', 'index.html');
        
        createReadStream(htmlPath).pipe(res);
        //! createReadStream:
        //? creates a readable stream for the file
        //? it reads the file in small chunks rather than loading a whole file into the memory.
        //! pipe:
        //? Pipe connects one stream to another
        //? In this case, it sends the file data directly to the http response
        return;
    }
    // serve the video
    if (req.url === '/video') {
        const videoPath = join(__dirname, 'videos', 'video.mp4');
        const stat = statSync(videoPath);
        const fileSize = stat.size;
        const range = req.headers.range;

        if(!range){
            res.writeHead(400);  //? sends the HTTP status code and headers
            res.end("Range header is required!");
            return;
        }
        const CHUNK_SIZE = 10 ** 6 // 1MB  =  1000,000 bytes
        const start = Number(range.replace(/\D/g, "")); //? bytes = 2000- = 2000
        const end = Math.min(start + CHUNK_SIZE, fileSize - 1);
        //? ensures that ending byte never goes past the end of the file
        const contentLength = end - start + 1;
        res.writeHead(206, {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            //? 0 - 999999/100000000
            "Accept-Ranges": "bytes",
            //? tells the browser that this server supports byte-range request
            "Content-Length": contentLength,
            "Content-Type": "video/mp4"
        })
        const stream = createReadStream(videoPath, {
            start,
            end,
        })
        stream.pipe(res);
        return;
    }
    res.writeHead(404);
    res.end("404 Not Found");
}
))
server.listen(3000, '127.0.0.1', () => {
  console.log("Node App is running on 127.0.0.1:3000"); 
})

/*
Workflow
Step 1: User opens the page
Browser --> GET / --> Server --> Stream index.html --> Browser display video tag;
Step 2: Browser will request the video
Step 3: Server calculates the chunk Video Size = 8mb, Chunk size = 1MB
start = 0;
end = 999999
Step 4:
0 ----------------> 999999
         MB
Step 5: Piping the stream
video.mp4 --> ReadStream --> HTML Response --> Browser video player
Step 6: Browser needs more data
After consuming the first chunk, the browser automatically sends another request
0 - 999999
1000000 - 1999999
*/