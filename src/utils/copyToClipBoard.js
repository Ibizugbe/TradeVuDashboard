import { toast } from 'react-toastify';

export const copyToClipboard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success('Copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  }
};
