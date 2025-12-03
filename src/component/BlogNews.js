import { Button } from "antd";
import { useEffect, useState } from "react";

function BlogNews() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("tải xuống lỗi");
        return res.json();
      })
      .then((data) => {
        // 1. Lấy top 3 bài có views cao nhất
        const top3 = [...data.posts]
          .sort((a, b) => b.views - a.views)
          .slice(0, 3);

        // 2. Gom tất cả tags của top 3
        const allTags = top3.flatMap((item) => item.tags);

        // 3. Lấy 3 tag không trùng
        const uniqueTags = [...new Set(allTags)].slice(0, 3);

        // 4. Lấy bài viết tương ứng với mỗi tag
        const result = uniqueTags.map((tag) => {
          // tìm bài đầu tiên của tag đó trong top3
          const post = top3.find((p) => p.tags.includes(tag));
        });

        setPosts(data.posts);
      })
      .catch((err) => console.log("tải xuống lỗi", err.message));
  }, []);

  return (
    <>
      <div className="mx-4 mt-4 bg-white rounded-2xl shadow-md p-8">
        <div className="grid grid-cols-3 gap-8 px-40">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="rounded-xl shadow-lg overflow-hidden bg-white"
            >
              {/* Hình ảnh */}
              <img
                src={`/images/BlogNews/hinh_${post.id}.jpg`}
                alt={post.title}
                className="inset-0 w-full object-cover aspect-[3/4]"
              />

              {/* Nội dung */}
              <div className="p-5">
                {/* Tag */}
                <p className="text-xs font-semibold text-[#ff004f] tracking-widest mb-2 uppercase">
                  {post.tags[0]}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Body */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {post.body.length > 110
                    ? post.body.substring(0, 110) + "..."
                    : post.body}
                </p>

                {/* Button */}
                <Button
                  type="default"
                  className="
                  bg-[#ff004f] 
                  text-white 
                  text-sm 
                  font-semibold 
                  rounded-full 
                  px-6 py-2 
                  hover:bg-[#d60044] 
                  w-fit
                "
                >
                  Read more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogNews;
