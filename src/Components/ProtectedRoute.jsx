// ProtectedRoute.js
import React,{useEffect, useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import CryptoJS from 'crypto-js';




const ProtectedRoute = ({ children }) => {
  const[userinf, setuserinf] = useState(false)
  // const userData = useSelector((state) => state.userData);
  const location = useLocation();

  useEffect(() => {
    const encryptedSessionId = localStorage.getItem('idofus');
    // console.log('encryptedSessionId:', encryptedSessionId);
    if (encryptedSessionId !== null) {
      const decryptedId = CryptoJS.AES.decrypt(encryptedSessionId, 'your_secret_key').toString(CryptoJS.enc.Utf8);
      if(decryptedId !== ""){
        setuserinf(true)
      }
    }
  }, []); 

  if (!true) {
    return <Navigate to="/homepage" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;