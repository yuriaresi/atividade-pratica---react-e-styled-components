interface ContentMain {
    content: string
    title: string

}

export function ContentMain(props: ContentMain) {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </>

    )
}