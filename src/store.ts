import axios from "axios";
import { reactive, readonly } from "vue";
import { Post } from "@/mocks";
//* ref => 1, asdf,  N.B: ref is use mainly for Primitive data
//* reactive => it's use for complex data

interface State {
  posts: PostState;
}

interface PostState {
  // O(n)
  ids: string[]; // [1,2,3]
  // O(1)
  alls: Map<string, Post>;
  loaded: boolean;
}

class Store {
  private state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  getState() {
    return readonly(this.state);
  }

  async fetchPost() {
    const response = await axios.get<Post[]>("/post");

    //* N.B: Not efficient
    // for (const post of response.data) {
    //   this.state.posts.ids.push(post.id);
    //   this.state.posts.alls.set(post.id, post);
    // }
    // this.state.posts.loaded = true;

    //* Good way
    const postState: PostState = {
      ids: [],
      alls: new Map(),
      loaded: true,
    };

    for (const post of response.data) {
      postState.ids.push(post.id);
      postState.alls.set(post.id, post);
    }

    this.state.posts = postState; // single update and quick and much efficient
  }
}

const store = new Store({
  posts: {
    ids: [],
    alls: new Map(),
    loaded: false,
  },
});

store.getState().posts.loaded;
