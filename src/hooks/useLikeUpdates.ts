import { useEffect } from "react"
import useEventSource from "./useEventSource"
import useQueryParams from "./useQueryParams"
import Config from "../config"

export type LikeUpdate = {
    count: number
}

export type UseLikeUpdatesProps = {
    messageHandler: (event: LikeUpdate) => void
}

const useLikeUpdates = (props: UseLikeUpdatesProps) => {
    const userId = useQueryParams("userId")
    const handleLikeMessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data)
        if(data["Type"] === "LikeUpdate"){
            const likeUpdate: LikeUpdate = {
                count: data["Count"] || 0
            }
            props.messageHandler(likeUpdate)
        }
    }

    useEffect(() => {
        const eventSource = useEventSource(
            `${Config.SSE_URL}?name=${userId}`,
            {
                messageHandler: handleLikeMessage
            }
        )

        return () => {
            console.log("Closing event source unmounting the component.")
            eventSource.close()
        }
    }, [])
}

export default useLikeUpdates