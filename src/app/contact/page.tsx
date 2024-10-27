import './contact.css';


export default function Contact() {
  return (
    <main className="contact-main">
      <div className="contact-container">
        <div className="contact-title">Contact</div>
        <div className="contact-form">
          <div>
            <label htmlFor="name" className="contact-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name here"
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="contact-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email here"
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="message" className="contact-label">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              className="contact-textarea"
              rows={4}
            ></textarea>
          </div>
          
          {/* Send Email Button */}
          <button className="contact-button">Send Email</button>
        </div>
      </div>
    </main>
  );
}
