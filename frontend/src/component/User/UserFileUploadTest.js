// import React, {useState, useEffect} from "react"
// import axios from "axios";
// function UserFileUploadTest() {
//
//     const [imageSelected, setImageSelected] = useState("");
//
//     const uploadImage = ()=>{
//         const formData = new FormData();
//         formData.append("file",imageSelected);
//         formData.append("upload_preset","add0dskw");
//
//         axios.post("https://api.cloudinary.com/v1_1/dwaums7pu/image/upload",
//             formData
//         ).then((response)=>{
//             console.log(response);
//         });
//     };
//
//
//     return(
//         <div>
//         <input
//         type="file"
//         onChange={(event)=>{
//             setImageSelected(event.target.files[0]);
//     }}
//     />
//     <button onClick={uploadImage}> Upload Image </button>
//     </div>
//     );
// }
//
// export default UserFileUploadTest;