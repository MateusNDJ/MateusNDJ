import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, CornerMarks, font, mono, palette} from './shared';

const loopReveal = (frame: number, fps: number) => {
  if (frame < 18) return 1;
  if (frame < 30) return interpolate(frame, [18, 30], [1, 0]);
  return spring({frame: frame - 30, fps, config: {damping: 17, stiffness: 125, mass: 0.8}});
};

export const ProfileHero: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const reveal = loopReveal(frame, fps);
  const accent = spring({frame: frame - 37, fps, config: {damping: 18, stiffness: 110}});
  const pulse = 1 + Math.sin(frame / 11) * 0.018;
  const cursorOpacity = frame % 18 < 10 ? 1 : 0;

  return (
    <AbsoluteFill style={{fontFamily: font, color: palette.white}}>
      <Background />
      <CornerMarks />

      <div style={{position: 'absolute', left: 86, top: 62, display: 'flex', alignItems: 'center', gap: 12}}>
        <div style={{fontFamily: mono, fontSize: 14, fontWeight: 700, color: palette.red, letterSpacing: 2}}>
          01 / PROFILE
        </div>
        <div style={{width: 72, height: 1, background: 'rgba(242,29,63,.48)'}} />
      </div>

      <div style={{position: 'absolute', left: 86, top: 108, overflow: 'hidden', height: 156}}>
        <div
          style={{
            transform: `translateY(${(1 - reveal) * 28}px) scale(${0.985 + reveal * 0.015})`,
            opacity: 0.28 + reveal * 0.72,
          }}
        >
          <div style={{fontSize: 72, lineHeight: 0.95, fontWeight: 760, letterSpacing: -3}}>MATEUS</div>
          <div style={{fontSize: 72, lineHeight: 1, fontWeight: 760, letterSpacing: -3, color: palette.red}}>NÓBREGA</div>
        </div>
      </div>

      <div style={{position: 'absolute', left: 91, top: 282, opacity: 0.45 + accent * 0.55}}>
        <div style={{fontFamily: mono, fontSize: 14, letterSpacing: 4, color: '#d8d8dc'}}>
          FULL-STACK DEVELOPER<span style={{color: palette.red, opacity: cursorOpacity}}>_</span>
        </div>
        <div style={{marginTop: 13, width: 274 * accent, height: 2, background: palette.red}} />
      </div>

      <div
        style={{
          position: 'absolute',
          right: 80,
          top: 70,
          width: 326,
          height: 220,
          borderLeft: '1px solid rgba(255,255,255,.13)',
          paddingLeft: 46,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{fontFamily: mono, fontSize: 12, color: palette.muted, letterSpacing: 2}}>PRIMARY STACK</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 17, marginTop: 15}}>
          <div
            style={{
              width: 72,
              height: 72,
              display: 'grid',
              placeItems: 'center',
              background: palette.red,
              color: palette.black,
              fontFamily: mono,
              fontWeight: 900,
              fontSize: 28,
              transform: `scale(${pulse})`,
              boxShadow: `0 0 ${24 + Math.sin(frame / 11) * 8}px rgba(242,29,63,.28)`,
            }}
          >
            TS
          </div>
          <div>
            <div style={{fontSize: 26, fontWeight: 680, letterSpacing: -0.7}}>TypeScript</div>
            <div style={{fontFamily: mono, fontSize: 11, color: palette.muted, marginTop: 6, letterSpacing: 1}}>WEB • API • AUTOMATION</div>
          </div>
        </div>
        <div style={{fontFamily: mono, fontSize: 11, color: '#6f6f78', letterSpacing: 1.4, marginTop: 25}}>
          SÃO PAULO / BRASIL
        </div>
      </div>
    </AbsoluteFill>
  );
};
