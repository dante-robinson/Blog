import ListPosts from "./ListPosts.js"

export default function Home() {
  return (
    <div className="flex flex-col w-[80vw] px-[3vw] sm:px-[1vw] xl:w-full lg:px-[0vw]">
      <h4 className="text-foreground text-sm text-center py-[1.5vw]">
        Thanks for visiting my Blog. Below you can find a list of my most recent posts.
        The source code for this blog is fully open-sourced and can be found on my github
        page which can be found in the footer or clicking <a className="hover:text-blue underline" href="https://github.com/dante-robinson/Blog">here</a>.
      </h4>

      <ListPosts />
    </div>
  )
};
