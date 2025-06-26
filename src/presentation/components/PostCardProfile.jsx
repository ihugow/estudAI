import { FaRegHeart, FaEye } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const PostCardProfile = ({ post, onCardClick }) => {
  const postDate = post.createdAt?.toDate().toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long'
  });
  return (
    <div 
      onClick={() => onCardClick(post)} 
      className="block group cursor-pointer mt-8"
    >
      <div className="bg-box/70 p-5 rounded-xl shadow-md overflow-hidden h-full transform transition-transform duration-300 border border-cinza-ardosia group-hover:shadow-xl group-hover:-translate-y-1">
        <h2 className="text-white text-xl font-semibold mb-4 mt-5 line-clamp-2">{post.title}</h2>
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-58 object-cover rounded-lg"
        />
        <div className="flex flex-col flex-grow mt-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="bg-cinza-ardosia text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-end text-manatee mt-auto pt-2">
            <div className="text-sm">
              <span className="mx-1">•</span>
              <span>{postDate}</span>
            </div>
            <div className="flex gap-3 font-semibold">
              <div className="flex gap-1 items-center">
                <FaRegHeart className="size-6"/>
                <span>0</span>
              </div>
              <div className="flex gap-1 items-center">
                <IoChatbubbleEllipsesSharp className="size-6"/>
                <span>0</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaEye className="size-6"/>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCardProfile