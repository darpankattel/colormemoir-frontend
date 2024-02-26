import { useMutation } from "@tanstack/react-query";
import { URL } from "@/data/URL"
import myaxios from "@/utils/myaxios";

export const useLogout = () => {
    const logoutMutation = useMutation(
        async () => {
            const response = await myaxios.post(`${URL}acc/logout/`);
            return response.data;
        }
    );

    const logout = () => {
        logoutMutation.mutate();
        // localStorage.setItem("token", null);
        console.log("logged out");
    };

    return {
        logout,
        isLoading: logoutMutation.isLoading,
        isError: logoutMutation.isError,
        isSuccess: logoutMutation.isSuccess,
    };
}
