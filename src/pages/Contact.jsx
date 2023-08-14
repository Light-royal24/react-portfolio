import { useState } from "react";
import Heading from "../components/Heading";

const Contact = () => {
  const [EmailVal, seEmailVal] = useState('')

  const [passwordVal, setPasswordVal] = useState('')
  const [messageVal, setMessageVal] = useState('')

  return ( 
    <>
    <section className="contactSection" id="ContactMe">
    <div className="mt-44">
    <div className="mt-10">
      <div className="flex justify-center mt-5">
        <Heading text='Contact Me'/>
      </div>
      <form action="">
      <div className="flex flex-col m-3  p-5">
        <p>Message Me</p>
        <div className="flex gap-3.5 w-full flex-wrap mb-5 mbMobile">
        <div className="text-field flex-grow inputMobile">
                <input type="email" placeholder="Email" required  value={EmailVal} onChange={(e) => seEmailVal(e.target.value)} 
                className="w-full outline-none rounded-3xl roundedMobile border border-gray-700"/>
            </div>

            <div className="text-field flex-grow inputMobile">
                <input type="password" placeholder="PassWord" required  value={passwordVal} onChange={(e) => setPasswordVal(e.target.value)}
                 className="w-full outline-none rounded-3xl roundedMobile border border-gray-700"/>
            </div>
        </div>
        <div className="mb-5">
          <textarea className="w-full p-2.5  text-black placeholder-black outline-none rounded-md border border-gray-700"  placeholder="Start Typing...."
          value={messageVal} onChange={(e) => setMessageVal(e.target.value)}></textarea>
        </div>

        <div  className="mb-5">
          <button className="w-full p-2.5 outline-none rounded-md border border-gray-700" type="submit">Submit</button>
        </div>
      </div>
      </form>
    </div>
    </div>
    </section>
    </>
   );
}
 
export default Contact;
