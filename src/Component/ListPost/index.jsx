import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Search from "../Search";
import PostItem from "./PostItem";

const ListPost = () => {
  const { posts, users } = useSelector((state) => state);
  let { data, loading } = posts;

  let length = data ? data.length : 0;

  const [number, setNumber] = useState(10);
  const ref = useRef(10);

  const [searchTerm, setSearchTerm] = useState("");
  const onFilter = (value) => {
    if (value === "") setNumber(10);
    setSearchTerm(value);
  };
  const loadMore = () => {
    const list = document.getElementById("list");
    if (window.pageYOffset > list.clientHeight - 1000) {
      ref.current += 10;
      if (ref.current >= length) ref.current = length;
      setNumber(ref.current);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, []);
  if ((data?.length === 0 && !loading) || !data) return <p>No posts</p>;
  if (loading) return <p>Loading</p>;
  data = data.filter(
    (post) =>
      post.title
        .trim()
        .toLowerCase()
        .indexOf(searchTerm.trim().toLowerCase()) !== -1
  );
  if (data.length > 10) {
    data.length = number;
  }
  return (
    <Container id="list">
      <Search onFilter={onFilter} />
      {data.map((post) => {
        const author = users.find((user) => user.id === post.userId);

        return <PostItem key={post.id} post={post} author={author} />;
      })}
    </Container>
  );
};

export default ListPost;
