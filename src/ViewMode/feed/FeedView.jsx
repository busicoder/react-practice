import styled from "styled-components";
import FeedItem from "./FeedItem";

export default function FeedView({ posts }) {
  return (
    <FeedSectionWrapper>
      <Feed>
        {posts.map((post) => (
          <FeedItem key={post.id} {...post} postId={post.id} />
        ))}
      </Feed>
    </FeedSectionWrapper>
  );
}

const FeedSectionWrapper = styled.section`
  width: 100%;
  max-width: 74.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Feed = styled.ul`
  > li {
    border-bottom: 1px solid var(--line-secondary);
  }
`;
