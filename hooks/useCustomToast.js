import { useToasts } from 'react-toast-notifications';

const useCustomToast = () => {
  const { addToast } = useToasts();

  const baseToast = (content, appearance, extraProps = {}) => {
    addToast(content, { ...extraProps, appearance });
  };

  return {
    addSuccessToast: (content, extraProps) =>
      baseToast(content, 'success', extraProps),
    addErrorToast: (content, extraProps) =>
      baseToast(content, 'error', extraProps),
    addWarningToast: (content, extraProps) =>
      baseToast(content, 'warning', extraProps),
    addInfoToast: (content, extraProps) =>
      baseToast(content, 'info', extraProps),
  };
};

export default useCustomToast;
