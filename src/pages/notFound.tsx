import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }, []);

  return <h1>404 error page!</h1>;
}

export default NotFound;
