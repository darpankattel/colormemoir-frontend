import { useMutation } from "@tanstack/react-query";
import { URL } from "@/data/URL"
import axios from "axios";

export const useLogin = () => {
    const loginMutation = useMutation(
        async () => {
            const response = await axios.post(`${URL}acc/login/`);
            return response.data;
        }
    );

    const login = () => {
        loginMutation.mutate();
        // localStorage.setItem("token", null);
    };

    return {
        login,
        data: loginMutation.data,
        isLoading: loginMutation.isLoading,
        isError: loginMutation.isError,
        isSuccess: loginMutation.isSuccess,
    };
}
