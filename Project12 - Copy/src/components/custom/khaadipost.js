// import { useState } from "react";
// import { Heart, Share2, Bookmark, Link } from "lucide-react";
// import SearchBar from "./searchbar";
// import { RiVerifiedBadgeFill } from "react-icons/ri";


// const KhaadiPost = () => {
//   const [liked, setLiked] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState(["Check out 1,384 comments"]);

//   const handleLike = () => {
//     setLiked(!liked);
//   };

//   const handleSave = () => {
//     setSaved(!saved);
//   };

//   const handleComment = () => {
//     if (comment.trim()) {
//       setComments([...comments, comment]);
//       setComment("");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-4 rounded-lg">
//       {/* Fixed Search Bar */}
//       <div className="sticky top-0 z-10 w-[120%] py-1">
//         <SearchBar />
//       </div>

//       {/* Content Wrapper to Prevent Overlap */}
//       <div className="mt-10">
//         {/* Header with Image */}
//         <div className="flex items-center space-x-3">
//           <img 
//             src="/khaadiLogo-22.png" 
//             alt="Khaadi Logo" 
//             className="w-10 h-10 rounded-full"
//           />
//           <a href="/storeprofile"><h2 className="text-lg font-bold">Khaadi</h2></a>
//           <RiVerifiedBadgeFill style={{ color: "#62C2FF", fontSize: "24px" }} />
//         </div>

//         {/* Large Image */}
//         <img 
//           src="/user(1).jpg" 
//           alt="Khaadi Eid Collection" 
//           className="w-full mt-3 rounded-lg"
//         />

//         {/* Buttons & Like Row */}
//         <div className="flex justify-between items-center mt-3">
//           {/* Like, Share, Save */}
//           <div className="flex space-x-5 items-center">
//             <button onClick={handleLike} className="flex items-center space-x-1">
//               <Heart className={`w-6 h-6 transition-all ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
//             </button>
//             <button className="flex items-center">
//               <Share2 className="text-gray-600 w-6 h-6" />
//             </button>
//             <button onClick={handleSave} className="flex items-center">
//               <Bookmark className={`w-6 h-6 transition-all ${saved ? "fill-black text-black" : "text-gray-600"}`} />
//             </button>
//           </div>

//           {/* Visit Now & Try Now */}
//           <div className="flex space-x-2">
//           <a
//             href="https://pk.khaadi.com/sale/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg text-white px-4 py-1 rounded-md">
//               Visit Now
//             </button>
//           </a>

          
//             <button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg text-white px-4 py-1 rounded-md">
//               Try it Now
//             </button>
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-sm text-gray-600 mt-3">
//           Ignite your Eid spark in bold and bright looks.
//         </p>

//         {/* Comments Section */}
//         <div className="mt-4">
//           <span className="text-blue-500 text-sm">{comments.length} comments</span>
//           {comments.map((c, index) => (
//             <p key={index} className="text-sm text-gray-700">{c}</p>
//           ))}
//         </div>

//         {/* Comment Input */}




//         <div className="flex mt-3 border p-2 rounded-lg">
//           <input
//             type="text"
//             placeholder="Type your comment here..."
//             className="flex-1 outline-none"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />
//           <button onClick={handleComment} className="text-blue-500">Send</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KhaadiPost;



























// import { useState } from "react";
// import { Heart, Share2, Bookmark } from "lucide-react";
// import SearchBar from "./searchbar";
// import { RiVerifiedBadgeFill } from "react-icons/ri";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// // Post Component
// const Post = ({ post }) => {
//   const [liked, setLiked] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState(post.comments || []);

//   const handleLike = () => setLiked(!liked);
//   const handleSave = () => setSaved(!saved);
//   const handleComment = () => {
//     if (comment.trim()) {
//       setComments([...comments, comment]);
//       setComment("");
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg mb-6 shadow-md ">
//       {/* Post Header */}
//       <div className="flex items-center space-x-3 ">
//         <img
//           src={post.logo}
//           alt={`${post.brand} Logo`}
//           className="w-10 h-10 rounded-full"
//         />
//         <a href="/storeprofile">
//           <h2 className="text-lg font-bold">{post.brand}</h2>
//         </a>
//         <RiVerifiedBadgeFill style={{ color: "#62C2FF", fontSize: "24px" }} />
//       </div>

//       {/* Post Image */}
//       <img
//         src={post.img}
//         alt={`${post.brand} Collection`}
//         className="w-full mt-3 h-screen rounded-lg object-cover"
//       />

//       {/* Actions: Like, Share, Save */}
//       <div className="flex justify-between items-center mt-3">
//         <div className="flex space-x-5 items-center">
//           <button onClick={handleLike}>
//             <Heart
//               className={`w-6 h-6 transition-all ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}`}
//             />
//           </button>
//           <button>
//             <Share2 className="text-gray-600 w-6 h-6" />
//           </button>
//           <button onClick={handleSave}>
//             <Bookmark
//               className={`w-6 h-6 transition-all ${saved ? "fill-black text-black" : "text-gray-600"}`}
//             />
//           </button>
//         </div>

//         {/* Buttons: Visit Now, Try it Now */}
//         <div className="flex space-x-2">
//           <a href={post.link} target="_blank" rel="noopener noreferrer">
//             <button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg text-white px-4 py-1 rounded-md">
//               Visit Now
//             </button>
//           </a>
//           <button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg text-white px-4 py-1 rounded-md">
//             Try it Now
//           </button>
//         </div>
//       </div>

//       {/* Description */}
//       <p className="text-sm text-gray-600 mt-3">{post.description}</p>

//       {/* Comments Section */}
//       <div className="mt-4">
//         <span className="text-blue-500 text-sm">{comments.length} comments</span>
//         {comments.map((c, index) => (
//           <p key={index} className="text-sm text-gray-700">{c}</p>
//         ))}
//       </div>

//       {/* Comment Input */}
//       <div className="flex mt-3 border p-2 rounded-lg">
//         <input
//           type="text"
//           placeholder="Type your comment here..."
//           className="flex-1 outline-none"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <button onClick={handleComment} className="text-blue-500">Send</button>
//       </div>
//     </div>
//   );
// };

// // Main Post Section
// const KhaadiPostSection = () => {
//   const posts = [
//     {
//       brand: "Khaadi",
//       img: "/user(1).jpg",
//       logo: "/khaadiLogo-22.png",
//       description: "Ignite your Eid spark in bold and bright looks.",
//       comments: ["Amazing collection!", "Love the designs!"],
//       link: "https://pk.khaadi.com/sale/"
//     },
//     {
//       brand: "BachaParty",
//       img: "/Bachaa Party summer sale 3 aug 2023.jpg",
//       logo: "/bachaparty.png",
//       description: "Explore the latest kidswear collections.",
//       comments: ["So cute!", "Perfect for my little one."],
//       link: "https://bachaaparty.com"
//     },
//     {
//       brand: "Engine",
//       img: "/Engine.jpg",
//       logo: "/engine.png",
//       description: "Fresh new arrivals for the modern man.",
//       comments: ["Engine never disappoints!", "Quality stuff!"],
//       link: "https://engine.com.pk/"
//     },
//     {
//       brand: "Bareeze",
//       img: "/BAREEZE.jpg",
//       logo: "/Breeze.jpeg",
//       description: "Unveil the elegance of our new collection.",
//       comments: ["Pure elegance!", "Simply stunning."],
//       link: "https://www.bareeze.com/sale"
//     }
    
//   ];

//   return (
//     <div className="max-w-3xl mx-auto absolute left-80">
//       {/* Single Search Bar Rendered ONCE */}
//       <div className="sticky top-0 z-10 w-full py-2 bg-white">
//         <SearchBar />
//       </div>

//       {/* All Posts */}
//       <div className="mt-4">
//         {posts.map((post, index) => (
//           <Post key={index} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KhaadiPostSection;



















// import { useState } from "react";
// import { Heart, Share2, Bookmark } from "lucide-react";
// import SearchBar from "./searchbar";
// import { RiVerifiedBadgeFill } from "react-icons/ri";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Custom Arrows
// const NextArrow = ({ onClick }) => (
//   <button
//     className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
//     onClick={onClick}
//   >
//     <svg
//       className="w-5 h-5 text-gray-700"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//     </svg>
//   </button>
// );

// const PrevArrow = ({ onClick }) => (
//   <button
//     className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
//     onClick={onClick}
//   >
//     <svg
//       className="w-5 h-5 text-gray-700"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//     </svg>
//   </button>
// );

// // Post Component
// const Post = ({ post }) => {
//   const [liked, setLiked] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState(post.comments || []);

//   const handleLike = () => setLiked(!liked);
//   const handleSave = () => setSaved(!saved);
//   const handleComment = () => {
//     if (comment.trim()) {
//       setComments([...comments, comment]);
//       setComment("");
//     }
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg mb-6 shadow-md relative">
//       {/* Post Header */}
//       <div className="flex items-center space-x-3">
//         <img
//           src={post.logo}
//           alt={`${post.brand} Logo`}
//           className="w-10 h-10 rounded-full"
//         />
//         <a href="/storeprofile">
//           <h2 className="text-lg font-bold">{post.brand}</h2>
//         </a>
//         <RiVerifiedBadgeFill style={{ color: "#62C2FF", fontSize: "24px" }} />
//       </div>

//       {/* Post Images - Slider */}
//       <div className="mt-3 relative">
//         <Slider {...sliderSettings}>
//           {post.images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`${post.brand} slide ${index + 1}`}
//               className="w-full h-screen rounded-lg "
//             />
//           ))}
//         </Slider>
//       </div>

//       {/* Actions: Like, Share, Save */}
//       <div className="flex justify-between items-center mt-3">
//         <div className="flex space-x-5 items-center">
//           <button onClick={handleLike}>
//             <Heart
//               className={`w-6 h-6 transition-all ${
//                 liked ? "fill-red-500 text-red-500" : "text-gray-600"
//               }`}
//             />
//           </button>
//           <button>
//             <Share2 className="text-gray-600 w-6 h-6" />
//           </button>
//           <button onClick={handleSave}>
//             <Bookmark
//               className={`w-6 h-6 transition-all ${
//                 saved ? "fill-black text-black" : "text-gray-600"
//               }`}
//             />
//           </button>
//         </div>

//         {/* Buttons: Visit Now, Try it Now */}
//         <div className="flex space-x-2">
//           <a href={post.link} target="_blank" rel="noopener noreferrer">
//             <button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg text-white px-4 py-1 rounded-md">
//               Visit Now
//             </button>
//           </a>
//           <button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg text-white px-4 py-1 rounded-md">
//             Try it Now
//           </button>
//         </div>
//       </div>

//       {/* Description */}
//       <p className="text-sm text-gray-600 mt-3">{post.description}</p>

//       {/* Comments Section */}
//       <div className="mt-4">
//         <span className="text-blue-500 text-sm">{comments.length} comments</span>
//         {comments.map((c, index) => (
//           <p key={index} className="text-sm text-gray-700">
//             {c}
//           </p>
//         ))}
//       </div>

//       {/* Comment Input */}
//       <div className="flex mt-3 border p-2 rounded-lg">
//         <input
//           type="text"
//           placeholder="Type your comment here..."
//           className="flex-1 outline-none"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <button onClick={handleComment} className="text-blue-500">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// // Main Post Section
// const KhaadiPostSection = () => {
//   const posts = [
//     {
//       brand: "Khaadi",
//       images: ["/user(1).jpg", "/sale1.jpeg", "/sale1.jpeg"],
//       logo: "/khaadiLogo-22.png",
//       description: "Ignite your Eid spark in bold and bright looks.",
//       comments: ["Amazing collection!", "Love the designs!"],
//       link: "https://pk.khaadi.com/sale/",
//     },
//     {
//       brand: "BachaParty",
//       images: ["/Bachaa Party summer sale 3 aug 2023.jpg"],
//       logo: "/bachaparty.png",
//       description: "Explore the latest kidswear collections.",
//       comments: ["So cute!", "Perfect for my little one."],
//       link: "https://bachaaparty.com",
//     },
//     {
//       brand: "Engine",
//       images: ["/Engine.jpg"],
//       logo: "/engine.png",
//       description: "Fresh new arrivals for the modern man.",
//       comments: ["Engine never disappoints!", "Quality stuff!"],
//       link: "https://engine.com.pk/",
//     },
//     {
//       brand: "Bareeze",
//       images: ["/BAREEZE.jpg"],
//       logo: "/Breeze.jpeg",
//       description: "Unveil the elegance of our new collection.",
//       comments: ["Pure elegance!", "Simply stunning."],
//       link: "https://www.bareeze.com/sale",
//     },
//   ];

//   return (
//     <div className="max-w-3xl mx-auto absolute left-80">
//       {/* Single Search Bar Rendered ONCE */}
//       <div className="sticky top-0 z-10 w-full py-2 bg-white">
//         <SearchBar />
//       </div>

//       {/* All Posts */}
//       <div className="mt-4">
//         {posts.map((post, index) => (
//           <Post key={index} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KhaadiPostSection;















import { useState } from "react";
import { Heart, Share2, Bookmark } from "lucide-react";
import SearchBar from "./searchbar";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
    onClick={onClick}
  >
    <svg
      className="w-5 h-5 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
    onClick={onClick}
  >
    <svg
      className="w-5 h-5 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

// Post Component
const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const handleLike = () => setLiked(!liked);
  const handleSave = () => setSaved(!saved);
  const handleComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-white p-4 rounded-lg mb-6 shadow-md relative">
      {/* Post Header */}
      <div className="flex items-center space-x-3">
        <img
          src={post.logo}
          alt={`${post.brand} Logo`}
          className="w-10 h-10 rounded-full"
        />
        <a href="/storeprofile">
          <h2 className="text-lg font-bold">{post.brand}</h2>
        </a>
        <RiVerifiedBadgeFill style={{ color: "#62C2FF", fontSize: "24px" }} />
      </div>

      {/* Post Images */}
      <div className="mt-3 relative">
        {post.images.length > 1 ? (
          <Slider {...sliderSettings}>
            {post.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${post.brand} slide ${index + 1}`}
                className="w-full h-screen rounded-lg"
              />
            ))}
          </Slider>
        ) : (
          <img
            src={post.images[0]}
            alt={`${post.brand}`}
            className="w-full h-screen rounded-lg"
          />
        )}
      </div>

      {/* Actions: Like, Share, Save */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex space-x-5 items-center">
          <button onClick={handleLike}>
            <Heart
              className={`w-6 h-6 transition-all ${
                liked ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>
          <button>
            <Share2 className="text-gray-600 w-6 h-6" />
          </button>
          <button onClick={handleSave}>
            <Bookmark
              className={`w-6 h-6 transition-all ${
                saved ? "fill-black text-black" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        {/* Buttons: Visit Now, Try it Now */}
        <div className="flex space-x-2">
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg text-white px-4 py-1 rounded-md">
              Visit Now
            </button>
          </a>
          <button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg text-white px-4 py-1 rounded-md">
            Try it Now
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-3">{post.description}</p>

      {/* Comments Section */}
      <div className="mt-4">
        <span className="text-blue-500 text-sm">{comments.length} comments</span>
        {comments.map((c, index) => (
          <p key={index} className="text-sm text-gray-700">
            {c}
          </p>
        ))}
      </div>

      {/* Comment Input */}
      <div className="flex mt-3 border p-2 rounded-lg">
        <input
          type="text"
          placeholder="Type your comment here..."
          className="flex-1 outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleComment} className="text-blue-500">
          Send
        </button>
      </div>
    </div>
  );
};

// Main Post Section
const KhaadiPostSection = () => {
  const posts = [
    {
      brand: "Khaadi",
      images: ["/user(1).jpg", "/sale1.jpeg", "/sale2.jpeg"],
      logo: "/khaadiLogo-22.png",
      description: "Ignite your Eid spark in bold and bright looks.",
      comments: ["Amazing collection!", "Love the designs!"],
      link: "https://pk.khaadi.com/sale/",
    },
    {
      brand: "BachaParty",
      images: ["/Bachaa Party summer sale 3 aug 2023.jpg"],
      logo: "/bachaparty.png",
      description: "Explore the latest kidswear collections.",
      comments: ["So cute!", "Perfect for my little one."],
      link: "https://bachaaparty.com",
    },
    {
      brand: "Engine",
      images: ["/Engine.jpg","/group.jpg"],
      logo: "/engine.png",
      description: "Fresh new arrivals for the modern man.",
      comments: ["Engine never disappoints!", "Quality stuff!"],
      link: "https://engine.com.pk/",
    },
    {
      brand: "Bareeze",
      images: ["/BAREEZE.jpg","/userprofile.jpg","/1122.jpg"],
      logo: "/Breeze.jpeg",
      description: "Unveil the elegance of our new collection.",
      comments: ["Pure elegance!", "Simply stunning."],
      link: "https://www.bareeze.com/sale",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto absolute left-80">
      {/* Single Search Bar Rendered ONCE */}
      <div className="sticky top-0 z-10 w-full py-2 bg-white">
        <SearchBar />
      </div>

      {/* All Posts */}
      <div className="mt-4">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default KhaadiPostSection;
