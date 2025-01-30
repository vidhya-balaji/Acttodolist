import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
    const navigate=useNavigate();
    const userlist=props.userlist;
    const setuserlist=props.setuserlist;
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
        function handleusername(event) {
            seteusername(event.target.value)
        }
        function handlepassword(event) {
            setepassword(event.target.value)
        }
        function addUser()
        {
            console.log(userlist); 
            setuserlist([...userlist,{username:eusername,Password:epassword}])
            navigate('/')
        }

    return (
        <div className='bg-black p-10'>
            <div className='bg-white p-10 rounded-md'>
                <h1 className='text-3xl font-bold'>Hey Hi</h1>
                <p className=''> Sign up here :)</p>
                <div className='flex flex-col  gap-2 py-2'>
                    <input value={eusername} onChange={handleusername}className='border-black border rounded-md p-2 w-48' type='text' placeholder='username'></input>
                    <input value={epassword} onChange={handlepassword}className='border-black border rounded-md p-2 inline w-48' type='pass' placeholder='password'></input>
                    <input className='border-black border rounded-md p-2 inline w-48' type='pass' placeholder='confirm password'></input>
                    <button onClick={addUser} className='bg-[#8272da] rounded-md p-2 inline w-40 '>Sign up</button>
                    <p>Already have an account? <Link to={'/'} className='underline hover:text-red-500'>Sign In</Link></p>
                </div>
            </div>
        </div>
    )


}
export default SignUp;