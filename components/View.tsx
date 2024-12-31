import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
  try {
    const data = await client
      .withConfig({ useCdn: false })
      .fetch(STARTUP_VIEWS_QUERY, { id });
      console.log(data)

    const totalViews = data?.views || 0;

    return (
      <div className="view-container">
        <div className="absolute -top-2 -right-2">
          <Ping />
        </div>
        <p className="view-text">
          <span className="font-black">{totalViews} views</span>
        </p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching views:", error);
    return (
      <div className="view-container">
        <p className="view-text">
          <span className="font-black">Error fetching views</span>
        </p>
      </div>
    );
  }
};

export default View;
