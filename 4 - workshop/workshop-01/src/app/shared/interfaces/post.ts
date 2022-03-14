export interface IPost {
    likes: string[]
    _id: string;
    text: string;
    userId: {
      themes: string[];
      posts: string[];
      _id: string;
      tel: string;
      email: string;
      username: string;
      password: string;
      created_at: string;
      updatedAt: string;
      __v: 0
    },
    themeId: {
      subscribers: string[],
      posts: string[],
      _id: string;
      themeName: string;
      userId: string;
      created_at: string;
      updatedAt: string;
      __v: number;
    },
    created_at: string;
    updatedAt: string;
    __v: number;
  }