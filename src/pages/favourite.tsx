import { useNavigate } from "react-router-dom";

interface Props {
  onBack: (page: string) => void;
}

function Favourite({ onBack }: Props) {
  let navigate = useNavigate();
  return (
    <>
      <h1>Favourite</h1>
      <button
        onClick={() => {
          onBack("favourite");
          {
            navigate("/moreInfo");
          }
        }}
      >
        moreInfo
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Back
      </button>
    </>
  );
}

export default Favourite;
