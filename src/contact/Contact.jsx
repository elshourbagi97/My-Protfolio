import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqabjzrn");

  return (
    <div className="contactContent">
      <div className="leftConnect">
        <h3>Let’s connect</h3>
        <div className="email">
          <p>Say hello at</p>
          <a href="mailto:elshourbagi97@gmail.com">elshourbagi97@gmail.com</a>
        </div>
        <div className="logos">
          <div className="logo1">
            <a title="Twitter" href="https://x.com/elshourbagii?s=11">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          <div className="logo1">
            <a
              title="Facebook"
              href="https://www.facebook.com/share/1MmuYNZidt/?mibextid=wwXIfr"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <div className="logo1">
            <a
              title="Instagram"
              href="https://www.instagram.com/elshourbagi?igsh=aHA2MTJsdG13cGw0&utm_source=qr"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="logo1">
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/elshourbagii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="logo1">
            <a title="GitHub" href="https://github.com/elshourbagi97">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="rightConnect">
        {state.succeeded ? (
          <p className="success-message message ">Thanks for connect me and sending me an email . I'll reply soon!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label">Name :</label>
              <input
                type="text"
                name="name"
                required
                style={{ textTransform: "capitalize" }}
                className="form-control"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="form-group">
              <label className="label">Email :</label>
              <input type="email" name="email" required className="form-control" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="form-group">
              <label className="label">Subject :</label>
              <input type="text" name="subject" required className="form-control" />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>

            <div className="form-group">
              <label className="label">Message :</label>
              <textarea name="message" className="form-control" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value={state.submitting ? "Sending..." : "Send Me"}
                disabled={state.submitting}
                className="btn btn1 btn-success"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
