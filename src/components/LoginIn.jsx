import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginIn(props) {
   
    const navigate=useNavigate();
  
    const [failstatus,setfail]=useState(true)
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const userlist=props.userlist
    function handleusername(event) {
        seteusername(event.target.value)
    }
    function handlepassword(event) {
        setepassword(event.target.value)
    }

    function handleCredentials(event) {
        var userfound=false;
        userlist.forEach(function (item) {
            if (item.username === eusername && item.Password === epassword) {
                console.log("Success");
                console.log(userlist); 
                userfound=true;
                navigate('/todolist',{state:{user:eusername}});
            }
            else{
                setfail(false)
            }
            if(userfound===false)
            {
                console.log("Login failed");
                
            }
            
    })
        console.log(eusername + " " + epassword);
    }

    return (
        <div className='bg-black p-10'>
            <div className='bg-white p-10 rounded-md'>
                <h1 className='text-3xl font-bold'>Hey Hi</h1>
                {            
                (failstatus)?<p className=''> I help you manage your activities after you login :) </p>:<p className='text-red-500'> Please sign up Before login</p>
                }
                
                <div className='flex flex-col  gap-2 py-2'>
                    <input value={eusername} onChange={handleusername} className='border-black border rounded-md p-2 w-48' type='text' placeholder='username'></input>
                    <input value={epassword} onChange={handlepassword} className='border-black border rounded-md p-2 inline w-48' type='password' placeholder='password'></input>
                    <button className='bg-[#8272da] rounded-md p-2 inline w-40 ' onClick={handleCredentials}>Login</button>
                    <p>Don't have an account? <Link to={'/SignUp'} className='underline hover:text-red-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )

}
export default LoginIn