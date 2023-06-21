import React, {useEffect, useState, UseState} from "react"

function News() {
        let [value, setValue] = useState("");
        async function ak ()
        {
            let response=await fetch("https://thejunction.ng/wp-json/wp/v2/posts?categories=61");
            let result=await response.json()
            console.log(result);

        }
        ak();
        return<h1>I ma happy</h1>
}

export default News;
