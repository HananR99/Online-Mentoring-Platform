
import { formateDate } from '../../Utils/formateDate';

const MentorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30pxx] text-headingColor font-semibold flex items-center gap-2">
                About of
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    Ray Dalio
                </span>
            </h3>
            <p className='text_para text-justify'>
            Whether you're looking to excel in your career, acquire new skills, 
            or navigate the challenges of your field, I'm committed to helping you achieve your goals. 
            With 15+ years of experience, My goal is to empower and guide you, so together, we can make remarkable progress.
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30pxx] text-headingColor font-semibold">
                Education
            </h3>

            <ul className='pt-4 md:p-5'>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor font-semibold text-[15px] leading-6">
                        {formateDate('10-21-2009')}
                        </span>
                        <p className='text-textColor font-medium text-[16px] leading-6'>
                            Ph.D. in Psychology 
                        </p>
                    </div>
                    <p className='text-textColor font-medium text-[16px] leading-6'>
                        Harvard University, U.S
                    </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor font-semibold text-[15px] leading-6">
                            {formateDate('12-14-2006')} 
                        </span>
                        <p className='text-textColor font-medium text-[16px] leading-6'>
                            MSc. in Counseling
                        </p>
                    </div>
                    <p className='text-textColor font-medium text-[16px] leading-6'>
                        Oxford University, U.K
                    </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor font-semibold text-[15px] leading-6">
                            {formateDate('05-06-2004')} 
                        </span>
                        <p className='text-textColor font-medium text-[16px] leading-6'>
                            Ed.D. in Counseling
                        </p>
                    </div>
                    <p className='text-textColor font-medium text-[16px] leading-6'>
                        Imperial College London
                    </p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className="text-[20px] leading-[30pxx] text-headingColor font-semibold">
                Experience
            </h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formateDate('05-10-2004')} - {formateDate('09-17-2010')}
                    </span>
                    <p className='text-textColor font-medium text-[16px] leading-6'>
                        National Certified Counselor 
                    </p>
                    <p className='text-textColor font-medium text-[16px] leading-6'>
                        Psychology Today, New York
                    </p>
                </li>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate('10-03-2010')} - Present
                    </span>
                    <p className='text-textColor font-medium text-[16px] leading-6'>
                        Licensed Professional counselor 
                    </p>
                    <p className='text-textColor font-medium text-[16px] leading-6'>
                        Thrive Behavioral Netwrok, LLC.
                    </p>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default MentorAbout;