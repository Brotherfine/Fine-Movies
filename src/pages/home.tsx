import { useNavigate } from "react-router-dom";

interface Props {
  onBack: (page: string) => void;
}

function Home({ onBack }: Props) {
  let navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          onBack("home");
          {
            navigate("/moreInfo");
          }
        }}
      >
        moreInfo
      </button>
      <button
        onClick={() => {
          navigate("/trailer");
        }}
      >
        {" "}
        trailer
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Sign Out
      </button>
    </>
  );
}

export default Home;
