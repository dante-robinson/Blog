import React from "react"

const Home = () => {
 return (
    <div className="flex">
        <h4 className="text-foreground text-sm text-center py-4">
            Thanks for visiting my Blog. Below you can find a list of my most recent posts.
            The source code for this blog is fully open-sourced and can be found on my github
            page which can be found in the footer or clicking 
            <a className="hover:text-blue" href="https://github.com/dante-robinson/Blog"> here.</a>
        </h4>
    </div>
 ) 
};

export default Home
