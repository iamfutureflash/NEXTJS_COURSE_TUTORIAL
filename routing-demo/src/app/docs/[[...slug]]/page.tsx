const Docs = ({ params }: { params: { slug: string[]; }; }) => {
    console.log(params);
    const slugLength = params?.slug?.length;

    const [slugAt0 = '', slugAt1 = '', slugAt2 = ''] = params?.slug || [];
    

    switch (slugLength) {
        case 1: return <h1>Viewing Docs for feature {slugAt0}</h1>
        case 2: return <h1>Viewing Docs for feature {slugAt0} and concept {slugAt1}</h1>
        case 3: return <h1>Viewing Docs for feature {slugAt0} and concept {slugAt1} and example {slugAt2}</h1>
        default: return <h1>Docs Home Page</h1>
    }
}
export default Docs