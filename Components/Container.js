import Nav from "./Nav";
import Head from "next/head";


const Container = (props) =>(
    <div>
        <Head>
            <title>Desafío Siempre en Casa</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/spacelab/bootstrap.min.css" integrity="sha384-F1AY0h4TrtJ8OCUQYOzhcFzUTxSOxuaaJ4BeagvyQL8N9mE4hrXjdDsNx249NpEc" crossorigin="anonymous"></link>
        </Head>
        <Nav/>
        <div className="container p-4">
            {props.children}
        </div>
        
    </div>
)

export default Container;