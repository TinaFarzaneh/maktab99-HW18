function MainNotes({ data, getIndex }) {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return data.map((note, index) => {
    const randomColor = getRandomColor();
    return (
      <div
        onClick={() => getIndex(index)}
        key={index}
        className={`px-10 py-5  rounded-xl`}
        style={{ backgroundColor: randomColor }}
      >
        <span>{note.title}</span>
      </div>
    );
  });
}

export default MainNotes;
