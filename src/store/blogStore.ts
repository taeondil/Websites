import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../types/blog';

interface BlogStore {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'date' | 'readTime'>) => void;
  deletePost: (id: string) => void;
  updatePost: (id: string, post: Partial<BlogPost>) => void;
}

export const useBlogStore = create<BlogStore>()(
  persist(
    (set) => ({
      posts: [...blogPosts], // Başlangıçta mevcut blog yazılarını yükle
      
      addPost: (newPost) => set((state) => ({
        posts: [
          {
            id: crypto.randomUUID(),
            date: new Date().toISOString().split('T')[0],
            readTime: '5 dakika', // Varsayılan okuma süresi
            ...newPost,
          },
          ...state.posts,
        ],
      })),

      deletePost: (id) => set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      })),

      updatePost: (id, updatedPost) => set((state) => ({
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, ...updatedPost } : post
        ),
      })),
    }),
    {
      name: 'blog-storage', // Local storage'da saklanacak isim
    }
  )
);