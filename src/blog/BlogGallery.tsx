import React from 'react';

import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <div className="news-items">
      {props.posts.map((elt) => (
        <Link href="/posts/[slug]" as={`/posts/${elt.slug}`} key={elt.slug}>
          <div
            className="news-item"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${elt.image})`,
            }}
          >
            <h3>{elt.title}</h3>
            <div className="text-right">
              {new Date(elt.date).toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
