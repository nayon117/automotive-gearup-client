import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <p className="text-center mt-24"><span className="loading loading-infinity  loading-lg"></span></p>
  }

  if (user) {
    return children;
    }
  else {
      return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;