import Image from 'next/image';

const PostTags = () => {
  return (
    <div className="post-data">
      < div className="Author" >
        <Image src="/images/me.jpg" width={60} height={60} alt="author" />
        Rafael Anguiano
      </div >
      <ul className="tags" >
        <li>Work</li>
        <li>Teaching</li>
        <li>Music</li>
        <li>Software-Engineering</li>
        <li>Frontend</li>
      </ul>
    </div >
  )
}

export default PostTags;
