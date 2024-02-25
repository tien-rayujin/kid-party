import app from "../../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import StyButton from "../StyButton";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const GoogleLoginButton: React.FC = () => {
  const authContext = useContext(AuthContext);

  function handleSignIn() {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        // const token = credential.accessToken;
        console.log({
          accessToken: credential.accessToken,
          idToken: credential.idToken,
          secret: credential.secret,
          providerId: credential.providerId,
          signInMethod: credential.signInMethod,
        });
        authContext.setUser({
          accessToken: credential.accessToken,
          idToken: credential.idToken,
          secret: credential.secret,
          providerId: credential.providerId,
          signInMethod: credential.signInMethod,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.error(`ERROR: ${errorCode} - ${errorMessage} - ${credential} `);
      });
  }

  return (
    <StyButton
      content="Sign In with Google"
      handleClick={handleSignIn}
    />
  );
};

export default GoogleLoginButton;
