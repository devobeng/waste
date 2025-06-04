import loader from "../../assets/loader.gif";
const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <img src={loader} alt="loading......." width={150} height={150} />
    </div>
  );
};

export default Spinner;
