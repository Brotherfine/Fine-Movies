import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

interface Props {
  onBack: (page: string) => void;
}

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      rating
      yt_link
      display_link
    }
  }
`;

function Home({ onBack }: Props) {
  let navigate = useNavigate();

  const { error, loading, data } = useQuery(GET_MOVIES);
  console.log({ error, loading, data });

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
