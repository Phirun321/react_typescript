import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { gql, useQuery, useMutation } from "@apollo/client";

interface Post {
  flight_number: number;
  mission_name: string;
  launch_year: string;
}

interface PostsQueryResponse {
  launches: Post[];
}

interface PostVar {
  id: String;
}
const GET_POSTS = gql`
  query LaunchList {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;

function usePostsQuery({ _id }: any) {
  // return useQuery<PostsQueryResponse>(GET_POSTS);
  return useQuery(QUERY_LAUNCH_PROFILE, {
    variables: { id: _id },
  });
}

const QUERY_LAUNCH_PROFILE = gql`
  query LaunchProfile($id: String!) {
    launch(id: $id) {
      flight_number
      mission_name
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`;

// eslint-disable-next-line react/display-name
const Card = React.memo(() => {
  const { data, error, loading } = usePostsQuery({ _id: "42" });
  // const [mutation] = usePostsQuery();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }
  return (
    <Stack justifyContent={"space-around"} direction={"row"} sx={{ mt: 2 }}>
      {/* {data?.launches.map((post) => (
        <div key={post.flight_number}>
          <h2>{post.flight_number}</h2>
        </div>
      ))} */}
      {/* {console.log(
        "data::::",
        data ? data["launch"]["links"]["flickr_images"][0] : "null"
      )} */}
      <Image
        src={data["launch"]["links"]["flickr_images"][0]}
        alt="apollo1"
        width={"200px"}
        height={"200px"}
      ></Image>
    </Stack>
  );
});

export default Card;
