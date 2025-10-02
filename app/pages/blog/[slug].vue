<script setup>
const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryCollection("posts").where("_path", "==", `/posts/${slug}`).first()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
}

// Dynamic SEO based on post content
useSeoMeta({
  title: post.value.seo?.title || post.value.title,
  description: post.value.seo?.description || post.value.description,
  ogTitle: post.value.seo?.title || post.value.title,
  ogDescription: post.value.seo?.description || post.value.description,
  ogImage: post.value.seo?.ogImage || post.value.coverImage || "https://getnovelize.com/screenshot.webp",
  ogUrl: `https://getnovelize.com/blog/${slug}`,
  ogType: "article",
  articlePublishedTime: post.value.publishedAt,
  articleModifiedTime: post.value.updatedAt,
  articleAuthor: post.value.author.name,
  articleTag: post.value.tags,
  twitterCard: "summary_large_image",
  twitterTitle: post.value.seo?.title || post.value.title,
  twitterDescription: post.value.seo?.description || post.value.description,
  twitterImage: post.value.seo?.ogImage || post.value.coverImage || "https://getnovelize.com/screenshot.webp",
});
</script>

<template>
  <div>
    <h1>{{ post?.title || "Blog Post" }}</h1>
  </div>
</template>
