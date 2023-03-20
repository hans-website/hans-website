import React from 'react';

import { GetStaticProps } from 'next';
import Link from 'next/link';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Calendar } from '../content/Calendar';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Home" description={AppConfig.description} />}>
    <div className="home-title">
      <h1>Hans Porten</h1>
      <span>Bariton</span>
    </div>

    <h2>Termine</h2>
    <Calendar numEvents={6} />
    <div className="showMore">
      <Link href="/schedule/">Mehr anzeigen →</Link>
    </div>
    <div className="news">
      <h2>News</h2>
      <BlogGallery posts={props.posts} pagination={props.pagination} />
    </div>
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'image']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
