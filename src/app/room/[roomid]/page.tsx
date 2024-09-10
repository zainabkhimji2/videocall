"use client";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef } from "react";

function Room({ params }: { params: { roomid: string } }) {
  const roomID: string = params.roomid;
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const myMeeting = async (element: HTMLDivElement) => {
      // generate Kit Token
      const appID: number = Number(process.env.NEXT_PUBLIC_APPID);
      const serverSecret: string = process.env.NEXT_PUBLIC_SERVER_SECRETE as string;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Enter Your Name Here"
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    if (containerRef.current) {
      myMeeting(containerRef.current);
    }
  }, [roomID]);

  return <div className="w-[100vw] h-[100vh]" ref={containerRef}></div>;
}

export default Room;
