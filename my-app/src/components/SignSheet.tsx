'use client'

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SignIn, SignUp } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SignSheet({ open, onOpenChange }: Props) {
    
  const searchParams = useSearchParams();
  const formType = searchParams.get('formType');

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="min-w-[500px] flex justify-center items-center">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        <div>
          {formType === 'signup' ? (
            <SignUp routing="hash" signInUrl="/?formType=signin" />
          ) : (
            <SignIn routing="hash" signUpUrl="/?formType=signup" />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
