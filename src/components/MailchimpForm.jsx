import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import PrimaryCTAButton from "./ui/PrimaryCTAButton";
import InputField from "./ui/InputField";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <form
      className="grid gap-[40px] justify-stretch items-center "
      onSubmit={(e) => handleSubmit(e)}
    >
      <h3 className="max-w-[235px] text-center">
        {status === "success"
          ? "Success!"
          : "Join our email list for future updates."}
      </h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <div className="grid gap-[30px]">
          <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
        </div>
      ) : null}

      {/*Close button appears if form was successfully sent*/}
      {status === "success" ? (
        <PrimaryCTAButton
          label="close"
          size="big"
          customClass="g__justify-self-center"
        />
      ) : (
        <InputField label="Subscribe" type="submit" formValues={[email]} />
      )}
    </form>
  );
};

const MailchimpForm = (props) => {
  const url = `${import.meta.env.VITE_MC_SIGNUP_URL}?u=${
    import.meta.env.VITE_MC_U
  }&id=${import.meta.env.VITE_MC_ID}`;

  return (
    <div className="w-full mx-0 my-auto mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
