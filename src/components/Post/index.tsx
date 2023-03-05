import styled from "styled-components";
import { Link } from "gatsby";
import { formatDate } from "../../utils";
import { Post } from "../../types";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <Wrapper key={post.id}>
      <PostWrapper to={post.fields.slug}>
        <PostTop>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PublishedDate>{formatDate(post.frontmatter.date)}</PublishedDate>
        </PostTop>
        <Description>{post.frontmatter.description}</Description>
        <TagList>
          {post.frontmatter.tags.map((tag) => (
            <Tag key={tag}>{`#${tag}`}</Tag>
          ))}
        </TagList>
      </PostWrapper>
    </Wrapper>
  );
};

export default PostItem;

const Wrapper = styled.li`
  padding: 24px;
  list-style-type: none;

  transition: background-color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  border-radius: 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }

  &:nth-child(n + 2) {
    margin-top: 36px;
  }

  @media screen and (max-width: 800px) {
    padding: 12px;
  }
`;

const PostWrapper = styled(Link)`
  text-decoration: none;
`;

const PostTop = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const PostTitle = styled.h2`
  margin-right: 8px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const PublishedDate = styled.time`
  font-size: 12px;
`;

const Description = styled.div`
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const TagList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  list-style-type: none;
  font-size: 0.75em;
  display: block;

  margin-bottom: 4px;
  &:not(:last-child) {
    margin-right: 0.5em;
  }
`;

export const PostList = styled.ol`
  margin: 0 -24px;

  @media screen and (max-width: 800px) {
    margin: 0 -12px;
  }
`;
