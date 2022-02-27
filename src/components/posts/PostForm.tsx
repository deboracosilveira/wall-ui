import { FC, useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { Alert, Button } from '..';

const PostForm: FC = () => {
  const { user } = useContext(Context);

  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    console.log(content);
  };

  if (!user) return null;

  return (
    <div className="mx-auto mb-10 max-w-full bg-white px-4 py-6 shadow sm:max-w-xl sm:rounded-lg sm:p-6">
      <div className="flex items-start space-x-4">
        <div className="min-w-0 flex-1">
          <div className="border-b border-gray-200 focus-within:border-primary">
            <textarea
              rows={4}
              name="content"
              id="content"
              className="text-md block w-full border-0 border-b border-transparent p-0 pb-2 focus:outline-none"
              placeholder="What do you want to share today?"
              maxLength={300}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex justify-between pt-4">
            <div className="flex items-center space-x-5"></div>
            <div className="flex-shrink-0">
              <Button onClick={handleSubmit} title="Post" type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
