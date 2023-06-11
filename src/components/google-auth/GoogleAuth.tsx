import { FC, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

//local
import { getIdToken } from "../../service/firebase";
import firebase from "../../service/firebase";

const GoogleAuth: FC = () => {
  const [user, setUser] = useState<any>(null);

  console.log(user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => getIdToken()}
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
