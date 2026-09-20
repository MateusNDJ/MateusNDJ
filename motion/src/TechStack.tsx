import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {Background, font, mono, palette} from './shared';

const technologies = [
  {name: 'TypeScript', icon: 'typescript-original.svg', primary: true},
  {name: 'JavaScript', icon: 'javascript-original.svg'},
  {name: 'Node.js', icon: 'nodejs-original.svg'},
  {name: 'React', icon: 'react-original.svg'},
  {name: 'Next.js', icon: 'nextjs-original.svg', invert: true},
  {name: 'C#', icon: 'csharp-original.svg'},
  {name: 'Python', icon: 'python-original.svg'},
  {name: 'PostgreSQL', icon: 'postgresql-original.svg'},
  {name: 'Docker', icon: 'docker-original.svg'},
  {name: 'Git', icon: 'git-original.svg'},
];

export const TechStack: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{fontFamily: font, color: palette.white}}>
      <Background compact />

      <div style={{position: 'absolute', left: 54, top: 32}}>
        <div style={{fontFamily: mono, color: palette.red, fontSize: 12, letterSpacing: 2}}>02 / STACK</div>
        <div style={{fontSize: 20, fontWeight: 620, marginTop: 7}}>TypeScript at the core. A broader toolkit around it.</div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 54,
          right: 54,
          top: 104,
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: 10,
        }}
      >
        {technologies.map((tech, index) => {
          const wave = Math.sin(frame / 10 - index * 0.62);
          const lift = tech.primary ? wave * 4 : wave * 2.5;
          const glow = Math.max(0, wave);

          return (
            <div
              key={tech.name}
              style={{
                height: tech.primary ? 140 : 126,
                marginTop: tech.primary ? -8 : 0,
                borderRadius: 16,
                border: tech.primary ? '1px solid rgba(242,29,63,.9)' : '1px solid rgba(255,255,255,.13)',
                background: tech.primary
                  ? 'linear-gradient(145deg, rgba(242,29,63,.22), rgba(17,10,13,.94))'
                  : 'rgba(12,12,15,.84)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 13,
                transform: `translateY(${lift}px)`,
                boxShadow: tech.primary
                  ? `0 14px 38px rgba(0,0,0,.38), 0 0 ${18 + glow * 16}px rgba(242,29,63,.18)`
                  : '0 12px 30px rgba(0,0,0,.2)',
              }}
            >
              <Img
                src={staticFile(`icons/${tech.icon}`)}
                style={{
                  width: tech.primary ? 48 : 40,
                  height: tech.primary ? 48 : 40,
                  objectFit: 'contain',
                  filter: tech.invert ? 'invert(1)' : undefined,
                }}
              />
              <div
                style={{
                  fontFamily: mono,
                  fontSize: tech.primary ? 12 : 10,
                  fontWeight: tech.primary ? 800 : 600,
                  color: tech.primary ? '#fff' : '#c9c9cf',
                  letterSpacing: 0.4,
                  whiteSpace: 'nowrap',
                }}
              >
                {tech.name}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
