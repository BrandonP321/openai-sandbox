import React, { useRef, useState } from 'react'
import { OpenaiUtils } from '../../utils/OpenaiUtils';
import styles from "./Home.module.scss";

type Props = {}

export default function Home({ }: Props) {
    const [input, setInput] = useState("");
    const [image, setImage] = useState<string | null>(null);
    const [loading, setIsLoading] = useState(false);

    const apiKey = useRef<string | null>(null);
    const [apiKeyInput, setApiKeyInput] = useState("");

    const getImage = () => {
        setIsLoading(true);
        OpenaiUtils.getImage(input).then(res => {
            res && setImage(res);
            setIsLoading(false);
        })
    }

    const setAPIKey = () => {
        localStorage.setItem("apiKey", apiKeyInput);
        apiKey.current = apiKeyInput;
    }

    return (
        <div>
            <form>
                <input onChange={e => setApiKeyInput(e.currentTarget.value)}/>
                <button onClick={setAPIKey}>Set Api Key</button>
            </form>
            <form onSubmit={e => e.preventDefault()}>
                <input onChange={e => setInput(e.currentTarget.value)}/>
                <button onClick={getImage} disabled={loading}>Get Image</button>
            </form>
            {loading &&
                <p>Loading</p>
            }
            <br/>
            {image &&
                <img className={styles.img} src={image}/>
            }
    </div>
    )
}