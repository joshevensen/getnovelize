<script setup lang="ts">
interface Post {
  _id: string;
  _path: string;
  title: string;
  description: string;
  publishedAt: string;
  authorId: string;
  category: string;
  tags: string[];
  coverImage?: string;
  excerpt?: {
    type: string;
    children: any;
  };
  featured: boolean;
  draft: boolean;
  readingTime?: number;
}

interface Author {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

interface Props {
  posts: Post[];
  authors?: Author[];
  categories?: Category[];
}

const props = defineProps<Props>();

// Helper function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Helper function to get author info
const getAuthor = (authorId: string): Author | null => {
  if (!props.authors) return null;
  return props.authors.find((author) => author.id === authorId) || null;
};

// Helper function to get category info
const getCategory = (categoryId: string): Category | null => {
  if (!props.categories) return null;
  return (
    props.categories.find((category) => category.id === categoryId) || null
  );
};

// Helper function to get excerpt text
const getExcerpt = (post: Post): string => {
  if (post.excerpt?.children) {
    // Extract text from excerpt AST
    const extractText = (children: any[]): string => {
      return children
        .map((child) => {
          if (child.type === "text") return child.value;
          if (child.children) return extractText(child.children);
          return "";
        })
        .join("");
    };
    return extractText(post.excerpt.children);
  }
  return post.description;
};
</script>

<template>
  <div class="bg-white py-24 sm:py-32 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <div
          class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 dark:border-gray-700"
        >
          <article
            v-for="post in posts"
            :key="post._id"
            class="flex max-w-xl flex-col items-start justify-between"
          >
            <div class="flex items-center gap-x-4 text-xs">
              <time
                :datetime="post.publishedAt"
                class="text-gray-500 dark:text-gray-400"
                >{{ formatDate(post.publishedAt) }}</time
              >
              <span
                v-if="getCategory(post.category)"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
                >{{ getCategory(post.category)?.name }}</span
              >
            </div>
            <div class="group relative">
              <h3
                class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300"
              >
                <NuxtLink :to="`/blog/${post._path.split('/').pop()}`">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p
                class="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400"
              >
                {{ getExcerpt(post) }}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                v-if="getAuthor(post.authorId)?.image"
                :src="getAuthor(post.authorId)?.image"
                :alt="getAuthor(post.authorId)?.name"
                class="size-10 rounded-full bg-gray-50 dark:bg-gray-800"
              />
              <div class="text-sm/6">
                <p class="font-semibold text-gray-900 dark:text-white">
                  {{ getAuthor(post.authorId)?.name }}
                </p>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ getAuthor(post.authorId)?.role }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
