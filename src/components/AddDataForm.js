import React from "react";

function AddDataForm({ idRef, nameRef, emailRef, phoneRef }) {
  return (
    <form>
      <label>
        ID:
        <input
          type="number"
          name="id"
          ref={idRef}  // useRef로 입력 필드 참조
        />
      </label><br />
      <label>
        이름:
        <input
          type="text"
          name="name"
          ref={nameRef}  // useRef로 입력 필드 참조
        />
      </label><br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          ref={emailRef}  // useRef로 입력 필드 참조
        />
      </label><br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          ref={phoneRef}  // useRef로 입력 필드 참조
        />
      </label><br />
    </form>
  );
}

export default AddDataForm;
