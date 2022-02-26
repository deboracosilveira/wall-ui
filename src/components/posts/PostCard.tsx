import { FC } from 'react';
import formatDate from '../../helpers/formatDate';
import Post from '../../types/post';

interface Props {
  post: Post;
}

const PostCard: FC<Props> = ({ post }) => {
  return (
    <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
      <article>
        <div>
          <div className="flex space-x-3">
            <div className="min-w-0 flex-1">
              <p className="text-md text-gray-900">{post.user.name}</p>
              <p className="text-xs font-light text-gray-400">
                {formatDate(post.created_at)}
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 space-y-4 text-sm text-gray-600">{post.content}</p>
      </article>
    </li>
  );
};

export default PostCard;
