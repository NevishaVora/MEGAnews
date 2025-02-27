import React from 'react';
import Navbar from '../Navbar/Index'
import SeaSection from './SeaSection/Index';
import BoatSection from './BoatSection/Index';
import CommentSection from './CommentSection/Index';
import AddComment from './AddComment/Index';
import Sidebar from './Siderbar/Index';
import RelatedPost from './RelatedPost/Index';
import Footer from '../Footer/Index';

const PostDetail = () => {
    return (
        <>
           <Navbar/>
            <div className='max-w-[1320px] mx-auto'>
                <div className='flex'>
                    <div className='w-[70%]'>
                        <SeaSection />
                        <BoatSection />
                        <CommentSection />
                        <AddComment />
                       
                    </div>
                    <div className='w-[30%]'>
                        <Sidebar />
                    </div>
                </div>
                {/* <RelatedPost/> */}
                
            </div>
            <Footer/>
        </>
    );
}

export default PostDetail;