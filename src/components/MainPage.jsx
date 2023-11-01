import { CiCircleInfo } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import MainNotes from "./MainNotes";

function MainPage({ toggleModal, getIndex }) {
  const data = JSON.parse(localStorage.getItem("noteData")) || false;
  return (
    <div>
      <header className="header">
        <p className="font-semibold text-[43px]">Notes</p>
        <div className="flex gap-4">
          <div className="header-icon">
            <AiOutlineSearch className="w-6 h-6" />
          </div>
          <div className="header-icon" onClick={toggleModal}>
            <CiCircleInfo className="w-6 h-6" />
          </div>
        </div>
      </header>
      <main className="text-center">
        {data ? (
          <div className="text-2xl  pt-10 flex flex-col gap-6">
            <MainNotes data={data} getIndex={getIndex} />
          </div>
        ) : (
          <div>
            <img src="./images/rafiki.png" className="w-80 h-72 mt-48" />
            <p>Create your first note !</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainPage;
