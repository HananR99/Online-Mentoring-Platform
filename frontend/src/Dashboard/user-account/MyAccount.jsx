import { useContext, useState } from 'react';
import { authContext } from './../../context/AuthContext'
import MyBookings from './MyBookings';
import Profile from './Profile';
import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL, token } from '../../config'
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('bookings');
  const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);
  const navigate = useNavigate();

  console.log(userData, 'userdata');



    
    
    
   


  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [load, setLoad] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
  });


  

  const deleteHandler = async (event) => {
    event.preventDefault();
    setLoad(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${userData._id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        // throw new Error(message)
        console.log(message);
      }

      setLoad(false);
      toast.success(message);
      localStorage.clear();
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
      setLoad(false);
    }
  }

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loading />}
        {error && <Error errMessage={error} />}
        {!loading && !error && (
          <div className='grid md:grid-cols-3 gap-10'>
            <div className='pb-[50px] px-[30px] rounded-md'>
              <div className='flex items-center justify-center'>
                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                  <img src={userData.photo} alt='' className='w-full h-full rounded-full' />
                </figure>
              </div>
              <div className='text-center mt-4'>
                <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>{userData.name}</h3>
                <p className='text-textColor text-[15px] leading-6 font-medium'>{userData.email}</p>
              </div>
              <div className='mt-[50px] md:mt-[100px]'>
                <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3 text-[16px] loading-7 rounded-md text-white'>
                  Logout
                </button>
                <button onClick={deleteHandler} className='w-full bg-red-600 mt-4 p-3 text-[16px] loading-7 rounded-md text-white'>
                  Delete account
                </button>
              </div>
            </div>

            <div className='md:col-span-2 md:px-[30px]'>
              <div>
                <button
                  onClick={() => setTab('bookings')}
                  className={`${
                    tab === 'bookings' && 'bg-primaryColor text-white font-normal'
                  } p-2  mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
                  My Bookings
                </button>

                <button
                  onClick={() => setTab('settings')}
                  className={` ${tab === 'settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
                  Profile Settings
                </button>
              </div>

              {tab === 'bookings' && <MyBookings />}
              {tab === 'settings' && <Profile user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
