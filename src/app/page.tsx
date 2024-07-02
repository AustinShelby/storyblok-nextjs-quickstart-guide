import { getStoryblokApi } from "@storyblok/react/rsc";
import Link from "next/link";

const HomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({ content_type: "concert" });

  return (
    <div>
      <ul>
        {response.data.stories.map((story) => (
          <li key={story.id}>
            <Link href={story.slug}>{story.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
