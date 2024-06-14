"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        className="bg-orange-1"
        imgsrc="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />

      <HomeCard
        className="bg-blue-1"
        imgsrc="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />

      <HomeCard
        className="bg-purple-1"
        imgsrc="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />

      <HomeCard
        className="bg-yellow-1"
        imgsrc="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting recordings"
        handleClick={() => router.push("/recordings")}
      />
    </section>
  );
};

export default MeetingTypeList;
