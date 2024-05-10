import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { useState } from 'react';
const CreateStudentForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    email: '',
    phone_number: '',
    address: '',
    password:''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg", "image/svg"];
      
      // Check if the selected file type is allowed
      if (file && allowedTypes.includes(file.type)) {
        setSelectedFile(file);
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setPreviewImage(null);
        }
      } else {
        // File type not allowed, display an error message or handle accordingly
        alert("Please select a valid image file (JPEG, PNG, GIF,JPG,SVG)");
        // Optionally, you can clear the file input
        e.target.value = null;
        setSelectedFile(null);
        setPreviewImage(null);
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formallData = new FormData();
    
    // Append image file
    if (selectedFile) {
      formallData.append('image', selectedFile);
    }
  
    // Append other form data
    for (const key in formData) {
      formallData.append(key, formData[key]);
    }
  
    try {
      const response = await axios.post('https://stu-backend.vercel.app/student/create', formallData);
      console.log('New student created:', response.data);
      // Handle success
    } catch (error) {
      console.error('Error creating student:', error.response.data.error);
      // Handle error
    }
  };
  

  return (<div >
    <Card className="w-96   ">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4  grid h-20 place-items-center"
      >
        <Typography variant="h3" color="white">
          Create Student
        </Typography>
      </CardHeader>
      <CardBody className="flex  pb-2 pt-0 flex-col gap-3">
      <div className="flex  items-center  justify-center bg-grey-lighter">
         {previewImage && (
        <div  >
          <img src={previewImage} className=" w-20 rounded-full  border-2 border-blue cursor-pointer" alt="Preview"/>
        </div>
      )} 

    <label className="w-13 flex flex-col items-center p-2 m-2 mt-0 bg-white text-blue rounded-full shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
      
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <input type='file' name='image' accept='image/*' onChange={handleChange} className="hidden" />
   
    </label>
   
      </div>
        <Input label="First Name" size="lg" name="first_name" onChange={handleChange} />
        <Input label="Last Name" size="lg" name="last_name" onChange={handleChange} />
        <Input label="Email" size="lg" type="email" name="email" onChange={handleChange} />
            <Input label="Password" size="lg" type="password" name="password" onChange={handleChange} />

        <Input label="Date of Birth" size="lg" type="date" name="date_of_birth" onChange={handleChange} />
        <Input label="Gender" size="lg" name="gender" onChange={handleChange} />
        <Input label="Phone Number" size="lg" name="phone_number" onChange={handleChange} />
        <Input label="Address" size="lg" name="address" onChange={handleChange} />
      </CardBody>
      <CardFooter className=" pt-0 pb-3 ">
        <Button variant="gradient" fullWidth type="submit" onClick={handleSubmit}>
          Create Student
        </Button>
      </CardFooter>
    </Card>
  </div>
  );
};

export default CreateStudentForm;


