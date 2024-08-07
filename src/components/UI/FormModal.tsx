import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";

type FromSumissionTypes = {
  message?: string;
  isOpen?: boolean;
};

type MyModalTypes = {
  formSubmission: FromSumissionTypes;
  setFormSubmission: (params: { message: string; isOpen: boolean }) => void;
};

export default function MyModal({
  formSubmission,
  setFormSubmission,
}: MyModalTypes) {
  return (
    <Dialog
      open={formSubmission.isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setFormSubmission({ message: "", isOpen: false })}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          <DialogPanel
            transition
            className="w-full max-w-md p-16 bg-neutral-100 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="font-medium text-stone-400 text-base/7"
            >
              Message successfully sent
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-stone-400">
              {formSubmission.message}
            </p>
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 bg-stone-400 py-1.5 px-3 text-sm/6 font-semibold text-neutral-100 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                onClick={() =>
                  setFormSubmission({ message: "", isOpen: false })
                }
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
