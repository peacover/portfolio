import SectionWrapper from "../utils/SectionWrapper";
import ListBlogs from "../Blogs/ListBlogs";

const BlogsSection = () => {
  return (
    <SectionWrapper title="Blogs" className="bg-primary-foreground">
      <ListBlogs path="Home" />
    </SectionWrapper>
  );
};

export default BlogsSection;
