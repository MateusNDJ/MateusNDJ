import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, font, mono, palette} from './shared';

const stacks = ['NODE.JS', 'REACT', 'NEXT.JS', 'C#', '.NET', 'JAVASCRIPT'];

export const TechStack: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const core = spring({frame: frame - 8, fps, config: {damping: 16, stiffness: 120}});
  const breathe = 1 + Math.sin(frame / 10) * 0.018;
  const sweep = interpolate(frame % 90, [0, 90], [-20, 120]);

  return (
    <AbsoluteFill style={{fontFamily: font, color: palette.white}}>
      <Background compact />

      <div style={{position: 'absolute', left: 54, top: 36}}>
        <div style={{fontFamily: mono, color: palette.red, fontSize: 12, letterSpacing: 2}}>02 / TOOLKIT</div>
        <div style={{fontSize: 20, fontWeight: 600, marginTop: 8}}>Built around TypeScript.</div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 300,
          height: 118,
          transform: `translate(-50%, -43%) scale(${core * breathe})`,
          opacity: core,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 18,
          background: 'linear-gradient(135deg, rgba(239,35,60,.18), rgba(239,35,60,.04))',
          border: '1px solid rgba(239,35,60,.72)',
          borderRadius: 18,
          boxShadow: '0 20px 70px rgba(0,0,0,.45), inset 0 0 40px rgba(239,35,60,.06)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: `${sweep}%`,
            top: -40,
            width: 65,
            height: 200,
            transform: 'rotate(18deg)',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.13), transparent)',
          }}
        />
        <div style={{fontFamily: mono, fontSize: 40, fontWeight: 900, color: palette.red}}>TS</div>
        <div>
          <div style={{fontSize: 27, fontWeight: 720, letterSpacing: -1}}>TypeScript</div>
          <div style={{fontFamily: mono, fontSize: 11, color: palette.muted, letterSpacing: 2, marginTop: 5}}>PRIMARY</div>
        </div>
      </div>

      {stacks.map((stack, index) => {
        const delay = 22 + index * 6;
        const progress = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 150}});
        const side = index < 3 ? -1 : 1;
        const slot = index % 3;
        const x = side === -1 ? 80 + slot * 142 : 778 + slot * 130;
        const y = 154 + (slot % 2) * 30;

        return (
          <div
            key={stack}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              opacity: progress,
              transform: `translateX(${(1 - progress) * side * 32}px)`,
              padding: '9px 15px',
              border: '1px solid rgba(255,255,255,.14)',
              borderRadius: 999,
              background: 'rgba(13,13,16,.82)',
              color: index === 2 ? '#fff' : '#c8c8ce',
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: 1,
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{color: palette.red, marginRight: 7}}>●</span>{stack}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
