import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { BASE_URL, token } from '../../config';
import useGetProfile from '../../hooks/useFetchData'
import MenProfile from './MenProfile'

const Dashboard = () => {

  const {dispatch} = useContext(authContext);
  const [load, setLoad] = useState(false)
  const {data:userData, loading, error} = useGetProfile(`${BASE_URL}/mentors/profile/me`)
  const [tab, setTab] = useState('settings');

    const handleLogout = () => {
    dispatch({type:'LOGOUT'});
      };

      const navigate = useNavigate()
      console.log(userData, 'userdata');
    
      const deleteHandler = async event => {
        event.preventDefault();
        setLoad(true);
    
        try {
          const res = await fetch(`${BASE_URL}/mentors/${userData._id}`,{
            method:'delete',
            headers: {
            'Content-Type':'application/json',
             Authorization: `Bearer ${token}`
            },
          //  body: JSON.stringify(formData),
            
          })
    
          const {message} = await res.json()
    
          if(!res.ok){
           //throw new Error(message)
           console.log(message);
          }
    
          setLoad(false)
          toast.success(message)
          localStorage.clear();
          navigate('/login')
    
        } catch (error) {
          toast.error(err.message)
          setLoad(false)
        }
       };


  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-20">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                    <img src={userData.photo} alt="" className='w-full h-full rounded-full' />
                </figure>
            </div>

            <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                    {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                    {userData.email}
                </p>
            </div>
            <div className="mt-[50px] md:mt-[100px]">
                <button onClick={handleLogout} 
                    className='w-full bg-[#181A1E] p-3 text-[16px] loading-7 rounded-md text-white'>
                    Logout
                </button>
                <button onClick={deleteHandler} className='w-full bg-red-600 mt-4 p-3 text-[16px] loading-7 rounded-md text-white'>
                    Delete account
                </button>
            </div>
          </div>
          <div className='md:col-span-2 md:px-[30px]'>
            <div>
            <button onClick={()=> setTab('settings')} 
                className={` ${tab === 'settings' && 'bg-primaryColor text-white font-normal'}
                    py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7
                    border border-solid border-primaryColor`}>
                    Profile Settings
                </button>
            </div>
            { tab === 'settings' && <MenProfile user={userData}/> }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard