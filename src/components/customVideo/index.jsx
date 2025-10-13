import React, { useEffect, useRef, useState } from 'react';
import {Box, styled} from "@mui/material";

/**
 * 视频播放
 *
 * Props:
 *  - src: string 视频链接
 *  - poster 视频封面
 *  - muted 是否
 *  - loop 循环播放
 *  - autoPlay 自动播放
 *  - controls?: boolean - default false
 */

const Video = styled(Box)({
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  objectFit: 'cover',
})

export default function CustomVideo(props) {
  const {
    src,
    poster,
    muted = true,
    loop = true,
    autoPlay = true,
    controls = false,
    style = {},
    ...rest
  } = props
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(muted);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    video.loop = loop;
    video.autoplay = autoPlay;
    video.playsInline = true;

    if (autoPlay) {
      const p = video.play();
      if (p && p.catch) p.catch(() => {
        console.log('isMuted', isMuted)
        if (!isMuted) {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        }
      });
    }
  }, [autoPlay, isMuted, loop]);
  return (
      <Video
          component="video"
          ref={videoRef}
          poster={poster}
          className="w-full h-full object-cover"
          playsInline
          muted={isMuted}
          loop={loop}
          autoPlay={autoPlay}
          controls={controls}
          {...rest}
      >
        {
          src ?  <source src={src} /> : 'Your browser does not support the video tag.'
        }
      </Video>
  );
}
