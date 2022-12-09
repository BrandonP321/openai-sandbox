import { setOpenaiApiKey } from "../store/slices/settingsSlice";
import { store } from "../store/store";

export class StorageUtils {
    public static getItem = (key: string) => {
        const value = localStorage.getItem(key);

        return value;
    }

    public static setItem = (key: string, value: string) => {
        localStorage.setItem(key, value);
    }
}