import styled from "styled-components";
// import {data} from "../components/PostDetail/postdata";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../../PostData/GetData";

export default function PostDetail() {
  const [postData, setPostData] = useState(null);
  const [isLoding,setIsLoding]=useState(true);
  const { postId } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      const newPostData = await fetchDetail(postId);
      if (newPostData) {
        setPostData(newPostData);
      }
      setIsLoding(false);
    };
    fetchData();
  }, []);

  const handlePostData = (newPostData) => {
    setPostData(newPostData);
  };

  // 데이터 업데이트 위해 콜백 함수를 정의했습니다
  const refreshPostData = async () => {
    const updated = await getPostData(postId);
    if (updated) {
      setPostData(updated);
    }
  };
  if (isLoding){
    return <div>Loding . . .</div>
  }

  return (
    <PostDetailWrapper>
      <Content>{postData}</Content>
    </PostDetailWrapper>
  );
}

const PostDetailWrapper = styled.section`
  max-width: 74.4rem;
  min-width: 37.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2.4rem;
`;
const Content = styled.pre`
  color: var(--text-primary);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
  padding: 6rem 0;
`;