import { Button, Heading, Img, Text, Box, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
interface Props {
  page: string;
  title: string;
  description: string;
  img: string;
}

function MoreInfo({ page, title, description, img }: Props) {
  let navigate = useNavigate();
  console.log(page);
  return (
    <>
      <Heading textAlign="center">{title}</Heading>
      <Img
        mt="15px"
        mb="10px"
        ml="270px"
        width="560px"
        height="250px"
        src={img}
        alt={title}
      />{" "}
      <Container>
        <Text>{description}</Text>
      </Container>
      <Button
        onClick={() => {
          page === "favourite" ? navigate("/favourite") : navigate("/home");
        }}
      >
        Back
      </Button>
    </>
  );
}

export default MoreInfo;

// bgImage="url('/images/gaara.png')"
