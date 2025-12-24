'use client';

import ModalContainer from '@/components/layout/ModalContainer';
import {PropsWithChildren} from 'react';

export default function DynamicProvider({children}: PropsWithChildren) {
  return (
    <>
      {children}
      <ModalContainer />
    </>
  );
}
