import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" // Assuming you are using shadcn/ui
import { Button } from "@/components/ui/button"  //Assuming you are using shadcn/ui

// Placeholder user data (replace with actual data from your authentication system)
const userData = {
    name: "Waleed Riaz",
    username: "its_waleed.x",
    profilePicture: "/Rastah.jpeg", 
    bio: "Software Developer | Full Stack Enthusiast",
    location: "Lahore, Pakistan",
    website: "https://itswaleed.com",
    following: 69,
    posts: 0,
};

const UserProfilePage = () => {
    const { name, username, profilePicture, bio, location, website, following, posts } = userData;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>
            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-start gap-4">
                       {profilePicture && (
                        <img
                         src={profilePicture}
                         alt={name}
                         className="h-16 w-16 rounded-full object-cover"
                        />
                       )}
                        <div>
                            <CardTitle className="text-2xl font-semibold text-gray-900">{name}</CardTitle>
                            <CardDescription className="text-gray-500">@{username}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <p className="text-gray-700">{bio}</p>
                        {location && (
                            <p className="text-gray-600">
                                <span className="font-semibold">Location:</span> {location}
                            </p>
                        )}
                        {website && (
                            <p className="text-gray-600">
                                 <span className="font-semibold">Website:</span>
                                 <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                     {website}
                                 </a>
                            </p>
                        )}
                        <div className="flex gap-4">
                            <div>
                                <span className="font-semibold text-gray-900">{following}</span>
                                <span className="text-gray-500"> Following</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">{posts}</span>
                                <span className="text-gray-500"> Posts</span>
                            </div>
                        </div>
                        <Button variant="outline">Edit Profile</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserProfilePage;
