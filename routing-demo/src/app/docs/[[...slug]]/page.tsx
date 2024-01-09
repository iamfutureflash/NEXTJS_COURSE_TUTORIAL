const Docs = ({ params }: { params: { slug: string[]; }; }) => {
    console.log(params);
    const slugLength = params?.slug?.length;
    switch (slugLength) {
        case 1: return <h1>Viewing Docs for feature {params?.slug[0]}</h1>
        case 2: return <h1>Viewing Docs for feature {params?.slug[0]} and concept {params?.slug[1]}</h1>
        case 3: return <h1>Viewing Docs for feature {params?.slug[0]} and concept {params?.slug[1]} and example {params?.slug[2]}</h1>
        default: return <h1>Docs Home Page</h1>
    }
}
export default Docs