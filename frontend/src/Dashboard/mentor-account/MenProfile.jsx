import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../../Utils/uploadCloudinary';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader'; 


const MenProfile = ({user}) => {

    const [selectedFile,setSelectedFile] = useState(null);
    
    const [loading, setLoading] = useState(false);
  
    const [formData, setFormData] = useState({
        name: "",    
        email: "",
        photo: null,   
        password: "",
        specialization: "",
            
      
    });
  
    const navigate = useNavigate()

    useEffect(()=>{
        setFormData({ name: user.name, email:user.email, photo:user.photo, password : user.password });
    },[user]);
  
     const handleInputChange = e => {
      setFormData({ ... formData, [e.target.name]: e.target.value});
     };
  
     const handleFileInputChange = async event => {
  
      const file = event.target.files[0];
  
      const data = await uploadImageToCloudinary(file);
  
      
      setSelectedFile(data.url)
      setFormData({ ... formData, photo:data.url });
      
     };
  
     const submitHandler = async event => {
      event.preventDefault();
      setLoading(true);
  
      try {
        const res = await fetch(`${BASE_URL}/mentors/${user._id}`,{
          method:'put',
          headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData),
          
        })
  
        const {message} = await res.json()
  
        if(!res.ok){
          throw new Error(message)
        }
  
        setLoading(false)
        toast.success(message)
        navigate('/mentors/profile/me')
  
      } catch (error) {
        toast.error(err.message)
        setLoading(false)
      }
     };

  return (
    <div className='mt-10'>
        <form onSubmit={submitHandler}> 
              <div className="mb-5">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066dd61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066dd61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textColor rounded-md cursor-pointer"
                  
                 
                />
              </div>
              <div className="mb-5">
                <input 
                  type="text" 
                  placeholder="Specialization" 
                  name="specialization" 
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066dd61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textColor rounded-md cursor-pointer"
                  
                 
                />
              </div>
              
             

              <div className="mb-5 flex items-center gap-3">
                {formData.photo && (
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                flex items-center justify-center">
                  <img 
                  src={formData.photo} 
                  alt="" 
                  className='w-full rounded-full'
                  />
                </figure>
                )}

                  <div className='relative w-[130px] h-[50px]'> 
                    <input 
                      type="file"
                      name='photo'
                      id='customFile'
                      onChange={handleFileInputChange}
                      accept='.jpg, .png, .jpeg' 
                      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                    />

                    <label htmlFor="customFile" 
                    className='absolute top-0 left-0 w-full h-full flex
                    items-center px-[0.75rem] py-[0.375rem] tetx-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor
                    font-semibold rounded-lg truncate cursor-pointer'
                    >
                      {selectedFile ? selectedFile.name : "Upload Photo"}
                    </label>
                  </div>

              </div>

              <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="w-full bg-primaryColor text-whitr text-[18px] leading-[30px] rounded-lg px-4 py-3"
          >
            {loading ? <HashLoader size={25} color='#ffffff'/> : 'Update'}
          </button>
        </div>        
    </form>
 </div>
  )
}

export default MenProfile