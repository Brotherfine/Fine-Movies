import { useNavigate } from "react-router-dom";

function Trailer() {
  let navigate = useNavigate();

  return (
    <>
      <h1>Trailer page</h1>
      <video></video>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        back
      </button>
    </>
  );
}

export default Trailer;
