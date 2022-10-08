import React from 'react'
import moment from 'moment';

const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl text-center text-hgray font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="text-hgray text-center mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md text-center text-hgray font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className='rounded-lg'
          />
        );
        case 'video':
          return (
            <video key={index} 
            alt={obj.title} 
            src={obj.src} 
            width={obj.width} height={obj.height} 
            controls="controls"
            className='rounded-lg'
            />
          );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-white shadow-lg border border-hmint border-4 rounded-lg lg:p-8 pb-4 mb-4'>
      <div className='px-4 text-center lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className='font-medium w-full text-hgray'>
            <div className='w-full flex justify-center'>
                <h1 className='mb-8 mt-4 text-3xl text-center text-hgray font-semibold'>{post.title}</h1>
            </div>
            <div className='w-full flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-hblush" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                {moment(post.date).format('MMM DD, YYYY')}
                </span>
            </div>
          </div>
        </div>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail