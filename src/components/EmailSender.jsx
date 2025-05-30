import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./SendMessage.css";

const SendMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_zuk5g69", // Your Service ID
        "template_aqgvqmq", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "S7AQJdd36S5HDsIim" // Your User ID
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setMessageStatus("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error:", error.text);
          setMessageStatus("Failed to send your message. Please try again.");
          // Log detailed error message for debugging
          console.error("Detailed Error:", error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="send-message-container" id="send-message">
      <h1 className="send-message-title" data-aos="fade-up">
        Let's Get in Touch
      </h1>
      <p
        className="send-message-description"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Whether you have a question, an opportunity, or just want to connect —
        feel free to send me a message below. I’ll get back to you as soon as I
        can!
      </p>

      <div className="send-message-box" data-aos="fade-up" data-aos-delay="300">
        <form
          className="send-message-form"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="form-button" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {messageStatus && <p className="message-status">{messageStatus}</p>}
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
