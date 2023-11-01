import { RiDeleteBin6Line } from "react-icons/ri";
import { MdArrowBackIosNew } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

function ShowNote({ Note, backToMain }) {
  const [showModal, setShowModal] = useState(false);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomColor = getRandomColor();

  function isDelete(confirm) {
    console.log(confirm);
    if (confirm) {
      const data = JSON.parse(localStorage.getItem("noteData"));
      const newData = data.filter((note) => note.title !== Note.title);
      console.log(newData);
      localStorage.setItem("noteData", JSON.stringify(newData));
      backToMain(true);
    } else {
      setShowModal(false);
    }
  }

  return (
    <div>
      <div>
        <div className="flex justify-between pt-[45px]">
          <div className="iconDelete">
            <MdArrowBackIosNew />
          </div>
          <div className="iconDelete" onClick={() => setShowModal(true)}>
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
      <div
        className={`px-10 py-5  rounded-xl mt-3`}
        style={{ backgroundColor: randomColor }}
      >
        <div>{Note.title}</div>
        <div>{Note.description}</div>
      </div>
      {showModal && <DeleteModal isDelete={isDelete} />}
    </div>
  );
}

export default ShowNote;
