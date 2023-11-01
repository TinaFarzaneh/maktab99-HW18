function DeleteModal({ isDelete }) {
  return (
    <div className="bg-[#252525] flex flex-col gap-12 w-80 h-60 rounded-[20px] p-3 modal-cover">
      <div className="modal-content">
        <div>
          <p>Are your sure you want delete?</p>
        </div>
        <div className="bg-[#f00] rounded-[5px]" onClick={() => isDelete(true)}>
          <button>Delete</button>
        </div>
        <div
          className="bg-[#30BE71] rounded-[5px]"
          onClick={() => isDelete(false)}
        >
          <button>Keep</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
