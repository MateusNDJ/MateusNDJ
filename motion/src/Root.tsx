import React from 'react';
import {Composition} from 'remotion';
import {ProfileHero} from './ProfileHero';
import {TechStack} from './TechStack';

export const Root: React.FC = () => (
  <>
    <Composition
      id="ProfileHero"
      component={ProfileHero}
      durationInFrames={120}
      fps={30}
      width={1200}
      height={360}
    />
    <Composition
      id="TechStack"
      component={TechStack}
      durationInFrames={150}
      fps={30}
      width={1200}
      height={240}
    />
  </>
);
