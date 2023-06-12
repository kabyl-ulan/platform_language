import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

//local
import { getIdToken } from "../../service/firebase";

const GoogleAuth: FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => getIdToken(navigate)}
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          padding: "5px 15px",
          border: "1px solid #718096",
          outline: "none",
        }}
      >
        <FcGoogle />
        <p style={{ marginLeft: "5px" }}>Sign in with google</p>
      </button>
    </div>
  );
};

export default GoogleAuth;
