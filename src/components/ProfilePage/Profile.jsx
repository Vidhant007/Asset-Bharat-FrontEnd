import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import TopBar from './TopBar';
import ProfileContent from './Content';

const Profile = () => {
    const [selectedContent, setSelectedContent] = useState('overview');

    const handleContentChange = (content) => {
        setSelectedContent(content);
    };


    return (
        <div className="font-jost bg-white h-screen pt-21">
            <TopBar />

            <div className="flex h-full bg-white">
                <LeftSidebar selectedContent={selectedContent} handleContentChange={handleContentChange} />

                <ProfileContent selectedContent={selectedContent} />
            </div>
        </div>
    );
};

export default Profile;
