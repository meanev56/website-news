import React, {useEffect, useState} from "react"

function News() {
        let [value, setValue] = useState("");
        async function ak ()
        {
            let response=await fetch("https://thejunction.ng/wp-json/wp/v2/posts?categories=61");
            let result=await response.json()
            console.log(result);
            console.log(result.articles);
            let p=result.articles?.map((a)=>{return (
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
              </div> )})
            console.log(p);
            setValue(p);

        }
        ak();
        return<h1>I ma happy {value}</h1>
}

export default News;
