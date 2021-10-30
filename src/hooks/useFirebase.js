import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged , signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAthentication from "../Firebase/firebase.init";

intializeAthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider)
    };

    
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut =() =>{
      setIsLoading(true);
      signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        
        signInUsingGoogle,
        logOut
    };

}
export default useFirebase;