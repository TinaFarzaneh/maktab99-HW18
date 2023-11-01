import { RxCross2 } from "react-icons/rx";

function Search() {
  return (
    <div>
      <div>
        <input className="bg-[#3B3B3B] rounded-full p-4" />
        <RxCross2 />
      </div>
      <div>
        <img src="./images/cuate.png" alt="search" />
        <p>File not found. Try searching again.</p>
      </div>
    </div>
  );
}

export default Search;
