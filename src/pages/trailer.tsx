import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Trailer() {
  let navigate = useNavigate();

  return (
    <>
      <h1>Trailer page</h1>
      <video></video>
      <Button
        onClick={() => {
          navigate("/home");
        }}
      >
        back
      </Button>
    </>
  );
}

export default Trailer;
