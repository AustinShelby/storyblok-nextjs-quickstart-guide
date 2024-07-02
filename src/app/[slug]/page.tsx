import { getStoryblokApi } from "@storyblok/react/rsc";
import Link from "next/link";

const ConcertPage = async (props: any) => {
  const client = getStoryblokApi();
  const response = await client.getStory(props.params.slug, {});

  return (
    <div>
      <Link href={"/"}>Back to all concerts</Link>
      <h1>{response.data.story.content.band}</h1>
      <p>
        {new Date(response.data.story.content.date).toLocaleString("en-US", {
          dateStyle: "long",
          timeStyle: "short",
        })}
      </p>
      <p>{response.data.story.content.venue}</p>
      <p style={{ whiteSpace: "pre-line" }}>
        {response.data.story.content.description}
      </p>
    </div>
  );
};

export default ConcertPage;
