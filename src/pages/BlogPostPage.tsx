import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '../components/common/Navigation';
import { useBlogStore } from '../store/blogStore';
import { BlogCard } from '../components/blog/BlogCard';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  BookmarkPlus,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = useBlogStore();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700">
        <Navigation />
        <div className="container mx-auto px-4 py-8 text-white text-center">
          Blog yazısı bulunamadı.
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      });
    } catch (err) {
      console.error('Paylaşım hatası:', err);
    }
  };

  // İçeriği satırlara böl ve boş satırları filtrele
  const contentLines = post.content
    .split('\n')
    .filter(line => line.trim() !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Blog'a Dön</span>
          </button>

          {/* Article Card */}
          <article className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-[400px]">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>

            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm"
                  >
                    <Tag className="w-4 h-4" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-white mb-6">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/logo.png"
                    alt={post.author}
                    className="w-4 h-6 rounded-"
                  />
                  <span>{post.author}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                {contentLines.map((line, index) => (
                  <p key={index} className="text-white/90 leading-relaxed mb-6">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              İlgili Yazılar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts
                .filter(
                  (p) =>
                    p.id !== post.id &&
                    p.tags.some((tag) => post.tags.includes(tag))
                )
                .slice(0, 3)
                .map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <BlogCard post={relatedPost} />
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}