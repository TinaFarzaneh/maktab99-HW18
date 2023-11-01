import React, { useEffect } from "react";
import "../index.css";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineSave } from "react-icons/ai";
import { useState } from "react";

const Form = ({ addNote, closeForm, saveNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addNote(title, description);
      setTitle("");
      setDescription("");
    }
  };

  const handleSaveToLocalStorage = () => {
    if (title.trim() !== "" || description.trim() !== "") {
      const data = JSON.parse(localStorage.getItem("noteData")) || [];
      console.log(data);
      const dataToSave = [...data, { title, description }];
      localStorage.setItem("noteData", JSON.stringify(dataToSave));
      setTitle("");
      setDescription("");
      saveNote(true);
    } else {
      alert("Plz check");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-around gap-48 text-white">
        <div className="header-icon">
          <IoIosArrowBack onClick={closeForm} className="w-6 h-6" />
        </div>
        <button
          onClick={handleSaveToLocalStorage}
          type="submit"
          className="header-icon"
        >
          <AiOutlineSave className="w-6 h-6" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ps-3.5">
        <input
          className="bg-[#252525] text-5xl outline-0"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-[#252525] text-2xl outline-0"
          placeholder="Type something..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
};

export default Form;
