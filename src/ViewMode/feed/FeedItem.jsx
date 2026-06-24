import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatKoreanDate } from "../../utils/dateFormat.js";

import { IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import PostDetail from "./PostDetail.jsx";

export default function FeedItem({
  postId,
  title,
  author,
  createdAt,
  totalComments,
  totalLikes,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/post/${postId}`);
  };

  return (
    <FeedItemWrapper onClick={handleClick}>
      <FeedItemTitle>{title}</FeedItemTitle>
      <div className="info, verti">
        <FeedItemAuthor>{author}</FeedItemAuthor>
        <FeedItemDate>{formatKoreanDate(createdAt)}</FeedItemDate>
      </div>
      <PostDetail postId={postId} />
      <div className="info, hori">
        <IoHeartOutline size={16} color="var(--icon-tertiary)" />
        <span>{totalLikes}</span>
        <IoChatbubbleOutline size={16} color="var(--icon-tertiary)" />
        <span>{totalComments}</span>
      </div>
    </FeedItemWrapper>
  );
}

const FeedItemWrapper = styled.li`
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: var(--background-secondary);
  }
  .hori{
    flex-direction : column;
  }
  .verti{
    flex-direction : row;
  }
  .info {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
    align-self: stretch;
    color: var(--text-tertiary);

    /* label/small */

    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 138.5%; /* 1.8005rem */
    letter-spacing: 0.0252rem;
  }
  .content{
    display: flex;
    width: 684px;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    flex-shrink: 0;
  }
`;
const FeedItemTitle = styled.div`
  overflow: hidden;
  color: var(--text-primary);
  text-overflow: ellipsis;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.0091rem;
`;
const FeedItemAuthor = styled.div``;
const FeedItemDate = styled.div``;
