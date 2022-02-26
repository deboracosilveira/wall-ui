import User from './user';

export default interface Post {
  content: string;
  created_at: Date;
  user: User;
}
