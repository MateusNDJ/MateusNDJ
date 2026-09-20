import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const palette = {
  black: '#070708',
  panel: '#0d0d10',
  red: '#ef233c',
  deepRed: '#8d0d20',
  softRed: '#ff5a6d',
  white: '#f5f5f5',
  muted: '#9999a1',
};

export const font = '"Segoe UI Variable Display", "Segoe UI", Arial, sans-serif';
export const mono = '"Cascadia Code", "SFMono-Regular", Consolas, monospace';

export const Background: React.FC<{compact?: boolean}> = ({compact = false}) => {
  const frame = useCurrentFrame();
  const scanX = interpolate(frame, [0, 150], [-30, 130], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 82% 45%, rgba(239,35,60,.16), transparent 25%), linear-gradient(120deg, #070708 0%, #0d0d10 58%, #15090c 100%)',
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.14,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: compact ? '34px 34px' : '42px 42px',
          maskImage: 'linear-gradient(to right, black, transparent 82%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: `${scanX}%`,
          top: '-35%',
          width: 180,
          height: '170%',
          transform: 'rotate(14deg)',
          background:
            'linear-gradient(90deg, transparent, rgba(239,35,60,.10), transparent)',
          filter: 'blur(14px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 1,
          border: '1px solid rgba(239,35,60,.38)',
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
