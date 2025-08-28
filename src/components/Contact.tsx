import { useRef, useState, useEffect } from "react";
import Map from "./Geo";
import emailjs from "@emailjs/browser";
import InputLabel from "./InputLabel";
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "./TextInput";

export const Contact = () => {
  const ref = useRef<HTMLFormElement>(null);

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // --- RESPONSIVE RECAPTCHA ---
  // State to hold the ReCAPTCHA size
  const [recaptchaSize, setRecaptchaSize] = useState<"normal" | "compact">(
    "normal"
  );

  // Effect to check window size and adjust ReCAPTCHA
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) { // Threshold for compact ReCAPTCHA
        setRecaptchaSize("compact");
      } else {
        setRecaptchaSize("normal");
      }
    };

    // Set initial size on component mount
    handleResize(); 

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // --- END RESPONSIVE RECAPTCHA ---


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (recaptchaValue) {
      emailjs
        .sendForm(
          "service_8yjpdgh",
          "template_ji2fglr",
          ref.current!,
          "ZuONOyo6zaQ4ggAZ6"
        )
        .then(
          () => {
            setSuccessMessage(
              "Your message will be reviewed soon, thank you for contacting me :D"
            );
            ref.current?.reset(); // Reset form fields on success
            setRecaptchaValue(null); // Reset ReCAPTCHA state
          },
          () => {
            setErrorMessage("Something went wrong. Please try again.");
          }
        );
    } else {
      setErrorMessage("Please complete the reCAPTCHA");
    }
  };

  const onChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <section
      id="contact"
      // --- CHANGE 1: Added more responsive padding ---
      className="min-h-screen snap-center flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md border rounded-xl p-6 bg-white/5 backdrop-blur">
            <form ref={ref} onSubmit={handleSubmit}>
              <p className="text-2xl sm:text-4xl font-bold tracking-wide mb-6 text-center">
                Contact Me
              </p>

              {/* Name */}
              <div className="mt-4">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                  id="name"
                  isFocused={false}
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="email"
                  isFocused={false}
                  name="email"
                  required
                  placeholder="m@email.com"
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <InputLabel htmlFor="message" value="Message" />
                <textarea
                  className="w-full text-black rounded-lg px-3 py-2"
                  id="message"
                  rows={5}
                  required
                  name="message"
                  placeholder="Your message..."
                />
              </div>

              {/* Recaptcha */}
              <div className="mt-5 flex justify-center">
                <ReCAPTCHA
                  sitekey="6LcX3kkqAAAAAHAhPF0p1ZOpRVlZCy9gCKukRoTq"
                  onChange={onChange}
                  size={recaptchaSize}
                />
              </div>

              {/* Submit */}
              <div className="mt-6">
                <TextInput
                  className="w-full py-2 text-lg font-bold bg-white text-black rounded-lg hover:bg-slate-300 cursor-pointer"
                  type="submit"
                  isFocused={false}
                  value="Send"
                />
              </div>

              {/* Feedback messages */}
              <div className="mt-3 text-center h-6"> 
                {successMessage && (
                  <p className="text-green-500 font-bold">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-700 font-bold">{errorMessage}</p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center min-h-[300px] lg:min-h-0">
          <Map />
        </div>
      </div>
    </section>
  );
};