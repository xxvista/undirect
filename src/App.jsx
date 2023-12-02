import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

const App = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://formspree.io/f/mjvqqzzj", {
        message,
      });

      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully!");
        setMessage("");
      } else {
        console.error("Error sending message:", response.statusText);
        toast.error("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="slider">
          <form className="form" onSubmit={handleSubmit}>
            <span className="title">Send a Silent Message</span>

            <div className="form_control">
              <textarea
                className="input textarea" // Added 'textarea' class
                rows="20"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <label className="label">Message</label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
      <footer className="footer">
        <p>Coded with ❤️ by Abdellah</p>
      </footer>
    </>
  );
};

export default App;
