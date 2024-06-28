import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import MentorCard from './../../components/Mentors/MentorCard';
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBookings = () => {

    const {data:appointments, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)

  return (
    <div>
        {loading && !error && <Loading/>}

        { error && !loading && <Error errMessage={error}/> } 

        {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {appointments.map(mentor => (
                    <MentorCard mentor={mentor} key={mentor._id} />
                ))}
            </div>
        )}

        {!loading && !error && appointments.length === 0 && (
            <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primarColor">
                You did not book any Mentor yet!
            </h2>
        )}
    </div>
  )
};

export default MyBookings;