function ContactForm() {
  return (
    <>
      {" "}
      <div>
        <form>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        accept privacy policy
      </div>
    </>
  );
}

export default ContactForm;
