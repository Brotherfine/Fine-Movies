import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  onBack: (page: string) => void;
}

function Favourite({ onBack }: Props) {
  let navigate = useNavigate();
  return (
    <>
      <h1>Favourite</h1>
      <Button
        onClick={() => {
          onBack("favourite");
          {
            navigate("/moreInfo");
          }
        }}
      >
        moreInfo
      </Button>
      <Button
        onClick={() => {
          navigate("/home");
        }}
      >
        Back
      </Button>
    </>
  );
}

export default Favourite;
