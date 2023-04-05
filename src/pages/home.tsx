import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { InfoIcon, ViewIcon } from "@chakra-ui/icons";

interface Props {
  onBack: (page: string) => void;
  onTrailer: (link: any) => void;
  onMoreInfo: (title: string, description: string, image: string) => void;
}

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      description
      background_link
      yt_link
      display_link
    }
  }
`;

function Home({ onBack, onTrailer, onMoreInfo }: Props) {
  let navigate = useNavigate();

  const { error, loading, data } = useQuery(GET_MOVIES);
  console.log(data);

  if (loading)
    return (
      <Flex mt="250px" justifyContent="center">
        <Spinner size="md" color="teal.400" />
      </Flex>
    );

  if (error) return <div>something bad went wrong </div>;
  return (
    <>
      <SimpleGrid p="15" spacing={10} minChildWidth="200px">
        {data.movies.map((movie: any) => {
          return (
            <Card borderTop="8px" borderColor="white" key={movie.id}>
              <CardHeader>{movie.title}</CardHeader>
              <CardBody>
                <img src={movie.display_link} alt={movie.title} />
              </CardBody>

              <Divider />
              <CardFooter>
                <HStack>
                  <Button
                    onClick={() => {
                      onBack("home");
                      navigate("/moreInfo");
                      onMoreInfo(
                        movie.title,
                        movie.description,
                        movie.background_link
                      );
                    }}
                    size="sm"
                    leftIcon={<InfoIcon />}
                    bg="green.400"
                  >
                    Info
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/trailer");
                      onTrailer(movie.yt_link);
                    }}
                    size="sm"
                    leftIcon={<ViewIcon />}
                    bg="red.700"
                  >
                    Watch Trailer
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default Home;
