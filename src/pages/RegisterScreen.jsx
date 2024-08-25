import GroupComponent from '../components/RegisterScreenComponent';
import { Link } from 'react-router-dom';
const RegisterScreen = () => {
  return (
    <div className='w-full relative bg-darkslategray-300 overflow-x-hidden overflow-y-auto  flex flex-row items-start justify-end px-[15px] sm:px-[15px] md:px-[125px] lg:px-[125px] h-full py-[125px]  box-border leading-[normal] tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[62px] mq725:pr-[62px] mq725:box-border'>
   <Link to="/" className='block sm:block md:hidden lg:none'><img src='/Group 1261153272.svg' alt='' className='absolute top-[33px] left-[21px] z-[5]' /></Link>
    <main className=' w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]'>
      <img
        className='absolute    top-[0px] bottom-[0px] left-[0px] max-h-full w-[833px] object-cover z-[1]'
        alt=''
        src='/Group 1261153243.png'
      />
      <img
        className='absolute top-[100px] left-[784px] w-[748px] h-[748px] z-[1]'
        alt=''
        src='/group-1261153234.svg'
      />
      
    </main>
    <GroupComponent />
    <img
        className='absolute bottom-[0px] right-[0px] w-[550px] h-[350px] z-[1] object-cover object-top'
        alt=''
        src='/Group-bottom.png'
      />
    </div>
  );
};

export default RegisterScreen ;
