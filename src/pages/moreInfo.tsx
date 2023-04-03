import { useNavigate } from "react-router-dom";
interface Props {
  page: string;
}

function MoreInfo({ page }: Props) {
  let navigate = useNavigate();
  console.log(page);
  return (
    <>
      <h1>more info </h1>
      <video></video>
      <button
        onClick={() => {
          page === "favourite" ? navigate("/favourite") : navigate("/home");
        }}
      >
        Back
      </button>
    </>
  );
}

export default MoreInfo;
