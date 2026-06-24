import { useEffect, useState } from "react"
import ListView from "./ViewMode/List/ListView";
import { fetchPosts } from "./PostData/GetData";
import HeaderSection from "./common/HeaderSecion";
import styled from "styled-components";
import Board from "./ViewMode/board/board";
export default function Home() {
    const [filter, setFilter] = useState("리스트");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const setup= async ()=>{ 
        setPosts(await fetchPosts());}//전체 정보 Get
        setup();
    }, []);
    const sortPostData = () => {
        return [...posts].sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
    };

    const sortedPosts = sortPostData();

    return (
        <SectionDiv>
            <HeaderSection filter={filter} setFilter={setFilter} />
            {filter == "리스트" && <ListView posts={sortedPosts}/>}
            {filter == "보드" && <Board posts={sortedPosts}/>}
            {filter == "갤러리" && <ListView posts={sortedPosts}/>}
            {filter == "피드" && <ListView posts={sortedPosts}/>}
        </SectionDiv>
    )
}
const SectionDiv = styled.div`
    display: flex;
    padding: 20px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`;
const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;
`;