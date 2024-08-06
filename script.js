// ! Home-Work
// ! Task 1

// const posts = {
//   name: "posts",
//   isLoading: true,
//   byid: {
//     post1: {
//       id: "post1",
//       author: "user1",
//       body: "......",
//       comments: ["comment1", " comment2"],
//     },
//     post2: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allids: ["post1", " post2"],
// };
// const copyOfPosts = { ...posts };
// console.log(copyOfPosts);

// const copyOfPosts = JSON.parse(JSON.stringify(posts));
// console.log(copyOfPosts);

// ! Task 2

// const posts = {
//   name: "posts",
//   isLoading: true,
//   byid: {
//     post1: {
//       id: "post1",
//       author: "user1",
//       body: "......",
//       comments: ["comments1", "comments2"],
//     },
//     post2: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allids: ["post1", "post2"],
// };
// const copyOfPosts = JSON.parse(JSON.stringify(posts));
// console.log(copyOfPosts);

// const copyOfPosts = { ...posts };
// console.log(copyOfPosts);

// ! Task 3

// const post = {
//   name: "posts",
//   isLoading: true,
//   id: "post1",
//   author: "user1",
//   body: "......",
//   comments: ["comments1", "comments2"],
// };
// const { comments: color, hello, ...rest } = post;

// ! Color - Массивке && [array]ге барабар..!
// ! Hello - undefinedке барабар..!
// ! Reat - Postко && {Objectке}..!

// ! Task 4

// const comments = ["comment3", "comment4", "comment5", "comment1"];
// const [undefined, comment1, ...rest] = comments;

// ! Rest - Массивдин калганына барабар тоесть [comment4,comment5,comment1]..!
// ! Comment1 - Comment3ко барабар..!
// ! Undefined - Undefined, Null, 0, Эчнерсеге барабар эмес..!

