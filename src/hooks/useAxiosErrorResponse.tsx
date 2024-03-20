import Swal from "sweetalert2";
import { HttpErrorResponse } from "../types";
import { removeKeyOfLocalstorage } from "../utils";
import { useNavigate } from "react-router-dom";

export const useAxiosErrorResponse = () => {
  const navigate = useNavigate();

  const validateError = (error: HttpErrorResponse) => {
    if (error.response.status === 401) {
      Swal.fire({
        icon: "info",
        title: "Sesion Finalizada",
        text: "Por favor logueese denuevo :)",
      }).then(() => {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      });
    }
  };
  return {
    validateError,
  };
};
