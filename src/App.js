import "./App.css";
import "./index.css";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
// import { CiCircleInfo } from "react-icons/ci";
// import { AiOutlineSearch } from "react-icons/ai";
import Modal from "./components/Modal";
import Form from "./components/NoteForm";
import MainPage from "./components/MainPage";
import ShowNote from "./components/ShowNote";

function App() {
  const [page, setPage] = useState("mainPage");
  const [showModal, setShowModal] = useState(false);
  const [Note, setNote] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openForm = () => {
    setPage("showForm");
  };

  const closeForm = () => {
    setPage("mainPage");
  };

  const addNote = (title, description) => {
    const newNote = {
      title,
      description,
      id: Date.now(),
    };
    // setNotes([...notes, newNote]);
    closeForm();
  };

  function saveNote(isSave) {
    if (isSave) {
      {
        setPage("mainPage");
      }
    }
  }

  function getIndex(index) {
    const data = JSON.parse(localStorage.getItem("noteData"));
    const note = data[index];
    setNote(note);
    setPage("showNote");
  }

  function backToMain(confirm) {
    if (confirm) {
      setPage("mainPage");
    }
  }

  return (
    <div>
      <div className="p-5 text-white flex flex-col gap-24 relative">
        {page === "mainPage" && (
          <MainPage toggleModal={toggleModal} getIndex={getIndex} />
        )}
        {page === "showNote" && (
          <ShowNote Note={Note} backToMain={backToMain} />
        )}
        {page === "showForm" && (
          <Form addNote={addNote} closeForm={closeForm} saveNote={saveNote} />
        )}
        {showModal && <Modal onClose={toggleModal}></Modal>}
        <footer className="absolute right-2 bottom-1">
          <div
            onClick={openForm}
            className="fixed  bottom-[49px] right-[35px] w-[70px] px-3 h-[70px] rounded-full bg-[#252525] addShadow grid place-items-center"
          >
            <BsPlusLg className="w-12 h-12 absolute right-2.5 top-2.5" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
