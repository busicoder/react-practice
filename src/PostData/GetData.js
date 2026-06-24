
export async function fetchPosts() {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/articles`,
        );

        if (!response.ok) {
            throw new Error("something went wrong");
        }
        const data = await response.json();
        setPosts(data.data.reverse());
        //최신글을 top으로하기 위해서 reverse
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

export async function fetchDetail(postId) {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/articles/${postId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            },
        ); // TODO : response변수 채우기!

        if (!response.ok) {
            throw new Error("something went wrong");
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching article data:", error);
        return null;
    }
}

