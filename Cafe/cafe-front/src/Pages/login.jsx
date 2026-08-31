import {useState} from 'react'
function login(){
    const [formData,setFromData]=useState({
        email="",
        password="",
        rememberME:false,
    });
    const [errors,setErrors]=useState({});
    const [showPassword,setShowPassword]=useState(false);
    const [loading,setLoading]=useState(false);

    //handle input changes
    const handleChange=(e)=>{
        const{name,value,type,checked}=e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:type==='checkbox'?checked:value,

        }));

        //form validation
        const validateForm=(e)=>{
            const newErrors={};
            if(!formData.email.trim()){
                newErrors.email="Email is required";
            }
            else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ) {
               newErrors.email="Enter a valid email address";
        }
        if(!formData.password){
            newErrors.password="Password is required"
        }
        else if(formData.password.length<8){
            newErrors.password="Password must be at least 8 character"
        }
        return newErrors;

        const handleSubmit=async(e)=>{
            e.preventDefault();
            const validateErrors=validateForm();
        }
    }
    return (
        <>
        <div className="">
            <form>
                <div>
                      <h1>Login</h1>
                     <p>Please enter your credentials</p>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" id="email"></input>
                </div>
                <div className="">
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <div className="">
                    <input type="checkbox">Remember me</input>
                    <a href=""><p>Forgot password?</p></a>
                </div>

                <button type="login">Log In</button>

            </form>
        </div>
        </>
    )
}
export default login