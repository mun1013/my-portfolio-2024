import Card from "../../components/Card/Card.tsx";
import Loader from "../../components/Loader/Loader.tsx";
import ErrorStatus from "../../components/ErrorStatus/ErrorStatus.tsx";
import useGetPosts, { dataType } from "./useGetPosts";
import "./blog.css";

const Blog = () => {
  const { data, loading, error } = useGetPosts();

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorStatus message={error.message} />
      ) : (
        <>
          <h2>My Blog</h2>
          <p>
            I love sharing my knowledge and experiences. Read my Medium Blog for
            insights, best practices and discussions on all things tech.
          </p>
          <div className="blog__posts" data-aos="fade-up">
            {data?.map((item: dataType) => (
              <Card className="blog__post" key={item.guid}>
                <div className="blog__post-image">
                  <img src={item.image} alt="Blog Image" />
                </div>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <div className="blog__post-cta">
                  <a
                    href={item.guid}
                    className="btn default sm"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
