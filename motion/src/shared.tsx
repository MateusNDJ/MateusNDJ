import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const palette = {
  black: '#070708',
  panel: '#0d0d10',
  red: '#f21d3f',
  deepRed: '#8d0d20',
  white: '#f7f7f8',
  muted: '#9b9ba3',
};

export const font = '"Segoe UI Variable Display", "Segoe UI", Arial, sans-serif';
export const mono = '"Cascadia Code", "SFMono-Regular", Consolas, monospace';

export const Background: React.FC<{compact?: boolean}> = ({compact = false}) => {
  const frame = useCurrentFrame();
  const glowX = 74 + Math.sin(frame / 24) * 4;
  const scanX = interpolate(frame % 120, [0, 120], [-18, 118]);

  return (
    <AbsoluteFill style={{overflow: 'hidden', background: palette.black}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${glowX}% 48%, rgba(155,12,34,.30) 0%, rgba(80,8,20,.13) 24%, transparent 49%), linear-gradient(112deg, #070708 0%, #0b0b0e 58%, #12070a 100%)`,
        }}
      />
      <AbsoluteFill
        style={{
          opacity: 0.1,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: compact ? '32px 32px' : '40px 40px',
          maskImage: 'linear-gradient(90deg, #000 0%, rgba(0,0,0,.55) 55%, transparent 92%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: `${scanX}%`,
          top: '-50%',
          width: 80,
          height: '200%',
          transform: 'rotate(11deg)',
          background: 'linear-gradient(90deg, transparent, rgba(242,29,63,.09), transparent)',
          filter: 'blur(10px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 1,
          border: '1px solid rgba(242,29,63,.42)',
          borderRadius: compact ? 18 : 24,
        }}
      />
    </AbsoluteFill>
  );
};

export const CornerMarks: React.FC = () => (
  <>
    <div style={{position: 'absolute', left: 32, top: 28, width: 34, height: 2, background: palette.red}} />
    <div style={{position: 'absolute', left: 32, top: 28, width: 2, height: 34, background: palette.red}} />
    <div style={{position: 'absolute', right: 32, bottom: 28, width: 34, height: 2, background: palette.red}} />
    <div style={{position: 'absolute', right: 32, bottom: 28, width: 2, height: 34, background: palette.red}} />
  </>
);
