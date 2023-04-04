import { Button, AspectRatio, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  link: any;
}

function Trailer({ link }: Props) {
  let navigate = useNavigate();

  return (
    <>
      <Container p="20px">
        <AspectRatio ratio={16 / 9}>
          <iframe title="YouTube video player" src={link} allowFullScreen />
        </AspectRatio>
      </Container>

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
