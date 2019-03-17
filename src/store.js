import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    confirming: false,
    deleting: false,
    posting:false,
    post_input: {
      isChanged: false,
      age: "",
      sex: "",
      content: "",
      opt1: "",
      opt2: "",
      tag_list: ""
    },
    post_data: null,
    top_feature_special: null,
    top_feature_normal: null,
    womens_topic: null,
    mens_topic: null,
    ranking_view: null,
    latest: null,
    featured: null,
    featured_sp: null,
    hot_topic: null,
    editors_pick: null,
    others_1: null,
    others_2: null,
    rankings_view: null,
    rankings_vote: null 
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setPostConfirming(state, payload) {
      state.confirming = payload;
    },
    setDeleteConfirming(state, payload) {
      state.deleting = payload;
    },
    setPosting(state, payload) {
      state.posting = payload;
    },
    setTopFeatureSpecial(state, payload){
      state.top_feature_special = payload;
    },
    setTopFeatureNormal(state, payload){
      state.top_feature_normal = payload;
    },
    setWomensTopic(state, payload){
      state.womens_topic = payload;
    },
    setMensTopic(state, payload){
      state.mens_topic = payload;
    },
    setRankingView(state, payload){
      state.ranking_view = payload;
    },
    setRankingsView(state, payload){
      state.rankings_view = payload;
    },
    setRankingsVote(state, payload){
      state.rankings_vote = payload;
    },
    setLatest(state, payload){
      state.latest = payload;
    },
    setFeatured(state, payload){
      state.featured = payload;
    },
    setFeaturedSP(state, payload){
      state.featured_sp = payload;
    },
    setHotTopic(state, payload){
      state.hot_topic = payload;
    },
    setEditorsPick(state, payload){
      state.editors_pick = payload;
    },
    setOthers1(state, payload){
      state.others_1 = payload;
    },
    setOthers2(state, payload){
      state.others_2 = payload;
    },
    setPostData(state){
      let jsonObj = new Object();
      if (state.post_input.age != "") jsonObj.age = state.post_input.age;
      if (state.post_input.sex != "") jsonObj.sex = state.post_input.sex;
      if (state.post_input.content != "") jsonObj.content = state.post_input.content;
      if (state.post_input.opt1 != "") jsonObj.opt1 = state.post_input.opt1;
      if (state.post_input.opt2 != "") jsonObj.opt2 = state.post_input.opt2;
      let tags = this.state.post_input.tag_list.split(" ");
      let arrTag = [];
      tags.forEach(tag => {
        let t = tag.trim();
        if (t.startsWith("#")) {
          t = t.slice(1);
          arrTag.push(t);
        }
      });
      if (state.post_input.tag_list != "") jsonObj.tag_list = arrTag;
      state.post_data = jsonObj;
    },
    resetPostData(state){
      state.post_input.age = ""
      state.post_input.sex = ""
      state.post_input.content = ""
      state.post_input.opt1 = ""
      state.post_input.opt2 = ""
      state.post_input.tag_list = ""
      state.post_input.isChanged = false
    },
    changeInputState(state, payload){
      state.post_input.isChanged = payload;
    }
  }
});