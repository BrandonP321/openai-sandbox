import { setOpenaiApiKey } from "../store/slices/settingsSlice"
import { store } from "../store/store"
import { StorageUtils } from "./StorageUtils";
import { Configuration } from "openai";
import { OpenAIApi } from "openai/dist/api";

const apiKey = localStorage.getItem("apiKey");

const configuration = new Configuration({
    apiKey:  apiKey ?? ""
})

const openai = new OpenAIApi(configuration);

export class OpenaiUtils {
    public static localStorageKey = "openaiApiKey";

    public static setStoreAPIKey = (apiKey: string) => {
        if (apiKey) {
            store.dispatch(setOpenaiApiKey({ apiKey }));

            return true;
        }

        return false;
    }

    public static setStorageAPIKey = (apiKey: string) => {
        apiKey && StorageUtils.setItem(this.localStorageKey, apiKey);
    }

    public static getAPIKeyFromStorage = () => {
        return StorageUtils.getItem(this.localStorageKey);
    }

    public static getImage = async (prompt: string) => {
        if (prompt) {
            const image = await openai.createImage({
                prompt
            })

            return image.data.data?.[0]?.url
        }
    }
}