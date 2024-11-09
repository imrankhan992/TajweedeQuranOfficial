import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import learnQuran from "./LearnQuran";
import emailjs from "@emailjs/browser";
const ContactUs = ({ courseName }) => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    message: "",
    courseName: "",
    email: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  if (courseName) {
    formData.courseName = courseName;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const serviceID = "service_g4w3ega";
    const templateID = "template_mhbyjml";
    const userID = "BTk7aTMLP8hXLqyzT";
    setLoading(true);
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", contactNumber: "", message: "",courseName:"",email:"" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatusMessage("Failed to send message. Please try again.");
        setLoading(false);
      });
  };
  return (
    <div className="grid gap-4 px-6 md:w-[45%] mx-auto pb-10" id="contactUs">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <div className="">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="block text-sm font-medium !mb-2">
              {" "}
              Course Name
            </label>
            <select
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="mt-1 p-2  rounded w-full border border-black bg-[#EEEEEE]"
            >
              {learnQuran.map((course) => {
                return (
                  <option key={course.id} value={course.title}>
                    {course.title}
                  </option>
                );
              })}
            </select>
            <label className="block text-sm font-medium !mt-4">Your Name</label>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2  rounded w-full border border-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact Number</label>
            <Input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              placeholder="(+123) 456-7890"
              className="mt-1 p-2 border border-black rounded w-full "
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="mt-1 p-2 border border-black rounded w-full "
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2  rounded w-full bg-transparent border border-black h-32"
              placeholder="write your detail message here for the trial class."
            />
          </div>
          <button
            type="submit"
            className="bg-[#014B5E] text-white p-2 rounded mt-2 hover:bg-[#2a6c7c] w-full"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        {statusMessage && (
          <p
            className={`mt-4 text-sm text-center ${
              statusMessage.includes("Failed")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
