import { useToasts, AppearanceTypes, Options } from 'react-toast-notifications';

const useCustomToast = () => {
  const { addToast } = useToasts();

  const baseToast = (
    content: string,
    appearance?: AppearanceTypes,
    extraProps?: Options,
  ): void => {
    addToast(content, { ...extraProps, appearance });
  };

  return {
    addSuccessToast: (content: string, extraProps?: Options) =>
      baseToast(content, 'success', extraProps),
    addErrorToast: (content: string, extraProps?: Options) =>
      baseToast(content, 'error', extraProps),
    addWarningToast: (content: string, extraProps?: Options) =>
      baseToast(content, 'warning', extraProps),
    addInfoToast: (content: string, extraProps?: Options) =>
      baseToast(content, 'info', extraProps),
  };
};

export default useCustomToast;
