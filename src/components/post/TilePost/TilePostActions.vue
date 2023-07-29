<script setup lang="ts">
import { computed,PropType, ref } from "vue";

import InputPost from "@/components/post/InputPost.vue";
import TilePostActionButton from "@/components/post/TilePost/TilePostActionButton.vue";
import { FeedViewPost } from "@/lib/bsky";
import { useLikeMutation,useRepostMutation } from "@/lib/query";

const props = defineProps({
  feed: { type: Object as PropType<FeedViewPost>, required: true },
});

const { mutate: repost } = useRepostMutation();
const { mutate: upvote } = useLikeMutation();

const expandedInput = ref(false);

const post = computed(() => props.feed.post);
</script>

<template>
  <div class="mt-2">
    <TilePostActionButton
      aria-label="reply"
      icon-class="bi bi-reply"
      @click="expandedInput = !expandedInput"
    >
      {{ post.replyCount }}
    </TilePostActionButton>
    <TilePostActionButton
      aria-label="repost"
      icon-class="bi bi-megaphone"
      @click="
        repost({
          cid: post.cid,
          uri: post.uri,
        })
      "
    >
      {{ post.repostCount }}
    </TilePostActionButton>
    <TilePostActionButton
      aria-label="like"
      icon-class="bi bi-heart"
      @click="
        upvote({
          cid: post.cid,
          uri: post.uri,
        })
      "
    >

    <!-- いいねした後にBootstrap iconがHeartからHeart fillへとアイコンが変更する -->
<template>
  <div>
    <TilePostActionButton
      aria-label="like"
      :icon-class="isLiked ? 'bi bi-heart-fill' : 'bi bi-heart'"
      @click="toggleLike"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLiked: false,
    };
  },
  methods: {
    toggleLike() {
      // いいね状態を切り替える
      this.isLiked = !this.isLiked;

      // ここでいいねをサーバーに送信するなどの処理を追加することができます。
      // 例えば、upvoteメソッドを呼び出すなどの操作を行います。
      // このコードではサーバーへの送信は模擬的なものとしています。
      if (this.isLiked) {
        this.upvote({
          cid: post.cid,
          uri: post.uri,
        });
      }
    },
    upvote(payload) {
      // ここで実際にサーバーにいいねを送信する処理を行います。
      // サーバーにリクエストを送信していいねを記録するなどの操作を行います。
      // この例ではシンプルにログを出力しているだけですが、実際のアプリケーションではサーバーとの通信を行うことになります。
      console.log("Upvoting...", payload);
    },
  },
};
</script>


    
      {{ post.upvoteCount }}
    </TilePostActionButton>
  </div>
  <div v-if="expandedInput" class="d-flex">
    <InputPost
      class="column"
      :reply-to="feed"
      @success="expandedInput = false"
    />
    <button
      class="btn btn-link btn-icon col-auto col-ml-auto mt-1"
      @click="expandedInput = false"
    >
      <i class="bi bi-x-lg"></i>
    </button>
  </div>
</template>
