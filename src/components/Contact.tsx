import  { useRef, useState } from "react"
import Map from "./Geo"
import emailjs from "@emailjs/browser";
import InputLabel from "./InputLabel"
import ReCAPTCHA from 'react-google-recaptcha'
import TextInput from "./TextInput"

export const Contact = () => {

// Handle submit and send email via EmailJs with ReCAPTCHA
const ref = useRef<HTMLFormElement>(null); 
  
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(recaptchaValue) {
      emailjs
      .sendForm(
        "service_8yjpdgh",
        "template_ji2fglr",
        ref.current!,
        "ZuONOyo6zaQ4ggAZ6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message will be reviewed soon, thank you for contacting me :D")
        },
        (error) => {
          console.log(error.text);
        }
      )
    } else {
      setErrorMessage("Please complete the reCAPTCHA")
    }
  }
  const onChange = (value: string | null) => {
    setRecaptchaValue(value);
};

  return (
    <section id="contact" className='h-[100vh] snap-center flex flex-col justify-center items-center mx-auto pt-[80px]'>
      <div className="sm:w-[1400px] w-screen flex justify-between">
        <div className="sm:flex items-center sm:justify-end justify-center" style={{flex: 1}}>
          <div className="border rounded-xl md:w-full sm:h-full sm:w-[300px] w-[330px] h-[590px] sm:py-[80px] py-3 sm:px-24 px-5 sm:mr-[200px] mx-auto">
            <form ref={ref} onSubmit={handleSubmit}>
            <p className="sm:text-[40px] text-[20px] font-[700] tracking-wide">Contact Me</p>

            <div className="mt-5">
              <InputLabel 
              htmlFor="name"
              value="Name"
              />
              <TextInput 
              id="name"
              type="name"
              name="name"
              isFocused={false}
              required
              placeholder="John Doe"
              />
            </div>

            
            <div className="mt-5">
              <InputLabel 
              htmlFor="email"
              value="Email"
              />
              <TextInput 
              id="email"
              type="email"
              name="email"
              required
              isFocused={false}
              placeholder="m@email.com"
              />
            </div>

            
            <div className="mt-5">
              <InputLabel 
              htmlFor="message"
              value="Message"
              />
              <textarea 
              className="sm:w-full w-[250px] text-black rounded-lg px-2"
              id="message"
              rows={5}
              required
              name="message"
              placeholder="lorem ipsum"
              />
            </div>


            <div className="mt-5">
            <ReCAPTCHA 
            sitekey={'6LcX3kkqAAAAAHAhPF0p1ZOpRVlZCy9gCKukRoTq'} 
            onChange={onChange}/>
            </div>
            <div className="mt-5">
              <TextInput 
              className="text-[20px] font-[700] hover:bg-slate-300 hover:cursor-pointer"
              type="submit"
              isFocused={false}
              value={"Send"}
              />
            </div>


            <div className="mt-2">
            {successMessage && <p className="text-green-500 font-bold">{successMessage}</p>} {/* Display success message */}
            {errorMessage && <p className="text-red-700 font-bold">{errorMessage}</p>} {/* Display error message */}
            </div>

            </form>
          </div>
        </div>
        <div className="md:flex sm:hidden hidden" style={{flex: 1}}>
          <Map />
        </div>
        
      </div>
      
    </section>
  )
}
