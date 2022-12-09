export default interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  categoryId?: number;
  date: Date;
  image: string;
  user: {
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  views: number;
}
