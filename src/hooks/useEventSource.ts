export type EventSourceHandlerProps = {
    messageHandler: (event: MessageEvent) => void
}

const useEventSource = (url:string, props: EventSourceHandlerProps) => {
    const eventSource = new EventSource(url)

    const handleWindowBeforeUnload = () => {
        console.log('Closing EventSource before unloading the page.')
        eventSource.close()
    }

    if(props.messageHandler)
        eventSource.onmessage = props.messageHandler

    window.addEventListener('beforeunload', handleWindowBeforeUnload)

    return eventSource
}
export default useEventSource