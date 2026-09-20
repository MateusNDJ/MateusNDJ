import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {Background, CornerMarks, font, mono, palette} from './shared';

const enter = (frame: number, delay: number, fps: number) =>
  spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 130, mass: 0.8}});

export const ProfileHero: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const intro = enter(frame, 6, fps);
  const surname = enter(frame, 15, fps);
  const detail = enter(frame, 29, fps);
  const lineWidth = interpolate(frame, [27, 55], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cursorOpacity = frame % 20 < 12 ? 1 : 0;

  return (
    <AbsoluteFill style={{fontFamily: font, color: palette.white}}>
      <Background />
      <CornerMarks />

      <div style={{position: 'absolute', left: 86, top: 64, display: 'flex', alignItems: 'center', gap: 12}}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 14,
            fontWeight: 700,
            color: palette.red,
            letterSpacing: 2,
          }}
        >
          01 / PROFILE
        </div>
        <div style={{width: 72, height: 1, background: 'rgba(239,35,60,.45)'}} />
      </div>

      <div style={{position: 'absolute', left: 86, top: 104, overflow: 'hidden'}}>
        <div
          style={{
            transform: `translateY(${(1 - intro) * 82}px)`,
            opacity: intro,
            fontSize: 78,
            lineHeight: 0.98,
            fontWeight: 750,
            letterSpacing: -3,
          }}
        >
          MATEUS
        </div>
      </div>

      <div style={{position: 'absolute', left: 86, top: 184, overflow: 'hidden'}}>
        <div
          style={{
            transform: `translateY(${(1 - surname) * 82}px)`,
            opacity: surname,
            fontSize: 78,
            lineHeight: 0.98,
            fontWeight: 750,
            letterSpacing: -3,
            color: palette.red,
          }}
        >
          NÓBREGA
        </div>
      </div>

      <div style={{position: 'absolute', left: 92, top: 278, opacity: detail}}>
        <div style={{fontFamily: mono, fontSize: 15, letterSpacing: 4, color: '#d5d5da'}}>
          FULL-STACK DEVELOPER
          <span style={{color: palette.red, opacity: cursorOpacity}}>_</span>
        </div>
        <div style={{marginTop: 14, width: `${lineWidth}%`, height: 2, background: palette.red}} />
      </div>

      <div
        style={{
          position: 'absolute',
          right: 86,
          top: 72,
          width: 300,
          height: 216,
          borderLeft: '1px solid rgba(255,255,255,.12)',
          paddingLeft: 46,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: detail,
          transform: `translateX(${(1 - detail) * 34}px)`,
        }}
      >
        <div style={{fontFamily: mono, fontSize: 12, color: palette.muted, letterSpacing: 2}}>PRIMARY STACK</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 14}}>
          <div
            style={{
              width: 68,
              height: 68,
              display: 'grid',
              placeItems: 'center',
              background: palette.red,
              color: '#09090b',
              fontFamily: mono,
              fontWeight: 900,
              fontSize: 27,
              boxShadow: '0 0 34px rgba(239,35,60,.26)',
            }}
          >
            TS
          </div>
          <div>
            <div style={{fontSize: 24, fontWeight: 650, letterSpacing: -0.5}}>TypeScript</div>
            <div style={{fontFamily: mono, fontSize: 12, color: palette.muted, marginTop: 5}}>WEB • API • AUTOMATION</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
