import { MapPin } from "lucide-react";
import React from "react";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () =>{
    Swal.fire({
      title: "Good job!",
      text: "Your form is submitted sucessfully!!",
      confirmButtonColor: "red",
      icon: "success",
  
    });
    reset();
  }

  return (
    <>
      <div className="relative flex justify-end items-start mt-10 ">
        <div className=" absolute flex flex-col right-200 ">
          <div className="flex flex-rows gap-4  w-[500px] ">
            <div className="bg-black w-[250px] h-[200px] mt-10 rounded-[5px]">
              <MapPin className="text-amber-300 mx-auto mt-10 size-16 " />
              <p className="text-white text-center mt-2">
                Suryadev nagar, near Gopur square Indore Madhya Pradesh 452009
              </p>
            </div>
            <div className="bg-black w-[250px] h-[200px] mt-10 rounded-[5px]">
              <FaPhoneAlt className="text-amber-300 mx-auto mt-12 size-10 " />
              <p className="text-white text-center mt-7">+91 9009090090</p>
              <p className="text-white text-center  ">+91 8928908901</p>
            </div>
          </div>
          <div className="flex flex-rows gap-4  w-[500px]">
            <div className="bg-black w-[250px] h-[200px] mt-3 rounded-[5px]">
              <FaInstagram className="text-amber-300 mx-auto mt-12 size-16 " />
              <p className="text-white text-center mt-2 ">@products_hub123</p>
              <p className="text-white text-center  ">@meetgupta67</p>
            </div>
            <div className="bg-black w-[250px] h-[200px] mt-3 rounded-[5px]">
              <MdMail className="text-amber-300 mx-auto mt-12 size-16 " />
              <p className="text-white text-center mt-2 ">info@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" w-[700px] h-[500px] bg-amber-300 me-40">
          <h1 className="text-4xl font-bold text-center mt-20">Contact us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              placeholder="Enter your name"
              className=" bg-white p-2 ms-26 w-[550px] border-2"
            />
            {errors.name ? (
              <p className="text-gray-500 font-bold ms-26">
                {errors.name.message}
              </p>
            ) : (
              <div>
                <br />
              </div>
            )}

            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className=" bg-white p-2 ms-26 w-[550px] border-2"
            />
            {errors.email ? (
              <p className="text-gray-500 font-bold ms-26">
                {errors.email.message}
              </p>
            ) : (
              <div>
                <br />
              </div>
            )}
            <textarea
              rows={4}
              cols={40}
              {...register("feedback", { required: true, minLength: 5 })}
              placeholder="Leave your suggestion and feedback"
              className="bg-white p-2 w-[550px] ms-26 border-2"
            />
            {errors.feedback && (
              <p className="text-gray-500 ms-26 font-bold">
                Feedback is required and minimun lenght is 5
              </p>
            )}
            <div className="flex justify-center mt-5">
              <button className="bg-white font-semibold uppercase px-4 py-2 rounded cursor-pointer">
                Submit
              </button>
            </div>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default Contact;
