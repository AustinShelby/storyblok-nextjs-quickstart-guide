import { getStoryblokApi } from "@storyblok/react";
import Link from "next/link";

const HomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({ content_type: "concert" });

  return (
    <ul>
      {response.data.stories.map((story) => (
        <li key={story.id}>
          <Link href={story.slug}>{story.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
