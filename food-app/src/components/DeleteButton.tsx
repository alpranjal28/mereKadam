import { useState } from "react";

export default function DeleteButton({
  label,
  onDelete,
}: {
  label: string;
  onDelete: () => Promise<void> | (void);
}) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (showConfirmation) {
    return (
      <div className="fixed flex justify-center items-center inset-0 bg-gray-500/90">
        <div className="bg-white p-4 rounded-xl text-center border-gray-500 border-4">
          <div className="font-semibold pb-4">
            Are you sure you want to delete "{label}" ?
          </div>
          <div className="flex gap-2 pb-4">
            <button
              className="flex justify-center items-center"
              type="button"
              onClick={() => setShowConfirmation(false)}
            >
              Cancel
            </button>
            <button
              className="bg-primary flex justify-center items-center"
              type="button"
              onClick={onDelete}
            >
              Confirm delete "{label}"
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button
      className=""
      type="button"
      onClick={() => setShowConfirmation(true)}
    >
      {label}
    </button>
  );
}
