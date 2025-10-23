"use client";

import { toast } from "sonner";

import { ShimmeringText } from "@/components/shimmering-text";
import {
  SlideToUnlock,
  SlideToUnlockHandle,
  SlideToUnlockText,
  SlideToUnlockTrack,
} from "@/components/slide-to-unlock";

export default function SlideToUnlockDemo1() {

  return (
    <SlideToUnlock
      onUnlock={() => {
        toast.success("You are so cute nya");
      }}
    >
      <SlideToUnlockTrack>
        <SlideToUnlockText>
          {({ isDragging }) => (
            <ShimmeringText text="slide to unlock" isStopped={isDragging} />
          )}
        </SlideToUnlockText>
        <SlideToUnlockHandle />
      </SlideToUnlockTrack>
    </SlideToUnlock>
  );
}
