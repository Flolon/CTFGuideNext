import Head from 'next/head';

import React from 'react';
import { Footer } from '@/components/Footer';
import { StandardNav } from '@/components/StandardNav';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { useEffect } from 'react';
import { useState } from 'react';
import { SideNavContent } from '@/components/dashboard/SideNavContents';
import { RightSideFiller } from '@/components/dashboard/RightSideFiller';

import { Router } from 'react-router-dom';
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';

export default function Users() {
    const router = useRouter();
    const { user } = router.query;

    const [invalidUser, setInvalidUser] = useState(false);
    const [ownUser, setOwnUser] = useState(false);

    const [username, setUsername] = useState(null);
    const [realName, setRealName] = useState(null);
    const [bio, setBio] = useState(null);
    const [followerCount, setFollowerCount] = useState(null);
    const [followingCount, setFollowingCount] = useState(null);
    const [leaderboardRank, setLeaderboardRank] = useState(null);

    const [openBio, setOpenBio] = useState(false);
    const [banner, bannerState] = useState(false);

    // Get and store user data
    useEffect(() => {

        if (!user) {
            return;
        }

        const fetchData = async () => {
            try {
                const endPoint = process.env.NEXT_PUBLIC_API_URL + '/users/' + user;
                const requestOptions = {
                    method: 'GET', headers: {
                        'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('idToken'),
                    },
                };
                const response = await fetch(endPoint, requestOptions);
                const result = await response.json();
                
                setUsername(result.username);
                if (result.username == localStorage.getItem('username')) {
                    setOwnUser(true);
                }

                if (result.bio) {
                    setBio(result.bio);
                } else {
                    setBio("");
                }
                
                setRealName(result.firstName + ' ' + result.lastName);
                setFollowerCount(result.followersNum);
                setFollowingCount(result.followingNum);
                setLeaderboardRank(result.leaderboardNum);

                console.log(result);

            } catch (err) {
                setInvalidUser(true);
                throw err;
            }
        };
        fetchData();
    }, [user]);

    //useEffect for fetching friend data
    useEffect(() => {
        // if (!user) {
        //     return;
        // }

        // const fetchData = async () => {
        //     try {
        //         const endPoint = process.env.NEXT_PUBLIC_API_URL + '/friends/' + user;
        //         const requestOptions = {
        //             method: 'GET', headers: {
        //                 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('idToken'),
        //             },
        //         };
        //         const response = await fetch(endPoint, requestOptions);
        //         const result = await response.json();
        //         console.log(result);
        //     } catch (err) {
        //         throw err;
        //     }
        // };
        // fetchData();
    })

    function openTheBio() {
        setOpenBio(true);
    }

    function closeBannerAndBio() { 
        bannerState(false);
        setOpenBio(false);
    }

    function openBanner() {
        bannerState(true);
    }

    function saveBio() {
        setBio(document.getElementById('bio').value);
        closeBannerAndBio();
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/account`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('idToken'),
          },
          body: JSON.stringify({
            bio: document.getElementById('bio').value,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            document.getElementById('bio').value = data.bio;
          })
          .catch((err) => {
            console.log(err);
          });
      }

    const followUser = async () => {

    }

    const unfollowUser = async () => {

    }

    const friendUser = async () => {
        const endPoint = process.env.NEXT_PUBLIC_API_URL + '/friends/requests';
        const requestOptions = {
            method: 'POST', headers: {
                'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('idToken'),
            }, body: JSON.stringify({
                recipient: username,
            })
        };
        const response = await fetch(endPoint, requestOptions);
        const result = await response.json();

        if (result.success) {
            console.log('Friend request sent!');
        }
        if (result.error) {
            console.log('Error sending friend request.');
        }
    }

    const unFriendUser = async () => {

    }

    return (
        <>
            <Head>
                <title>Dashboard - CTFGuide</title>
                <meta
                    name="description"
                    content="Cybersecurity made easy for everyone"
                />
                <style>
                    @import
                    url(&apos;https://fonts.googleapis.com/css2?family=Poppins&display=swap&apos;);
                </style>
            </Head>
            <StandardNav />
            <main>
                <div
                    style={{ backgroundSize: "cover", backgroundImage: 'url("https://images.unsplash.com/photo-1633259584604-afdc243122ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")' }}
                    className="h-20 w-full object-cover lg:h-20"
                    alt=""
                ></div>
                <div className="mx-auto flex h-screen max-w-7xl ">
                    {/* Sidebar */}
                    <SideNavContent />

                    {/* Main content area */}
                    <div className="flex-1 mt-5 justify-center items-center">
                        <div className="flex items-center">
                            {(username &&
                                <img
                                    style={{ borderColor: '#ffbf00' }}
                                    className="h-24 w-24 mx-3 rounded-full hover:bg-[#212121] sm:h-32 sm:w-32"
                                    src={
                                        `https://robohash.org/` + username +
                                        `.png?set=set1&size=150x150`
                                        }
                                    alt=""
                                />
                            )}
                            <div>
                                <h1 className="mt-5 text-3xl text-white">{realName}</h1>
                                <h2 className='text-1xl text-white'>@{username}</h2>
                            </div>
                            <div className='ml-10 mt-5'>
                                <p className='text-white'>{followerCount} Followers</p>
                            </div>
                            <div className='ml-10 mt-5'>
                                <p className='text-white'>{followingCount} Following</p>
                            </div>
                        </div>
                        {(!ownUser &&
                            <div className="mt-5 flex items-center justify-center space-x-20">
                                <button>
                                    <p className='rounded-md px-3 py-2 text-xl font-semibold bg-neutral-800 leading-6 text-white shadow-sm hover:bg-gray-700'>Follow</p>
                                </button>
                                <button>
                                    <p className='rounded-md px-3 py-2 text-xl font-semibold bg-neutral-800 leading-6 text-white shadow-sm hover:bg-gray-700'>Add Friend</p>
                                </button>
                            </div>
                        )}
                        {/* Add profile content here */}
                        <div>
                            <div className="flex items-center">
                                <h1 className="mt-5 text-xl text-gray-300">Your Bio</h1>
                                <div className="ml-auto">
                                    {((!openBio && ownUser) &&
                                        <button 
                                            className="px-2 text-lg mt-5 font-medium text-white bg-neutral-800 hover:text-neutral-500"
                                            onClick={openTheBio}
                                            hidden={openBio}>
                                            Edit
                                        </button>
                                    ) || ((ownUser && openBio) && 
                                        <button 
                                            className="px-2 text-lg mt-5 font-medium text-white bg-red-600 hover:text-neutral-500"
                                            onClick={closeBannerAndBio}
                                            hidden={!openBio}>
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div> 
                                {((openBio && ownUser) &&
                                    <div>
                                        <textarea
                                            id="bio"
                                            style={{ backgroundColor: '#212121', resize: "none"}}
                                            readOnly={false}
                                            onChange={openBanner}
                                            placeholder="Tell us about yourself!"                              
                                            className="mt-3 w-full rounded-sm border-white/10 bg-neutral-800/50 px-6 py-3 text-lg text-white"
                                        ></textarea>
                                    </div>
                                ) || (
                                    <h1 className="mt-3 rounded-sm border border-white/10 bg-neutral-800/50 px-6 py-3 text-lg text-white">
                                        {bio === null || bio === "" ? "No bio set." : bio}
                                    </h1>
                                )}
                            </div>
                        </div>
                        <div>
                        {/* Badge Content */}
                            <h1 className="mt-5 text-xl text-gray-300">Badges</h1>
                            <h1 className="mt-3 rounded-sm border border-white/10 bg-neutral-800/50 px-6 py-3 text-lg text-white">
                                Badge content here.
                            </h1>
                        </div>
                        <div>
                        {/* Pinned Challenges Content */}
                            <h1 className="mt-5 text-xl text-gray-300">Pinned Challenges</h1>
                            <h1 className="mt-3 rounded-sm border border-white/10 bg-neutral-800/50 px-6 py-3 text-lg text-white">
                                Challenge content here.
                            </h1>
                        </div>
                        <div>
                        {/* Pinned Challenges Content */}
                            <h1 className="mt-5 text-xl text-gray-300">Statistics</h1>
                            <h1 className="mt-3 rounded-sm border border-white/10 bg-neutral-800/50 px-6 py-3 text-lg text-white">
                                Statistics here.
                            </h1>
                        </div>
                    </div>
                <RightSideFiller />
                </div>
            </main>
            <Footer />
            {banner && (
            <div
                style={{ backgroundColor: '#212121' }}
                id="savebanner"
                className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-y-4 gap-x-8 p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8"
                hidden={!openBio}
            >
            <p className="max-w-4xl text-2xl leading-6 text-white">
                You have unsaved changes.
            </p>
            <div className="flex flex-none items-center gap-x-5">
                <button
                    onClick={saveBio}
                    type="button"
                    className="rounded-md bg-green-700 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Save Changes
                </button>
                <button
                    onClick={closeBannerAndBio}
                    type="button"
                    className="text-xl font-semibold leading-6 text-white"
                >
                    Cancel
                </button>
            </div>
        </div>
      )}
        </>
    );
};