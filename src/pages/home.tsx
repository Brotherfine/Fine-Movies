import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  onBack: (page: string) => void;
}

function Home({ onBack }: Props) {
  let navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <Button
        onClick={() => {
          onBack("home");
          {
            navigate("/moreInfo");
          }
        }}
      >
        moreInfo
      </Button>
      <Button
        onClick={() => {
          navigate("/trailer");
        }}
      >
        {" "}
        trailer
      </Button>
    </>
  );
}

export default Home;
